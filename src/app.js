/* PalabraPad — 墨西哥西班牙语学习 (借鉴 ScriptPad 的设计)
   模式: 闪卡 / 词义配对 / 图片选择 / 拼写 / 跟读对比 / 测验 / 间隔复习 / 自定义课程 */

"use strict";

// ===================== 状态与存储 =====================
const store = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem("palabrapad." + key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch { return fallback; }
  },
  set(key, val) { localStorage.setItem("palabrapad." + key, JSON.stringify(val)); }
};

let settings = store.get("settings", { theme: "papel", voiceURI: "", rate: 0.9 });
if (!settings.subLang) settings.subLang = "en";   // 字幕语言: en | zh | both

// 单词字幕(释义)按设置语言显示
function sub(w) {
  const en = w.en || w.zh || "";
  const zh = w.zh || w.en || "";
  if (settings.subLang === "en") return en;
  if (settings.subLang === "zh") return zh;
  return en === zh ? en : `${zh} · ${en}`;
}
// 字幕的"另一种语言"(用于闪卡背面的小字)
function subAlt(w) {
  if (settings.subLang === "en") return w.zh || "";
  if (settings.subLang === "zh") return w.en || "";
  return "";
}
let progress = store.get("progress", {});   // es -> {lvl, due, seen, ok, bad}
let customUnits = store.get("custom", []);  // [{id,title,emoji,color,words:[{es,zh,en,emoji}]}]

// 间隔复习: 等级 → 下次复习间隔(毫秒)
const SRS_INTERVALS = [0, 4 * 36e5, 24 * 36e5, 3 * 864e5, 7 * 864e5, 21 * 864e5];
const MASTER_LEVEL = 4;

function wordKey(w) { return w.es; }
function getProg(w) {
  return progress[wordKey(w)] || { lvl: 0, due: 0, seen: false, ok: 0, bad: 0 };
}
function saveProg(w, p) {
  progress[wordKey(w)] = p;
  store.set("progress", progress);
  updateSidebarStats();
}
function markResult(w, correct) {
  const p = getProg(w);
  p.seen = true;
  if (correct) {
    p.ok++;
    p.lvl = Math.min(p.lvl + 1, SRS_INTERVALS.length - 1);
  } else {
    p.bad++;
    p.lvl = Math.max(p.lvl - 1, 0);
  }
  p.due = Date.now() + SRS_INTERVALS[p.lvl];
  saveProg(w, p);
}

function allUnits() { return UNITS.concat(customUnits); }
function allWords() { return allUnits().flatMap(u => u.words); }
function dueWords() {
  const now = Date.now();
  return allWords().filter(w => { const p = getProg(w); return p.seen && p.due <= now; });
}

// ===================== 语音 (TTS es-MX) =====================
const synth = window.speechSynthesis;
let voices = [];
function refreshVoices() { voices = synth ? synth.getVoices() : []; }
if (synth) {
  refreshVoices();
  synth.onvoiceschanged = refreshVoices;
}
function spanishVoices() {
  return voices.filter(v => v.lang && v.lang.toLowerCase().startsWith("es"));
}
function pickVoice() {
  const es = spanishVoices();
  if (settings.voiceURI) {
    const chosen = es.find(v => v.voiceURI === settings.voiceURI);
    if (chosen) return chosen;
  }
  // 优先墨西哥西语 (macOS 上是 Paulina)
  return es.find(v => /es[-_]mx/i.test(v.lang))
      || es.find(v => /paulina|mexico/i.test(v.name))
      || es[0] || null;
}
function speak(text, rateOverride) {
  if (!synth) return;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  const v = pickVoice();
  if (v) u.voice = v;
  u.lang = v ? v.lang : "es-MX";
  u.rate = rateOverride || settings.rate;
  synth.speak(u);
}

// ===================== 工具 =====================
const $ = sel => document.querySelector(sel);
const main = $("#main");

function el(tag, cls, html) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html !== undefined) n.innerHTML = html;
  return n;
}
function esc(s) {
  return String(s).replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function sample(arr, n) { return shuffle(arr).slice(0, n); }

let toastTimer = null;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.add("hidden"), 1800);
}

function updateSidebarStats() {
  const words = allWords();
  let learned = 0, mastered = 0;
  for (const w of words) {
    const p = getProg(w);
    if (p.seen) learned++;
    if (p.lvl >= MASTER_LEVEL) mastered++;
  }
  $("#stat-learned").textContent = learned;
  $("#stat-mastered").textContent = mastered;
  const due = dueWords().length;
  const badge = $("#review-badge");
  badge.textContent = due;
  badge.classList.toggle("hidden", due === 0);
}

// ===================== 导航 =====================
document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const nav = btn.dataset.nav;
    if (nav === "home") renderHome();
    else if (nav === "review") renderReview();
    else if (nav === "custom") renderCustom();
    else if (nav === "settings") renderSettings();
  });
});

// ===================== 首页: 单元网格 =====================
function unitProgress(unit) {
  const total = unit.words.length;
  if (!total) return 0;
  const learned = unit.words.filter(w => getProg(w).seen).length;
  return Math.round(learned / total * 100);
}

function renderHome() {
  main.innerHTML = "";
  main.append(
    el("h1", "page-title", "课程单元"),
    el("p", "page-sub", "选择一个单元开始学习 · 共 " + allWords().length + " 个墨西哥西语词汇")
  );
  const grid = el("div", "unit-grid");
  for (const unit of allUnits()) {
    const pct = unitProgress(unit);
    const card = el("button", "unit-card");
    card.innerHTML =
      `<div class="u-emoji" style="background:${unit.color}22">${unit.emoji}</div>
       <h3>${esc(unit.title)}</h3>
       <div class="u-count">${unit.words.length} 个词 · 已学 ${pct}%</div>
       <div class="progress-bar"><div class="progress-fill" style="width:${pct}%;background:${unit.color}"></div></div>`;
    card.addEventListener("click", () => renderUnit(unit));
    grid.append(card);
  }
  main.append(grid);
}

