# PalabraPad 🇲🇽 — 墨西哥西班牙语学习 App (macOS)

深度借鉴 **ScriptPad**（一款以"结构化单元 + 闪卡 + 配对游戏 + 书写练习 + Speak & Compare 跟读对比 + 自定义课程 + 多主题"为核心的语言学习 app）的学习方式，为 Mac 打造的墨西哥西语学习应用。**完全离线，无订阅，数据保存在本机。**

![学习模式](https://img.shields.io/badge/%E5%8D%95%E5%85%83-10-orange) ![词汇](https://img.shields.io/badge/%E8%AF%8D%E6%B1%87-170%2B-green) ![平台](https://img.shields.io/badge/macOS-Electron-blue)

## 功能（对照 ScriptPad）

| ScriptPad 的玩法 | PalabraPad 的实现 |
|---|---|
| 结构化单元 + 原生发音 | 10 个单元、170+ 墨西哥特色词汇（elote、camión、alberca、tianguis…），用 macOS 系统的 **es-MX 嗓音（Paulina）** 发音 |
| 带插图的闪卡 | 🃏 翻面闪卡：表情插图 + 中/英释义 + 西语例句，自动朗读 |
| Word Matching 配对 | 🔗 西语 ↔ 中文点击配对游戏 |
| Picture Matching 选图 | 🖼️ 听词/看词四选一选图片 |
| 书写/键入练习 | ⌨️ 拼写练习，带 á é í ó ú ñ ü ¿ ¡ 特殊字符键盘 |
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
