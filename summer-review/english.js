/* ============ 英语乐园 ============ */
"use strict";

/* ---------- 词汇数据（人教版四年级常见主题） ---------- */
const EN_THEMES = [
  {
    name: "☀️ 天气",
    words: [
      { en: "sunny",  cn: "晴朗的", emoji: "☀️" },
      { en: "rainy",  cn: "下雨的", emoji: "🌧️" },
      { en: "windy",  cn: "刮风的", emoji: "🌬️" },
      { en: "snowy",  cn: "下雪的", emoji: "❄️" },
      { en: "cloudy", cn: "多云的", emoji: "☁️" },
      { en: "hot",    cn: "热的",   emoji: "🥵" },
      { en: "cold",   cn: "冷的",   emoji: "🥶" },
      { en: "warm",   cn: "温暖的", emoji: "🌤️" },
    ],
  },
  {
    name: "👕 衣服",
    words: [
      { en: "shirt",    cn: "衬衫", emoji: "👕" },
      { en: "dress",    cn: "连衣裙", emoji: "👗" },
      { en: "coat",     cn: "外套", emoji: "🧥" },
      { en: "hat",      cn: "帽子", emoji: "🧢" },
      { en: "socks",    cn: "袜子", emoji: "🧦" },
      { en: "shoes",    cn: "鞋子", emoji: "👟" },
      { en: "gloves",   cn: "手套", emoji: "🧤" },
      { en: "scarf",    cn: "围巾", emoji: "🧣" },
    ],
  },
  {
    name: "🐄 农场动物",
    words: [
      { en: "cow",    cn: "奶牛", emoji: "🐄" },
      { en: "horse",  cn: "马",   emoji: "🐴" },
      { en: "sheep",  cn: "绵羊", emoji: "🐑" },
      { en: "hen",    cn: "母鸡", emoji: "🐔" },
      { en: "duck",   cn: "鸭子", emoji: "🦆" },
      { en: "pig",    cn: "猪",   emoji: "🐷" },
      { en: "goat",   cn: "山羊", emoji: "🐐" },
      { en: "rabbit", cn: "兔子", emoji: "🐰" },
    ],
  },
  {
    name: "🍚 食物",
    words: [
      { en: "rice",      cn: "米饭", emoji: "🍚" },
      { en: "noodles",   cn: "面条", emoji: "🍜" },
      { en: "beef",      cn: "牛肉", emoji: "🥩" },
      { en: "chicken",   cn: "鸡肉", emoji: "🍗" },
      { en: "fish",      cn: "鱼",   emoji: "🐟" },
      { en: "soup",      cn: "汤",   emoji: "🍲" },
      { en: "vegetable", cn: "蔬菜", emoji: "🥦" },
      { en: "milk",      cn: "牛奶", emoji: "🥛" },
    ],
  },
  {
    name: "🏫 学校",
    words: [
      { en: "library",       cn: "图书馆", emoji: "📚" },
      { en: "playground",    cn: "操场",   emoji: "⚽" },
      { en: "music room",    cn: "音乐教室", emoji: "🎵" },
      { en: "art room",      cn: "美术教室", emoji: "🎨" },
      { en: "computer room", cn: "计算机教室", emoji: "💻" },
      { en: "garden",        cn: "花园",   emoji: "🌷" },
      { en: "teacher",       cn: "老师",   emoji: "👩‍🏫" },
      { en: "classroom",     cn: "教室",   emoji: "🏫" },
    ],
  },
];

const EN_SENTENCES = [
  { icon: "⏰", en: "What time is it? — It's 9 o'clock. It's time for English class.", cn: "现在几点了？——九点，该上英语课了。" },
  { icon: "☀️", en: "What's the weather like today? — It's sunny and hot.", cn: "今天天气怎么样？——晴天，很热。" },
  { icon: "👗", en: "Is this your skirt? — Yes, it is. / No, it isn't.", cn: "这是你的裙子吗？——是的。/ 不是。" },
  { icon: "💰", en: "How much is this dress? — It's ninety-nine yuan.", cn: "这条连衣裙多少钱？——99 元。" },
  { icon: "🐄", en: "How many cows do you have? — I have twelve.", cn: "你有多少头奶牛？——我有 12 头。" },
  { icon: "🎒", en: "Where is my schoolbag? — It's on the desk.", cn: "我的书包在哪儿？——在课桌上。" },
  { icon: "🍚", en: "What would you like for dinner? — I'd like some rice and fish.", cn: "晚饭你想吃什么？——我想吃米饭和鱼。" },
  { icon: "🏫", en: "Do you have a library? — Yes, we do!", cn: "你们有图书馆吗？——有！" },
];