// ===================== 单元页 =====================
function renderUnit(unit) {
  main.innerHTML = "";
  const back = el("button", "back-btn", "← 返回单元列表");
  back.addEventListener("click", renderHome);
  main.append(back,
    el("h1", "page-title", `${unit.emoji} ${esc(unit.title)}`),
    el("p", "page-sub", `${unit.words.length} 个词汇 · 选择一种练习模式`)
  );

  const acts = el("div", "activity-row");
  const defs = [
    ["🃏", "闪卡", () => startFlashcards(unit)],
    ["🔗", "词义配对", () => startMatching(unit)],
    ["🖼️", "图片选择", () => startPicture(unit)],
    ["✍️", "书写练习", () => startSpelling(unit)],
    ["🔥", "打字强化", () => startTypeDrill(unit)],
    ["🎙️", "跟读对比", () => startSpeak(unit)],
    ["📝", "单元测验", () => startQuiz(unit)]
  ];
  for (const [icon, label, fn] of defs) {
    const b = el("button", "activity-btn", `<span>${icon}</span>${label}`);
    b.addEventListener("click", fn);
    acts.append(b);
  }
  main.append(acts);

  const list = el("div", "word-list");
  for (const w of unit.words) {
    const p = getProg(w);
    const stars = p.lvl >= MASTER_LEVEL ? "⭐" : (p.seen ? "📖" : "");
    const row = el("div", "word-row");
    row.innerHTML =
      `<span class="w-emoji">${w.emoji}</span>
       <div><div class="w-es">${esc(w.es)}</div><div class="w-zh">${esc(sub(w))}</div></div>
       <span class="w-level">${stars}</span>`;
    const play = el("button", "icon-btn", "🔊");
    play.title = "播放发音";
    play.addEventListener("click", () => speak(w.es));
    row.append(play);
    list.append(row);
  }
  main.append(list);
}

// ===================== 活动外壳 =====================
function activityShell(title, backFn, totalSteps) {
  main.innerHTML = "";
  const shell = el("div", "activity-shell");
  const top = el("div", "activity-top");
  const prog = el("div", "activity-progress", title);
  const quit = el("button", "quit-btn", "✕ 退出");
  quit.addEventListener("click", backFn);
  top.append(prog, quit);
  shell.append(top);
  const body = el("div");
  shell.append(body);
  main.append(shell);
  return {
    body,
    setProgress(i) { prog.textContent = `${title} · ${i} / ${totalSteps}`; }
  };
}

function showResult(body, { emoji, title, sub, retryLabel, onRetry, onBack }) {
  body.innerHTML = "";
  const box = el("div", "result-box");
  box.innerHTML = `<div class="r-emoji">${emoji}</div><h2>${esc(title)}</h2><p>${esc(sub)}</p>`;
  const row = el("div", "flash-controls");
  if (onRetry) {
    const r = el("button", "ctrl-btn primary", retryLabel || "再来一次");
    r.addEventListener("click", onRetry);
    row.append(r);
  }
  const b = el("button", "ctrl-btn", "返回");
  b.addEventListener("click", onBack);
  row.append(b);
  box.append(row);
  body.append(box);
}

// ===================== 闪卡 =====================
function startFlashcards(unit) {
  const words = shuffle(unit.words);
  let idx = 0;
  const back = () => renderUnit(unit);
  const { body, setProgress } = activityShell("🃏 闪卡", back, words.length);

  function show() {
    if (idx >= words.length) {
      showResult(body, {
        emoji: "🎉", title: "¡Órale! 完成了！",
        sub: `你刚刚学习了 ${words.length} 个词。`,
        onRetry: () => startFlashcards(unit), onBack: back
      });
      updateSidebarStats();
      return;
    }
    setProgress(idx + 1);
    const w = words[idx];
    body.innerHTML = "";

    const scene = el("div", "flashcard-scene");
    const card = el("div", "flashcard");
    card.innerHTML =
      `<div class="card-face front">
         <div class="big-emoji">${w.emoji}</div>
         <div class="es-word">${esc(w.es)}</div>
       </div>
       <div class="card-face back">
         <div class="big-emoji">${w.emoji}</div>
         <div class="zh-word">${esc(sub(w))}</div>
         ${subAlt(w) ? `<div class="en-word">${esc(subAlt(w))}</div>` : ""}
         ${w.ex ? `<div class="example">“${esc(w.ex)}”<br>${esc(w.exZh || "")}</div>` : ""}
       </div>`;
    card.addEventListener("click", () => card.classList.toggle("flipped"));
    scene.append(card);
    body.append(scene, el("p", "hint", "点击卡片翻面 · 🔊 听发音"));

    const controls = el("div", "flash-controls");
    const playBtn = el("button", "ctrl-btn", "🔊 发音");
    playBtn.addEventListener("click", () => speak(w.es));
    const hardBtn = el("button", "ctrl-btn", "🤔 还不熟");
    hardBtn.addEventListener("click", () => { markResult(w, false); idx++; show(); });
    const okBtn = el("button", "ctrl-btn good", "✓ 认识了");
    okBtn.addEventListener("click", () => { markResult(w, true); idx++; show(); });
    controls.append(playBtn, hardBtn, okBtn);
    body.append(controls);

    speak(w.es);
  }
  show();
}

