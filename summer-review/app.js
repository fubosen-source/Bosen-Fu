/* ============ 公共工具 & 页面框架 ============ */
"use strict";

const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function randInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

/* ---------- 英语发音（浏览器自带 TTS） ---------- */
let enVoice = null;
function pickVoice() {
  const vs = speechSynthesis.getVoices().filter(v => v.lang.startsWith("en"));
  enVoice = vs.find(v => v.lang === "en-US") || vs[0] || null;
}
if ("speechSynthesis" in window) {
  pickVoice();
  speechSynthesis.onvoiceschanged = pickVoice;
}
function speak(text, rate = 0.85) {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  if (enVoice) u.voice = enVoice;
  u.rate = rate;
  speechSynthesis.speak(u);
}

/* ---------- 标签页切换 ---------- */
function switchTab(name) {
  $$(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.tab === name));
  $$(".page").forEach(p => p.classList.toggle("active", p.id === "page-" + name));
  window.scrollTo({ top: 0 });
  if (location.hash !== "#" + name) history.replaceState(null, "", "#" + name);
}

$$(".tab-btn").forEach(b => b.addEventListener("click", () => switchTab(b.dataset.tab)));
$$("[data-goto]").forEach(c => c.addEventListener("click", () => switchTab(c.dataset.goto)));

/* ---------- 星星进度（存在本机） ---------- */
const STORE_KEY = "sr4-progress";
function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch { return {}; }
}
function saveStars(subject, stars) {
  const p = loadProgress();
  if ((p[subject] || 0) < stars) {
    p[subject] = stars;
    localStorage.setItem(STORE_KEY, JSON.stringify(p));
  }
  renderHomeStars();
}
function renderHomeStars() {
  const p = loadProgress();
  $$("[data-star]").forEach(el => {
    const n = p[el.dataset.star] || 0;
    el.textContent = "★".repeat(n) + "☆".repeat(3 - n);
  });
}

/* ---------- 闯关测验引擎 ----------
   questions: [{ q, opts: [..], answer: 序号, tip?: 讲解 }] */
function buildQuiz(container, subjectKey, questions) {
  let order, idx, score;

  function start() {
    order = shuffle(questions);
    idx = 0; score = 0;
    renderQuestion();
  }

  function renderQuestion() {
    const item = order[idx];
    container.innerHTML = `
      <div class="quiz-progress">第 ${idx + 1} 题 / 共 ${order.length} 题 &nbsp;·&nbsp; 已答对 ${score} 题</div>
      <div class="quiz-q">${item.q}</div>
      <div class="quiz-opts"></div>
      <div class="quiz-tip" style="min-height:26px;margin-top:10px;font-size:14px;color:#7a6a5d;"></div>
    `;
    const optsBox = $(".quiz-opts", container);
    const letters = ["A", "B", "C", "D"];
    const mapped = shuffle(item.opts.map((t, i) => ({ t, correct: i === item.answer })));
    mapped.forEach((o, i) => {
      const btn = document.createElement("button");
      btn.className = "quiz-opt";
      btn.innerHTML = `${letters[i]}. ${o.t}`;
      btn.addEventListener("click", () => {
        $$(".quiz-opt", container).forEach(b => (b.disabled = true));
        if (o.correct) {
          btn.classList.add("right");
          score++;
          $(".quiz-tip", container).textContent = "🎉 答对啦！" + (item.tip || "");
        } else {
          btn.classList.add("wrong");
          $$(".quiz-opt", container).forEach((b, bi) => {
            if (mapped[bi].correct) b.classList.add("right");
          });
          $(".quiz-tip", container).textContent = "😅 再想想～ " + (item.tip || "");
        }
        setTimeout(next, o.correct ? 900 : 2200);
      });
      optsBox.appendChild(btn);
    });
  }

  function next() {
    idx++;
    if (idx < order.length) renderQuestion();
    else renderEnd();
  }

  function renderEnd() {
    const pct = score / order.length;
    const stars = pct >= 0.9 ? 3 : pct >= 0.7 ? 2 : pct >= 0.5 ? 1 : 0;
    saveStars(subjectKey, stars);
    const msg =
      stars === 3 ? "太棒了！你是满分小学霸！🏆" :
      stars === 2 ? "很不错！再冲一次拿 3 颗星！💪" :
      stars === 1 ? "加油！把上面的知识再看一遍吧！📖" :
                    "别灰心，看完动画和卡片再来挑战！🌱";
    container.innerHTML = `
      <div class="quiz-end">
        <div class="score">${score} / ${order.length}</div>
        <div class="quiz-stars">${"★".repeat(stars)}${"☆".repeat(3 - stars)}</div>
        <p>${msg}</p>
        <button class="btn">🔄 再挑战一次</button>
      </div>
    `;
    $(".btn", container).addEventListener("click", start);
  }

  container.innerHTML = `
    <div class="quiz-end">
      <p style="font-size:16px;">共 ${questions.length} 题，答对 90% 拿满 3 颗星 ⭐⭐⭐</p>
      <button class="btn">🚀 开始闯关</button>
    </div>
  `;
  $(".btn", container).addEventListener("click", start);
}

/* ---------- 启动 ---------- */
renderHomeStars();
const initHash = location.hash.replace("#", "");
if (["home", "english", "math", "science"].includes(initHash)) switchTab(initHash);