const EN_ALL_WORDS = EN_THEMES.flatMap(t => t.words);

/* ---------- 单词闪卡 ---------- */
let flashTheme = 0, flashIdx = 0;

function renderThemeChips() {
  const box = $("#en-themes");
  box.innerHTML = "";
  EN_THEMES.forEach((t, i) => {
    const chip = document.createElement("button");
    chip.className = "theme-chip" + (i === flashTheme ? " active" : "");
    chip.textContent = t.name;
    chip.addEventListener("click", () => {
      flashTheme = i; flashIdx = 0;
      renderThemeChips(); renderFlash();
    });
    box.appendChild(chip);
  });
}

function renderFlash() {
  const words = EN_THEMES[flashTheme].words;
  const w = words[flashIdx];
  const box = $("#en-flash");
  box.innerHTML = `
    <div class="flash-wrap">
      <div class="flash-card" id="flash-card">
        <div class="flash-inner">
          <div class="flash-face flash-front">
            <div class="flash-emoji">${w.emoji}</div>
            <div class="flash-word">${w.en}</div>
            <div class="flash-hint">点我翻面看中文 👆</div>
          </div>
          <div class="flash-face flash-back">
            <div class="flash-emoji">${w.emoji}</div>
            <div class="flash-cn">${w.cn}</div>
            <div class="flash-hint">再点一下翻回英文 👆</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flash-controls">
      <button class="btn ghost" id="flash-prev">⬅️ 上一张</button>
      <button class="icon-btn" id="flash-say" title="听发音">🔊</button>
      <button class="btn" id="flash-next">下一张 ➡️</button>
    </div>
    <div class="flash-count">第 ${flashIdx + 1} / ${words.length} 张 · ${EN_THEMES[flashTheme].name}</div>
  `;
  $("#flash-card").addEventListener("click", e => {
    e.currentTarget.classList.toggle("flipped");
  });
  $("#flash-say").addEventListener("click", () => speak(w.en));
  $("#flash-prev").addEventListener("click", () => {
    flashIdx = (flashIdx - 1 + words.length) % words.length;
    renderFlash(); speak(words[flashIdx].en);
  });
  $("#flash-next").addEventListener("click", () => {
    flashIdx = (flashIdx + 1) % words.length;
    renderFlash(); speak(words[flashIdx].en);
  });
}

/* ---------- 句型跟读 ---------- */
function renderSentences() {
  const box = $("#en-sentences");
  EN_SENTENCES.forEach(s => {
    const row = document.createElement("div");
    row.className = "sentence-row";
    row.innerHTML = `
      <div class="s-icon">${s.icon}</div>
      <div class="sentence-text">
        <div class="sentence-en">${s.en}</div>
        <div class="sentence-cn">${s.cn}</div>
      </div>
      <button class="icon-btn say" title="听发音">🔊</button>
      <button class="icon-btn cn" title="看中文">👀</button>
    `;
    $(".say", row).addEventListener("click", () => speak(s.en.replace(/—/g, ",")));
    $(".cn", row).addEventListener("click", () => row.classList.toggle("show-cn"));
    box.appendChild(row);
  });
}

/* ---------- 单词配对游戏 ---------- */
function newMatchGame() {
  const box = $("#en-match");
  const pairs = shuffle(EN_ALL_WORDS).slice(0, 6);
  const tiles = shuffle([
    ...pairs.map(p => ({ key: p.en, label: p.en, kind: "word" })),
    ...pairs.map(p => ({ key: p.en, label: p.emoji, kind: "emoji" })),
  ]);
  box.innerHTML = `<div class="match-grid"></div>`;
  const grid = $(".match-grid", box);
  let picked = null, doneCount = 0;

  tiles.forEach(t => {
    const el = document.createElement("div");
    el.className = "match-tile" + (t.kind === "emoji" ? " emoji" : "");
    el.textContent = t.label;
    el.dataset.key = t.key;
    el.dataset.kind = t.kind;
    el.addEventListener("click", () => {
      if (el.classList.contains("done")) return;
      if (t.kind === "word") speak(t.key);
      if (!picked) {
        picked = el;
        el.classList.add("picked");
        return;
      }
      if (picked === el) { el.classList.remove("picked"); picked = null; return; }
      if (picked.dataset.key === t.key && picked.dataset.kind !== t.kind) {
        picked.classList.remove("picked");
        picked.classList.add("done");
        el.classList.add("done");
        picked = null;
        doneCount++;
        if (doneCount === pairs.length) {
          const win = document.createElement("div");
          win.className = "match-win";
          win.innerHTML = `🎉 全部配对成功！ <button class="btn small">再来一局</button>`;
          box.appendChild(win);
          $(".btn", win).addEventListener("click", newMatchGame);
        }
      } else {
        el.classList.add("wrong");
        picked.classList.add("wrong");
        const p = picked; picked = null;
        setTimeout(() => { el.classList.remove("wrong", "picked"); p.classList.remove("wrong", "picked"); }, 400);
      }
    });
    grid.appendChild(el);
  });
}

