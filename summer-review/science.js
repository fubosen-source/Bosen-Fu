/* ============ 科学实验室 ============ */
"use strict";

/* ================= 💧 水循环动画 ================= */
function initWaterCycle() {
  const box = $("#sc-water");
  const vapors = [120, 150, 180].map((x, i) =>
    `<g class="wc-vapor" style="animation-delay:${i * 0.9}s">
       <circle cx="${x}" cy="185" r="4" fill="#b3e5fc"/>
       <circle cx="${x + 8}" cy="175" r="3" fill="#b3e5fc"/>
     </g>`).join("");
  const drops = [300, 320, 340, 360].map((x, i) =>
    `<line class="wc-drop" style="animation-delay:${i * 0.35}s"
       x1="${x}" y1="110" x2="${x}" y2="120" stroke="#29b6f6" stroke-width="3" stroke-linecap="round"/>`).join("");

  box.innerHTML = `
    <div class="demo-box">
      <div id="wc-scene">
      <svg viewBox="0 0 420 260" width="420">
        <rect width="420" height="260" fill="#e1f5fe" rx="12"/>
        <g class="wc-sun">
          <circle cx="80" cy="60" r="26" fill="#ffd54f"/>
          ${[0,45,90,135,180,225,270,315].map(a => {
            const r = Math.PI * a / 180;
            return `<line x1="${80 + 32 * Math.cos(r)}" y1="${60 + 32 * Math.sin(r)}"
                          x2="${80 + 42 * Math.cos(r)}" y2="${60 + 42 * Math.sin(r)}"
                          stroke="#ffb300" stroke-width="4" stroke-linecap="round"/>`;
          }).join("")}
        </g>
        <path d="M240 260 L300 170 L340 220 L380 150 L420 260 Z" fill="#a5d6a7"/>
        <rect x="0" y="200" width="420" height="60" fill="#4fc3f7"/>
        <path d="M0 200 Q 40 192 80 200 T 160 200 T 240 200" stroke="#81d4fa" stroke-width="4" fill="none"/>
        ${vapors}
        <g class="wc-cloud">
          <ellipse cx="330" cy="85" rx="52" ry="24" fill="#eceff1"/>
          <ellipse cx="300" cy="75" rx="30" ry="20" fill="#f5f5f5"/>
          <ellipse cx="355" cy="72" rx="26" ry="18" fill="#fafafa"/>
        </g>
        ${drops}
        <text x="120" y="140" font-size="13" font-weight="bold" fill="#0277bd">① 蒸发 ↑</text>
        <text x="255" y="55"  font-size="13" font-weight="bold" fill="#546e7a">② 凝结成云</text>
        <text x="300" y="160" font-size="13" font-weight="bold" fill="#01579b">③ 降水 ↓</text>
        <text x="30"  y="235" font-size="13" font-weight="bold" fill="#004d40">④ 汇入江海 →</text>
      </svg>
      </div>
      <div class="demo-controls">
        <button class="btn green" id="wc-play">▶️ 播放</button>
        <button class="btn ghost" id="wc-stop">⏸ 暂停</button>
      </div>
      <div class="demo-read">
        🌞 太阳晒 → 水变成水蒸气<strong>蒸发</strong>上升 → 遇冷<strong>凝结</strong>成小水滴聚成云 →
        云里的水滴越来越重，变成<strong>雨或雪降落</strong> → 流回江河湖海。水就这样循环不停！
      </div>
    </div>
  `;
  const scene = $("#wc-scene");
  $("#wc-play").addEventListener("click", () => scene.classList.add("playing"));
  $("#wc-stop").addEventListener("click", () => scene.classList.remove("playing"));
}

