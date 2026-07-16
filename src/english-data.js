// LexiPad — 美式英语词汇数据 (与 PalabraPad 共用同一学习引擎)
// 每个词条: es (英语单词, 字段名与引擎共用), ipa (美音音标), zh (中文), emoji, ex (例句), exZh
// 单元 level: 1=基础 2=进阶 3=地道表达

const APP_CONFIG = {
  id: "lexipad",
  name: "LexiPad",
  langName: "英语",
  subName: "美式英语",
  logoEmoji: "🇺🇸",
  defaultSubLang: "zh",
  useEsIPA: false,
  tts: { prefix: "en", preferLang: /en[-_]us/i, preferName: /samantha|alex|ava|allison/i, fallbackLang: "en-US" },
  kbdTip: "标点不用打",
  typeHint: "直接打字，字母会写进四线格 · 打错闪红自动忽略 · 描红关掉就是默写",
  voiceMissingHint: "未检测到英语语音。macOS 上请到「系统设置 → 辅助功能 → 朗读内容 → 系统嗓音 → 管理嗓音」下载 <b>Samantha (英语·美国)</b> 等美音嗓音。",
  voiceTip: "推荐选择带 ⭐ 标记的 en-US 嗓音（如 Samantha），这是标准美音。",
  levels: { "1": "🌱 Level 1 · 基础 — 打招呼和身边的世界", "2": "🌿 Level 2 · 进阶 — 吃住行购、工作生活", "3": "🌳 Level 3 · 地道表达 — 口语短语和美式俚语" }
};