// ===================== 词义配对 =====================
function startMatching(unit) {
  const back = () => renderUnit(unit);
  const pairs = sample(unit.words, Math.min(6, unit.words.length));
  const { body } = activityShell("🔗 词义配对", back, 1);

  body.append(el("p", "hint", "点击左右两栏，把西语词和释义配对"));
  const grid = el("div", "match-grid");
  const left = shuffle(pairs).map(w => ({ w, side: "es", label: w.es }));
  const right = shuffle(pairs).map(w => ({ w, side: "zh", label: sub(w) }));

  let selected = null;
  let matchedCount = 0;
  let mistakes = 0;

  function makeBtn(item) {
    const b = el("button", "match-item", esc(item.label));
    b.addEventListener("click", () => {
      if (b.classList.contains("matched")) return;
      if (item.side === "es") speak(item.w.es);
      if (selected && selected.btn === b) {
        b.classList.remove("selected"); selected = null; return;
      }
      if (!selected) {
        document.querySelectorAll(".match-item.selected").forEach(x => x.classList.remove("selected"));
        b.classList.add("selected");
        selected = { item, btn: b };
        return;
      }
      // 第二次点击: 判断
      if (selected.item.side === item.side) {
        selected.btn.classList.remove("selected");
        b.classList.add("selected");
        selected = { item, btn: b };
        return;
      }
      if (selected.item.w === item.w) {
        b.classList.add("matched");
        selected.btn.classList.add("matched");
        selected.btn.classList.remove("selected");
        markResult(item.w, true);
        matchedCount++;
        selected = null;
        if (matchedCount === pairs.length) {
          setTimeout(() => showResult(body, {
            emoji: mistakes === 0 ? "🏆" : "🎉",
            title: mistakes === 0 ? "¡Perfecto! 全对！" : "¡Bien hecho! 完成！",
            sub: `配对 ${pairs.length} 组，失误 ${mistakes} 次。`,
            onRetry: () => startMatching(unit), onBack: back
          }), 450);
        }
      } else {
        const sb = selected.btn;
        sb.classList.remove("selected");
        sb.classList.add("wrong"); b.classList.add("wrong");
        markResult(item.w, false);
        mistakes++;
        selected = null;
        setTimeout(() => { sb.classList.remove("wrong"); b.classList.remove("wrong"); }, 420);
      }
    });
    return b;
  }

  const rows = Math.max(left.length, right.length);
  for (let i = 0; i < rows; i++) {
    if (left[i]) grid.append(makeBtn(left[i]));
    if (right[i]) grid.append(makeBtn(right[i]));
  }
  body.append(grid);
}

// ===================== 图片选择 (听/看词选图) =====================
function startPicture(unit) {
  const back = () => renderUnit(unit);
  const words = shuffle(unit.words).slice(0, Math.min(10, unit.words.length));
  let idx = 0, mistakes = 0;
  const { body, setProgress } = activityShell("🖼️ 图片选择", back, words.length);

  function show() {
    if (idx >= words.length) {
      showResult(body, {
        emoji: mistakes === 0 ? "🏆" : "🎉",
        title: "¡Muy bien! 完成！",
        sub: `${words.length} 题，答错 ${mistakes} 次。`,
        onRetry: () => startPicture(unit), onBack: back
      });
      return;
    }
    setProgress(idx + 1);
    const w = words[idx];
    body.innerHTML = "";

    const prompt = el("div", "pick-prompt");
    prompt.innerHTML = `<div class="es-word">${esc(w.es)}</div>`;
    const hear = el("button", "ctrl-btn", "🔊 再听一遍");
    hear.style.marginTop = "12px";
    hear.addEventListener("click", () => speak(w.es));
    prompt.append(hear);
    body.append(prompt, el("p", "hint", "这个词是什么意思？选出正确的图片"));

    // 干扰项: 同单元里 emoji 不同的词
    const others = unit.words.filter(x => x !== w && x.emoji !== w.emoji);
    const options = shuffle([w, ...sample(others, 3)]);
    const grid = el("div", "pick-grid");
    let answered = false;
    for (const opt of options) {
      const b = el("button", "pick-option",
        `${opt.emoji}<small>${esc(sub(opt))}</small>`);
      b.addEventListener("click", () => {
        if (answered) return;
        if (opt === w) {
          answered = true;
          b.classList.add("correct");
          markResult(w, true);
          setTimeout(() => { idx++; show(); }, 550);
        } else {
          b.classList.add("wrong");
          mistakes++;
          markResult(w, false);
          setTimeout(() => b.classList.remove("wrong"), 450);
        }
      });
      grid.append(b);
    }
    body.append(grid);
    speak(w.es);
  }
  show();
}