/* ================= 💡 点亮小灯泡 ================= */
function initCircuit() {
  const box = $("#sc-circuit");
  box.innerHTML = `
    <div class="demo-box">
      <svg id="circuit-svg" viewBox="0 0 400 240" width="400">
        <!-- 导线回路 -->
        <path class="wire" d="M120 190 L60 190 L60 60 L200 60" fill="none" stroke="#5d4037" stroke-width="5" stroke-linecap="round"/>
        <path class="wire" d="M200 60 L340 60 L340 190 L250 190" fill="none" stroke="#5d4037" stroke-width="5" stroke-linecap="round"/>
        <path class="flow-dots" d="M120 190 L60 190 L60 60 L340 60 L340 190 L250 190" fill="none" stroke="#ffd740" stroke-width="3"/>
        <!-- 电池 -->
        <rect x="120" y="172" width="70" height="36" rx="6" fill="#8bc34a" stroke="#33691e" stroke-width="3"/>
        <rect x="190" y="182" width="8" height="16" fill="#33691e"/>
        <text x="132" y="196" font-size="14" font-weight="bold" fill="#fff">电池 + -</text>
        <!-- 开关 -->
        <circle cx="250" cy="190" r="5" fill="#5d4037"/>
        <circle cx="198" cy="190" r="5" fill="#5d4037"/>
        <line id="switch-arm" x1="250" y1="190" x2="205" y2="158" stroke="#e53935" stroke-width="6" stroke-linecap="round" style="cursor:pointer; transition: all .25s;"/>
        <text x="196" y="225" font-size="13" fill="#6d4c41">👆 点红色开关</text>
        <!-- 灯泡 -->
        <circle id="bulb-glow" cx="200" cy="52" r="34" fill="#fff59d" opacity="0"/>
        <circle id="bulb" cx="200" cy="52" r="20" fill="#eceff1" stroke="#90a4ae" stroke-width="3"/>
        <path d="M192 52 Q 200 42 208 52" stroke="#90a4ae" stroke-width="2.5" fill="none"/>
        <rect x="193" y="70" width="14" height="10" fill="#b0bec5" rx="2"/>
        <text id="bulb-label" x="240" y="40" font-size="15" font-weight="bold" fill="#9e9e9e">灯不亮 😴</text>
      </svg>
      <div class="demo-read">
        🔋 电流从电池<strong>正极</strong>出发，沿导线流过灯泡，回到<strong>负极</strong>。
        只有电路<strong>闭合（接通）</strong>灯才会亮；开关断开，电路断了，灯就灭。
      </div>
    </div>
  `;
  let on = false;
  const svg = $("#circuit-svg");
  $("#switch-arm").addEventListener("click", () => {
    on = !on;
    const arm = $("#switch-arm");
    if (on) {
      arm.setAttribute("x2", 198); arm.setAttribute("y2", 190);
      svg.classList.add("circuit-on");
      $("#bulb").setAttribute("fill", "#ffee58");
      $("#bulb-glow").setAttribute("opacity", ".55");
      $("#bulb-label").textContent = "灯亮啦 💡";
      $("#bulb-label").setAttribute("fill", "#f57f17");
    } else {
      arm.setAttribute("x2", 205); arm.setAttribute("y2", 158);
      svg.classList.remove("circuit-on");
      $("#bulb").setAttribute("fill", "#eceff1");
      $("#bulb-glow").setAttribute("opacity", "0");
      $("#bulb-label").textContent = "灯不亮 😴";
      $("#bulb-label").setAttribute("fill", "#9e9e9e");
    }
  });
}