const UNITS = [
  {
    id: "greetings", title: "Greetings · 问候礼貌", emoji: "👋", color: "#e8590c", level: 1,
    words: [
      { es: "hello", ipa: "həˈloʊ", zh: "你好", emoji: "👋", ex: "Hello! How are you?", exZh: "你好！你好吗？" },
      { es: "good morning", ipa: "ɡʊd ˈmɔrnɪŋ", zh: "早上好", emoji: "🌅", ex: "Good morning, everyone.", exZh: "大家早上好。" },
      { es: "good night", ipa: "ɡʊd ˈnaɪt", zh: "晚安", emoji: "🌙", ex: "Good night, sleep well.", exZh: "晚安，睡个好觉。" },
      { es: "please", ipa: "pliz", zh: "请", emoji: "🥺", ex: "One coffee, please.", exZh: "请来一杯咖啡。" },
      { es: "thank you", ipa: "ˈθæŋk ju", zh: "谢谢", emoji: "🙏", ex: "Thank you so much.", exZh: "非常感谢。" },
      { es: "you're welcome", ipa: "jʊr ˈwɛlkəm", zh: "不客气", emoji: "😊", ex: "—Thanks. —You're welcome.", exZh: "—谢谢。—不客气。" },
      { es: "excuse me", ipa: "ɪkˈskjuz mi", zh: "打扰一下 / 借过", emoji: "🙋", ex: "Excuse me, where is the restroom?", exZh: "打扰一下，洗手间在哪？" },
      { es: "sorry", ipa: "ˈsɑri", zh: "对不起", emoji: "😅", ex: "Sorry, I'm late.", exZh: "对不起，我迟到了。" },
      { es: "nice to meet you", ipa: "naɪs tə ˈmit ju", zh: "很高兴认识你", emoji: "🤝", ex: "I'm Amy. Nice to meet you.", exZh: "我是艾米，很高兴认识你。" },
      { es: "goodbye", ipa: "ˌɡʊdˈbaɪ", zh: "再见", emoji: "👋", ex: "Goodbye! See you Monday.", exZh: "再见！周一见。" },
      { es: "see you later", ipa: "si ju ˈleɪtɚ", zh: "回头见", emoji: "🚪", ex: "I'm leaving. See you later!", exZh: "我走了，回头见！" },
      { es: "yes", ipa: "jɛs", zh: "是 / 对", emoji: "✅", ex: "Yes, of course.", exZh: "是的，当然。" },
      { es: "no", ipa: "noʊ", zh: "不 / 不是", emoji: "❌", ex: "No, thanks.", exZh: "不用了，谢谢。" },
      { es: "how are you", ipa: "haʊ ɑr ju", zh: "你好吗", emoji: "🙂", ex: "Hi John, how are you?", exZh: "嗨约翰，你好吗？" },
      { es: "I'm fine", ipa: "aɪm faɪn", zh: "我很好", emoji: "👍", ex: "I'm fine, thanks. And you?", exZh: "我很好，谢谢。你呢？" },
      { es: "welcome", ipa: "ˈwɛlkəm", zh: "欢迎", emoji: "🎉", ex: "Welcome to New York!", exZh: "欢迎来到纽约！" }
    ]
  },
  {
    id: "numbers", title: "Numbers · 数字", emoji: "🔢", color: "#1971c2", level: 1,
    words: [
      { es: "one", ipa: "wʌn", zh: "一", emoji: "1️⃣", ex: "Just one, please.", exZh: "请给我一个就好。" },
      { es: "two", ipa: "tu", zh: "二", emoji: "2️⃣", ex: "Two tickets, please.", exZh: "请来两张票。" },
      { es: "three", ipa: "θri", zh: "三", emoji: "3️⃣", ex: "I have three brothers.", exZh: "我有三个兄弟。" },
      { es: "four", ipa: "fɔr", zh: "四", emoji: "4️⃣", ex: "The class starts at four.", exZh: "四点开始上课。" },
      { es: "five", ipa: "faɪv", zh: "五", emoji: "5️⃣", ex: "Give me five minutes.", exZh: "给我五分钟。" },
      { es: "six", ipa: "sɪks", zh: "六", emoji: "6️⃣", ex: "I wake up at six.", exZh: "我六点起床。" },
      { es: "seven", ipa: "ˈsɛvən", zh: "七", emoji: "7️⃣", ex: "A week has seven days.", exZh: "一周有七天。" },
      { es: "eight", ipa: "eɪt", zh: "八", emoji: "8️⃣", ex: "Dinner is at eight.", exZh: "晚餐八点。" },
      { es: "nine", ipa: "naɪn", zh: "九", emoji: "9️⃣", ex: "The store opens at nine.", exZh: "商店九点开门。" },
      { es: "ten", ipa: "tɛn", zh: "十", emoji: "🔟", ex: "Count from one to ten.", exZh: "从一数到十。" },
      { es: "twenty", ipa: "ˈtwɛnti", zh: "二十", emoji: "💴", ex: "It costs twenty dollars.", exZh: "二十美元。" },
      { es: "fifty", ipa: "ˈfɪfti", zh: "五十", emoji: "💵", ex: "A fifty-dollar bill.", exZh: "一张五十美元的钞票。" },
      { es: "hundred", ipa: "ˈhʌndrəd", zh: "一百", emoji: "💯", ex: "One hundred percent sure.", exZh: "百分百确定。" },
      { es: "thousand", ipa: "ˈθaʊzənd", zh: "一千", emoji: "🏦", ex: "Thanks a thousand times.", exZh: "万分感谢。" },
      { es: "first", ipa: "fɝst", zh: "第一", emoji: "🥇", ex: "This is my first time here.", exZh: "这是我第一次来。" },
      { es: "how much", ipa: "haʊ mʌtʃ", zh: "多少钱", emoji: "🏷️", ex: "How much is this?", exZh: "这个多少钱？" }
    ]
  },
  {
    id: "time", title: "Time · 时间日期", emoji: "⏰", color: "#6741d9", level: 1,
    words: [
      { es: "today", ipa: "təˈdeɪ", zh: "今天", emoji: "📅", ex: "Today is a good day.", exZh: "今天是个好日子。" },
      { es: "tomorrow", ipa: "təˈmɑroʊ", zh: "明天", emoji: "🌄", ex: "See you tomorrow.", exZh: "明天见。" },
      { es: "yesterday", ipa: "ˈjɛstɚdeɪ", zh: "昨天", emoji: "⏪", ex: "I was busy yesterday.", exZh: "我昨天很忙。" },
      { es: "morning", ipa: "ˈmɔrnɪŋ", zh: "早上", emoji: "🌅", ex: "I run every morning.", exZh: "我每天早上跑步。" },
      { es: "afternoon", ipa: "ˌæftɚˈnun", zh: "下午", emoji: "🌤️", ex: "The meeting is this afternoon.", exZh: "会议在今天下午。" },
      { es: "evening", ipa: "ˈivnɪŋ", zh: "傍晚 / 晚上", emoji: "🌆", ex: "Good evening!", exZh: "晚上好！" },
      { es: "night", ipa: "naɪt", zh: "夜晚", emoji: "🌙", ex: "The city is beautiful at night.", exZh: "这座城市夜景很美。" },
      { es: "week", ipa: "wik", zh: "星期 / 周", emoji: "🗓️", ex: "See you next week.", exZh: "下周见。" },
      { es: "month", ipa: "mʌnθ", zh: "月", emoji: "📆", ex: "I travel next month.", exZh: "我下个月去旅行。" },
      { es: "year", ipa: "jɪr", zh: "年", emoji: "🎆", ex: "Happy New Year!", exZh: "新年快乐！" },
      { es: "hour", ipa: "ˈaʊɚ", zh: "小时", emoji: "🕐", ex: "The movie is two hours long.", exZh: "电影两小时长。" },
      { es: "minute", ipa: "ˈmɪnɪt", zh: "分钟", emoji: "⏱️", ex: "Wait a minute.", exZh: "等一下。" },
      { es: "Monday", ipa: "ˈmʌndeɪ", zh: "星期一", emoji: "1️⃣", ex: "I start work on Monday.", exZh: "我周一开始上班。" },
      { es: "Friday", ipa: "ˈfraɪdeɪ", zh: "星期五", emoji: "5️⃣", ex: "Finally it's Friday!", exZh: "终于到周五了！" },
      { es: "weekend", ipa: "ˈwikɛnd", zh: "周末", emoji: "🎡", ex: "What are you doing this weekend?", exZh: "这周末你干什么？" },
      { es: "early", ipa: "ˈɝli", zh: "早", emoji: "🐓", ex: "I get up early.", exZh: "我起得早。" },
      { es: "late", ipa: "leɪt", zh: "晚 / 迟", emoji: "🌃", ex: "Don't be late.", exZh: "别迟到。" }
    ]
  },
  {
    id: "family", title: "Family · 家庭", emoji: "👨‍👩‍👧‍👦", color: "#9c36b5", level: 1,
    words: [
      { es: "family", ipa: "ˈfæməli", zh: "家庭", emoji: "👨‍👩‍👧‍👦", ex: "My family is big.", exZh: "我家人很多。" },
      { es: "mother", ipa: "ˈmʌðɚ", zh: "母亲", emoji: "👩", ex: "My mother cooks well.", exZh: "我妈妈做饭好吃。" },
      { es: "father", ipa: "ˈfɑðɚ", zh: "父亲", emoji: "👨", ex: "My father works hard.", exZh: "我爸爸工作努力。" },
      { es: "brother", ipa: "ˈbrʌðɚ", zh: "兄弟", emoji: "👦", ex: "I have a younger brother.", exZh: "我有个弟弟。" },
      { es: "sister", ipa: "ˈsɪstɚ", zh: "姐妹", emoji: "👧", ex: "My sister lives in Boston.", exZh: "我姐姐住在波士顿。" },
      { es: "grandmother", ipa: "ˈɡrænmʌðɚ", zh: "奶奶 / 外婆", emoji: "👵", ex: "Grandmother tells great stories.", exZh: "奶奶很会讲故事。" },
      { es: "grandfather", ipa: "ˈɡrænfɑðɚ", zh: "爷爷 / 外公", emoji: "👴", ex: "My grandfather is 80.", exZh: "我爷爷80岁了。" },
      { es: "son", ipa: "sʌn", zh: "儿子", emoji: "🧒", ex: "Their son is five.", exZh: "他们的儿子五岁。" },
      { es: "daughter", ipa: "ˈdɔtɚ", zh: "女儿", emoji: "👧", ex: "My daughter studies English.", exZh: "我女儿在学英语。" },
      { es: "uncle", ipa: "ˈʌŋkəl", zh: "叔叔 / 舅舅", emoji: "🧔", ex: "My uncle lives in Texas.", exZh: "我叔叔住在德州。" },
      { es: "aunt", ipa: "ænt", zh: "阿姨 / 姑姑", emoji: "👩‍🦱", ex: "My aunt brings gifts.", exZh: "阿姨会带礼物来。" },
      { es: "cousin", ipa: "ˈkʌzən", zh: "堂/表兄弟姐妹", emoji: "🧑", ex: "I play games with my cousin.", exZh: "我和表兄弟一起打游戏。" },
      { es: "husband", ipa: "ˈhʌzbənd", zh: "丈夫", emoji: "🤵", ex: "Her husband is a doctor.", exZh: "她丈夫是医生。" },
      { es: "wife", ipa: "waɪf", zh: "妻子", emoji: "👰", ex: "My wife speaks Chinese.", exZh: "我妻子会说中文。" },
      { es: "baby", ipa: "ˈbeɪbi", zh: "婴儿", emoji: "👶", ex: "The baby sleeps a lot.", exZh: "宝宝睡得很多。" },
      { es: "friend", ipa: "frɛnd", zh: "朋友", emoji: "🫂", ex: "You're my best friend.", exZh: "你是我最好的朋友。" }
    ]
  },
  {
    id: "food", title: "Food · 食物", emoji: "🍔", color: "#2f9e44", level: 1,
    words: [
      { es: "water", ipa: "ˈwɔtɚ", zh: "水", emoji: "💧", ex: "A glass of water, please.", exZh: "请来一杯水。" },
      { es: "bread", ipa: "brɛd", zh: "面包", emoji: "🍞", ex: "Fresh bread smells great.", exZh: "新鲜面包很香。" },
      { es: "rice", ipa: "raɪs", zh: "米饭", emoji: "🍚", ex: "I eat rice every day.", exZh: "我每天吃米饭。" },
      { es: "egg", ipa: "ɛɡ", zh: "鸡蛋", emoji: "🥚", ex: "Two eggs for breakfast.", exZh: "早餐两个鸡蛋。" },
      { es: "milk", ipa: "mɪlk", zh: "牛奶", emoji: "🥛", ex: "The milk is in the fridge.", exZh: "牛奶在冰箱里。" },
      { es: "coffee", ipa: "ˈkɔfi", zh: "咖啡", emoji: "☕", ex: "I need coffee in the morning.", exZh: "我早上需要咖啡。" },
      { es: "tea", ipa: "ti", zh: "茶", emoji: "🍵", ex: "Green tea or black tea?", exZh: "绿茶还是红茶？" },
      { es: "meat", ipa: "mit", zh: "肉", emoji: "🥩", ex: "I don't eat meat.", exZh: "我不吃肉。" },
      { es: "chicken", ipa: "ˈtʃɪkɪn", zh: "鸡肉 / 鸡", emoji: "🍗", ex: "Fried chicken is popular.", exZh: "炸鸡很受欢迎。" },
      { es: "fish", ipa: "fɪʃ", zh: "鱼", emoji: "🐟", ex: "The fish is very fresh.", exZh: "这鱼很新鲜。" },
      { es: "fruit", ipa: "frut", zh: "水果", emoji: "🍎", ex: "Eat more fruit.", exZh: "多吃水果。" },
      { es: "apple", ipa: "ˈæpəl", zh: "苹果", emoji: "🍏", ex: "An apple a day.", exZh: "一天一苹果。" },
      { es: "vegetable", ipa: "ˈvɛdʒtəbəl", zh: "蔬菜", emoji: "🥦", ex: "Vegetables are healthy.", exZh: "蔬菜很健康。" },
      { es: "soup", ipa: "sup", zh: "汤", emoji: "🍲", ex: "The soup is hot.", exZh: "汤很烫。" },
      { es: "hungry", ipa: "ˈhʌŋɡri", zh: "饿的", emoji: "😋", ex: "I'm so hungry.", exZh: "我好饿。" },
      { es: "thirsty", ipa: "ˈθɝsti", zh: "渴的", emoji: "🥤", ex: "I'm thirsty after running.", exZh: "跑完步我很渴。" },
      { es: "delicious", ipa: "dɪˈlɪʃəs", zh: "美味的", emoji: "😍", ex: "This pizza is delicious!", exZh: "这披萨太好吃了！" },
      { es: "breakfast", ipa: "ˈbrɛkfəst", zh: "早餐", emoji: "🍳", ex: "Breakfast is ready.", exZh: "早餐好了。" }
    ]
  },
  {
    id: "colors", title: "Colors · 颜色", emoji: "🎨", color: "#e64980", level: 1,
    words: [
      { es: "red", ipa: "rɛd", zh: "红色", emoji: "🔴", ex: "The apple is red.", exZh: "苹果是红色的。" },
      { es: "blue", ipa: "blu", zh: "蓝色", emoji: "🔵", ex: "The sky is blue.", exZh: "天空是蓝色的。" },
      { es: "green", ipa: "ɡrin", zh: "绿色", emoji: "🟢", ex: "The light is green, go.", exZh: "绿灯了，走吧。" },
      { es: "yellow", ipa: "ˈjɛloʊ", zh: "黄色", emoji: "🟡", ex: "A yellow taxi.", exZh: "一辆黄色出租车。" },
      { es: "black", ipa: "blæk", zh: "黑色", emoji: "⚫", ex: "A black cat.", exZh: "一只黑猫。" },
      { es: "white", ipa: "waɪt", zh: "白色", emoji: "⚪", ex: "Snow is white.", exZh: "雪是白色的。" },
      { es: "orange", ipa: "ˈɔrɪndʒ", zh: "橙色 / 橙子", emoji: "🟠", ex: "Orange juice, please.", exZh: "请来橙汁。" },
      { es: "purple", ipa: "ˈpɝpəl", zh: "紫色", emoji: "🟣", ex: "She likes purple flowers.", exZh: "她喜欢紫色的花。" },
      { es: "pink", ipa: "pɪŋk", zh: "粉色", emoji: "🌸", ex: "A pink dress.", exZh: "一条粉色裙子。" },
      { es: "brown", ipa: "braʊn", zh: "棕色", emoji: "🟤", ex: "I have brown eyes.", exZh: "我的眼睛是棕色的。" },
      { es: "gray", ipa: "ɡreɪ", zh: "灰色", emoji: "🌫️", ex: "The sky is gray today.", exZh: "今天天灰蒙蒙的。" },
      { es: "color", ipa: "ˈkʌlɚ", zh: "颜色", emoji: "🎨", ex: "What's your favorite color?", exZh: "你最喜欢什么颜色？" }
    ]
  },
  {
    id: "animals", title: "Animals · 动物", emoji: "🐾", color: "#f08c00", level: 1,
    words: [
      { es: "dog", ipa: "dɔɡ", zh: "狗", emoji: "🐶", ex: "The dog runs in the park.", exZh: "狗在公园里跑。" },
      { es: "cat", ipa: "kæt", zh: "猫", emoji: "🐱", ex: "The cat sleeps all day.", exZh: "猫整天睡觉。" },
      { es: "bird", ipa: "bɝd", zh: "鸟", emoji: "🐦", ex: "The bird sings beautifully.", exZh: "鸟唱得很好听。" },
      { es: "horse", ipa: "hɔrs", zh: "马", emoji: "🐴", ex: "I rode a horse once.", exZh: "我骑过一次马。" },
      { es: "cow", ipa: "kaʊ", zh: "牛", emoji: "🐮", ex: "Cows give milk.", exZh: "奶牛产奶。" },
      { es: "pig", ipa: "pɪɡ", zh: "猪", emoji: "🐷", ex: "The pig is pink.", exZh: "猪是粉色的。" },
      { es: "sheep", ipa: "ʃip", zh: "羊", emoji: "🐑", ex: "Count sheep to sleep.", exZh: "数羊入睡。" },
      { es: "mouse", ipa: "maʊs", zh: "老鼠", emoji: "🐭", ex: "The cat chases the mouse.", exZh: "猫追老鼠。" },
      { es: "rabbit", ipa: "ˈræbɪt", zh: "兔子", emoji: "🐰", ex: "Rabbits love carrots.", exZh: "兔子爱吃胡萝卜。" },
      { es: "elephant", ipa: "ˈɛləfənt", zh: "大象", emoji: "🐘", ex: "Elephants never forget.", exZh: "大象从不忘记。" },
      { es: "lion", ipa: "ˈlaɪən", zh: "狮子", emoji: "🦁", ex: "The lion is the king.", exZh: "狮子是王。" },
      { es: "monkey", ipa: "ˈmʌŋki", zh: "猴子", emoji: "🐵", ex: "Monkeys climb trees.", exZh: "猴子爬树。" }
    ]
  },
  {
    id: "body", title: "Body · 身体", emoji: "🫀", color: "#d6336c", level: 1,
    words: [
      { es: "head", ipa: "hɛd", zh: "头", emoji: "🧠", ex: "My head hurts.", exZh: "我头疼。" },
      { es: "eye", ipa: "aɪ", zh: "眼睛", emoji: "👁️", ex: "She has big eyes.", exZh: "她眼睛很大。" },
      { es: "nose", ipa: "noʊz", zh: "鼻子", emoji: "👃", ex: "My nose is itchy.", exZh: "我鼻子痒。" },
      { es: "mouth", ipa: "maʊθ", zh: "嘴", emoji: "👄", ex: "Open your mouth.", exZh: "张开嘴。" },
      { es: "ear", ipa: "ɪr", zh: "耳朵", emoji: "👂", ex: "Rabbits have long ears.", exZh: "兔子耳朵长。" },
      { es: "tooth", ipa: "tuθ", zh: "牙齿", emoji: "🦷", ex: "Brush your teeth.", exZh: "去刷牙。" },
      { es: "hand", ipa: "hænd", zh: "手", emoji: "✋", ex: "Wash your hands.", exZh: "洗手。" },
      { es: "arm", ipa: "ɑrm", zh: "手臂", emoji: "💪", ex: "My arm is sore.", exZh: "我胳膊酸。" },
      { es: "leg", ipa: "lɛɡ", zh: "腿", emoji: "🦵", ex: "I run with my legs.", exZh: "我用腿跑步。" },
      { es: "foot", ipa: "fʊt", zh: "脚", emoji: "🦶", ex: "I go to work on foot.", exZh: "我走路上班。" },
      { es: "hair", ipa: "hɛr", zh: "头发", emoji: "💇", ex: "She has long hair.", exZh: "她头发很长。" },
      { es: "face", ipa: "feɪs", zh: "脸", emoji: "🙂", ex: "Wash your face.", exZh: "洗脸。" },
      { es: "heart", ipa: "hɑrt", zh: "心脏 / 心", emoji: "❤️", ex: "My heart beats fast.", exZh: "我心跳很快。" },
      { es: "stomach", ipa: "ˈstʌmək", zh: "胃 / 肚子", emoji: "🫃", ex: "My stomach hurts.", exZh: "我肚子疼。" }
    ]
  },
  {
    id: "clothes", title: "Clothes · 衣服", emoji: "👕", color: "#7048e8", level: 1,
    words: [
      { es: "shirt", ipa: "ʃɝt", zh: "衬衫", emoji: "👔", ex: "A clean white shirt.", exZh: "一件干净的白衬衫。" },
      { es: "T-shirt", ipa: "ˈtiʃɝt", zh: "T恤", emoji: "👕", ex: "I wear a T-shirt at home.", exZh: "我在家穿T恤。" },
      { es: "pants", ipa: "pænts", zh: "裤子", emoji: "👖", ex: "These pants fit well.", exZh: "这条裤子很合身。" },
      { es: "shoes", ipa: "ʃuz", zh: "鞋", emoji: "👟", ex: "My shoes are new.", exZh: "我的鞋是新的。" },
      { es: "dress", ipa: "drɛs", zh: "连衣裙", emoji: "👗", ex: "What a beautiful dress!", exZh: "裙子真漂亮！" },
      { es: "skirt", ipa: "skɝt", zh: "半身裙", emoji: "🩱", ex: "The skirt is blue.", exZh: "裙子是蓝色的。" },
      { es: "hat", ipa: "hæt", zh: "帽子", emoji: "👒", ex: "Wear a hat in the sun.", exZh: "太阳大要戴帽子。" },
      { es: "jacket", ipa: "ˈdʒækɪt", zh: "夹克", emoji: "🧥", ex: "It's cold, take a jacket.", exZh: "冷了，带上夹克。" },
      { es: "socks", ipa: "sɑks", zh: "袜子", emoji: "🧦", ex: "Colorful socks.", exZh: "彩色的袜子。" },
      { es: "glasses", ipa: "ˈɡlæsɪz", zh: "眼镜", emoji: "👓", ex: "I can't see without glasses.", exZh: "不戴眼镜我看不见。" },
      { es: "watch", ipa: "wɑtʃ", zh: "手表", emoji: "⌚", ex: "My watch is slow.", exZh: "我的表慢了。" },
      { es: "bag", ipa: "bæɡ", zh: "包", emoji: "👜", ex: "I left my bag at home.", exZh: "我把包忘在家里了。" }
    ]
  },
  {
    id: "weather", title: "Weather · 天气", emoji: "🌦️", color: "#1098ad", level: 1,
    words: [
      { es: "sunny", ipa: "ˈsʌni", zh: "晴天的", emoji: "☀️", ex: "It's sunny today.", exZh: "今天是晴天。" },
      { es: "rainy", ipa: "ˈreɪni", zh: "下雨的", emoji: "🌧️", ex: "A rainy afternoon.", exZh: "一个下雨的下午。" },
      { es: "cloudy", ipa: "ˈklaʊdi", zh: "多云的", emoji: "☁️", ex: "The sky is cloudy.", exZh: "天上多云。" },
      { es: "windy", ipa: "ˈwɪndi", zh: "刮风的", emoji: "🌬️", ex: "It's windy outside.", exZh: "外面风很大。" },
      { es: "hot", ipa: "hɑt", zh: "热的", emoji: "🥵", ex: "Summer is too hot.", exZh: "夏天太热了。" },
      { es: "cold", ipa: "koʊld", zh: "冷的", emoji: "🥶", ex: "It's cold at night.", exZh: "晚上很冷。" },
      { es: "snow", ipa: "snoʊ", zh: "雪", emoji: "❄️", ex: "It snows in winter.", exZh: "冬天下雪。" },
      { es: "rain", ipa: "reɪn", zh: "雨", emoji: "💧", ex: "I like the sound of rain.", exZh: "我喜欢雨声。" },
      { es: "wind", ipa: "wɪnd", zh: "风", emoji: "🍃", ex: "The wind is strong.", exZh: "风很大。" },
      { es: "sky", ipa: "skaɪ", zh: "天空", emoji: "🌌", ex: "The sky is clear.", exZh: "天空晴朗。" },
      { es: "storm", ipa: "stɔrm", zh: "暴风雨", emoji: "⛈️", ex: "A storm is coming.", exZh: "暴风雨要来了。" },
      { es: "rainbow", ipa: "ˈreɪnboʊ", zh: "彩虹", emoji: "🌈", ex: "A rainbow after the rain.", exZh: "雨后彩虹。" }
    ]
  },
  {
    id: "home", title: "Home · 家居", emoji: "🏡", color: "#e8590c", level: 1,
    words: [
      { es: "house", ipa: "haʊs", zh: "房子", emoji: "🏠", ex: "Their house is big.", exZh: "他们的房子很大。" },
      { es: "room", ipa: "rum", zh: "房间", emoji: "🛏️", ex: "My room is small.", exZh: "我的房间很小。" },
      { es: "kitchen", ipa: "ˈkɪtʃɪn", zh: "厨房", emoji: "🍳", ex: "Mom is in the kitchen.", exZh: "妈妈在厨房。" },
      { es: "bathroom", ipa: "ˈbæθrum", zh: "洗手间", emoji: "🚿", ex: "Where is the bathroom?", exZh: "洗手间在哪里？" },
      { es: "bedroom", ipa: "ˈbɛdrum", zh: "卧室", emoji: "🛌", ex: "The bedroom is upstairs.", exZh: "卧室在楼上。" },
      { es: "living room", ipa: "ˈlɪvɪŋ rum", zh: "客厅", emoji: "🛋️", ex: "We watch TV in the living room.", exZh: "我们在客厅看电视。" },
      { es: "table", ipa: "ˈteɪbəl", zh: "桌子", emoji: "🍽️", ex: "Dinner is on the table.", exZh: "晚饭在桌上。" },
      { es: "chair", ipa: "tʃɛr", zh: "椅子", emoji: "🪑", ex: "Have a seat on the chair.", exZh: "请坐在椅子上。" },
      { es: "bed", ipa: "bɛd", zh: "床", emoji: "🛏️", ex: "I want to stay in bed.", exZh: "我想赖在床上。" },
      { es: "door", ipa: "dɔr", zh: "门", emoji: "🚪", ex: "Please close the door.", exZh: "请关门。" },
      { es: "window", ipa: "ˈwɪndoʊ", zh: "窗户", emoji: "🪟", ex: "Open the window.", exZh: "打开窗户。" },
      { es: "light", ipa: "laɪt", zh: "灯 / 光", emoji: "💡", ex: "Turn off the light.", exZh: "关灯。" },
      { es: "key", ipa: "ki", zh: "钥匙", emoji: "🔑", ex: "I lost my keys.", exZh: "我把钥匙丢了。" },
      { es: "garden", ipa: "ˈɡɑrdən", zh: "花园", emoji: "🌳", ex: "Flowers grow in the garden.", exZh: "花园里种着花。" }
    ]
  },
  {
    id: "verbs1", title: "Basic Verbs · 常用动词", emoji: "🏃", color: "#c92a2a", level: 1,
    words: [
      { es: "be", ipa: "bi", zh: "是", emoji: "🧬", ex: "I am from China.", exZh: "我来自中国。" },
      { es: "have", ipa: "hæv", zh: "有", emoji: "🎒", ex: "I have a question.", exZh: "我有个问题。" },
      { es: "go", ipa: "ɡoʊ", zh: "去", emoji: "🚶", ex: "Let's go to the park.", exZh: "我们去公园吧。" },
      { es: "come", ipa: "kʌm", zh: "来", emoji: "👈", ex: "Come here, please.", exZh: "请过来。" },
      { es: "eat", ipa: "it", zh: "吃", emoji: "🍽️", ex: "What do you want to eat?", exZh: "你想吃什么？" },
      { es: "drink", ipa: "drɪŋk", zh: "喝", emoji: "🥤", ex: "Drink more water.", exZh: "多喝水。" },
      { es: "speak", ipa: "spik", zh: "说话", emoji: "🗣️", ex: "I speak a little English.", exZh: "我会说一点英语。" },
      { es: "listen", ipa: "ˈlɪsən", zh: "听", emoji: "🎧", ex: "Listen to the music.", exZh: "听音乐。" },
      { es: "read", ipa: "rid", zh: "读", emoji: "📖", ex: "I read before bed.", exZh: "我睡前读书。" },
      { es: "write", ipa: "raɪt", zh: "写", emoji: "✍️", ex: "Write your name here.", exZh: "在这里写你的名字。" },
      { es: "work", ipa: "wɝk", zh: "工作", emoji: "💼", ex: "I work from home.", exZh: "我在家工作。" },
      { es: "study", ipa: "ˈstʌdi", zh: "学习", emoji: "📚", ex: "I study English every day.", exZh: "我每天学英语。" },
      { es: "want", ipa: "wɑnt", zh: "想要", emoji: "🌟", ex: "I want to travel.", exZh: "我想去旅行。" },
      { es: "need", ipa: "nid", zh: "需要", emoji: "🙏", ex: "I need your help.", exZh: "我需要你的帮助。" },
      { es: "like", ipa: "laɪk", zh: "喜欢", emoji: "💗", ex: "I like spicy food.", exZh: "我喜欢吃辣。" },
      { es: "love", ipa: "lʌv", zh: "爱", emoji: "❤️", ex: "I love this city.", exZh: "我爱这座城市。" },
      { es: "learn", ipa: "lɝn", zh: "学会", emoji: "🧠", ex: "I learn something new daily.", exZh: "我每天学新东西。" },
      { es: "sleep", ipa: "slip", zh: "睡觉", emoji: "😴", ex: "I sleep eight hours.", exZh: "我睡八小时。" }
    ]
  },
  {
    id: "restaurant", title: "Restaurant · 餐厅点餐", emoji: "🍽️", color: "#2f9e44", level: 2,
    words: [
      { es: "menu", ipa: "ˈmɛnju", zh: "菜单", emoji: "📋", ex: "Can I see the menu?", exZh: "能看下菜单吗？" },
      { es: "waiter", ipa: "ˈweɪtɚ", zh: "服务员", emoji: "🤵", ex: "The waiter is friendly.", exZh: "服务员很友好。" },
      { es: "order", ipa: "ˈɔrdɚ", zh: "点餐 / 订单", emoji: "📝", ex: "Are you ready to order?", exZh: "可以点餐了吗？" },
      { es: "dish", ipa: "dɪʃ", zh: "菜品", emoji: "🍛", ex: "What's today's special dish?", exZh: "今日特色菜是什么？" },
      { es: "soda", ipa: "ˈsoʊdə", zh: "汽水", emoji: "🧋", ex: "A cold soda, please.", exZh: "请来一杯冰汽水。" },
      { es: "cup", ipa: "kʌp", zh: "杯子", emoji: "🥛", ex: "A cup of coffee.", exZh: "一杯咖啡。" },
      { es: "plate", ipa: "pleɪt", zh: "盘子", emoji: "🍽️", ex: "The plate is hot.", exZh: "盘子很烫。" },
      { es: "fork", ipa: "fɔrk", zh: "叉子", emoji: "🍴", ex: "I need a fork.", exZh: "我需要一把叉子。" },
      { es: "spoon", ipa: "spun", zh: "勺子", emoji: "🥄", ex: "A spoon for the soup.", exZh: "喝汤要勺子。" },
      { es: "knife", ipa: "naɪf", zh: "刀", emoji: "🔪", ex: "The knife is sharp.", exZh: "刀很锋利。" },
      { es: "napkin", ipa: "ˈnæpkɪn", zh: "餐巾纸", emoji: "🧻", ex: "Can you pass a napkin?", exZh: "递张餐巾纸好吗？" },
      { es: "to go", ipa: "tə ɡoʊ", zh: "打包带走", emoji: "🥡", ex: "Two burgers to go.", exZh: "两个汉堡打包。" },
      { es: "the check", ipa: "ðə tʃɛk", zh: "账单（美式说法）", emoji: "🧾", ex: "Can we get the check?", exZh: "可以结账了吗？" },
      { es: "tip", ipa: "tɪp", zh: "小费", emoji: "💰", ex: "Leave a 15% tip.", exZh: "留15%的小费。" },
      { es: "reservation", ipa: "ˌrɛzɚˈveɪʃən", zh: "订位", emoji: "📅", ex: "I have a reservation at seven.", exZh: "我订了七点的位子。" },
      { es: "dessert", ipa: "dɪˈzɝt", zh: "甜点", emoji: "🍰", ex: "Any dessert for you?", exZh: "要来点甜点吗？" }
    ]
  },
  {
    id: "shopping", title: "Shopping · 购物", emoji: "🛍️", color: "#e64980", level: 2,
    words: [
      { es: "store", ipa: "stɔr", zh: "商店", emoji: "🏪", ex: "The store opens at nine.", exZh: "商店九点开门。" },
      { es: "price", ipa: "praɪs", zh: "价格", emoji: "🏷️", ex: "The price is on the tag.", exZh: "价格在标签上。" },
      { es: "expensive", ipa: "ɪkˈspɛnsɪv", zh: "贵的", emoji: "💎", ex: "That's too expensive.", exZh: "太贵了。" },
      { es: "cheap", ipa: "tʃip", zh: "便宜的", emoji: "🪙", ex: "It's cheaper online.", exZh: "网上更便宜。" },
      { es: "discount", ipa: "ˈdɪskaʊnt", zh: "折扣", emoji: "🔖", ex: "Is there a discount?", exZh: "有折扣吗？" },
      { es: "size", ipa: "saɪz", zh: "尺码", emoji: "📏", ex: "Do you have a bigger size?", exZh: "有大一码的吗？" },
      { es: "cash", ipa: "kæʃ", zh: "现金", emoji: "💵", ex: "Cash only, please.", exZh: "只收现金。" },
      { es: "credit card", ipa: "ˈkrɛdɪt kɑrd", zh: "信用卡", emoji: "💳", ex: "Do you take credit cards?", exZh: "能刷信用卡吗？" },
      { es: "pay", ipa: "peɪ", zh: "付钱", emoji: "💰", ex: "Where do I pay?", exZh: "在哪里付款？" },
      { es: "receipt", ipa: "rɪˈsit", zh: "小票", emoji: "🧾", ex: "Keep the receipt.", exZh: "留好小票。" },
      { es: "on sale", ipa: "ɑn seɪl", zh: "特价中", emoji: "🛍️", ex: "Everything is on sale.", exZh: "全场特价。" },
      { es: "try on", ipa: "traɪ ɑn", zh: "试穿", emoji: "🪞", ex: "Can I try this on?", exZh: "我能试穿吗？" },
      { es: "change", ipa: "tʃeɪndʒ", zh: "找零 / 零钱", emoji: "🪙", ex: "Here's your change.", exZh: "这是找您的零钱。" },
      { es: "refund", ipa: "ˈrifʌnd", zh: "退款", emoji: "↩️", ex: "I'd like a refund.", exZh: "我想退款。" }
    ]
  },
  {
    id: "travel", title: "Travel · 交通旅行", emoji: "✈️", color: "#1971c2", level: 2,
    words: [
      { es: "airport", ipa: "ˈɛrpɔrt", zh: "机场", emoji: "🛫", ex: "I'm heading to the airport.", exZh: "我正去机场。" },
      { es: "flight", ipa: "flaɪt", zh: "航班", emoji: "✈️", ex: "My flight leaves at ten.", exZh: "我的航班十点起飞。" },
      { es: "ticket", ipa: "ˈtɪkɪt", zh: "票", emoji: "🎫", ex: "I bought the ticket online.", exZh: "我在网上买的票。" },
      { es: "luggage", ipa: "ˈlʌɡɪdʒ", zh: "行李", emoji: "🧳", ex: "My luggage is heavy.", exZh: "我的行李很重。" },
      { es: "passport", ipa: "ˈpæspɔrt", zh: "护照", emoji: "🛂", ex: "Don't forget your passport.", exZh: "别忘了护照。" },
      { es: "customs", ipa: "ˈkʌstəmz", zh: "海关", emoji: "🛃", ex: "We went through customs.", exZh: "我们过了海关。" },
      { es: "taxi", ipa: "ˈtæksi", zh: "出租车", emoji: "🚕", ex: "Let's take a taxi.", exZh: "我们打车吧。" },
      { es: "bus", ipa: "bʌs", zh: "公交车", emoji: "🚌", ex: "I take the bus to work.", exZh: "我坐公交上班。" },
      { es: "subway", ipa: "ˈsʌbweɪ", zh: "地铁", emoji: "🚇", ex: "The subway is faster.", exZh: "地铁更快。" },
      { es: "station", ipa: "ˈsteɪʃən", zh: "车站", emoji: "🚉", ex: "The station is crowded.", exZh: "车站很挤。" },
      { es: "stop", ipa: "stɑp", zh: "站点 / 停", emoji: "🚏", ex: "Get off at the next stop.", exZh: "下一站下车。" },
      { es: "corner", ipa: "ˈkɔrnɚ", zh: "街角", emoji: "📍", ex: "The bank is on the corner.", exZh: "银行在街角。" },
      { es: "block", ipa: "blɑk", zh: "街区", emoji: "🏙️", ex: "It's three blocks away.", exZh: "在三个街区外。" },
      { es: "map", ipa: "mæp", zh: "地图", emoji: "🗺️", ex: "Check the map first.", exZh: "先看下地图。" },
      { es: "hotel", ipa: "hoʊˈtɛl", zh: "酒店", emoji: "🏨", ex: "I booked a hotel by the beach.", exZh: "我订了海边的酒店。" },
      { es: "check in", ipa: "tʃɛk ɪn", zh: "办理入住 / 值机", emoji: "🛎️", ex: "We can check in at 3 p.m.", exZh: "我们下午三点能入住。" }
    ]
  },
  {
    id: "health", title: "Health · 健康看病", emoji: "🩺", color: "#c92a2a", level: 2,
    words: [
      { es: "doctor", ipa: "ˈdɑktɚ", zh: "医生", emoji: "👨‍⚕️", ex: "I need to see a doctor.", exZh: "我需要看医生。" },
      { es: "medicine", ipa: "ˈmɛdəsən", zh: "药", emoji: "💊", ex: "Take the medicine with food.", exZh: "药和食物一起吃。" },
      { es: "a cold", ipa: "ə koʊld", zh: "感冒", emoji: "🤧", ex: "I caught a cold.", exZh: "我感冒了。" },
      { es: "cough", ipa: "kɔf", zh: "咳嗽", emoji: "😷", ex: "The cough won't go away.", exZh: "咳嗽一直不好。" },
      { es: "fever", ipa: "ˈfivɚ", zh: "发烧", emoji: "🤒", ex: "The kid has a fever.", exZh: "孩子发烧了。" },
      { es: "pain", ipa: "peɪn", zh: "疼痛", emoji: "😖", ex: "I have back pain.", exZh: "我背疼。" },
      { es: "pill", ipa: "pɪl", zh: "药片", emoji: "💊", ex: "One pill every eight hours.", exZh: "每八小时一片。" },
      { es: "prescription", ipa: "prɪˈskrɪpʃən", zh: "处方", emoji: "📄", ex: "You need a prescription.", exZh: "这个需要处方。" },
      { es: "appointment", ipa: "əˈpɔɪntmənt", zh: "预约", emoji: "📅", ex: "I have an appointment at four.", exZh: "我四点有预约。" },
      { es: "hospital", ipa: "ˈhɑspɪtəl", zh: "医院", emoji: "🏥", ex: "The hospital is nearby.", exZh: "医院就在附近。" },
      { es: "nurse", ipa: "nɝs", zh: "护士", emoji: "👩‍⚕️", ex: "The nurse is very kind.", exZh: "护士很和善。" },
      { es: "blood", ipa: "blʌd", zh: "血", emoji: "🩸", ex: "They took my blood.", exZh: "他们给我抽了血。" },
      { es: "vaccine", ipa: "vækˈsin", zh: "疫苗", emoji: "💉", ex: "I got the vaccine.", exZh: "我打了疫苗。" },
      { es: "rest", ipa: "rɛst", zh: "休息", emoji: "😴", ex: "You should rest more.", exZh: "你应该多休息。" }
    ]
  },
  {
    id: "work", title: "Work · 工作学习", emoji: "💼", color: "#5c940d", level: 2,
    words: [
      { es: "office", ipa: "ˈɔfɪs", zh: "办公室", emoji: "🏢", ex: "I work in an office.", exZh: "我在办公室工作。" },
      { es: "boss", ipa: "bɔs", zh: "老板", emoji: "👔", ex: "My boss is demanding.", exZh: "我老板要求很高。" },
      { es: "salary", ipa: "ˈsæləri", zh: "工资", emoji: "💰", ex: "The salary is not bad.", exZh: "工资还不错。" },
      { es: "meeting", ipa: "ˈmitɪŋ", zh: "会议", emoji: "👥", ex: "I have a meeting at ten.", exZh: "我十点开会。" },
      { es: "email", ipa: "ˈimeɪl", zh: "邮件", emoji: "📧", ex: "I'll send you an email.", exZh: "我给你发邮件。" },
      { es: "computer", ipa: "kəmˈpjutɚ", zh: "电脑", emoji: "💻", ex: "My computer is slow.", exZh: "我的电脑很慢。" },
      { es: "project", ipa: "ˈprɑdʒɛkt", zh: "项目", emoji: "📊", ex: "The project is going well.", exZh: "项目进展顺利。" },
      { es: "deadline", ipa: "ˈdɛdlaɪn", zh: "截止日期", emoji: "⏰", ex: "The deadline is Friday.", exZh: "截止日期是周五。" },
      { es: "hire", ipa: "ˈhaɪɚ", zh: "雇用", emoji: "🤝", ex: "They're hiring more people.", exZh: "他们在招人。" },
      { es: "quit", ipa: "kwɪt", zh: "辞职", emoji: "🚪", ex: "I'm thinking about quitting.", exZh: "我在考虑辞职。" },
      { es: "coworker", ipa: "ˈkoʊwɝkɚ", zh: "同事", emoji: "🧑‍🤝‍🧑", ex: "My coworkers are nice.", exZh: "我的同事人很好。" },
      { es: "interview", ipa: "ˈɪntɚvju", zh: "面试", emoji: "🎤", ex: "I have a job interview tomorrow.", exZh: "我明天有面试。" },
      { es: "resume", ipa: "ˈrɛzəmeɪ", zh: "简历", emoji: "📄", ex: "Send me your resume.", exZh: "把简历发给我。" },
      { es: "schedule", ipa: "ˈskɛdʒul", zh: "日程", emoji: "🗓️", ex: "My schedule is full.", exZh: "我日程排满了。" }
    ]
  },
  {
    id: "tech", title: "Tech · 手机网络", emoji: "📱", color: "#364fc7", level: 2,
    words: [
      { es: "cell phone", ipa: "sɛl foʊn", zh: "手机", emoji: "📱", ex: "My cell phone is dying.", exZh: "我手机快没电了。" },
      { es: "wifi", ipa: "ˈwaɪfaɪ", zh: "无线网", emoji: "📶", ex: "What's the wifi password?", exZh: "wifi密码是多少？" },
      { es: "password", ipa: "ˈpæswɝd", zh: "密码", emoji: "🔑", ex: "I forgot my password.", exZh: "我忘记密码了。" },
      { es: "app", ipa: "æp", zh: "应用程序", emoji: "📲", ex: "Download the app.", exZh: "下载这个应用。" },
      { es: "message", ipa: "ˈmɛsɪdʒ", zh: "消息 / 短信", emoji: "💬", ex: "Send me a message.", exZh: "给我发消息。" },
      { es: "photo", ipa: "ˈfoʊtoʊ", zh: "照片", emoji: "📷", ex: "Can you take a photo of us?", exZh: "能帮我们拍张照吗？" },
      { es: "video", ipa: "ˈvɪdioʊ", zh: "视频", emoji: "🎬", ex: "The video went viral.", exZh: "这个视频火了。" },
      { es: "screen", ipa: "skrin", zh: "屏幕", emoji: "🖥️", ex: "The screen is cracked.", exZh: "屏幕碎了。" },
      { es: "charge", ipa: "tʃɑrdʒ", zh: "充电", emoji: "🔋", ex: "I need to charge my phone.", exZh: "我需要给手机充电。" },
      { es: "download", ipa: "ˈdaʊnloʊd", zh: "下载", emoji: "⬇️", ex: "I'm downloading the movie.", exZh: "我在下载电影。" },
      { es: "headphones", ipa: "ˈhɛdfoʊnz", zh: "耳机", emoji: "🎧", ex: "I got new headphones.", exZh: "我买了新耳机。" },
      { es: "battery", ipa: "ˈbætəri", zh: "电池", emoji: "🔋", ex: "The battery is low.", exZh: "电量不足。" },
      { es: "online", ipa: "ˌɑnˈlaɪn", zh: "在线", emoji: "🟢", ex: "I bought everything online.", exZh: "我全在网上买的。" },
      { es: "website", ipa: "ˈwɛbsaɪt", zh: "网站", emoji: "🌐", ex: "Check our website.", exZh: "看看我们的网站。" }
    ]
  },
  {
    id: "adjectives", title: "Adjectives · 常用形容词", emoji: "✨", color: "#9c36b5", level: 2,
    words: [
      { es: "big", ipa: "bɪɡ", zh: "大的", emoji: "🐘", ex: "New York is a big city.", exZh: "纽约是座大城市。" },
      { es: "small", ipa: "smɔl", zh: "小的", emoji: "🐭", ex: "The room is small.", exZh: "房间很小。" },
      { es: "new", ipa: "nu", zh: "新的", emoji: "✨", ex: "I got new shoes.", exZh: "我买了新鞋。" },
      { es: "old", ipa: "oʊld", zh: "旧的 / 老的", emoji: "🏚️", ex: "My car is old.", exZh: "我的车旧了。" },
      { es: "good", ipa: "ɡʊd", zh: "好的", emoji: "👍", ex: "He's a good friend.", exZh: "他是个好朋友。" },
      { es: "bad", ipa: "bæd", zh: "坏的", emoji: "👎", ex: "The weather is bad.", exZh: "天气不好。" },
      { es: "beautiful", ipa: "ˈbjutəfəl", zh: "美丽的", emoji: "🌸", ex: "The beach is beautiful.", exZh: "海滩很美。" },
      { es: "ugly", ipa: "ˈʌɡli", zh: "丑的", emoji: "🙈", ex: "That building is ugly.", exZh: "那栋楼真丑。" },
      { es: "fast", ipa: "fæst", zh: "快的", emoji: "🏃", ex: "The subway is fast.", exZh: "地铁很快。" },
      { es: "slow", ipa: "sloʊ", zh: "慢的", emoji: "🐢", ex: "The internet is slow.", exZh: "网速很慢。" },
      { es: "easy", ipa: "ˈizi", zh: "容易的", emoji: "✅", ex: "English is not easy.", exZh: "英语不容易。" },
      { es: "difficult", ipa: "ˈdɪfɪkəlt", zh: "难的", emoji: "🧗", ex: "The test was difficult.", exZh: "考试很难。" },
      { es: "warm", ipa: "wɔrm", zh: "温暖的", emoji: "🌞", ex: "The coffee is still warm.", exZh: "咖啡还是温的。" },
      { es: "clean", ipa: "klin", zh: "干净的", emoji: "🧼", ex: "The bathroom is clean.", exZh: "洗手间很干净。" },
      { es: "dirty", ipa: "ˈdɝti", zh: "脏的", emoji: "🧹", ex: "The dishes are dirty.", exZh: "盘子是脏的。" },
      { es: "full", ipa: "fʊl", zh: "满的 / 吃饱的", emoji: "🥛", ex: "I'm full, thanks.", exZh: "我吃饱了，谢谢。" },
      { es: "empty", ipa: "ˈɛmpti", zh: "空的", emoji: "🕳️", ex: "The fridge is empty.", exZh: "冰箱空了。" }
    ]
  },
  {
    id: "phrases", title: "Daily Phrases · 日常短语", emoji: "💬", color: "#0c8599", level: 3,
    words: [
      { es: "What's up?", ipa: "wʌts ʌp", zh: "怎么样？/ 嘿", emoji: "🤙", ex: "Hey! What's up?", exZh: "嘿！最近怎么样？" },
      { es: "No problem", ipa: "noʊ ˈprɑbləm", zh: "没问题", emoji: "👌", ex: "—Thanks! —No problem.", exZh: "—谢谢！—没问题。" },
      { es: "Of course", ipa: "əv kɔrs", zh: "当然", emoji: "💯", ex: "Of course you can come.", exZh: "你当然可以来。" },
      { es: "I don't know", ipa: "aɪ doʊnt noʊ", zh: "我不知道", emoji: "🤷", ex: "I don't know the answer.", exZh: "我不知道答案。" },
      { es: "I think so", ipa: "aɪ θɪŋk soʊ", zh: "我觉得是", emoji: "💭", ex: "—Is he coming? —I think so.", exZh: "—他来吗？—我觉得会来。" },
      { es: "Never mind", ipa: "ˈnɛvɚ maɪnd", zh: "算了 / 没事", emoji: "🙅", ex: "Never mind, I found it.", exZh: "没事了，我找到了。" },
      { es: "Take care", ipa: "teɪk kɛr", zh: "保重", emoji: "🫶", ex: "Bye! Take care!", exZh: "再见！保重！" },
      { es: "Good luck", ipa: "ɡʊd lʌk", zh: "祝你好运", emoji: "🍀", ex: "Good luck on your test!", exZh: "祝你考试顺利！" },
      { es: "Hold on", ipa: "hoʊld ɑn", zh: "等一下", emoji: "⏸️", ex: "Hold on, I'm almost there.", exZh: "等等，我快到了。" },
      { es: "I'm on my way", ipa: "aɪm ɑn maɪ weɪ", zh: "我在路上了", emoji: "🏃", ex: "I'm on my way, five minutes.", exZh: "我在路上了，五分钟到。" },
      { es: "What do you mean?", ipa: "wʌt du ju min", zh: "你什么意思？", emoji: "🤨", ex: "What do you mean by that?", exZh: "你那是什么意思？" },
      { es: "Sounds good", ipa: "saʊndz ɡʊd", zh: "听起来不错 / 行", emoji: "👍", ex: "—Lunch at noon? —Sounds good.", exZh: "—中午吃饭？—行啊。" },
      { es: "My bad", ipa: "maɪ bæd", zh: "我的错", emoji: "😅", ex: "My bad, I forgot.", exZh: "我的错，我忘了。" },
      { es: "It's up to you", ipa: "ɪts ʌp tə ju", zh: "你决定", emoji: "⚖️", ex: "Pizza or tacos? It's up to you.", exZh: "披萨还是塔可？你决定。" }
    ]
  },
  {
    id: "slang", title: "American Slang · 美式俚语", emoji: "🇺🇸", color: "#087f5b", level: 3,
    words: [
      { es: "cool", ipa: "kul", zh: "酷 / 好", emoji: "😎", ex: "That's so cool!", exZh: "太酷了！" },
      { es: "awesome", ipa: "ˈɔsəm", zh: "太棒了", emoji: "🤩", ex: "The concert was awesome.", exZh: "演唱会太棒了。" },
      { es: "dude", ipa: "dud", zh: "哥们儿", emoji: "🧢", ex: "Dude, look at this!", exZh: "哥们儿，看这个！" },
      { es: "buddy", ipa: "ˈbʌdi", zh: "伙计 / 好友", emoji: "🤜", ex: "He's my old buddy.", exZh: "他是我的老朋友。" },
      { es: "hang out", ipa: "hæŋ aʊt", zh: "出去玩 / 待着", emoji: "🛋️", ex: "Let's hang out this weekend.", exZh: "这周末一起出去玩吧。" },
      { es: "chill", ipa: "tʃɪl", zh: "放松 / 淡定", emoji: "🧊", ex: "Just chill at home.", exZh: "就在家放松。" },
      { es: "No way!", ipa: "noʊ weɪ", zh: "不会吧！", emoji: "😱", ex: "No way! You won?", exZh: "不会吧！你赢了？" },
      { es: "for real", ipa: "fɔr ril", zh: "真的 / 认真的", emoji: "💯", ex: "For real, it's free.", exZh: "真的，是免费的。" },
      { es: "gonna", ipa: "ˈɡɔnə", zh: "将要（going to 口语）", emoji: "➡️", ex: "I'm gonna call you later.", exZh: "我晚点打给你。" },
      { es: "wanna", ipa: "ˈwɑnə", zh: "想要（want to 口语）", emoji: "🌟", ex: "Do you wanna come?", exZh: "你想来吗？" },
      { es: "gotta", ipa: "ˈɡɑtə", zh: "必须（got to 口语）", emoji: "🏃", ex: "I gotta go now.", exZh: "我得走了。" },
      { es: "bummer", ipa: "ˈbʌmɚ", zh: "真扫兴 / 真糟糕", emoji: "😩", ex: "It's raining? What a bummer.", exZh: "下雨了？真扫兴。" },
      { es: "hyped", ipa: "haɪpt", zh: "超兴奋", emoji: "🔥", ex: "I'm so hyped for the game.", exZh: "这场比赛我超期待。" },
      { es: "lit", ipa: "lɪt", zh: "嗨爆了", emoji: "🎉", ex: "The party was lit.", exZh: "派对嗨爆了。" }
    ]
  }
];

const SPECIAL_CHARS = [];
APP_CONFIG.specialChars = SPECIAL_CHARS;
APP_CONFIG.sampleText = "Hello! What's up?";
APP_CONFIG.sampleText2 = "Good morning";
APP_CONFIG.customExample = "beach = 海滩\nticket = 票\nswim = 游泳";
APP_CONFIG.appSwitch = { href: "index.html", label: "🇲🇽 切换到西语版 PalabraPad" };

if (typeof module !== "undefined") { module.exports = { UNITS, SPECIAL_CHARS, APP_CONFIG }; }