// ===================== 拼写练习 (带西语特殊字符键) =====================
function normalizeEs(s) {
  return s.toLowerCase().trim().replace(/\s+/g, " ");
}
// 英文键盘友好匹配: a=á n=ñ u=ü, ?=¿ !=¡
function deaccent(ch) {
  return ch.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
function charMatches(typed, target) {
  if (!typed || !target) return false;
  if (typed.toLowerCase() === target.toLowerCase()) return true;
  if (deaccent(typed) === deaccent(target)) return true;
  if (target === "¿" && typed === "?") return true;
  if (target === "¡" && typed === "!") return true;
  return false;
}
function stripArticle(s) {
  return s.replace(/^(el|la|los|las)\s+/i, "");
}

function startSpelling(unit) {
  const back = () => renderUnit(unit);
  const words = shuffle(unit.words);
  let idx = 0;
  let mode = "type";      // type = 四线格打字(默认), write = 手写画布
  let showGuide = true;   // 描红模板
  const { body, setProgress } = activityShell("✍️ 书写练习", back, words.length);

  function themeColor(name) {
    return getComputedStyle(document.body).getPropertyValue(name).trim();
  }

  function show() {
    if (idx >= words.length) {
      showResult(body, {
        emoji: "✍️", title: "书写练习完成！",
        sub: `你练习书写了 ${words.length} 个词。`,
        onRetry: () => startSpelling(unit), onBack: back
      });
      return;
    }
    setProgress(idx + 1);
    const w = words[idx];
    body.innerHTML = "";

    // ===== 上方: 单词卡 (像 ScriptPad: 大字 + 中文 + 插图) =====
    const card = el("div", "write-card");
    card.innerHTML =
      `<div class="es-word">${esc(w.es)}</div>
       <div class="zh-word">${esc(sub(w))}</div>
       <div class="big-emoji">${w.emoji}</div>`;
    body.append(card);

    // ===== 工具条 =====
    const tools = el("div", "write-tools");
    body.append(tools);

    const area = el("div");
    body.append(area);

    if (mode === "write") renderWrite(w, tools, area);
    else renderType(w, tools, area);

    // ===== 上一个 / 下一个 =====
    const controls = el("div", "flash-controls");
    const prevBtn = el("button", "ctrl-btn", "← 上一个");
    prevBtn.disabled = idx === 0;
    prevBtn.addEventListener("click", () => { idx--; show(); });
    const nextBtn = el("button", "ctrl-btn primary", "下一个 →");
    nextBtn.addEventListener("click", () => { markResult(w, true); idx++; show(); });
    controls.append(prevBtn, nextBtn);
    body.append(controls);

    speak(w.es);
  }

  // ---------- 手写画布 ----------
  function renderWrite(w, tools, area) {
    const clearBtn = el("button", "tool-btn warn", "🧹 Clear");
    const undoBtn = el("button", "tool-btn", "↩️ Undo");
    const playBtn = el("button", "tool-btn", "🔊 发音");
    const guideBtn = el("button", "tool-btn", showGuide ? "👁 描红: 开" : "👁 描红: 关");
    const typeBtn = el("button", "tool-btn", "⌨️ Type");
    tools.append(clearBtn, undoBtn, playBtn, guideBtn, typeBtn);

    const wrap = el("div", "canvas-wrap");
    const canvas = document.createElement("canvas");
    wrap.append(canvas);
    area.append(wrap);

    const H = 230;
    const dpr = window.devicePixelRatio || 1;
    // 插入 DOM 后才能量宽度
    requestAnimationFrame(() => {
      const cssW = wrap.clientWidth;
      canvas.width = cssW * dpr;
      canvas.height = H * dpr;
      canvas.style.width = cssW + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      redraw();
    });
    const ctx = canvas.getContext("2d");

    let strokes = [];
    let cur = null;

    function redraw() {
      const cw = canvas.width / dpr, chh = canvas.height / dpr;
      ctx.clearRect(0, 0, cw, chh);
      // 四线格
      const top = chh * 0.18, mid = chh * 0.5, base = chh * 0.82;
      const lineC = themeColor("--line");
      ctx.lineWidth = 1;
      ctx.strokeStyle = lineC;
      for (const [y, dashed] of [[top, false], [mid, true], [base, false]]) {
        ctx.beginPath();
        ctx.setLineDash(dashed ? [7, 7] : []);
        ctx.moveTo(12, y); ctx.lineTo(cw - 12, y);
        ctx.stroke();
      }
      ctx.setLineDash([]);
      // 描红模板 (浅色大字，可临摹)
      if (showGuide) {
        const fontStack = `500 SIZEpx ${themeColor("--font") || '-apple-system, "Helvetica Neue", sans-serif'}`;
        let size = (base - top) * 1.05;
        ctx.font = fontStack.replace("SIZE", size);
        while (ctx.measureText(w.es).width > cw - 50 && size > 18) {
          size -= 4;
          ctx.font = fontStack.replace("SIZE", size);
        }
        ctx.fillStyle = themeColor("--ink2");
        ctx.globalAlpha = 0.28;
        ctx.textAlign = "center";
        ctx.textBaseline = "alphabetic";
        ctx.fillText(w.es, cw / 2, base - 4);
        ctx.globalAlpha = 1;
      }
      // 笔迹
      ctx.lineWidth = 5.5;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = themeColor("--ink");
      for (const st of strokes) {
        const pts = st.points;
        if (pts.length < 2) {
          ctx.beginPath();
          ctx.arc(pts[0][0], pts[0][1], 2.6, 0, Math.PI * 2);
          ctx.fillStyle = themeColor("--ink");
          ctx.fill();
          continue;
        }
        ctx.beginPath();
        ctx.moveTo(pts[0][0], pts[0][1]);
        for (let i = 1; i < pts.length - 1; i++) {
          const mx = (pts[i][0] + pts[i + 1][0]) / 2;
          const my = (pts[i][1] + pts[i + 1][1]) / 2;
          ctx.quadraticCurveTo(pts[i][0], pts[i][1], mx, my);
        }
        ctx.lineTo(pts[pts.length - 1][0], pts[pts.length - 1][1]);
        ctx.stroke();
      }
    }

    canvas.addEventListener("pointerdown", e => {
      canvas.setPointerCapture(e.pointerId);
      cur = { points: [[e.offsetX, e.offsetY]] };
      strokes.push(cur);
      redraw();
    });
    canvas.addEventListener("pointermove", e => {
      if (!cur) return;
      cur.points.push([e.offsetX, e.offsetY]);
      redraw();
    });
    const endStroke = () => { cur = null; };
    canvas.addEventListener("pointerup", endStroke);
    canvas.addEventListener("pointercancel", endStroke);

    clearBtn.addEventListener("click", () => { strokes = []; redraw(); });
    undoBtn.addEventListener("click", () => { strokes.pop(); cur = null; redraw(); });
    playBtn.addEventListener("click", () => speak(w.es));
    guideBtn.addEventListener("click", () => {
      showGuide = !showGuide;
      guideBtn.textContent = showGuide ? "👁 描红: 开" : "👁 描红: 关";
      redraw();
    });
    typeBtn.addEventListener("click", () => { mode = "type"; show(); });

    area.append(el("p", "hint", "在四线格上用鼠标 / 触控板临摹这个词 · 点 ⌨️ Type 切换键盘拼写"));
  }

  // ---------- 四线格打字 (默认): 键入的字母"写"进四线格 ----------
  function renderType(w, tools, area) {
    const target = w.es;
    const clearBtn = el("button", "tool-btn warn", "🧹 Clear");
    const playBtn = el("button", "tool-btn", "🔊 发音");
    const guideBtn = el("button", "tool-btn", showGuide ? "👁 描红: 开" : "👁 描红: 关");
    const writeBtn = el("button", "tool-btn", "✍️ 手写");
    tools.append(clearBtn, playBtn, guideBtn, writeBtn);

    const box = el("div", "ruled-box" + (showGuide ? "" : " hide-template"));
    box.append(el("div", "rline top"), el("div", "rline mid"), el("div", "rline base"));
    const letters = el("div", "ruled-letters");
    const spans = [];
    for (const ch of target) {
      const s = el("span", "r-ch", ch === " " ? "&nbsp;" : esc(ch));
      s.dataset.ch = ch;
      spans.push(s);
      letters.append(s);
    }
    box.append(letters);

    const input = el("input", "ghost-input");
    input.type = "text";
    input.autocapitalize = "off";
    input.autocomplete = "off";
    input.spellcheck = false;
    box.append(input);
    box.addEventListener("mousedown", e => { e.preventDefault(); input.focus(); });
    area.append(box);

    // 字号自适应宽度
    requestAnimationFrame(() => {
      let size = 88;
      letters.style.fontSize = size + "px";
      while (letters.scrollWidth > box.clientWidth - 44 && size > 20) {
        size -= 4;
        letters.style.fontSize = size + "px";
      }
    });

    const accents = el("div", "accent-row");
    accents.style.marginTop = "12px";
    for (const ch of SPECIAL_CHARS) {
      const k = el("button", "accent-key", ch);
      k.addEventListener("mousedown", e => e.preventDefault());
      k.addEventListener("click", () => {
        input.value += ch;
        input.dispatchEvent(new Event("input"));
        input.focus();
      });
      accents.append(k);
    }
    area.append(accents);

    let clean = true, done = false, flashTimer = null;

    function paint() {
      if (done) return;
      const raw = input.value;
      // 只保留与目标匹配的前缀，打错的字符丢弃并闪红提示
      let matched = 0;
      while (matched < raw.length && matched < target.length &&
             charMatches(raw[matched], target[matched])) {
        matched++;
      }
      if (matched < raw.length) {
        // 有打错的字符
        if (clean) { clean = false; }
        const s = spans[matched];
        if (s) {
          s.classList.add("flash");
          clearTimeout(flashTimer);
          flashTimer = setTimeout(() => s.classList.remove("flash"), 380);
        }
        input.value = raw.slice(0, matched);
      }
      spans.forEach((s, i) => s.classList.toggle("typed", i < matched));
      if (matched === target.length) {
        done = true;
        input.blur();
        box.classList.remove("hide-template");
        markResult(w, clean);
        speak(target);
        setTimeout(() => { idx++; show(); }, 900);
      }
    }

    input.addEventListener("input", paint);
    clearBtn.addEventListener("click", () => {
      input.value = "";
      spans.forEach(s => s.classList.remove("typed", "flash"));
      input.focus();
    });
    playBtn.addEventListener("click", () => speak(target));
    guideBtn.addEventListener("click", () => {
      showGuide = !showGuide;
      guideBtn.textContent = showGuide ? "👁 描红: 开" : "👁 描红: 关";
      box.classList.toggle("hide-template", !showGuide);
      input.focus();
    });
    writeBtn.addEventListener("click", () => { mode = "write"; show(); });

    area.append(el("p", "hint", "英文键盘直接打: a=á n=ñ u=ü, ? 代替 ¿, ! 代替 ¡ (重音会自动补上) · 打错闪红自动忽略 · 描红关掉就是默写"));
    input.focus();
  }

  show();
}

// ===================== 打字强化记忆 (三段递进: 跟打 → 半提示 → 默写) =====================
const DRILL_STAGES = [
  { key: "copy",   label: "① 跟打", tip: "看着单词，把它打出来" },
  { key: "hint",   label: "② 半提示", tip: "只给首字母，听发音打出来" },
  { key: "recall", label: "③ 默写", tip: "凭记忆盲打，答案已隐藏" }
];

function startTypeDrill(unit) {
  const back = () => renderUnit(unit);
  const words = shuffle(unit.words).slice(0, Math.min(8, unit.words.length));
  const total = words.length * DRILL_STAGES.length;
  let wi = 0, stage = 0, step = 0, misses = 0;
  const { body, setProgress } = activityShell("🔥 打字强化", back, total);

  function isLetter(ch) { return /[a-záéíóúüñ]/i.test(ch); }

  function show() {
    if (wi >= words.length) {
      showResult(body, {
        emoji: misses === 0 ? "🏆" : "🔥",
        title: misses === 0 ? "¡Perfecto! 手指记住它们了！" : "打字强化完成！",
        sub: `${words.length} 个词 × 3 轮，失误 ${misses} 次。多打几遍，肌肉记忆最牢。`,
        onRetry: () => startTypeDrill(unit), onBack: back
      });
      return;
    }
    step++;
    setProgress(step);
    const w = words[wi];
    const st = DRILL_STAGES[stage];
    const target = w.es;
    body.innerHTML = "";

    const prompt = el("div", "spell-prompt");
    prompt.innerHTML =
      `<div class="big-emoji">${w.emoji}</div>
       <div class="zh-word">${esc(sub(w))}</div>
       <div class="stage-pill">${st.label} · ${st.tip}</div>`;
    body.append(prompt);

    // 目标单词显示区: 逐字母上色
    const targetBox = el("div", "type-target" + (st.key === "recall" ? " masked" : ""));
    const chSpans = [];
    for (const ch of target) {
      const showCh = st.key === "copy" ? ch
        : st.key === "hint"
          ? (chSpans.filter(s => s.dataset.letter === "1").length === 0 || !isLetter(ch) ? ch : "·")
          : ch;
      const s = el("span", "t-ch", esc(showCh));
      s.dataset.ch = ch;
      s.dataset.base = showCh;
      s.dataset.letter = isLetter(ch) ? "1" : "0";
      chSpans.push(s);
      targetBox.append(s);
    }
    body.append(targetBox);

    const input = el("input", "spell-input");
    input.type = "text";
    input.placeholder = st.key === "recall" ? "凭记忆输入… (a=á n=ñ ?=¿)" : "在这里打字… (a=á n=ñ ?=¿)";
    input.autocapitalize = "off";
    input.autocomplete = "off";
    input.spellcheck = false;
    body.append(input);

    const accents = el("div", "accent-row");
    for (const ch of SPECIAL_CHARS) {
      const k = el("button", "accent-key", ch);
      k.addEventListener("click", () => {
        const pos = input.selectionStart ?? input.value.length;
        input.value = input.value.slice(0, pos) + ch + input.value.slice(input.selectionEnd ?? pos);
        input.dispatchEvent(new Event("input"));
        input.focus();
        input.setSelectionRange(pos + 1, pos + 1);
      });
      accents.append(k);
    }
    body.append(accents);

    const answer = el("div", "spell-answer", "");
    body.append(answer);

    const controls = el("div", "flash-controls");
    const hearBtn = el("button", "ctrl-btn", "🔊 听发音");
    hearBtn.addEventListener("click", () => speak(target));
    controls.append(hearBtn);
    let revealBtn = null;
    if (st.key !== "copy") {
      revealBtn = el("button", "ctrl-btn", "💡 偷看 2 秒");
      controls.append(revealBtn);
    }
    body.append(controls);

    let clean = true;   // 本轮没打错、没偷看
    let done = false;

    function paint() {
      const val = input.value;
      let allOk = val.length > 0;
      for (let i = 0; i < chSpans.length; i++) {
        const s = chSpans[i];
        s.classList.remove("ok", "bad");
        if (i < val.length) {
          if (charMatches(val[i], s.dataset.ch)) {
            s.classList.add("ok");
            s.textContent = s.dataset.ch;   // 打对的字母实时揭开
          } else {
            s.classList.add("bad");
            allOk = false;
          }
        } else {
          s.textContent = s.dataset.base;
          allOk = false;
        }
      }
      // 打错(当前前缀不匹配)时标记失误
      let prefixOk = val.length <= target.length;
      for (let i = 0; prefixOk && i < val.length; i++) {
        if (!charMatches(val[i], target[i])) prefixOk = false;
      }
      input.classList.toggle("bad", !prefixOk && val.length > 0);
      if (!prefixOk && clean) { clean = false; misses++; }
      if (allOk && val.length === target.length && !done) {
        done = true;
        finish();
      }
    }

    function finish() {
      input.disabled = true;
      input.classList.remove("bad");
      input.classList.add("ok");
      targetBox.classList.remove("masked");
      chSpans.forEach(s => { s.classList.remove("bad"); s.classList.add("ok"); s.textContent = s.dataset.ch; });
      speak(target);
      if (st.key === "recall") {
        markResult(w, clean);
        answer.innerHTML = clean ? "🎯 全程无失误，记住了！" : "✅ 完成！这个词会再回到复习里巩固。";
      } else {
        answer.innerHTML = "✅ 很好，进入下一轮！";
      }
      setTimeout(() => {
        stage++;
        if (stage >= DRILL_STAGES.length) { stage = 0; wi++; }
        show();
      }, 850);
    }

    input.addEventListener("input", paint);
    input.addEventListener("keydown", e => {
      if (e.key === "Enter") paint();
    });
    if (revealBtn) {
      revealBtn.addEventListener("click", () => {
        if (clean) { clean = false; misses++; }
        const wasMasked = targetBox.classList.contains("masked");
        targetBox.classList.remove("masked");
        chSpans.forEach(s => { s.textContent = s.dataset.ch; });
        setTimeout(() => {
          if (done) return;
          paint();                      // 还原到当前输入进度的显示状态
          if (wasMasked) targetBox.classList.add("masked");
        }, 2000);
      });
    }

    input.focus();
    speak(target);
  }
  show();
}

// ===================== 跟读对比 (Speak & Compare) =====================
let mediaRecorder = null;
let recordedURL = null;

function startSpeak(unit) {
  const back = () => renderUnit(unit);
  const words = shuffle(unit.words);
  let idx = 0;
  const { body, setProgress } = activityShell("🎙️ 跟读对比", back, words.length);

  function cleanupRecording() {
    if (mediaRecorder && mediaRecorder.state !== "inactive") mediaRecorder.stop();
    mediaRecorder = null;
    if (recordedURL) { URL.revokeObjectURL(recordedURL); recordedURL = null; }
  }

  function show() {
    cleanupRecording();
    if (idx >= words.length) {
      showResult(body, {
        emoji: "🎤", title: "¡Qué padre! 跟读完成！",
        sub: `你练习了 ${words.length} 个词的发音。`,
        onRetry: () => startSpeak(unit), onBack: back
      });
      return;
    }
    setProgress(idx + 1);
    const w = words[idx];
    body.innerHTML = "";

    const card = el("div", "speak-card");
    card.innerHTML =
      `<div class="big-emoji">${w.emoji}</div>
       <div class="es-word">${esc(w.es)}</div>
       <div class="zh-word">${esc(sub(w))}</div>`;

    const row = el("div", "speak-row");
    const nativeBtn = el("button", "speak-btn", "🔊 原声发音");
    const slowBtn = el("button", "speak-btn", "🐢 慢速");
    const recBtn = el("button", "speak-btn", "🎙️ 按下录音");
    const playMeBtn = el("button", "speak-btn", "▶️ 我的录音");
    playMeBtn.disabled = true;
    row.append(nativeBtn, slowBtn, recBtn, playMeBtn);
    card.append(row);

    const note = el("div", "speak-note", "先听原声，再录下你的发音，对比一下 👂");
    card.append(note);
    body.append(card);

    nativeBtn.addEventListener("click", () => speak(w.es));
    slowBtn.addEventListener("click", () => speak(w.es, 0.55));

    let chunks = [];
    recBtn.addEventListener("click", async () => {
      if (mediaRecorder && mediaRecorder.state === "recording") {
        mediaRecorder.stop();
        return;
      }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        chunks = [];
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = e => chunks.push(e.data);
        mediaRecorder.onstop = () => {
          stream.getTracks().forEach(t => t.stop());
          if (recordedURL) URL.revokeObjectURL(recordedURL);
          recordedURL = URL.createObjectURL(new Blob(chunks, { type: mediaRecorder.mimeType || "audio/webm" }));
          recBtn.classList.remove("recording");
          recBtn.textContent = "🎙️ 重新录音";
          playMeBtn.disabled = false;
          note.textContent = "录好了！点「我的录音」和「原声发音」来回对比 🔁";
        };
        mediaRecorder.start();
        recBtn.classList.add("recording");
        recBtn.textContent = "⏹ 停止录音";
        note.textContent = "正在录音… 说: " + w.es;
      } catch (err) {
        note.textContent = "⚠️ 无法访问麦克风，请在系统设置中允许麦克风权限。";
      }
    });

    playMeBtn.addEventListener("click", () => {
      if (recordedURL) new Audio(recordedURL).play();
    });

    const controls = el("div", "flash-controls");
    const prevBtn = el("button", "ctrl-btn", "← 上一个");
    prevBtn.disabled = idx === 0;
    prevBtn.addEventListener("click", () => { idx--; show(); });
    const nextBtn = el("button", "ctrl-btn primary", "下一个 →");
    nextBtn.addEventListener("click", () => { markResult(w, true); idx++; show(); });
    controls.append(prevBtn, nextBtn);
    body.append(controls);

    speak(w.es);
  }
  show();
}

