# PalabraPad 🇲🇽 — 墨西哥西班牙语学习 App (macOS)

深度借鉴 **ScriptPad**（一款以"结构化单元 + 闪卡 + 配对游戏 + 书写练习 + Speak & Compare 跟读对比 + 自定义课程 + 多主题"为核心的语言学习 app）的学习方式，为 Mac 打造的墨西哥西语学习应用。**完全离线，无订阅，数据保存在本机。**

![单元](https://img.shields.io/badge/%E8%A5%BF%E8%AF%AD%E5%8D%95%E5%85%83-30-orange) ![词汇](https://img.shields.io/badge/%E8%A5%BF%E8%AF%AD%E8%AF%8D%E6%B1%87-478-green) ![英语版](https://img.shields.io/badge/LexiPad%20%E8%8B%B1%E8%AF%AD%E7%89%88-310%E8%AF%8D-blue) ![平台](https://img.shields.io/badge/macOS-Electron-lightgrey)

**内含两个 App，共用同一学习引擎：**
- 🇲🇽 **PalabraPad** 墨西哥西语版 — 30 个单元 478 词，按 **Nivel 1 入门 / Nivel 2 进阶 / Nivel 3 流利** 分级，覆盖问候、饮食、家庭、身体、衣着、天气、家居、情绪、餐厅、购物、交通、看病、工作、手机、银行、观点表达、墨西哥文化、俚语、紧急情况、派对社交等日常交流场景
- 🇺🇸 **LexiPad** 美式英语版 — 21 个单元 310 词（每词带**美音 IPA 音标**），Level 1 基础 / Level 2 进阶 / Level 3 地道表达（含日常短语和美式俚语）
- 侧边栏底部一键互切，两个 App 的学习进度独立保存

## 功能（对照 ScriptPad）

| ScriptPad 的玩法 | PalabraPad 的实现 |
|---|---|
| 结构化单元 + 原生发音 | 西语 30 单元 478 词按三级难度分组（elote、camión、alberca、tianguis…），用 macOS 系统的 **es-MX 嗓音（Paulina）** 发音；英语版用 **en-US 嗓音（Samantha）** |
| 带插图的闪卡 | 🃏 翻面闪卡：表情插图 + 中/英释义 + 西语例句，自动朗读 |
| Word Matching 配对 | 🔗 西语 ↔ 中文点击配对游戏 |
| Picture Matching 选图 | 🖼️ 听词/看词四选一选图片 |
| 书写画布 + 键入练习 | ✍️ 书写练习：直播词卡式布局——单词+释义、**IPA 音标**（规则转换的墨西哥发音）、例句+中文（朗读时浮现、原词高亮），**单词×2 → 例句×2 自动朗读**；下方四线格打字区，键入的字母实时"写"进格线，打错闪红自动忽略，描红关掉即默写；可切换手写画布临摹 |
| Type 键盘模式 | 🔥 **打字强化记忆**：三段递进（跟打 → 半提示 → 默写盲打），逐字母实时反馈，肌肉记忆式背单词 |
| **Speak & Compare** | 🎙️ 跟读对比：先听原声（可慢速），再用麦克风录音，来回对比 |
| Reviews 复习 | 🔁 间隔重复（SRS）：到期词汇自动进入每日复习队列 |
| 自定义课程（粘贴文本） | ✏️ 粘贴 `西语 = 中文` 列表即可生成自己的单元 |
| 14 种页面主题 | 🎨 6 种主题：纸张 / 夜间 / 仙人掌 / 墨西哥粉 / 天空 / 沙滩 |
| 完全离线、买断制 | 完全离线、免费开源，进度存在本机 localStorage |

墨西哥特色：专门的 **「Jerga mexicana · 墨西哥俚语」** 单元（¡órale!、güey、chido、no manches、la neta、ahorita…），词汇均采用墨西哥用法。

## 在 Mac 上运行

需要 [Node.js](https://nodejs.org)（含 npm）。

```bash
git clone https://github.com/fubosen-source/Bosen-Fu.git
cd Bosen-Fu
npm install
npm start
```

### 打包成 .app / .dmg（可选）

```bash
npm run dist
```

生成的安装包在 `dist/` 目录，拖进「应用程序」即可。

### 获得地道的墨西哥口音

macOS 自带 es-MX 嗓音 **Paulina**。如果听不到发音或想换嗓音：

1. 系统设置 → 辅助功能 → 朗读内容 → 系统嗓音 → 管理嗓音
2. 搜索并下载 **Paulina（西班牙语·墨西哥）**（增强版音质更好）
3. 在 App 的「设置 → 西语发音」里选择带 🇲🇽 标记的嗓音

### 麦克风权限

「跟读对比」首次录音时 macOS 会弹出麦克风授权，点允许即可。

## 项目结构

```
main.js          Electron 主进程（窗口、麦克风权限）
src/index.html   界面骨架
src/styles.css   6 套主题 + 全部样式
src/app.js       学习模式、SRS 复习、TTS、录音、进度存储
src/data.js      10 个单元的词汇数据（西/英/中 + 例句）
```
