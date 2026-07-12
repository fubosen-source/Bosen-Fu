/* ============ 数学王国 ============ */
"use strict";

const DEG = Math.PI / 180;

/* ================= 📐 角的度量（互动量角器） ================= */
function initAngleDemo() {
  const box = $("#ma-angle");
  const CX = 190, CY = 200, R = 150;

  // 量角器刻度
  let ticks = "";
  for (let a = 0; a <= 180; a += 10) {
    const long = a % 30 === 0;
    const r1 = R, r2 = R - (long ? 16 : 9);
    const x1 = CX + r1 * Math.cos(-a * DEG), y1 = CY + r1 * Math.sin(-a * DEG);
    const x2 = CX + r2 * Math.cos(-a * DEG), y2 = CY + r2 * Math.sin(-a * DEG);
    ticks += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#8d6e63" stroke-width="${long ? 2 : 1}"/>`;
    if (long) {
      const xt = CX + (R - 28) * Math.cos(-a * DEG), yt = CY + (R - 28) * Math.sin(-a * DEG);
      ticks += `<text x="${xt}" y="${yt}" font-size="12" fill="#6d4c41" text-anchor="middle" dominant-baseline="middle">${a}</text>`;
    }
  }

  box.innerHTML = `
    <div class="demo-box">
      <svg viewBox="0 0 380 230" width="380">
        <path d="M ${CX - R} ${CY} A ${R} ${R} 0 0 1 ${CX + R} ${CY} Z" fill="#fff8e1" stroke="#bcaaa4" stroke-width="2"/>
        ${ticks}
        <path id="ang-fill" d="" fill="rgba(255,152,0,.25)"/>
        <line x1="${CX}" y1="${CY}" x2="${CX + R - 6}" y2="${CY}" stroke="#5d4037" stroke-width="4" stroke-linecap="round"/>
        <line id="ang-ray" x1="${CX}" y1="${CY}" x2="${CX + R - 6}" y2="${CY}" stroke="#e53935" stroke-width="4" stroke-linecap="round"/>
        <circle cx="${CX}" cy="${CY}" r="6" fill="#5d4037"/>
      </svg>
      <div class="big-label"><span id="ang-val">60</span>° · <span id="ang-kind">锐角</span></div>
      <div class="demo-controls">
        0° <input type="range" id="ang-slider" min="0" max="180" value="60"> 180°
      </div>
      <div class="demo-read">
        📌 量角小口诀：<strong>中心对顶点，零线对一边，一看另一边，刻度要看对。</strong><br>
        小于 90° 是<strong>锐角</strong>，等于 90° 是<strong>直角</strong>，大于 90° 小于 180° 是<strong>钝角</strong>，等于 180° 是<strong>平角</strong>。
      </div>
    </div>
  `;

  const slider = $("#ang-slider");
  function update() {
    const a = +slider.value;
    const x = CX + (R - 6) * Math.cos(-a * DEG);
    const y = CY + (R - 6) * Math.sin(-a * DEG);
    $("#ang-ray").setAttribute("x2", x);
    $("#ang-ray").setAttribute("y2", y);
    const fx = CX + 55 * Math.cos(-a * DEG), fy = CY + 55 * Math.sin(-a * DEG);
    const large = a > 180 ? 1 : 0;
    $("#ang-fill").setAttribute("d",
      `M ${CX} ${CY} L ${CX + 55} ${CY} A 55 55 0 ${large} 0 ${fx} ${fy} Z`);
    $("#ang-val").textContent = a;
    $("#ang-kind").textContent =
      a === 0 ? "零角" : a < 90 ? "锐角" : a === 90 ? "直角 ∟" : a < 180 ? "钝角" : "平角";
  }
  slider.addEventListener("input", update);
  update();
}