// ===================== 测验 =====================
function buildQuizQuestions(words, pool) {
  const qs = [];
  for (const w of words) {
    const others = sample(pool.filter(x => x !== w), 3);
    const type = Math.random() < 0.5 ? "es2zh" : "zh2es";
    if (type === "es2zh") {
      qs.push({
        w, text: w.es, sub: "这个词是什么意思？", speakIt: true,
        options: shuffle([w, ...others]).map(x => ({ label: sub(x), correct: x === w }))
      });
    } else {
      qs.push({
        w, text: sub(w), sub: "用西班牙语怎么说？", speakIt: false,
        options: shuffle([w, ...others]).map(x => ({ label: x.es, correct: x === w }))
      });
    }
  }
  return qs;
}

function startQuiz(unit) {
  const back = () => renderUnit(unit);
  runQuiz({
    title: "📝 单元测验",
    words: shuffle(unit.words).slice(0, Math.min(10, unit.words.length)),
    pool: unit.words,
    back,
    onRetry: () => startQuiz(unit)
  });
}

function runQuiz({ title, words, pool, back, onRetry, onDone }) {
  const qs = buildQuizQuestions(words, pool);
  let idx = 0, correct = 0;
  const { body, setProgress } = activityShell(title, back, qs.length);

  function show() {
    if (idx >= qs.length) {
      const pct = Math.round(correct / qs.length * 100);
      if (onDone) onDone();
      showResult(body, {
        emoji: pct === 100 ? "🏆" : pct >= 70 ? "🎉" : "💪",
        title: pct === 100 ? "¡Perfecto! 满分！" : pct >= 70 ? "¡Muy bien!" : "继续加油 (¡Échale ganas!)",
        sub: `答对 ${correct} / ${qs.length} 题 (${pct}%)`,
        onRetry, onBack: back
      });
      return;
    }
    setProgress(idx + 1);
    const q = qs[idx];
    body.innerHTML = "";

    const qBox = el("div", "quiz-q");
    qBox.innerHTML = `<div class="q-text">${esc(q.text)}</div><div class="q-sub">${esc(q.sub)}</div>`;
    if (q.speakIt) {
      const h = el("button", "ctrl-btn", "🔊");
      h.style.marginTop = "10px";
      h.addEventListener("click", () => speak(q.w.es));
      qBox.append(h);
    }
    body.append(qBox);

    const opts = el("div", "quiz-options");
    let answered = false;
    for (const opt of q.options) {
      const b = el("button", "quiz-opt", esc(opt.label));
      b.addEventListener("click", () => {
        if (answered) return;
        answered = true;
        if (opt.correct) {
          b.classList.add("correct");
          correct++;
          markResult(q.w, true);
        } else {
          b.classList.add("wrong");
          markResult(q.w, false);
          opts.querySelectorAll(".quiz-opt").forEach((x, i) => {
            if (q.options[i].correct) x.classList.add("correct");
          });
        }
        speak(q.w.es);
        setTimeout(() => { idx++; show(); }, 900);
      });
      opts.append(b);
    }
    body.append(opts);
    if (q.speakIt) speak(q.w.es);
  }
  show();
}