/* ================= 🌙 月相变化 ================= */
function initMoon() {
  const phases = [
    { e: "🌑", name: "新月",   day: "初一", tip: "整个晚上都看不见月亮" },
    { e: "🌒", name: "娥眉月", day: "初三、初四", tip: "像细细的眉毛，傍晚出现在西边" },
    { e: "🌓", name: "上弦月", day: "初七、初八", tip: "亮的一半在右边，像个大写的 D" },
    { e: "🌔", name: "盈凸月", day: "十一、十二", tip: "月亮越来越圆啦" },
    { e: "🌕", name: "满月",   day: "十五、十六", tip: "又大又圆，整夜可见" },
    { e: "🌖", name: "亏凸月", day: "十八、十九", tip: "开始慢慢变小" },
    { e: "🌗", name: "下弦月", day: "二十二、二十三", tip: "亮的一半在左边" },
    { e: "🌘", name: "残月",   day: "二十六、二十七", tip: "又变回细细的一弯，清晨出现在东边" },
  ];
  const box = $("#sc-moon");
  box.innerHTML = `
    <div class="demo-box">
      <div style="font-size:96px; line-height:1.1;" id="moon-face">🌕</div>
      <div class="big-label"><span id="moon-name"></span> <small style="font-size:15px;color:#8d6e63;">（农历<span id="moon-day"></span>）</small></div>
      <div id="moon-tip" style="font-size:15px;color:#6d5a4d;"></div>
      <div class="demo-controls">
        初一 <input type="range" id="moon-slider" min="0" max="7" value="4"> 月底
      </div>
      <div class="demo-read">
        🌙 月亮自己不发光，我们看到的是它反射的<strong>太阳光</strong>。
        月相变化的顺序：<strong>新月 → 娥眉月 → 上弦月 → 满月 → 下弦月 → 残月</strong>，
        大约 <strong>一个月（农历）</strong> 循环一次。
      </div>
    </div>
  `;
  const slider = $("#moon-slider");
  function update() {
    const p = phases[+slider.value];
    $("#moon-face").textContent = p.e;
    $("#moon-name").textContent = p.name;
    $("#moon-day").textContent = p.day;
    $("#moon-tip").textContent = p.tip;
  }
  slider.addEventListener("input", update);
  update();
}

/* ================= 🔔 声音的产生 ================= */
function initSound() {
  const box = $("#sc-sound");
  box.innerHTML = `
    <div class="demo-box">
      <svg id="fork-svg" viewBox="0 0 300 230" width="300">
        <circle class="sound-wave" cx="150" cy="110" r="60" fill="none" stroke="#4fc3f7" stroke-width="3"/>
        <circle class="sound-wave" style="animation-delay:.4s" cx="150" cy="110" r="60" fill="none" stroke="#4fc3f7" stroke-width="3"/>
        <circle class="sound-wave" style="animation-delay:.8s" cx="150" cy="110" r="60" fill="none" stroke="#4fc3f7" stroke-width="3"/>
        <path class="fork-arm fork-left"  d="M135 190 L135 60 Q135 48 141 48 L141 190 Z" fill="#b0bec5" stroke="#78909c" stroke-width="2"/>
        <path class="fork-arm fork-right" d="M159 190 L159 48 Q165 48 165 60 L165 190 Z" fill="#b0bec5" stroke="#78909c" stroke-width="2"/>
        <rect x="143" y="150" width="14" height="45" fill="#90a4ae"/>
        <rect x="140" y="192" width="20" height="34" rx="8" fill="#8d6e63"/>
      </svg>
      <div class="demo-controls">
        <button class="btn blue" id="fork-hit">🔨 敲一下音叉</button>
      </div>
      <div class="demo-read">
        👋 敲一下，音叉<strong>振动</strong>起来，我们就听到了声音——<strong>声音是由物体振动产生的</strong>。<br>
        振动停止，声音也停止。声音靠<strong>空气、水、固体</strong>传播，真空里不能传声（所以太空里听不见爆炸声哦）。
      </div>
    </div>
  `;
  const svg = $("#fork-svg");
  let timer = null;
  $("#fork-hit").addEventListener("click", () => {
    svg.classList.remove("striking");
    void svg.getBoundingClientRect(); // 重置动画
    svg.classList.add("striking");
    clearTimeout(timer);
    timer = setTimeout(() => svg.classList.remove("striking"), 1300);
    try {
      const ctx = initSound.ctx || (initSound.ctx = new (window.AudioContext || window.webkitAudioContext)());
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.frequency.value = 440;
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.1);
      osc.connect(gain).connect(ctx.destination);
      osc.start(); osc.stop(ctx.currentTime + 1.1);
    } catch {}
  });
}