/* ================= 🔺 三角形内角和动画 ================= */
function initTriangleDemo() {
  const box = $("#ma-triangle");
  const V = [ [170, 45], [45, 235], [315, 235] ];      // 三角形顶点
  const COLORS = ["#e53935", "#43a047", "#1e88e5"];
  const RW = 40;                                        // 角的扇形半径
  const P = [180, 305];                                 // 拼角目标点（在直线上）

  const angDeg = (from, to) => Math.atan2(to[1] - from[1], to[0] - from[0]) / DEG;

  // 每个顶点的内角扇形：从一条边转到另一条边（取 ≤180° 的那一侧）
  const wedges = V.map((v, i) => {
    const others = [V[(i + 1) % 3], V[(i + 2) % 3]];
    let a1 = angDeg(v, others[0]), a2 = angDeg(v, others[1]);
    let sweep = ((a2 - a1) % 360 + 360) % 360;
    if (sweep > 180) { [a1, a2] = [a2, a1]; sweep = 360 - sweep; }
    return { v, a1, sweep, color: COLORS[i] };
  });

  // 拼到直线上：三个扇形依次占据 180°→360°（屏幕上是直线上方的半圆）
  let base = 180;
  wedges.forEach(w => { w.t1 = base; base += w.sweep; });

  function wedgePath(cx, cy, a1, sweep) {
    const a2 = a1 + sweep;
    const x1 = cx + RW * Math.cos(a1 * DEG), y1 = cy + RW * Math.sin(a1 * DEG);
    const x2 = cx + RW * Math.cos(a2 * DEG), y2 = cy + RW * Math.sin(a2 * DEG);
    return `M ${cx} ${cy} L ${x1} ${y1} A ${RW} ${RW} 0 ${sweep > 180 ? 1 : 0} 1 ${x2} ${y2} Z`;
  }

  const labels = ["∠1", "∠2", "∠3"];
  box.innerHTML = `
    <div class="demo-box">
      <svg viewBox="0 0 360 340" width="360">
        <polygon points="${V.map(p => p.join(",")).join(" ")}" fill="#fffde7" stroke="#8d6e63" stroke-width="3"/>
        ${wedges.map((w, i) => `<path id="wedge-${i}" fill="${w.color}" opacity=".85" d=""/>`).join("")}
        ${wedges.map((w, i) => {
          const mid = (w.a1 + w.sweep / 2) * DEG;
          const lx = w.v[0] + (RW + 16) * Math.cos(mid), ly = w.v[1] + (RW + 16) * Math.sin(mid);
          return `<text x="${lx}" y="${ly}" font-size="14" font-weight="bold" fill="${w.color}" text-anchor="middle">${labels[i]}</text>`;
        }).join("")}
        <line x1="60" y1="${P[1]}" x2="300" y2="${P[1]}" stroke="#8d6e63" stroke-width="3" stroke-dasharray="6 5"/>
        <text id="tri-result" x="180" y="332" font-size="17" font-weight="bold" fill="#e65100" text-anchor="middle" opacity="0"></text>
      </svg>
      <div class="demo-controls">
        <button class="btn" id="tri-play">▶️ 播放动画</button>
        <button class="btn ghost" id="tri-reset">🔄 重来</button>
      </div>
      <div class="demo-read">
        ✂️ 把三角形的三个角"撕"下来，拼在一条直线上——正好拼成一个<strong>平角（180°）</strong>！<br>
        所以：<strong>任意三角形的内角和都是 180°</strong>。直角三角形里，两个锐角加起来就是 90°。
      </div>
    </div>
  `;

  function draw(t) { // t: 0 → 1
    wedges.forEach((w, i) => {
      const cx = w.v[0] + (P[0] - w.v[0]) * t;
      const cy = w.v[1] + (P[1] - w.v[1]) * t;
      const a1 = w.a1 + (w.t1 - w.a1) * t;
      $("#wedge-" + i).setAttribute("d", wedgePath(cx, cy, a1, w.sweep));
    });
  }

  let anim = null;
  function play() {
    if (anim) cancelAnimationFrame(anim);
    $("#tri-result").setAttribute("opacity", 0);
    const T = 1800, t0 = performance.now();
    function frame(now) {
      const t = Math.min((now - t0) / T, 1);
      const e = t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; // 缓动
      draw(e);
      if (t < 1) anim = requestAnimationFrame(frame);
      else {
        const el = $("#tri-result");
        el.textContent = "∠1 + ∠2 + ∠3 = 180°（平角）🎉";
        el.setAttribute("opacity", 1);
      }
    }
    anim = requestAnimationFrame(frame);
  }
  function reset() {
    if (anim) cancelAnimationFrame(anim);
    $("#tri-result").setAttribute("opacity", 0);
    draw(0);
  }
  $("#tri-play").addEventListener("click", play);
  $("#tri-reset").addEventListener("click", reset);
  draw(0);
}