// ===================== 每日复习 =====================
function renderReview() {
  main.innerHTML = "";
  main.append(
    el("h1", "page-title", "每日复习"),
    el("p", "page-sub", "基于间隔重复：到期的词会出现在这里，答对间隔变长，答错重新巩固")
  );
  const due = dueWords();
  if (due.length === 0) {
    const learnedAny = allWords().some(w => getProg(w).seen);
    const note = el("div", "empty-note");
    note.innerHTML = learnedAny
      ? `<span class="big">🌵</span>今天没有到期的词，休息一下！<br>去单元里学点新词吧。`
      : `<span class="big">🃏</span>还没有学过的词。<br>先去「课程单元」用闪卡学几个词，它们会按记忆曲线回到这里。`;
    main.append(note);
    return;
  }
  const start = el("button", "ctrl-btn primary", `开始复习 ${Math.min(due.length, 15)} 个词 →`);
  start.style.marginBottom = "20px";
  start.addEventListener("click", () => {
    runQuiz({
      title: "🔁 复习",
      words: sample(due, Math.min(due.length, 15)),
      pool: allWords(),
      back: renderReview,
      onRetry: null,
      onDone: updateSidebarStats
    });
  });
  main.append(start);

  const list = el("div", "word-list");
  for (const w of due.slice(0, 30)) {
    const row = el("div", "word-row");
    row.innerHTML =
      `<span class="w-emoji">${w.emoji}</span>
       <div><div class="w-es">${esc(w.es)}</div><div class="w-zh">${esc(sub(w))}</div></div>`;
    const play = el("button", "icon-btn", "🔊");
    play.addEventListener("click", () => speak(w.es));
    row.append(play);
    list.append(row);
  }
  main.append(list);
}