/* ---------- 听音选图 ---------- */
let listenScore = 0, listenTotal = 0, listenAnswer = null;

function newListenRound() {
  const box = $("#en-listen");
  const opts = shuffle(EN_ALL_WORDS).slice(0, 4);
  listenAnswer = opts[randInt(0, 3)];
  box.innerHTML = `
    <div class="listen-wrap">
      <button class="btn blue" id="listen-play">🔊 播放单词</button>
      <div class="listen-options"></div>
      <div class="listen-score">得分：${listenScore} / ${listenTotal}</div>
    </div>
  `;
  $("#listen-play").addEventListener("click", () => speak(listenAnswer.en));
  const optBox = $(".listen-options", box);
  opts.forEach(o => {
    const b = document.createElement("button");
    b.className = "listen-opt";
    b.textContent = o.emoji;
    b.title = "";
    b.addEventListener("click", () => {
      listenTotal++;
      if (o.en === listenAnswer.en) {
        listenScore++;
        b.classList.add("right");
        speak("Great! " + listenAnswer.en);
      } else {
        b.classList.add("bad");
        $$(".listen-opt", optBox).forEach(x => {
          if (x.textContent === listenAnswer.emoji) x.classList.add("right");
        });
      }
      $$(".listen-opt", optBox).forEach(x => (x.disabled = true));
      setTimeout(newListenRound, 1400);
    });
    optBox.appendChild(b);
  });
  speak(listenAnswer.en);
}

/* ---------- 英语闯关测验 ---------- */
const EN_QUIZ = [
  { q: "🌧️ 下雨天，天气是——", opts: ["rainy", "sunny", "windy", "snowy"], answer: 0, tip: "rain 是雨，rainy 就是下雨的。" },
  { q: "\"It's time for lunch.\" 的意思是——", opts: ["该吃午饭了", "该睡觉了", "该上学了", "该吃晚饭了"], answer: 0, tip: "lunch 是午饭。" },
  { q: "👗 \"裙子\" 的英语是——", opts: ["dress", "shirt", "coat", "socks"], answer: 0, tip: "dress 连衣裙，skirt 短裙。" },
  { q: "问价格 \"多少钱\" 应该说——", opts: ["How much is it?", "How many is it?", "What time is it?", "How old are you?"], answer: 0, tip: "问价钱用 How much。" },
  { q: "🐑 sheep 是什么动物？", opts: ["绵羊", "山羊", "奶牛", "马"], answer: 0, tip: "sheep 绵羊，goat 山羊。" },
  { q: "\"Where is my pen?\" — \"It's ___ the desk.\" 选哪个词表示\"在桌子上\"？", opts: ["on", "in", "under", "at"], answer: 0, tip: "on 在……上面，in 在……里面，under 在……下面。" },
  { q: "🥶 天气很冷，可以说——", opts: ["It's cold.", "It's hot.", "It's warm.", "It's sunny."], answer: 0, tip: "cold 冷，hot 热，warm 暖和。" },
  { q: "🏫 \"图书馆\" 的英语是——", opts: ["library", "playground", "garden", "classroom"], answer: 0, tip: "library 图书馆，记住不要和 playground（操场）弄混。" },
  { q: "别人问 \"What would you like?\"，想要米饭可以回答——", opts: ["I'd like some rice.", "I like a rice.", "Me want rice.", "Rice is I."], answer: 0, tip: "I'd like = I would like，我想要。" },
  { q: "🕒 钟表指着 3:00，用英语说——", opts: ["It's three o'clock.", "It's three yuan.", "It's three years.", "Three is clock."], answer: 0, tip: "整点用 ... o'clock。" },
];

/* ---------- 初始化 ---------- */
renderThemeChips();
renderFlash();
renderSentences();
newMatchGame();

/* 听音选图：点开始才播放，避免一进页面就出声 */
$("#en-listen").innerHTML = `
  <div class="listen-wrap">
    <p style="margin-bottom:12px;">🎧 准备好了吗？点下面的按钮开始，注意听单词的发音！</p>
    <button class="btn blue" id="listen-start">▶️ 开始游戏</button>
  </div>
`;
$("#listen-start").addEventListener("click", () => { listenScore = 0; listenTotal = 0; newListenRound(); });

buildQuiz($("#en-quiz"), "english", EN_QUIZ);