/* ================= 📒 科学知识卡片 ================= */
function initSciCards() {
  const cards = [
    { icon: "🌱", title: "植物的一生", body: "种子发芽需要<strong>水分、空气和适宜的温度</strong>。植物有六大器官：根、茎、叶、花、果实、种子。根吸水，茎运输，叶进行光合作用制造养料。" },
    { icon: "🐣", title: "动物的繁殖", body: "像鸡、鱼、青蛙这样<strong>产卵</strong>的叫卵生；像猫、狗、牛这样<strong>直接生小动物</strong>的叫胎生。胎生动物一般用哺乳的方法喂养后代。" },
    { icon: "🔊", title: "声音的高低强弱", body: "振动越<strong>快</strong>，声音越<strong>高</strong>；振动越<strong>慢</strong>，声音越<strong>低</strong>。振动幅度越<strong>大</strong>，声音越<strong>强（响）</strong>；幅度越小，声音越弱。" },
    { icon: "🌡️", title: "天气观测", body: "描述天气要说<strong>云量、降水量、气温、风向和风速</strong>。气温计读数要平视；风向是指风<strong>吹来</strong>的方向，北风就是从北边吹来的风。" },
    { icon: "🪨", title: "岩石与土壤", body: "土壤按颗粒大小分为<strong>沙质土、黏质土、壤土</strong>。土壤里有沙、黏土、腐殖质、水和空气，腐殖质越多土壤越肥沃。" },
    { icon: "⚡", title: "安全用电", body: "干电池电压低比较安全，但<strong>插座里的电很危险</strong>！不能用湿手碰开关插座，不能用电池以外的电做实验。" },
  ];
  $("#sc-cards").innerHTML = `
    <div class="sci-grid">
      ${cards.map(c => `
        <div class="sci-card">
          <h4>${c.icon} ${c.title}</h4>
          <p>${c.body}</p>
        </div>`).join("")}
    </div>
  `;
}

/* ================= 🚩 科学闯关测验 ================= */
const SC_QUIZ = [
  { q: "声音是由物体的什么产生的？", opts: ["振动", "移动", "加热", "光照"], answer: 0, tip: "振动停止，发声也停止。" },
  { q: "水变成水蒸气升到空中，这个过程叫——", opts: ["蒸发", "凝结", "降水", "结冰"], answer: 0, tip: "太阳晒过的水洼变干，就是蒸发。" },
  { q: "要让小灯泡亮起来，电路必须——", opts: ["闭合（接通）", "断开", "只连电池正极", "越长越好"], answer: 0, tip: "电流要能从正极出发绕一圈回到负极。" },
  { q: "农历十五、十六晚上看到的月相是——", opts: ["满月", "新月", "上弦月", "残月"], answer: 0, tip: "十五的月亮又大又圆。" },
  { q: "种子发芽必须的三个条件是——", opts: ["水分、空气、适宜的温度", "阳光、土壤、肥料", "水分、肥料、阳光", "土壤、空气、音乐"], answer: 0, tip: "没有土壤和阳光种子也能发芽（比如豆芽）。" },
  { q: "下面哪种动物是胎生的？", opts: ["猫", "母鸡", "青蛙", "金鱼"], answer: 0, tip: "鸡、蛙、鱼都是产卵的卵生动物。" },
  { q: "在真空中，声音——", opts: ["不能传播", "传得更快", "变得更响", "变成光"], answer: 0, tip: "声音传播需要空气、水或固体做\"桥梁\"。" },
  { q: "尺子伸出桌面越短，拨动时振动越快，声音越——", opts: ["高", "低", "弱", "没有变化"], answer: 0, tip: "振动快→声音高，振动慢→声音低。" },
  { q: "北风是指——", opts: ["从北边吹来的风", "吹向北边的风", "北极的风", "很冷的风"], answer: 0, tip: "风向指风吹来的方向。" },
  { q: "腐殖质越多的土壤——", opts: ["越肥沃", "越贫瘠", "越干燥", "颜色越浅"], answer: 0, tip: "腐殖质是动植物腐烂后留下的养分。" },
];

/* ---------- 初始化 ---------- */
initWaterCycle();
initCircuit();
initMoon();
initSound();
initSciCards();
buildQuiz($("#sc-quiz"), "science", SC_QUIZ);