/* ================= 🔟 小数的意义（百格图） ================= */
function initDecimalDemo() {
  const box = $("#ma-decimal");
  box.innerHTML = `
    <div class="demo-box">
      <div class="grid100" id="dec-grid">${"<span></span>".repeat(100)}</div>
      <div class="big-label" id="dec-label"></div>
      <div class="demo-controls">
        0 <input type="range" id="dec-slider" min="0" max="100" value="37"> 1
      </div>
      <div class="demo-read">
        🍫 把一块巧克力平均分成 100 小块，涂色的部分就是<strong>百分之几</strong>，也就是<strong>两位小数</strong>。<br>
        比如涂 37 块：<strong>37/100 = 0.37</strong>。0.30 和 0.3 一样大（小数末尾的 0 可以去掉）。
      </div>
    </div>
  `;
  const cells = $$("#dec-grid span");
  const slider = $("#dec-slider");
  const digits = "零一二三四五六七八九";
  function reading(str) { // "0.37" -> 零点三七
    const [, dec] = str.split(".");
    if (!dec) return "零";
    return "零点" + [...dec].map(d => digits[+d]).join("");
  }
  function update() {
    const n = +slider.value;
    cells.forEach((c, i) => c.classList.toggle("on", i < n));
    let str = (n / 100).toFixed(2);
    if (str.endsWith("0")) str = str.slice(0, -1);      // 0.30 -> 0.3
    if (str === "0.0") str = "0";
    if (str === "1.0") str = "1";
    $("#dec-label").innerHTML =
      `涂了 <span style="color:#0288d1">${n}</span> 格 = ${n}/100 = <span style="color:#e65100">${str}</span>　读作：${reading(str)}`;
  }
  slider.addEventListener("input", update);
  update();
}

/* ================= 🧮 运算定律 ================= */
function initLaws() {
  const laws = [
    { name: "加法交换律", f: "a + b = b + a", eg: "38 + 175 = 175 + 38" },
    { name: "加法结合律", f: "(a + b) + c = a + (b + c)", eg: "88 + 104 + 96 = 88 + (104 + 96) = 88 + 200" },
    { name: "乘法交换律", f: "a × b = b × a", eg: "4 × 25 = 25 × 4 = 100" },
    { name: "乘法结合律", f: "(a × b) × c = a × (b × c)", eg: "25 × 5 × 2 = 25 × (5 × 2) = 25 × 10" },
    { name: "乘法分配律", f: "(a + b) × c = a × c + b × c", eg: "(20 + 4) × 25 = 20 × 25 + 4 × 25 = 600" },
  ];
  $("#ma-laws").innerHTML = `
    <div class="law-grid">
      ${laws.map(l => `
        <div class="law-card">
          <h4>${l.name}</h4>
          <div class="law-formula">${l.f}</div>
          <div class="law-eg">🌰 例：${l.eg}</div>
        </div>`).join("")}
    </div>
    <div class="demo-read" style="margin-top:12px;">
      💡 巧算小妙招：看到 <strong>25 想 4</strong>（25×4=100），看到 <strong>125 想 8</strong>（125×8=1000），先凑整再计算又快又准！
    </div>
  `;
}