// ===================== 自定义课程 =====================
function renderCustom() {
  main.innerHTML = "";
  main.append(
    el("h1", "page-title", "自定义课程"),
    el("p", "page-sub", "把你想学的词粘贴进来，做成自己的单元（和 ScriptPad 的自定义课程一样）")
  );

  const form = el("div", "custom-form");
  const nameInput = el("input");
  nameInput.placeholder = "课程名称，例如: 我的旅行词汇";
  const ta = el("textarea");
  ta.placeholder = "cada línea 一行一个词，格式:\n西语 = 中文\n\n例如:\nla playa = 海滩\nel boleto = 车票\nnadar = 游泳";
  form.append(nameInput, ta,
    el("p", "form-hint", "格式: <b>西语 = 中文</b>（也可以用 <b>,</b> 或 <b>Tab</b> 分隔）。每行一个词。"));
  const save = el("button", "ctrl-btn primary", "＋ 创建课程");
  save.addEventListener("click", () => {
    const title = nameInput.value.trim();
    const lines = ta.value.split("\n").map(l => l.trim()).filter(Boolean);
    const words = [];
    for (const line of lines) {
      const m = line.split(/\s*(?:=|,|\t)\s*/);
      if (m.length >= 2 && m[0] && m[1]) {
        words.push({ es: m[0], zh: m[1], en: m[2] || "", emoji: "📌", ex: "", exZh: "" });
      }
    }
    if (!title) { toast("请填写课程名称"); return; }
    if (words.length === 0) { toast("没有解析到词条，检查一下格式"); return; }
    customUnits.push({
      id: "custom-" + Date.now(),
      title: title,
      emoji: "✏️",
      color: "#b8860b",
      words
    });
    store.set("custom", customUnits);
    toast(`已创建「${title}」，共 ${words.length} 个词`);
    renderCustom();
  });
  form.append(save);
  main.append(form);

  if (customUnits.length > 0) {
    const h2 = el("h2", "page-title", "我的课程");
    h2.style.marginTop = "34px";
    main.append(h2);
    const grid = el("div", "unit-grid");
    for (const unit of customUnits) {
      const card = el("button", "unit-card");
      const pct = unitProgress(unit);
      card.innerHTML =
        `<div class="u-emoji" style="background:${unit.color}22">${unit.emoji}</div>
         <h3>${esc(unit.title)}</h3>
         <div class="u-count">${unit.words.length} 个词 · 已学 ${pct}%</div>
         <div class="progress-bar"><div class="progress-fill" style="width:${pct}%;background:${unit.color}"></div></div>`;
      card.addEventListener("click", () => renderUnit(unit));
      const del = el("button", "quit-btn", "🗑 删除");
      del.style.marginTop = "12px";
      del.addEventListener("click", e => {
        e.stopPropagation();
        customUnits = customUnits.filter(u => u !== unit);
        store.set("custom", customUnits);
        renderCustom();
      });
      card.append(del);
      grid.append(card);
    }
    main.append(grid);
  }
}

// ===================== 设置 =====================
const THEMES = [
  ["papel", "纸张", "#f6f1e7"],
  ["noche", "夜间", "#191a20"],
  ["cactus", "仙人掌", "#edf5ec"],
  ["rosa", "墨西哥粉", "#fdf0f4"],
  ["cielo", "天空", "#eaf3fb"],
  ["arena", "沙滩", "#f8f4ec"]
];

function renderSettings() {
  main.innerHTML = "";
  main.append(el("h1", "page-title", "设置"), el("p", "page-sub", "主题、发音与学习数据"));

  // 主题
  const gTheme = el("div", "settings-group", "<h3>🎨 页面主题</h3>");
  const row = el("div", "theme-row");
  for (const [id, label, bgc] of THEMES) {
    const chip = el("button", "theme-chip" + (settings.theme === id ? " active" : ""), label);
    chip.style.background = bgc;
    chip.style.color = id === "noche" ? "#eee" : "#444";
    chip.addEventListener("click", () => {
      settings.theme = id;
      store.set("settings", settings);
      document.body.dataset.theme = id;
      renderSettings();
    });
    row.append(chip);
  }
  gTheme.append(row);
  main.append(gTheme);

  // 字幕语言
  const gSub = el("div", "settings-group", "<h3>💬 字幕语言（单词释义）</h3>");
  const subSel = el("select");
  for (const [val, label] of [["en", "English 英文"], ["zh", "中文"], ["both", "中英双语"]]) {
    const opt = el("option", "", label);
    opt.value = val;
    if (settings.subLang === val) opt.selected = true;
    subSel.append(opt);
  }
  subSel.addEventListener("change", () => {
    settings.subLang = subSel.value;
    store.set("settings", settings);
    toast("字幕语言已切换");
  });
  gSub.append(subSel);
  main.append(gSub);

  // 语音
  const gVoice = el("div", "settings-group", "<h3>🗣️ 西语发音</h3>");
  const es = spanishVoices();
  if (es.length === 0) {
    gVoice.append(el("p", "form-hint",
      "未检测到西班牙语语音。macOS 上请到「系统设置 → 辅助功能 → 朗读内容 → 系统嗓音 → 管理嗓音」下载 <b>Paulina (西班牙语·墨西哥)</b>，即可获得地道的墨西哥口音。"));
  } else {
    const sel = el("select");
    const current = pickVoice();
    for (const v of es) {
      const opt = el("option", "", `${esc(v.name)} (${esc(v.lang)})${/es[-_]mx/i.test(v.lang) ? " 🇲🇽" : ""}`);
      opt.value = v.voiceURI;
      if (current && v.voiceURI === current.voiceURI) opt.selected = true;
      sel.append(opt);
    }
    sel.addEventListener("change", () => {
      settings.voiceURI = sel.value;
      store.set("settings", settings);
      speak("¡Hola! ¿Qué onda?");
    });
    gVoice.append(sel);
    gVoice.append(el("p", "form-hint", "推荐选择带 🇲🇽 标记的 es-MX 嗓音（如 Paulina），这是墨西哥口音。"));
  }
  const rateRow = el("div", "range-row");
  const rate = el("input");
  rate.type = "range"; rate.min = "0.5"; rate.max = "1.2"; rate.step = "0.05";
  rate.value = settings.rate;
  const rateLabel = el("span", "form-hint", `语速 ${settings.rate}x`);
  rateLabel.style.margin = "0";
  rate.addEventListener("input", () => {
    settings.rate = parseFloat(rate.value);
    store.set("settings", settings);
    rateLabel.textContent = `语速 ${settings.rate}x`;
  });
  rate.addEventListener("change", () => speak("Buenos días"));
  rateRow.append(rate, rateLabel);
  gVoice.append(rateRow);
  main.append(gVoice);

  // 数据
  const gData = el("div", "settings-group", "<h3>💾 学习数据</h3>");
  const reset = el("button", "danger-btn", "清除全部学习进度");
  reset.addEventListener("click", () => {
    if (confirm("确定要清除所有学习进度吗？此操作不可恢复。")) {
      progress = {};
      store.set("progress", progress);
      updateSidebarStats();
      toast("学习进度已清除");
    }
  });
  gData.append(reset);
  main.append(gData);

  const about = el("p", "form-hint",
    "PalabraPad · 借鉴 ScriptPad 的学习方式打造 · 完全离线 · 数据保存在本机");
  about.style.maxWidth = "560px";
  main.append(about);
}

// ===================== 启动 =====================
document.body.dataset.theme = settings.theme;
updateSidebarStats();
renderHome();