/* ================= ⚡ 口算大挑战 ================= */
function initOral() {
  const box = $("#ma-oral");
  let streak = 0, best = 0, current = null;

  function newProblem() {
    const type = randInt(1, 5);
    let q, a;
    if (type === 1) {            // 两位数 × 一位数
      const x = randInt(12, 49), y = randInt(2, 9);
      q = `${x} × ${y}`; a = x * y;
    } else if (type === 2) {     // 整十数相乘
      const x = randInt(2, 9) * 10, y = randInt(2, 9);
      q = `${x} × ${y}0`; a = x * y * 10;
    } else if (type === 3) {     // 一位小数加减
      const x = randInt(1, 9), y = randInt(1, 9);
      if (Math.random() < 0.5) { q = `0.${x} + 0.${y}`; a = (x + y) / 10; }
      else {
        const hi = Math.max(x, y), lo = Math.min(x, y);
        q = `1.${hi} - 0.${lo}`; a = (10 + hi - lo) / 10;
      }
    } else if (type === 4) {     // 整除除法
      const d = randInt(11, 25), quo = randInt(3, 9);
      q = `${d * quo} ÷ ${d}`; a = quo;
    } else {                     // 凑整加法
      const x = randInt(15, 88) * 10, y = randInt(15, 88) * 10;
      q = `${x} + ${y}`; a = x + y;
    }
    current = { q, a };
    $("#oral-q").textContent = q + " = ?";
    const inp = $("#oral-in");
    inp.value = "";
    inp.focus();
    $("#oral-msg").textContent = "";
    $("#oral-msg").className = "oral-msg";
  }

  function check() {
    const inp = $("#oral-in");
    if (inp.value.trim() === "") return;
    const val = parseFloat(inp.value);
    const msg = $("#oral-msg");
    if (Math.abs(val - current.a) < 1e-9) {
      streak++; best = Math.max(best, streak);
      msg.textContent = "✅ 答对了！";
      msg.className = "oral-msg good";
      updateStreak();
      setTimeout(newProblem, 700);
    } else {
      streak = 0;
      msg.textContent = `❌ 正确答案是 ${current.a}，再试下一题！`;
      msg.className = "oral-msg bad";
      updateStreak();
      setTimeout(newProblem, 1800);
    }
  }

  function updateStreak() {
    const fire = streak === 0 ? "🕯️" : "🔥".repeat(Math.min(streak, 8));
    $("#oral-streak").innerHTML = `连对：${streak} 题 ${fire}　最高纪录：${best} 题`;
  }

  box.innerHTML = `
    <div class="oral-wrap">
      <div class="oral-q" id="oral-q"></div>
      <input class="oral-input" id="oral-in" type="number" step="any" placeholder="?">
      <button class="btn blue" id="oral-check">检查 ✔</button>
      <div class="oral-msg" id="oral-msg"></div>
      <div class="oral-streak" id="oral-streak"></div>
    </div>
  `;
  $("#oral-check").addEventListener("click", check);
  $("#oral-in").addEventListener("keydown", e => { if (e.key === "Enter") check(); });
  updateStreak();
  newProblem();
}

/* ================= 🚩 数学闯关测验 ================= */
const MA_QUIZ = [
  { q: "三角形的内角和是多少度？", opts: ["180°", "90°", "360°", "270°"], answer: 0, tip: "把三个角拼起来正好是一个平角。" },
  { q: "一个角是 95°，它是——", opts: ["钝角", "锐角", "直角", "平角"], answer: 0, tip: "大于 90° 小于 180° 的角是钝角。" },
  { q: "0.5 和哪个分数一样大？", opts: ["5/10", "5/100", "1/5", "50/10"], answer: 0, tip: "0.5 表示十分之五。" },
  { q: "25 × 17 × 4 用什么方法算最快？", opts: ["先算 25×4=100，再乘 17", "从左往右按顺序算", "先算 17×4", "只能列竖式"], answer: 0, tip: "乘法交换律和结合律：凑整最快！" },
  { q: "直角三角形中，一个锐角是 35°，另一个锐角是——", opts: ["55°", "65°", "45°", "145°"], answer: 0, tip: "两个锐角相加 = 90°，90 - 35 = 55。" },
  { q: "3.20、3.2、3.02 中，一样大的是——", opts: ["3.20 和 3.2", "3.2 和 3.02", "3.20 和 3.02", "三个都一样"], answer: 0, tip: "小数末尾添 0 或去 0，大小不变；中间的 0 不能去。" },
  { q: "(40 + 8) × 25 = ？（用乘法分配律）", opts: ["1200", "1032", "1000", "1208"], answer: 0, tip: "40×25 + 8×25 = 1000 + 200 = 1200。" },
  { q: "把 7.65 的小数点向右移动一位，得到——", opts: ["76.5", "0.765", "765", "7.065"], answer: 0, tip: "小数点右移一位，数扩大到原来的 10 倍。" },
  { q: "等腰三角形的顶角是 80°，一个底角是——", opts: ["50°", "80°", "100°", "40°"], answer: 0, tip: "两个底角相等：(180 - 80) ÷ 2 = 50。" },
  { q: "8 个 125 相加，简便算法是——", opts: ["125 × 8 = 1000", "125 + 8 = 133", "125 × 125", "8 ÷ 125"], answer: 0, tip: "求几个相同加数的和用乘法，125×8=1000 要记牢！" },
];

/* ---------- 初始化 ---------- */
initAngleDemo();
initTriangleDemo();
initDecimalDemo();
initLaws();
initOral();
buildQuiz($("#ma-quiz"), "math", MA_QUIZ);
