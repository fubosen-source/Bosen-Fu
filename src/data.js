// PalabraPad — 墨西哥西班牙语词汇数据
// 每个词条: es (西语), en (英语), zh (中文), emoji (插图), ex (西语例句), exZh (例句中文)
// 词汇特意采用墨西哥用法 (camión=公交车, alberca=游泳池, elote=玉米 等)
// 单元 level: 1=入门 2=进阶 3=流利 (缺省为 1)

const APP_CONFIG = {
  id: "palabrapad",
  name: "PalabraPad",
  langName: "西班牙语",
  subName: "墨西哥西语",
  defaultSubLang: "en",
  useEsIPA: true,
  tts: { prefix: "es", preferLang: /es[-_]mx/i, preferName: /paulina|mexico/i, fallbackLang: "es-MX" },
  kbdTip: "a=á n=ñ, 标点不用打",
  typeHint: "英文键盘直接打: a=á n=ñ u=ü，重音自动补上，标点不用打 · 打错闪红自动忽略 · 描红关掉就是默写",
  voiceMissingHint: "未检测到西班牙语语音。macOS 上请到「系统设置 → 辅助功能 → 朗读内容 → 系统嗓音 → 管理嗓音」下载 <b>Paulina (西班牙语·墨西哥)</b>，即可获得地道的墨西哥口音。",
  voiceTip: "推荐选择带 🏷️ 标记的 es-MX 嗓音（如 Paulina），这是墨西哥口音。",
  levels: { "1": "🌱 Nivel 1 · 入门 — 打招呼和身边的世界", "2": "🌿 Nivel 2 · 进阶 — 吃住行购、看病办事", "3": "🌳 Nivel 3 · 流利 — 观点、文化和地道表达" }
};

const UNITS = [
  {
    id: "saludos",
    title: "Saludos · 问候",
    emoji: "👋",
    color: "#e8590c",
    words: [
      { es: "hola", en: "hello", zh: "你好", emoji: "👋", ex: "¡Hola! ¿Cómo estás?", exZh: "你好！你好吗？" },
      { es: "buenos días", en: "good morning", zh: "早上好", emoji: "🌅", ex: "Buenos días, señora.", exZh: "早上好，女士。" },
      { es: "buenas tardes", en: "good afternoon", zh: "下午好", emoji: "🌤️", ex: "Buenas tardes a todos.", exZh: "大家下午好。" },
      { es: "buenas noches", en: "good night", zh: "晚上好 / 晚安", emoji: "🌙", ex: "Buenas noches, que descanses.", exZh: "晚安，好好休息。" },
      { es: "¿qué onda?", en: "what's up? (MX)", zh: "怎么样？(墨西哥常用)", emoji: "🤙", ex: "¿Qué onda, cómo te va?", exZh: "嘿，最近怎么样？" },
      { es: "¿cómo estás?", en: "how are you?", zh: "你好吗？", emoji: "🙂", ex: "Hola Ana, ¿cómo estás?", exZh: "你好安娜，你好吗？" },
      { es: "bien", en: "well / fine", zh: "好，很好", emoji: "👍", ex: "Estoy muy bien, gracias.", exZh: "我很好，谢谢。" },
      { es: "gracias", en: "thank you", zh: "谢谢", emoji: "🙏", ex: "Muchas gracias por todo.", exZh: "非常感谢你做的一切。" },
      { es: "de nada", en: "you're welcome", zh: "不客气", emoji: "😊", ex: "—Gracias. —De nada.", exZh: "—谢谢。—不客气。" },
      { es: "por favor", en: "please", zh: "请", emoji: "🥺", ex: "Un taco, por favor.", exZh: "请给我一个塔可。" },
      { es: "perdón", en: "sorry / excuse me", zh: "对不起 / 打扰一下", emoji: "😅", ex: "Perdón, ¿dónde está el baño?", exZh: "打扰一下，洗手间在哪里？" },
      { es: "mucho gusto", en: "nice to meet you", zh: "很高兴认识你", emoji: "🤝", ex: "Soy Luis, mucho gusto.", exZh: "我是路易斯，很高兴认识你。" },
      { es: "adiós", en: "goodbye", zh: "再见", emoji: "👋", ex: "Adiós, nos vemos mañana.", exZh: "再见，明天见。" },
      { es: "hasta luego", en: "see you later", zh: "回头见", emoji: "🚪", ex: "Me voy, ¡hasta luego!", exZh: "我走了，回头见！" },
      { es: "sí", en: "yes", zh: "是 / 对", emoji: "✅", ex: "Sí, claro que sí.", exZh: "是的，当然可以。" },
      { es: "no", en: "no", zh: "不 / 不是", emoji: "❌", ex: "No, gracias.", exZh: "不用了，谢谢。" },
      { es: "mande", en: "pardon? (MX)", zh: "您说什么？(墨西哥礼貌用语)", emoji: "👂", ex: "—¡Juan! —¿Mande?", exZh: "—胡安！—您说？" },
      { es: "bienvenido", en: "welcome", zh: "欢迎", emoji: "🎉", ex: "¡Bienvenido a México!", exZh: "欢迎来到墨西哥！" }
    ]
  },
  {
    id: "numeros",
    title: "Números · 数字",
    emoji: "🔢",
    color: "#1971c2",
    words: [
      { es: "cero", en: "zero", zh: "零", emoji: "0️⃣", ex: "El cero es un número.", exZh: "零是一个数字。" },
      { es: "uno", en: "one", zh: "一", emoji: "1️⃣", ex: "Tengo uno solamente.", exZh: "我只有一个。" },
      { es: "dos", en: "two", zh: "二", emoji: "2️⃣", ex: "Dos tacos, por favor.", exZh: "请来两个塔可。" },
      { es: "tres", en: "three", zh: "三", emoji: "3️⃣", ex: "Son las tres de la tarde.", exZh: "现在是下午三点。" },
      { es: "cuatro", en: "four", zh: "四", emoji: "4️⃣", ex: "Hay cuatro sillas.", exZh: "有四把椅子。" },
      { es: "cinco", en: "five", zh: "五", emoji: "5️⃣", ex: "Cinco pesos, joven.", exZh: "五比索，小伙子。" },
      { es: "seis", en: "six", zh: "六", emoji: "6️⃣", ex: "Trabajo seis días.", exZh: "我工作六天。" },
      { es: "siete", en: "seven", zh: "七", emoji: "7️⃣", ex: "La semana tiene siete días.", exZh: "一周有七天。" },
      { es: "ocho", en: "eight", zh: "八", emoji: "8️⃣", ex: "Llego a las ocho.", exZh: "我八点到。" },
      { es: "nueve", en: "nine", zh: "九", emoji: "9️⃣", ex: "Son nueve pesos.", exZh: "九比索。" },
      { es: "diez", en: "ten", zh: "十", emoji: "🔟", ex: "Cuento hasta diez.", exZh: "我数到十。" },
      { es: "veinte", en: "twenty", zh: "二十", emoji: "💴", ex: "Cuesta veinte pesos.", exZh: "二十比索。" },
      { es: "cincuenta", en: "fifty", zh: "五十", emoji: "💵", ex: "Un billete de cincuenta.", exZh: "一张五十的钞票。" },
      { es: "cien", en: "one hundred", zh: "一百", emoji: "💯", ex: "Cien por ciento seguro.", exZh: "百分之百确定。" },
      { es: "mil", en: "one thousand", zh: "一千", emoji: "🏦", ex: "Mil gracias, amigo.", exZh: "万分感谢，朋友。" },
      { es: "el peso", en: "peso (currency)", zh: "比索（货币）", emoji: "🪙", ex: "¿Cuántos pesos cuesta?", exZh: "多少比索？" },
      { es: "¿cuánto cuesta?", en: "how much is it?", zh: "多少钱？", emoji: "🏷️", ex: "¿Cuánto cuesta el elote?", exZh: "这个玉米多少钱？" }
    ]
  },
  {
    id: "comida",
    title: "Comida mexicana · 墨西哥美食",
    emoji: "🌮",
    color: "#2f9e44",
    words: [
      { es: "el taco", en: "taco", zh: "塔可（玉米卷饼）", emoji: "🌮", ex: "Los tacos al pastor son deliciosos.", exZh: "墨西哥烤肉塔可非常好吃。" },
      { es: "la tortilla", en: "tortilla", zh: "玉米薄饼", emoji: "🫓", ex: "Compra un kilo de tortillas.", exZh: "买一公斤玉米饼。" },
      { es: "el elote", en: "corn on the cob (MX)", zh: "玉米（墨西哥叫法）", emoji: "🌽", ex: "El elote con chile es lo mejor.", exZh: "加辣椒的玉米最棒了。" },
      { es: "la quesadilla", en: "quesadilla", zh: "芝士烤饼", emoji: "🧀", ex: "Una quesadilla de queso, por favor.", exZh: "请来一份芝士烤饼。" },
      { es: "el tamal", en: "tamale", zh: "墨西哥粽子", emoji: "🫔", ex: "Mi abuela hace tamales ricos.", exZh: "我奶奶做的塔玛雷很好吃。" },
      { es: "el pozole", en: "pozole (hominy soup)", zh: "玉米浓汤", emoji: "🍲", ex: "Los jueves comemos pozole.", exZh: "我们每周四喝玉米浓汤。" },
      { es: "la salsa", en: "salsa / sauce", zh: "萨尔萨辣酱", emoji: "🥫", ex: "¿La salsa pica mucho?", exZh: "这个辣酱很辣吗？" },
      { es: "el chile", en: "chili pepper", zh: "辣椒", emoji: "🌶️", ex: "El chile habanero pica muchísimo.", exZh: "哈瓦那辣椒特别辣。" },
      { es: "el aguacate", en: "avocado", zh: "牛油果", emoji: "🥑", ex: "El aguacate está caro.", exZh: "牛油果很贵。" },
      { es: "el guacamole", en: "guacamole", zh: "牛油果酱", emoji: "🥗", ex: "Quiero totopos con guacamole.", exZh: "我想要玉米片配牛油果酱。" },
      { es: "los frijoles", en: "beans", zh: "豆子", emoji: "🫘", ex: "Frijoles con arroz, clásico.", exZh: "豆子配米饭，经典搭配。" },
      { es: "la torta", en: "Mexican sandwich", zh: "墨西哥三明治", emoji: "🥪", ex: "Una torta de jamón, por favor.", exZh: "请来一个火腿三明治。" },
      { es: "el mole", en: "mole sauce", zh: "莫莱酱", emoji: "🍛", ex: "El mole poblano lleva chocolate.", exZh: "普埃布拉莫莱酱里有巧克力。" },
      { es: "la horchata", en: "horchata (rice drink)", zh: "墨西哥米浆饮料", emoji: "🥛", ex: "Un agua de horchata, grande.", exZh: "来一大杯米浆。" },
      { es: "el agua fresca", en: "fruit water", zh: "鲜果水", emoji: "🧃", ex: "Hay agua fresca de jamaica.", exZh: "有洛神花鲜果水。" },
      { es: "el café", en: "coffee", zh: "咖啡", emoji: "☕", ex: "Un café de olla, por favor.", exZh: "请来一杯陶罐咖啡。" },
      { es: "el pan dulce", en: "sweet bread", zh: "甜面包", emoji: "🥐", ex: "Compré conchas y pan dulce.", exZh: "我买了贝壳包和甜面包。" },
      { es: "el churro", en: "churro", zh: "吉拿棒", emoji: "🥖", ex: "Churros con chocolate caliente.", exZh: "吉拿棒配热巧克力。" },
      { es: "picante", en: "spicy", zh: "辣的", emoji: "🔥", ex: "¡Está muy picante!", exZh: "太辣了！" },
      { es: "sabroso", en: "tasty", zh: "美味的", emoji: "😋", ex: "Todo está muy sabroso.", exZh: "所有东西都很好吃。" },
      { es: "la propina", en: "tip", zh: "小费", emoji: "💰", ex: "Dejamos propina en la mesa.", exZh: "我们把小费留在桌上。" },
      { es: "la cuenta", en: "the bill", zh: "账单", emoji: "🧾", ex: "La cuenta, por favor.", exZh: "请结账。" }
    ]
  },
  {
    id: "familia",
    title: "Familia · 家庭",
    emoji: "👨‍👩‍👧‍👦",
    color: "#9c36b5",
    words: [
      { es: "la familia", en: "family", zh: "家庭", emoji: "👨‍👩‍👧‍👦", ex: "Mi familia es grande.", exZh: "我的家庭很大。" },
      { es: "la madre", en: "mother", zh: "母亲", emoji: "👩", ex: "Mi madre cocina muy bien.", exZh: "我妈妈做饭很好吃。" },
      { es: "el padre", en: "father", zh: "父亲", emoji: "👨", ex: "Mi padre trabaja mucho.", exZh: "我爸爸工作很努力。" },
      { es: "el hermano", en: "brother", zh: "兄弟", emoji: "👦", ex: "Tengo un hermano menor.", exZh: "我有一个弟弟。" },
      { es: "la hermana", en: "sister", zh: "姐妹", emoji: "👧", ex: "Mi hermana vive en Puebla.", exZh: "我姐姐住在普埃布拉。" },
      { es: "el abuelo", en: "grandfather", zh: "爷爷 / 外公", emoji: "👴", ex: "Mi abuelo cuenta historias.", exZh: "我爷爷讲故事。" },
      { es: "la abuela", en: "grandmother", zh: "奶奶 / 外婆", emoji: "👵", ex: "La abuela hace tamales.", exZh: "奶奶做塔玛雷。" },
      { es: "el hijo", en: "son", zh: "儿子", emoji: "🧒", ex: "Su hijo tiene cinco años.", exZh: "他儿子五岁了。" },
      { es: "la hija", en: "daughter", zh: "女儿", emoji: "👧", ex: "Mi hija estudia español.", exZh: "我女儿在学西班牙语。" },
      { es: "el tío", en: "uncle", zh: "叔叔 / 舅舅", emoji: "🧔", ex: "Mi tío vive en Monterrey.", exZh: "我叔叔住在蒙特雷。" },
      { es: "la tía", en: "aunt", zh: "阿姨 / 姑姑", emoji: "👩‍🦱", ex: "La tía trae regalos.", exZh: "阿姨带来了礼物。" },
      { es: "el primo", en: "cousin (m.)", zh: "堂/表兄弟", emoji: "🧑", ex: "Juego fútbol con mi primo.", exZh: "我和表兄弟踢足球。" },
      { es: "el esposo", en: "husband", zh: "丈夫", emoji: "🤵", ex: "Su esposo es doctor.", exZh: "她丈夫是医生。" },
      { es: "la esposa", en: "wife", zh: "妻子", emoji: "👰", ex: "Mi esposa habla chino.", exZh: "我妻子会说中文。" },
      { es: "el bebé", en: "baby", zh: "婴儿", emoji: "👶", ex: "El bebé duerme mucho.", exZh: "宝宝睡得很多。" },
      { es: "el amigo", en: "friend", zh: "朋友", emoji: "🫂", ex: "Eres mi mejor amigo.", exZh: "你是我最好的朋友。" }
    ]
  },
  {
    id: "colores",
    title: "Colores · 颜色",
    emoji: "🎨",
    color: "#e64980",
    words: [
      { es: "rojo", en: "red", zh: "红色", emoji: "🔴", ex: "El chile es rojo.", exZh: "辣椒是红色的。" },
      { es: "azul", en: "blue", zh: "蓝色", emoji: "🔵", ex: "El cielo está azul.", exZh: "天空是蓝色的。" },
      { es: "verde", en: "green", zh: "绿色", emoji: "🟢", ex: "El aguacate es verde.", exZh: "牛油果是绿色的。" },
      { es: "amarillo", en: "yellow", zh: "黄色", emoji: "🟡", ex: "El sol es amarillo.", exZh: "太阳是黄色的。" },
      { es: "naranja", en: "orange", zh: "橙色", emoji: "🟠", ex: "Mi camisa es naranja.", exZh: "我的衬衫是橙色的。" },
      { es: "morado", en: "purple", zh: "紫色", emoji: "🟣", ex: "Las flores son moradas.", exZh: "这些花是紫色的。" },
      { es: "rosa", en: "pink", zh: "粉色", emoji: "🌸", ex: "La casa rosa es famosa.", exZh: "那座粉色房子很有名。" },
      { es: "negro", en: "black", zh: "黑色", emoji: "⚫", ex: "El gato negro duerme.", exZh: "黑猫在睡觉。" },
      { es: "blanco", en: "white", zh: "白色", emoji: "⚪", ex: "El arroz es blanco.", exZh: "米饭是白色的。" },
      { es: "gris", en: "gray", zh: "灰色", emoji: "🌫️", ex: "El día está gris.", exZh: "今天天色灰蒙蒙的。" },
      { es: "café", en: "brown (MX)", zh: "棕色（墨西哥说法）", emoji: "🟤", ex: "Tengo ojos cafés.", exZh: "我的眼睛是棕色的。" },
      { es: "el color", en: "color", zh: "颜色", emoji: "🎨", ex: "¿Cuál es tu color favorito?", exZh: "你最喜欢什么颜色？" }
    ]
  },
  {
    id: "animales",
    title: "Animales · 动物",
    emoji: "🐾",
    color: "#f08c00",
    words: [
      { es: "el perro", en: "dog", zh: "狗", emoji: "🐶", ex: "El perro corre en el parque.", exZh: "狗在公园里跑。" },
      { es: "el gato", en: "cat", zh: "猫", emoji: "🐱", ex: "El gato duerme en el sofá.", exZh: "猫在沙发上睡觉。" },
      { es: "el pájaro", en: "bird", zh: "鸟", emoji: "🐦", ex: "El pájaro canta bonito.", exZh: "鸟儿唱得很好听。" },
      { es: "el caballo", en: "horse", zh: "马", emoji: "🐴", ex: "Monté a caballo en el rancho.", exZh: "我在牧场骑了马。" },
      { es: "la vaca", en: "cow", zh: "牛", emoji: "🐮", ex: "La vaca da leche.", exZh: "奶牛产奶。" },
      { es: "el pez", en: "fish", zh: "鱼", emoji: "🐟", ex: "Hay peces en el lago.", exZh: "湖里有鱼。" },
      { es: "el pollo", en: "chicken", zh: "鸡", emoji: "🐔", ex: "Tacos de pollo, por favor.", exZh: "请来鸡肉塔可。" },
      { es: "el ratón", en: "mouse", zh: "老鼠", emoji: "🐭", ex: "El gato persigue al ratón.", exZh: "猫在追老鼠。" },
      { es: "la mariposa", en: "butterfly", zh: "蝴蝶", emoji: "🦋", ex: "Las mariposas monarca llegan a Michoacán.", exZh: "帝王蝶飞到米却肯州。" },
      { es: "el ajolote", en: "axolotl (MX)", zh: "美西螈（墨西哥国宝）", emoji: "🦎", ex: "El ajolote vive en Xochimilco.", exZh: "美西螈生活在霍奇米尔科。" },
      { es: "el burro", en: "donkey", zh: "驴", emoji: "🫏", ex: "El burro carga la leña.", exZh: "驴驮着柴火。" },
      { es: "la tortuga", en: "turtle", zh: "乌龟", emoji: "🐢", ex: "La tortuga camina despacio.", exZh: "乌龟走得很慢。" },
      { es: "el águila", en: "eagle", zh: "鹰", emoji: "🦅", ex: "El águila está en la bandera de México.", exZh: "鹰在墨西哥国旗上。" },
      { es: "el jaguar", en: "jaguar", zh: "美洲豹", emoji: "🐆", ex: "El jaguar vive en la selva.", exZh: "美洲豹生活在丛林里。" }
    ]
  },
  {
    id: "ciudad",
    title: "En la ciudad · 城市生活",
    emoji: "🏙️",
    color: "#0c8599",
    words: [
      { es: "la calle", en: "street", zh: "街道", emoji: "🛣️", ex: "Vivo en esta calle.", exZh: "我住在这条街上。" },
      { es: "el camión", en: "bus (MX)", zh: "公交车（墨西哥叫法）", emoji: "🚌", ex: "Tomo el camión al trabajo.", exZh: "我坐公交车上班。" },
      { es: "el metro", en: "subway", zh: "地铁", emoji: "🚇", ex: "El metro de la CDMX es enorme.", exZh: "墨西哥城的地铁非常大。" },
      { es: "el mercado", en: "market", zh: "市场", emoji: "🛒", ex: "Compro fruta en el mercado.", exZh: "我在市场买水果。" },
      { es: "el tianguis", en: "street market (MX)", zh: "露天集市（墨西哥特色）", emoji: "⛺", ex: "El tianguis es los domingos.", exZh: "露天集市每周日开。" },
      { es: "la plaza", en: "town square", zh: "广场", emoji: "⛲", ex: "Hay música en la plaza.", exZh: "广场上有音乐。" },
      { es: "el zócalo", en: "main square (MX)", zh: "中心广场（墨西哥叫法）", emoji: "🏛️", ex: "El Zócalo está lleno de gente.", exZh: "中心广场挤满了人。" },
      { es: "el banco", en: "bank", zh: "银行", emoji: "🏦", ex: "El banco abre a las nueve.", exZh: "银行九点开门。" },
      { es: "la farmacia", en: "pharmacy", zh: "药店", emoji: "💊", ex: "La farmacia está en la esquina.", exZh: "药店在街角。" },
      { es: "la alberca", en: "swimming pool (MX)", zh: "游泳池（墨西哥叫法）", emoji: "🏊", ex: "Los niños nadan en la alberca.", exZh: "孩子们在游泳池游泳。" },
      { es: "la colonia", en: "neighborhood (MX)", zh: "街区（墨西哥叫法）", emoji: "🏘️", ex: "Vivo en la colonia Roma.", exZh: "我住在罗马区。" },
      { es: "la escuela", en: "school", zh: "学校", emoji: "🏫", ex: "La escuela está cerca.", exZh: "学校离得很近。" },
      { es: "el hospital", en: "hospital", zh: "医院", emoji: "🏥", ex: "El hospital es nuevo.", exZh: "这家医院是新的。" },
      { es: "la iglesia", en: "church", zh: "教堂", emoji: "⛪", ex: "La iglesia es muy antigua.", exZh: "这座教堂很古老。" },
      { es: "¿dónde está...?", en: "where is...?", zh: "……在哪里？", emoji: "🧭", ex: "¿Dónde está la estación?", exZh: "车站在哪里？" },
      { es: "a la derecha", en: "to the right", zh: "在右边", emoji: "➡️", ex: "El baño está a la derecha.", exZh: "洗手间在右边。" },
      { es: "a la izquierda", en: "to the left", zh: "在左边", emoji: "⬅️", ex: "Da vuelta a la izquierda.", exZh: "向左转。" }
    ]
  },
  {
    id: "tiempo",
    title: "El tiempo · 时间",
    emoji: "⏰",
    color: "#6741d9",
    words: [
      { es: "hoy", en: "today", zh: "今天", emoji: "📅", ex: "Hoy es un buen día.", exZh: "今天是个好日子。" },
      { es: "mañana", en: "tomorrow / morning", zh: "明天 / 早上", emoji: "🌄", ex: "Mañana vamos al tianguis.", exZh: "明天我们去集市。" },
      { es: "ayer", en: "yesterday", zh: "昨天", emoji: "⏪", ex: "Ayer comí pozole.", exZh: "昨天我喝了玉米浓汤。" },
      { es: "ahorita", en: "right now / in a bit (MX)", zh: "马上 / 一会儿（墨西哥万能词）", emoji: "⏳", ex: "Ahorita voy, espérame.", exZh: "我马上就来，等等我。" },
      { es: "el lunes", en: "Monday", zh: "星期一", emoji: "1️⃣", ex: "El lunes empiezo clases.", exZh: "星期一我开始上课。" },
      { es: "el martes", en: "Tuesday", zh: "星期二", emoji: "2️⃣", ex: "El martes hay tianguis.", exZh: "星期二有集市。" },
      { es: "el miércoles", en: "Wednesday", zh: "星期三", emoji: "3️⃣", ex: "El miércoles descanso.", exZh: "星期三我休息。" },
      { es: "el jueves", en: "Thursday", zh: "星期四", emoji: "4️⃣", ex: "El jueves hay pozole.", exZh: "星期四有玉米浓汤。" },
      { es: "el viernes", en: "Friday", zh: "星期五", emoji: "5️⃣", ex: "¡Por fin es viernes!", exZh: "终于到星期五了！" },
      { es: "el sábado", en: "Saturday", zh: "星期六", emoji: "6️⃣", ex: "El sábado hay fiesta.", exZh: "星期六有派对。" },
      { es: "el domingo", en: "Sunday", zh: "星期日", emoji: "7️⃣", ex: "El domingo como con la familia.", exZh: "星期天我和家人一起吃饭。" },
      { es: "la semana", en: "week", zh: "星期 / 周", emoji: "🗓️", ex: "Nos vemos la próxima semana.", exZh: "下周见。" },
      { es: "el mes", en: "month", zh: "月", emoji: "📆", ex: "Este mes viajo a Oaxaca.", exZh: "这个月我去瓦哈卡旅行。" },
      { es: "el año", en: "year", zh: "年", emoji: "🎆", ex: "¡Feliz año nuevo!", exZh: "新年快乐！" },
      { es: "la hora", en: "hour / time", zh: "小时 / 时间", emoji: "🕐", ex: "¿Qué hora es?", exZh: "现在几点了？" },
      { es: "temprano", en: "early", zh: "早", emoji: "🐓", ex: "Me levanto temprano.", exZh: "我起得很早。" },
      { es: "tarde", en: "late", zh: "晚 / 迟", emoji: "🌆", ex: "Llegué tarde al trabajo.", exZh: "我上班迟到了。" }
    ]
  },
  {
    id: "verbos",
    title: "Verbos · 常用动词",
    emoji: "🏃",
    color: "#c92a2a",
    words: [
      { es: "ser", en: "to be (essence)", zh: "是（本质）", emoji: "🧬", ex: "Soy de China.", exZh: "我来自中国。" },
      { es: "estar", en: "to be (state)", zh: "是 / 在（状态）", emoji: "📍", ex: "Estoy en la Ciudad de México.", exZh: "我在墨西哥城。" },
      { es: "tener", en: "to have", zh: "有", emoji: "🎒", ex: "Tengo hambre.", exZh: "我饿了。" },
      { es: "ir", en: "to go", zh: "去", emoji: "🚶", ex: "Voy al mercado.", exZh: "我去市场。" },
      { es: "comer", en: "to eat", zh: "吃", emoji: "🍽️", ex: "¿Quieres comer tacos?", exZh: "你想吃塔可吗？" },
      { es: "beber", en: "to drink", zh: "喝", emoji: "🥤", ex: "Bebo agua fresca.", exZh: "我喝鲜果水。" },
      { es: "hablar", en: "to speak", zh: "说话", emoji: "🗣️", ex: "Hablo un poco de español.", exZh: "我会说一点西班牙语。" },
      { es: "platicar", en: "to chat (MX)", zh: "聊天（墨西哥叫法）", emoji: "💬", ex: "Me gusta platicar contigo.", exZh: "我喜欢和你聊天。" },
      { es: "trabajar", en: "to work", zh: "工作", emoji: "💼", ex: "Trabajo desde casa.", exZh: "我在家工作。" },
      { es: "estudiar", en: "to study", zh: "学习", emoji: "📚", ex: "Estudio español todos los días.", exZh: "我每天学西班牙语。" },
      { es: "querer", en: "to want / love", zh: "想要 / 爱", emoji: "❤️", ex: "Quiero aprender más.", exZh: "我想学更多。" },
      { es: "poder", en: "to be able to", zh: "能 / 可以", emoji: "💪", ex: "¿Puedes ayudarme?", exZh: "你能帮我吗？" },
      { es: "hacer", en: "to do / make", zh: "做", emoji: "🔨", ex: "¿Qué haces mañana?", exZh: "你明天做什么？" },
      { es: "vivir", en: "to live", zh: "住 / 生活", emoji: "🏠", ex: "Vivo en Guadalajara.", exZh: "我住在瓜达拉哈拉。" },
      { es: "comprar", en: "to buy", zh: "买", emoji: "🛍️", ex: "Compro fruta en el tianguis.", exZh: "我在集市买水果。" },
      { es: "aprender", en: "to learn", zh: "学会", emoji: "🧠", ex: "Aprendo algo nuevo cada día.", exZh: "我每天都学到新东西。" },
      { es: "escuchar", en: "to listen", zh: "听", emoji: "🎧", ex: "Escucho música mexicana.", exZh: "我听墨西哥音乐。" },
      { es: "bailar", en: "to dance", zh: "跳舞", emoji: "💃", ex: "Bailamos en la fiesta.", exZh: "我们在派对上跳舞。" }
    ]
  },
  {
    id: "jerga",
    title: "Jerga mexicana · 墨西哥俚语",
    emoji: "🇲🇽",
    color: "#087f5b",
    words: [
      { es: "¡órale!", en: "wow! / let's go! (MX)", zh: "哇！/ 来吧！（万能感叹）", emoji: "🤩", ex: "¡Órale, qué bonito está!", exZh: "哇，太漂亮了！" },
      { es: "güey", en: "dude / buddy (MX)", zh: "哥们儿 / 兄弟", emoji: "🧢", ex: "¿Qué onda, güey?", exZh: "怎么样啊，哥们儿？" },
      { es: "chido", en: "cool (MX)", zh: "酷 / 棒", emoji: "😎", ex: "Tu casa está bien chida.", exZh: "你家真的很酷。" },
      { es: "padre", en: "cool / awesome (MX)", zh: "很棒（字面意思是\"父亲\"）", emoji: "🎸", ex: "¡Qué padre está tu coche!", exZh: "你的车太棒了！" },
      { es: "¡no manches!", en: "no way! (MX)", zh: "不会吧！/ 太夸张了！", emoji: "😱", ex: "¡No manches, ganamos!", exZh: "不会吧，我们赢了！" },
      { es: "la neta", en: "the truth / really (MX)", zh: "真的 / 实话", emoji: "💯", ex: "La neta, me encanta México.", exZh: "说真的，我爱墨西哥。" },
      { es: "sale", en: "okay / deal (MX)", zh: "行 / 成交", emoji: "🤝", ex: "—¿Vamos por tacos? —¡Sale!", exZh: "—去吃塔可吗？—走起！" },
      { es: "la chamba", en: "work / job (MX)", zh: "工作（口语）", emoji: "🛠️", ex: "Tengo mucha chamba hoy.", exZh: "我今天工作很多。" },
      { es: "¡aguas!", en: "watch out! (MX)", zh: "小心！（字面\"水\"）", emoji: "⚠️", ex: "¡Aguas con el coche!", exZh: "小心那辆车！" },
      { es: "fresa", en: "preppy / posh (MX)", zh: "娇气的富家子（字面\"草莓\"）", emoji: "🍓", ex: "Habla muy fresa.", exZh: "他说话很\"贵族腔\"。" },
      { es: "el antro", en: "nightclub (MX)", zh: "夜店", emoji: "🪩", ex: "Vamos al antro el sábado.", exZh: "我们周六去夜店。" },
      { es: "crudo", en: "hungover (MX)", zh: "宿醉的（字面\"生的\"）", emoji: "🥴", ex: "Estoy bien crudo hoy.", exZh: "我今天宿醉得厉害。" },
      { es: "la lana", en: "money (MX)", zh: "钱（字面\"羊毛\"）", emoji: "💸", ex: "No traigo lana.", exZh: "我没带钱。" },
      { es: "chafa", en: "cheap / low quality (MX)", zh: "劣质的", emoji: "🗑️", ex: "Ese celular está chafa.", exZh: "那个手机很劣质。" },
      { es: "¡qué padre!", en: "how cool! (MX)", zh: "太棒了！", emoji: "🎉", ex: "¡Qué padre tu viaje!", exZh: "你的旅行太棒了！" },
      { es: "echarle ganas", en: "to give it your all (MX)", zh: "加油 / 全力以赴", emoji: "🔥", ex: "¡Échale ganas al español!", exZh: "学西班牙语要加油哦！" }
    ]
  }
,
  // ==================== Nivel 1 · 入门 (补充) ====================
  {
    id: "cuerpo", title: "El cuerpo · 身体", emoji: "🫀", color: "#d6336c", level: 1,
    words: [
      { es: "la cabeza", en: "head", zh: "头", emoji: "🧠", ex: "Me duele la cabeza.", exZh: "我头疼。" },
      { es: "el ojo", en: "eye", zh: "眼睛", emoji: "👁️", ex: "Tiene ojos grandes.", exZh: "他/她眼睛很大。" },
      { es: "la nariz", en: "nose", zh: "鼻子", emoji: "👃", ex: "Me pica la nariz.", exZh: "我鼻子痒。" },
      { es: "la boca", en: "mouth", zh: "嘴", emoji: "👄", ex: "Abre la boca.", exZh: "张开嘴。" },
      { es: "la oreja", en: "ear", zh: "耳朵", emoji: "👂", ex: "El elefante tiene orejas grandes.", exZh: "大象耳朵很大。" },
      { es: "el diente", en: "tooth", zh: "牙齿", emoji: "🦷", ex: "Me lavo los dientes.", exZh: "我刷牙。" },
      { es: "la mano", en: "hand", zh: "手", emoji: "✋", ex: "Dame la mano.", exZh: "把手给我。" },
      { es: "el brazo", en: "arm", zh: "手臂", emoji: "💪", ex: "Me duele el brazo.", exZh: "我胳膊疼。" },
      { es: "la pierna", en: "leg", zh: "腿", emoji: "🦵", ex: "Corro con las piernas.", exZh: "我用腿跑步。" },
      { es: "el pie", en: "foot", zh: "脚", emoji: "🦶", ex: "Voy a pie al trabajo.", exZh: "我走路上班。" },
      { es: "el pelo", en: "hair", zh: "头发", emoji: "💇", ex: "Tiene el pelo negro.", exZh: "他/她头发是黑色的。" },
      { es: "la espalda", en: "back", zh: "背", emoji: "🧍", ex: "Me duele la espalda.", exZh: "我背疼。" },
      { es: "el corazón", en: "heart", zh: "心脏", emoji: "❤️", ex: "Mi corazón late rápido.", exZh: "我的心跳得很快。" },
      { es: "el estómago", en: "stomach", zh: "胃", emoji: "🫃", ex: "Me duele el estómago.", exZh: "我胃疼。" },
      { es: "la cara", en: "face", zh: "脸", emoji: "🙂", ex: "Lávate la cara.", exZh: "洗把脸。" },
      { es: "el dedo", en: "finger", zh: "手指", emoji: "👆", ex: "Me corté el dedo.", exZh: "我割到手指了。" }
    ]
  },
  {
    id: "ropa", title: "La ropa · 衣服", emoji: "👕", color: "#7048e8", level: 1,
    words: [
      { es: "la playera", en: "T-shirt (MX)", zh: "T恤（墨西哥叫法）", emoji: "👕", ex: "Traigo una playera blanca.", exZh: "我穿着白T恤。" },
      { es: "la camisa", en: "shirt", zh: "衬衫", emoji: "👔", ex: "La camisa está limpia.", exZh: "衬衫是干净的。" },
      { es: "el pantalón", en: "pants", zh: "裤子", emoji: "👖", ex: "Este pantalón me queda bien.", exZh: "这条裤子很合身。" },
      { es: "los zapatos", en: "shoes", zh: "鞋", emoji: "👟", ex: "Mis zapatos son nuevos.", exZh: "我的鞋是新的。" },
      { es: "el vestido", en: "dress", zh: "连衣裙", emoji: "👗", ex: "Qué bonito vestido.", exZh: "裙子真漂亮。" },
      { es: "la falda", en: "skirt", zh: "半身裙", emoji: "🩱", ex: "La falda es azul.", exZh: "裙子是蓝色的。" },
      { es: "el sombrero", en: "hat", zh: "帽子", emoji: "👒", ex: "El mariachi usa sombrero.", exZh: "墨西哥乐手戴帽子。" },
      { es: "la chamarra", en: "jacket (MX)", zh: "夹克（墨西哥叫法）", emoji: "🧥", ex: "Hace frío, trae chamarra.", exZh: "冷了，带上夹克。" },
      { es: "los calcetines", en: "socks", zh: "袜子", emoji: "🧦", ex: "Calcetines de colores.", exZh: "彩色的袜子。" },
      { es: "los lentes", en: "glasses (MX)", zh: "眼镜（墨西哥叫法）", emoji: "👓", ex: "No veo sin lentes.", exZh: "不戴眼镜我看不见。" },
      { es: "la bolsa", en: "bag / purse (MX)", zh: "包（墨西哥叫法）", emoji: "👜", ex: "Dejé la bolsa en casa.", exZh: "我把包忘在家里了。" },
      { es: "el reloj", en: "watch / clock", zh: "手表 / 钟", emoji: "⌚", ex: "Mi reloj está atrasado.", exZh: "我的表慢了。" },
      { es: "la gorra", en: "cap", zh: "棒球帽", emoji: "🧢", ex: "Siempre usa gorra.", exZh: "他总是戴棒球帽。" },
      { es: "el traje", en: "suit", zh: "西装", emoji: "🤵", ex: "Lleva traje al trabajo.", exZh: "他穿西装上班。" }
    ]
  },
  {
    id: "clima", title: "El clima · 天气", emoji: "🌦️", color: "#1098ad", level: 1,
    words: [
      { es: "hace calor", en: "it's hot", zh: "天气热", emoji: "🥵", ex: "En mayo hace mucho calor.", exZh: "五月天气很热。" },
      { es: "hace frío", en: "it's cold", zh: "天气冷", emoji: "🥶", ex: "En la noche hace frío.", exZh: "晚上很冷。" },
      { es: "hace sol", en: "it's sunny", zh: "晴天", emoji: "☀️", ex: "Hoy hace sol, vamos al parque.", exZh: "今天出太阳，我们去公园吧。" },
      { es: "llueve", en: "it rains", zh: "下雨", emoji: "🌧️", ex: "En junio llueve mucho.", exZh: "六月经常下雨。" },
      { es: "la lluvia", en: "rain", zh: "雨", emoji: "💧", ex: "Me gusta el sonido de la lluvia.", exZh: "我喜欢雨声。" },
      { es: "el viento", en: "wind", zh: "风", emoji: "🌬️", ex: "Hay mucho viento hoy.", exZh: "今天风很大。" },
      { es: "la nube", en: "cloud", zh: "云", emoji: "☁️", ex: "El cielo está lleno de nubes.", exZh: "天上全是云。" },
      { es: "el cielo", en: "sky", zh: "天空", emoji: "🌌", ex: "El cielo está despejado.", exZh: "天空晴朗。" },
      { es: "la tormenta", en: "storm", zh: "暴风雨", emoji: "⛈️", ex: "Viene una tormenta fuerte.", exZh: "一场大暴风雨要来了。" },
      { es: "nieva", en: "it snows", zh: "下雪", emoji: "❄️", ex: "En México casi nunca nieva.", exZh: "墨西哥几乎不下雪。" },
      { es: "húmedo", en: "humid", zh: "潮湿的", emoji: "💦", ex: "Cancún es muy húmedo.", exZh: "坎昆非常潮湿。" },
      { es: "seco", en: "dry", zh: "干燥的", emoji: "🏜️", ex: "El norte es seco.", exZh: "北部很干燥。" },
      { es: "la temperatura", en: "temperature", zh: "气温", emoji: "🌡️", ex: "¿Cuál es la temperatura hoy?", exZh: "今天气温多少？" },
      { es: "el arcoíris", en: "rainbow", zh: "彩虹", emoji: "🌈", ex: "Salió un arcoíris después de la lluvia.", exZh: "雨后出了彩虹。" }
    ]
  },
  {
    id: "casa", title: "La casa · 家居", emoji: "🏡", color: "#e8590c", level: 1,
    words: [
      { es: "la casa", en: "house / home", zh: "房子 / 家", emoji: "🏠", ex: "Mi casa es tu casa.", exZh: "我家就是你家。（墨西哥待客名言）" },
      { es: "el cuarto", en: "room / bedroom (MX)", zh: "房间（墨西哥叫法）", emoji: "🛏️", ex: "Mi cuarto es pequeño.", exZh: "我的房间很小。" },
      { es: "la cocina", en: "kitchen", zh: "厨房", emoji: "🍳", ex: "Mamá está en la cocina.", exZh: "妈妈在厨房。" },
      { es: "el baño", en: "bathroom", zh: "洗手间", emoji: "🚿", ex: "¿Dónde está el baño?", exZh: "洗手间在哪儿？" },
      { es: "la sala", en: "living room", zh: "客厅", emoji: "🛋️", ex: "Vemos la tele en la sala.", exZh: "我们在客厅看电视。" },
      { es: "la mesa", en: "table", zh: "桌子", emoji: "🍽️", ex: "La comida está en la mesa.", exZh: "饭在桌上。" },
      { es: "la silla", en: "chair", zh: "椅子", emoji: "🪑", ex: "Siéntate en la silla.", exZh: "坐在椅子上。" },
      { es: "la cama", en: "bed", zh: "床", emoji: "🛌", ex: "Quiero dormir en mi cama.", exZh: "我想在我的床上睡觉。" },
      { es: "la puerta", en: "door", zh: "门", emoji: "🚪", ex: "Cierra la puerta, por favor.", exZh: "请把门关上。" },
      { es: "la ventana", en: "window", zh: "窗户", emoji: "🪟", ex: "Abre la ventana.", exZh: "打开窗户。" },
      { es: "la luz", en: "light", zh: "灯 / 光", emoji: "💡", ex: "Apaga la luz.", exZh: "关灯。" },
      { es: "el refrigerador", en: "fridge", zh: "冰箱", emoji: "🧊", ex: "Hay agua en el refrigerador.", exZh: "冰箱里有水。" },
      { es: "la estufa", en: "stove (MX)", zh: "炉灶（墨西哥叫法）", emoji: "🔥", ex: "La sopa está en la estufa.", exZh: "汤在炉子上。" },
      { es: "la llave", en: "key / faucet (MX)", zh: "钥匙 / 水龙头", emoji: "🔑", ex: "Perdí mis llaves.", exZh: "我把钥匙丢了。" },
      { es: "la escalera", en: "stairs", zh: "楼梯", emoji: "🪜", ex: "Sube por la escalera.", exZh: "走楼梯上去。" },
      { es: "el piso", en: "floor / story (MX)", zh: "地板 / 楼层", emoji: "🏢", ex: "Vivo en el tercer piso.", exZh: "我住三楼。" },
      { es: "la renta", en: "rent (MX)", zh: "房租（墨西哥叫法）", emoji: "💵", ex: "La renta sube cada año.", exZh: "房租每年都涨。" },
      { es: "el vecino", en: "neighbor", zh: "邻居", emoji: "🏘️", ex: "Mi vecino es muy amable.", exZh: "我的邻居很友善。" }
    ]
  },
  {
    id: "sentimientos", title: "Los sentimientos · 情绪", emoji: "💛", color: "#f59f00", level: 1,
    words: [
      { es: "feliz", en: "happy", zh: "开心的", emoji: "😄", ex: "Estoy muy feliz hoy.", exZh: "我今天很开心。" },
      { es: "triste", en: "sad", zh: "伤心的", emoji: "😢", ex: "¿Por qué estás triste?", exZh: "你为什么难过？" },
      { es: "enojado", en: "angry (MX)", zh: "生气的（墨西哥用法）", emoji: "😠", ex: "El jefe está enojado.", exZh: "老板生气了。" },
      { es: "cansado", en: "tired", zh: "累的", emoji: "🥱", ex: "Estoy bien cansado.", exZh: "我特别累。" },
      { es: "emocionado", en: "excited", zh: "兴奋的", emoji: "🤩", ex: "Estoy emocionado por el viaje.", exZh: "要去旅行我很兴奋。" },
      { es: "nervioso", en: "nervous", zh: "紧张的", emoji: "😬", ex: "Estoy nervioso por el examen.", exZh: "考试让我很紧张。" },
      { es: "aburrido", en: "bored / boring", zh: "无聊的", emoji: "😑", ex: "La película está aburrida.", exZh: "这部电影很无聊。" },
      { es: "preocupado", en: "worried", zh: "担心的", emoji: "😟", ex: "Mamá está preocupada.", exZh: "妈妈很担心。" },
      { es: "sorprendido", en: "surprised", zh: "惊讶的", emoji: "😲", ex: "Me quedé sorprendido.", exZh: "我很惊讶。" },
      { es: "enamorado", en: "in love", zh: "恋爱中的", emoji: "😍", ex: "Está enamorado de ella.", exZh: "他爱上她了。" },
      { es: "asustado", en: "scared", zh: "害怕的", emoji: "😨", ex: "El perro está asustado.", exZh: "狗吓坏了。" },
      { es: "tranquilo", en: "calm", zh: "平静的 / 别急", emoji: "😌", ex: "Tranquilo, todo va a salir bien.", exZh: "别急，一切都会好的。" },
      { es: "orgulloso", en: "proud", zh: "骄傲的", emoji: "🏅", ex: "Estoy orgulloso de ti.", exZh: "我为你骄傲。" },
      { es: "celoso", en: "jealous", zh: "嫉妒的", emoji: "😒", ex: "No seas celoso.", exZh: "别吃醋。" }
    ]
  },
  // ==================== Nivel 2 · 进阶 ====================
  {
    id: "restaurante", title: "En el restaurante · 餐厅点餐", emoji: "🍽️", color: "#2f9e44", level: 2,
    words: [
      { es: "el menú", en: "menu", zh: "菜单", emoji: "📋", ex: "¿Me trae el menú, por favor?", exZh: "请给我菜单好吗？" },
      { es: "el mesero", en: "waiter (MX)", zh: "服务员（墨西哥叫法）", emoji: "🤵", ex: "El mesero es muy atento.", exZh: "服务员很周到。" },
      { es: "ordenar", en: "to order (MX)", zh: "点餐（墨西哥用法）", emoji: "📝", ex: "¿Listos para ordenar?", exZh: "可以点餐了吗？" },
      { es: "el platillo", en: "dish (MX)", zh: "菜品（墨西哥叫法）", emoji: "🍛", ex: "¿Cuál es el platillo del día?", exZh: "今日特色菜是什么？" },
      { es: "la bebida", en: "drink", zh: "饮料", emoji: "🥤", ex: "¿Qué bebida quieres?", exZh: "你想喝什么？" },
      { es: "el refresco", en: "soda (MX)", zh: "汽水（墨西哥叫法）", emoji: "🧋", ex: "Un refresco bien frío.", exZh: "一瓶冰镇汽水。" },
      { es: "el vaso", en: "glass / cup", zh: "杯子", emoji: "🥛", ex: "Un vaso de agua, por favor.", exZh: "请来一杯水。" },
      { es: "el plato", en: "plate", zh: "盘子", emoji: "🍽️", ex: "El plato está caliente.", exZh: "盘子很烫。" },
      { es: "el tenedor", en: "fork", zh: "叉子", emoji: "🍴", ex: "Me falta un tenedor.", exZh: "我少一把叉子。" },
      { es: "la cuchara", en: "spoon", zh: "勺子", emoji: "🥄", ex: "Una cuchara para la sopa.", exZh: "喝汤要一把勺子。" },
      { es: "el cuchillo", en: "knife", zh: "刀", emoji: "🔪", ex: "El cuchillo no corta.", exZh: "这刀不快。" },
      { es: "la servilleta", en: "napkin", zh: "餐巾纸", emoji: "🧻", ex: "¿Me pasas una servilleta?", exZh: "递我一张餐巾纸好吗？" },
      { es: "para llevar", en: "to go / takeout", zh: "打包带走", emoji: "🥡", ex: "Dos tacos para llevar.", exZh: "两个塔可打包。" },
      { es: "el desayuno", en: "breakfast", zh: "早餐", emoji: "🍳", ex: "El desayuno es a las ocho.", exZh: "早餐八点开始。" },
      { es: "la comida", en: "lunch / food (MX)", zh: "午饭（墨西哥用法）", emoji: "🌯", ex: "La comida es a las dos.", exZh: "午饭两点吃。（墨西哥午饭较晚）" },
      { es: "la cena", en: "dinner", zh: "晚餐", emoji: "🌙", ex: "¿Qué hay de cenar?", exZh: "晚饭吃什么？" },
      { es: "¡provecho!", en: "enjoy your meal (MX)", zh: "用餐愉快（墨西哥习惯用语）", emoji: "😋", ex: "—¡Provecho! —Gracias.", exZh: "—用餐愉快！—谢谢。" }
    ]
  },
  {
    id: "compras", title: "De compras · 购物", emoji: "🛍️", color: "#e64980", level: 2,
    words: [
      { es: "la tienda", en: "store", zh: "商店", emoji: "🏪", ex: "La tienda abre a las nueve.", exZh: "商店九点开门。" },
      { es: "el precio", en: "price", zh: "价格", emoji: "🏷️", ex: "El precio está en la etiqueta.", exZh: "价格在标签上。" },
      { es: "caro", en: "expensive", zh: "贵的", emoji: "💎", ex: "Está muy caro, ¿no?", exZh: "太贵了吧？" },
      { es: "barato", en: "cheap", zh: "便宜的", emoji: "🪙", ex: "En el tianguis es más barato.", exZh: "集市上更便宜。" },
      { es: "el descuento", en: "discount", zh: "折扣", emoji: "🔖", ex: "¿Hay descuento si pago en efectivo?", exZh: "付现金有折扣吗？" },
      { es: "la talla", en: "size (clothes)", zh: "尺码", emoji: "📏", ex: "¿Tiene una talla más grande?", exZh: "有大一码的吗？" },
      { es: "el efectivo", en: "cash", zh: "现金", emoji: "💵", ex: "Solo aceptan efectivo.", exZh: "只收现金。" },
      { es: "la tarjeta", en: "card", zh: "银行卡", emoji: "💳", ex: "¿Aceptan tarjeta?", exZh: "能刷卡吗？" },
      { es: "pagar", en: "to pay", zh: "付钱", emoji: "💰", ex: "¿Dónde puedo pagar?", exZh: "在哪里付款？" },
      { es: "el recibo", en: "receipt", zh: "小票", emoji: "🧾", ex: "Guarda el recibo.", exZh: "留好小票。" },
      { es: "la oferta", en: "sale / special offer", zh: "特价", emoji: "🛍️", ex: "Todo está en oferta.", exZh: "全场特价。" },
      { es: "probarse", en: "to try on", zh: "试穿", emoji: "🪞", ex: "¿Me lo puedo probar?", exZh: "我能试穿吗？" },
      { es: "el cambio", en: "change (money)", zh: "找零", emoji: "🪙", ex: "Aquí está su cambio.", exZh: "这是找您的零钱。" },
      { es: "¿cuánto sale?", en: "how much? (MX slang)", zh: "多少钱？（墨西哥口语）", emoji: "💬", ex: "¿Cuánto sale todo?", exZh: "一共多少钱？" },
      { es: "regatear", en: "to bargain", zh: "讨价还价", emoji: "🤝", ex: "En el tianguis puedes regatear.", exZh: "在集市上可以砍价。" },
      { es: "la bolsa de plástico", en: "plastic bag", zh: "塑料袋", emoji: "🛒", ex: "¿Quiere bolsa?", exZh: "要袋子吗？" }
    ]
  },
  {
    id: "transporte", title: "Transporte y viajes · 交通出行", emoji: "✈️", color: "#1971c2", level: 2,
    words: [
      { es: "el aeropuerto", en: "airport", zh: "机场", emoji: "🛫", ex: "Voy al aeropuerto en la mañana.", exZh: "我早上去机场。" },
      { es: "el vuelo", en: "flight", zh: "航班", emoji: "✈️", ex: "El vuelo sale a las diez.", exZh: "航班十点起飞。" },
      { es: "el boleto", en: "ticket (MX)", zh: "票（墨西哥叫法）", emoji: "🎫", ex: "Compré el boleto en línea.", exZh: "我在网上买的票。" },
      { es: "la maleta", en: "suitcase", zh: "行李箱", emoji: "🧳", ex: "Mi maleta pesa mucho.", exZh: "我的行李箱很重。" },
      { es: "el pasaporte", en: "passport", zh: "护照", emoji: "🛂", ex: "No olvides tu pasaporte.", exZh: "别忘了护照。" },
      { es: "la aduana", en: "customs", zh: "海关", emoji: "🛃", ex: "Pasamos por la aduana.", exZh: "我们过了海关。" },
      { es: "el taxi", en: "taxi", zh: "出租车", emoji: "🚕", ex: "Pedimos un taxi por aplicación.", exZh: "我们用软件叫了出租车。" },
      { es: "el pesero", en: "minibus (MX)", zh: "小巴（墨西哥特色）", emoji: "🚐", ex: "El pesero cuesta ocho pesos.", exZh: "小巴八比索。" },
      { es: "la parada", en: "bus stop", zh: "车站（站点）", emoji: "🚏", ex: "Bájate en la próxima parada.", exZh: "下一站下车。" },
      { es: "derecho", en: "straight ahead (MX)", zh: "直走（墨西哥用法）", emoji: "⬆️", ex: "Siga derecho dos cuadras.", exZh: "直走两个街区。" },
      { es: "la cuadra", en: "city block (MX)", zh: "街区（一个路口的距离）", emoji: "🏙️", ex: "Está a tres cuadras.", exZh: "在三个街区外。" },
      { es: "manejar", en: "to drive (MX)", zh: "开车（墨西哥用法）", emoji: "🚗", ex: "No sé manejar.", exZh: "我不会开车。" },
      { es: "la gasolina", en: "gasoline", zh: "汽油", emoji: "⛽", ex: "La gasolina subió otra vez.", exZh: "油价又涨了。" },
      { es: "el tráfico", en: "traffic", zh: "堵车", emoji: "🚦", ex: "Hay mucho tráfico en la CDMX.", exZh: "墨西哥城堵车很严重。" },
      { es: "la licencia", en: "driver's license", zh: "驾照", emoji: "🪪", ex: "Saqué mi licencia ayer.", exZh: "我昨天拿到驾照了。" },
      { es: "el hotel", en: "hotel", zh: "酒店", emoji: "🏨", ex: "Reservé un hotel en la playa.", exZh: "我订了海边的酒店。" }
    ]
  },
  {
    id: "salud", title: "La salud · 健康看病", emoji: "🩺", color: "#c92a2a", level: 2,
    words: [
      { es: "el doctor", en: "doctor", zh: "医生", emoji: "👨‍⚕️", ex: "Necesito ver al doctor.", exZh: "我需要看医生。" },
      { es: "la medicina", en: "medicine", zh: "药", emoji: "💊", ex: "Toma la medicina con comida.", exZh: "药要和食物一起吃。" },
      { es: "la gripa", en: "flu / cold (MX)", zh: "感冒（墨西哥叫法）", emoji: "🤧", ex: "Tengo gripa desde ayer.", exZh: "我从昨天开始感冒。" },
      { es: "la tos", en: "cough", zh: "咳嗽", emoji: "😷", ex: "No se me quita la tos.", exZh: "我的咳嗽一直不好。" },
      { es: "la fiebre", en: "fever", zh: "发烧", emoji: "🤒", ex: "El niño tiene fiebre.", exZh: "孩子发烧了。" },
      { es: "el dolor", en: "pain", zh: "疼痛", emoji: "😖", ex: "Tengo dolor de cabeza.", exZh: "我头疼。" },
      { es: "la pastilla", en: "pill", zh: "药片", emoji: "💊", ex: "Una pastilla cada ocho horas.", exZh: "每八小时一片。" },
      { es: "la receta", en: "prescription / recipe", zh: "处方 / 食谱", emoji: "📄", ex: "Necesita receta médica.", exZh: "这个需要处方。" },
      { es: "la cita", en: "appointment", zh: "预约", emoji: "📅", ex: "Tengo cita a las cuatro.", exZh: "我四点有预约。" },
      { es: "la sangre", en: "blood", zh: "血", emoji: "🩸", ex: "Me sacaron sangre.", exZh: "他们给我抽了血。" },
      { es: "la vacuna", en: "vaccine", zh: "疫苗", emoji: "💉", ex: "Ya me puse la vacuna.", exZh: "我已经打了疫苗。" },
      { es: "descansar", en: "to rest", zh: "休息", emoji: "😴", ex: "Debes descansar más.", exZh: "你应该多休息。" },
      { es: "mejorarse", en: "to get better", zh: "好转 / 康复", emoji: "🌤️", ex: "¡Que te mejores pronto!", exZh: "祝你早日康复！" },
      { es: "el seguro", en: "insurance", zh: "保险", emoji: "🛡️", ex: "¿Tienes seguro médico?", exZh: "你有医保吗？" },
      { es: "embarazada", en: "pregnant", zh: "怀孕的", emoji: "🤰", ex: "Mi hermana está embarazada.", exZh: "我姐姐怀孕了。" },
      { es: "la emergencia", en: "emergency", zh: "急诊 / 紧急情况", emoji: "🚨", ex: "Vamos a emergencias.", exZh: "我们去急诊。" }
    ]
  },
  {
    id: "trabajo", title: "Trabajo y escuela · 工作学习", emoji: "💼", color: "#5c940d", level: 2,
    words: [
      { es: "la oficina", en: "office", zh: "办公室", emoji: "🏢", ex: "Trabajo en una oficina.", exZh: "我在办公室工作。" },
      { es: "el jefe", en: "boss", zh: "老板", emoji: "👔", ex: "Mi jefe es muy exigente.", exZh: "我老板要求很高。" },
      { es: "el sueldo", en: "salary", zh: "工资", emoji: "💰", ex: "El sueldo no alcanza.", exZh: "工资不够花。" },
      { es: "la junta", en: "meeting (MX)", zh: "会议（墨西哥叫法）", emoji: "👥", ex: "Tengo junta a las diez.", exZh: "我十点开会。" },
      { es: "el correo", en: "email / mail", zh: "邮件", emoji: "📧", ex: "Te mando un correo.", exZh: "我给你发邮件。" },
      { es: "la computadora", en: "computer (MX)", zh: "电脑（墨西哥叫法）", emoji: "💻", ex: "Mi computadora es lenta.", exZh: "我的电脑很慢。" },
      { es: "el proyecto", en: "project", zh: "项目", emoji: "📊", ex: "El proyecto va bien.", exZh: "项目进展顺利。" },
      { es: "la fecha límite", en: "deadline", zh: "截止日期", emoji: "⏰", ex: "La fecha límite es el viernes.", exZh: "截止日期是周五。" },
      { es: "contratar", en: "to hire", zh: "雇用", emoji: "🤝", ex: "Van a contratar más gente.", exZh: "他们要招更多人。" },
      { es: "renunciar", en: "to quit", zh: "辞职", emoji: "🚪", ex: "Pienso renunciar este mes.", exZh: "我打算这个月辞职。" },
      { es: "el compañero", en: "coworker / classmate", zh: "同事 / 同学", emoji: "🧑‍🤝‍🧑", ex: "Mis compañeros son buena onda.", exZh: "我的同事人都很好。" },
      { es: "la carrera", en: "major / career", zh: "专业 / 职业", emoji: "🎓", ex: "¿Qué carrera estudiaste?", exZh: "你大学学的什么专业？" },
      { es: "el examen", en: "exam", zh: "考试", emoji: "📝", ex: "Mañana tengo examen.", exZh: "我明天有考试。" },
      { es: "la tarea", en: "homework / task", zh: "作业 / 任务", emoji: "📚", ex: "No he hecho la tarea.", exZh: "我还没写作业。" },
      { es: "aprobar", en: "to pass (exam)", zh: "通过（考试）", emoji: "✅", ex: "Aprobé el examen de español.", exZh: "我通过了西语考试。" },
      { es: "la beca", en: "scholarship", zh: "奖学金", emoji: "🏅", ex: "Gané una beca para estudiar.", exZh: "我拿到了奖学金。" }
    ]
  },
  {
    id: "tecnologia", title: "Tecnología · 手机网络", emoji: "📱", color: "#364fc7", level: 2,
    words: [
      { es: "el celular", en: "cell phone (MX)", zh: "手机（墨西哥叫法）", emoji: "📱", ex: "Se me acabó la pila del celular.", exZh: "我手机没电了。" },
      { es: "el wifi", en: "wifi", zh: "无线网", emoji: "📶", ex: "¿Cuál es la clave del wifi?", exZh: "wifi密码是多少？" },
      { es: "la contraseña", en: "password", zh: "密码", emoji: "🔑", ex: "Olvidé mi contraseña.", exZh: "我忘记密码了。" },
      { es: "la aplicación", en: "app", zh: "应用程序", emoji: "📲", ex: "Descarga la aplicación.", exZh: "下载这个应用。" },
      { es: "el mensaje", en: "message", zh: "消息 / 短信", emoji: "💬", ex: "Mándame un mensaje.", exZh: "给我发消息。" },
      { es: "la foto", en: "photo", zh: "照片", emoji: "📷", ex: "¿Nos tomas una foto?", exZh: "能帮我们拍张照吗？" },
      { es: "el video", en: "video", zh: "视频", emoji: "🎬", ex: "El video se hizo viral.", exZh: "这个视频火了。" },
      { es: "la pantalla", en: "screen", zh: "屏幕", emoji: "🖥️", ex: "Se rompió la pantalla.", exZh: "屏幕碎了。" },
      { es: "cargar", en: "to charge", zh: "充电", emoji: "🔋", ex: "Necesito cargar mi celular.", exZh: "我需要给手机充电。" },
      { es: "descargar", en: "to download", zh: "下载", emoji: "⬇️", ex: "Estoy descargando la película.", exZh: "我在下载电影。" },
      { es: "las redes sociales", en: "social media", zh: "社交网络", emoji: "🌐", ex: "Pasa horas en redes sociales.", exZh: "他在社交网络上花好几个小时。" },
      { es: "los audífonos", en: "headphones (MX)", zh: "耳机（墨西哥叫法）", emoji: "🎧", ex: "Traigo mis audífonos nuevos.", exZh: "我带着新耳机。" },
      { es: "la pila", en: "battery (MX)", zh: "电池（墨西哥叫法）", emoji: "🔋", ex: "Tengo poca pila.", exZh: "我电量不多了。" },
      { es: "en línea", en: "online", zh: "在线", emoji: "🟢", ex: "Compré todo en línea.", exZh: "我全在网上买的。" }
    ]
  },
  {
    id: "dinero", title: "El dinero · 钱和银行", emoji: "💰", color: "#b8860b", level: 2,
    words: [
      { es: "el cajero", en: "ATM", zh: "取款机", emoji: "🏧", ex: "¿Dónde hay un cajero?", exZh: "哪里有取款机？" },
      { es: "la cuenta bancaria", en: "bank account", zh: "银行账户", emoji: "🏦", ex: "Abrí una cuenta bancaria.", exZh: "我开了个银行账户。" },
      { es: "ahorrar", en: "to save money", zh: "存钱 / 攒钱", emoji: "🐷", ex: "Estoy ahorrando para viajar.", exZh: "我在攒钱去旅行。" },
      { es: "gastar", en: "to spend", zh: "花钱", emoji: "💸", ex: "Gasté mucho este mes.", exZh: "我这个月花多了。" },
      { es: "el préstamo", en: "loan", zh: "贷款", emoji: "📄", ex: "Pedí un préstamo al banco.", exZh: "我向银行申请了贷款。" },
      { es: "la deuda", en: "debt", zh: "债务", emoji: "📉", ex: "Ya pagué todas mis deudas.", exZh: "我把债都还清了。" },
      { es: "el billete", en: "bill (money)", zh: "纸币", emoji: "💵", ex: "¿Tienes cambio de un billete de 500?", exZh: "500的纸币你找得开吗？" },
      { es: "la moneda", en: "coin / currency", zh: "硬币 / 货币", emoji: "🪙", ex: "Colecciono monedas antiguas.", exZh: "我收集古币。" },
      { es: "la quincena", en: "biweekly pay (MX)", zh: "半月薪（墨西哥发薪制）", emoji: "📅", ex: "Ya llegó la quincena.", exZh: "发工资啦。（每月15日和月底）" },
      { es: "deber", en: "to owe / must", zh: "欠 / 应该", emoji: "🧾", ex: "Me debes cien pesos.", exZh: "你欠我一百比索。" },
      { es: "la factura", en: "invoice", zh: "发票", emoji: "🧾", ex: "¿Necesita factura?", exZh: "您需要发票吗？" },
      { es: "el impuesto", en: "tax", zh: "税", emoji: "🏛️", ex: "Los impuestos suben cada año.", exZh: "税每年都涨。" },
      { es: "transferir", en: "to transfer money", zh: "转账", emoji: "📲", ex: "Te transfiero ahorita.", exZh: "我马上给你转账。" },
      { es: "gratis", en: "free (no cost)", zh: "免费", emoji: "🆓", ex: "La entrada es gratis.", exZh: "入场免费。" }
    ]
  },
  {
    id: "adjetivos", title: "Adjetivos útiles · 常用形容词", emoji: "✨", color: "#9c36b5", level: 2,
    words: [
      { es: "grande", en: "big", zh: "大的", emoji: "🐘", ex: "La ciudad es muy grande.", exZh: "这座城市很大。" },
      { es: "chico", en: "small (MX)", zh: "小的（墨西哥常用）", emoji: "🐭", ex: "El cuarto está muy chico.", exZh: "房间太小了。" },
      { es: "nuevo", en: "new", zh: "新的", emoji: "✨", ex: "Estrené zapatos nuevos.", exZh: "我穿上了新鞋。" },
      { es: "viejo", en: "old", zh: "旧的 / 老的", emoji: "🏚️", ex: "Mi coche ya está viejo.", exZh: "我的车已经旧了。" },
      { es: "bueno", en: "good", zh: "好的", emoji: "👍", ex: "Es un buen amigo.", exZh: "他是个好朋友。" },
      { es: "malo", en: "bad", zh: "坏的", emoji: "👎", ex: "El clima está malo.", exZh: "天气不好。" },
      { es: "bonito", en: "pretty", zh: "漂亮的", emoji: "🌸", ex: "Qué bonita está la playa.", exZh: "海滩真漂亮。" },
      { es: "feo", en: "ugly", zh: "丑的 / 糟糕的", emoji: "🙈", ex: "El tráfico está feo hoy.", exZh: "今天堵车堵得厉害。" },
      { es: "rápido", en: "fast", zh: "快的", emoji: "🏃", ex: "El metro es más rápido.", exZh: "地铁更快。" },
      { es: "lento", en: "slow", zh: "慢的", emoji: "🐢", ex: "El internet está lento.", exZh: "网速很慢。" },
      { es: "fácil", en: "easy", zh: "容易的", emoji: "✅", ex: "El español no es fácil.", exZh: "西班牙语不容易。" },
      { es: "difícil", en: "difficult", zh: "难的", emoji: "🧗", ex: "El examen estuvo difícil.", exZh: "考试很难。" },
      { es: "caliente", en: "hot (temperature)", zh: "烫的 / 热的", emoji: "🔥", ex: "El café está muy caliente.", exZh: "咖啡很烫。" },
      { es: "frío", en: "cold", zh: "冷的 / 冰的", emoji: "🧊", ex: "La sopa ya está fría.", exZh: "汤已经凉了。" },
      { es: "limpio", en: "clean", zh: "干净的", emoji: "🧼", ex: "El baño está limpio.", exZh: "洗手间很干净。" },
      { es: "sucio", en: "dirty", zh: "脏的", emoji: "🧹", ex: "Los platos están sucios.", exZh: "盘子是脏的。" },
      { es: "lleno", en: "full", zh: "满的 / 吃饱的", emoji: "🥛", ex: "Estoy lleno, gracias.", exZh: "我吃饱了，谢谢。" },
      { es: "vacío", en: "empty", zh: "空的", emoji: "🕳️", ex: "El refri está vacío.", exZh: "冰箱空了。" }
    ]
  },
  {
    id: "preguntas", title: "Preguntas y conectores · 疑问与连接", emoji: "❓", color: "#0c8599", level: 2,
    words: [
      { es: "¿qué?", en: "what?", zh: "什么？", emoji: "❓", ex: "¿Qué quieres comer?", exZh: "你想吃什么？" },
      { es: "¿quién?", en: "who?", zh: "谁？", emoji: "👤", ex: "¿Quién es ella?", exZh: "她是谁？" },
      { es: "¿dónde?", en: "where?", zh: "哪里？", emoji: "📍", ex: "¿Dónde vives?", exZh: "你住在哪里？" },
      { es: "¿cuándo?", en: "when?", zh: "什么时候？", emoji: "🕐", ex: "¿Cuándo llegas?", exZh: "你什么时候到？" },
      { es: "¿por qué?", en: "why?", zh: "为什么？", emoji: "🤔", ex: "¿Por qué estudias español?", exZh: "你为什么学西班牙语？" },
      { es: "porque", en: "because", zh: "因为", emoji: "💡", ex: "Porque me encanta México.", exZh: "因为我爱墨西哥。" },
      { es: "¿cómo?", en: "how?", zh: "怎么？", emoji: "🛠️", ex: "¿Cómo se dice esto en español?", exZh: "这个用西班牙语怎么说？" },
      { es: "¿cuál?", en: "which?", zh: "哪个？", emoji: "👉", ex: "¿Cuál prefieres?", exZh: "你更喜欢哪个？" },
      { es: "pero", en: "but", zh: "但是", emoji: "↔️", ex: "Quiero ir, pero no puedo.", exZh: "我想去，但是去不了。" },
      { es: "también", en: "also", zh: "也", emoji: "➕", ex: "Yo también hablo chino.", exZh: "我也会说中文。" },
      { es: "entonces", en: "then / so", zh: "那么 / 然后", emoji: "➡️", ex: "Entonces, ¿nos vamos?", exZh: "那我们走吧？" },
      { es: "aunque", en: "although", zh: "虽然 / 即使", emoji: "🤷", ex: "Voy aunque llueva.", exZh: "就算下雨我也去。" },
      { es: "si", en: "if", zh: "如果", emoji: "🔀", ex: "Si puedes, ven temprano.", exZh: "如果可以的话早点来。" },
      { es: "siempre", en: "always", zh: "总是", emoji: "♾️", ex: "Siempre llego temprano.", exZh: "我总是到得早。" },
      { es: "nunca", en: "never", zh: "从不", emoji: "🚫", ex: "Nunca he ido a Oaxaca.", exZh: "我从没去过瓦哈卡。" },
      { es: "a veces", en: "sometimes", zh: "有时候", emoji: "🎲", ex: "A veces como tacos de canasta.", exZh: "我有时吃篮子塔可。" }
    ]
  },
  {
    id: "verbos2", title: "Más verbos · 进阶动词", emoji: "⚡", color: "#e8590c", level: 2,
    words: [
      { es: "pensar", en: "to think", zh: "想 / 认为", emoji: "💭", ex: "¿Qué piensas de México?", exZh: "你觉得墨西哥怎么样？" },
      { es: "saber", en: "to know (facts)", zh: "知道", emoji: "🧠", ex: "No sé la respuesta.", exZh: "我不知道答案。" },
      { es: "conocer", en: "to know (people/places)", zh: "认识 / 去过", emoji: "🤝", ex: "¿Conoces Guanajuato?", exZh: "你去过瓜纳华托吗？" },
      { es: "decir", en: "to say", zh: "说", emoji: "🗣️", ex: "¿Qué dijiste?", exZh: "你说什么？" },
      { es: "dar", en: "to give", zh: "给", emoji: "🎁", ex: "Dame un momento.", exZh: "给我一点时间。" },
      { es: "ver", en: "to see / watch", zh: "看", emoji: "👀", ex: "Vamos a ver una película.", exZh: "我们去看电影吧。" },
      { es: "oír", en: "to hear", zh: "听到", emoji: "👂", ex: "No te oigo bien.", exZh: "我听不清你说话。" },
      { es: "salir", en: "to go out / leave", zh: "出去 / 离开", emoji: "🚶", ex: "Salimos a las ocho.", exZh: "我们八点出发。" },
      { es: "llegar", en: "to arrive", zh: "到达", emoji: "🏁", ex: "¿A qué hora llegas?", exZh: "你几点到？" },
      { es: "empezar", en: "to start", zh: "开始", emoji: "▶️", ex: "La clase empieza ahorita.", exZh: "马上开始上课。" },
      { es: "terminar", en: "to finish", zh: "结束", emoji: "⏹️", ex: "Ya terminé la tarea.", exZh: "我做完作业了。" },
      { es: "buscar", en: "to look for", zh: "找", emoji: "🔍", ex: "Busco un departamento.", exZh: "我在找公寓。" },
      { es: "encontrar", en: "to find", zh: "找到", emoji: "🎯", ex: "No encuentro mis llaves.", exZh: "我找不到钥匙。" },
      { es: "esperar", en: "to wait / hope", zh: "等待 / 希望", emoji: "⏳", ex: "Espérame cinco minutos.", exZh: "等我五分钟。" },
      { es: "ayudar", en: "to help", zh: "帮助", emoji: "🤲", ex: "¿Te ayudo con las bolsas?", exZh: "我帮你拿袋子吧？" },
      { es: "necesitar", en: "to need", zh: "需要", emoji: "🙏", ex: "Necesito practicar más.", exZh: "我需要多练习。" },
      { es: "gustar", en: "to like", zh: "喜欢", emoji: "💗", ex: "Me gusta la comida picante.", exZh: "我喜欢吃辣。" },
      { es: "olvidar", en: "to forget", zh: "忘记", emoji: "🫥", ex: "Olvidé tu nombre, perdón.", exZh: "对不起，我忘了你的名字。" }
    ]
  },
  // ==================== Nivel 3 · 流利 ====================
  {
    id: "opiniones", title: "Opiniones · 表达观点", emoji: "💬", color: "#5f3dc4", level: 3,
    words: [
      { es: "creo que", en: "I think that", zh: "我认为", emoji: "💭", ex: "Creo que tienes razón.", exZh: "我觉得你说得对。" },
      { es: "me parece que", en: "it seems to me", zh: "我觉得", emoji: "🤔", ex: "Me parece que va a llover.", exZh: "我觉得要下雨了。" },
      { es: "estar de acuerdo", en: "to agree", zh: "同意", emoji: "🤝", ex: "Estoy de acuerdo contigo.", exZh: "我同意你的看法。" },
      { es: "en mi opinión", en: "in my opinion", zh: "依我看", emoji: "🗣️", ex: "En mi opinión, es lo mejor.", exZh: "依我看，这是最好的。" },
      { es: "tener razón", en: "to be right", zh: "有道理 / 说得对", emoji: "✅", ex: "Tienes toda la razón.", exZh: "你说得完全对。" },
      { es: "la ventaja", en: "advantage", zh: "优点", emoji: "➕", ex: "La ventaja es el precio.", exZh: "优点是价格。" },
      { es: "la desventaja", en: "disadvantage", zh: "缺点", emoji: "➖", ex: "La desventaja es la distancia.", exZh: "缺点是距离远。" },
      { es: "depende", en: "it depends", zh: "看情况", emoji: "⚖️", ex: "—¿Vas a ir? —Depende del clima.", exZh: "—你去吗？—看天气。" },
      { es: "sin duda", en: "without a doubt", zh: "毫无疑问", emoji: "💯", ex: "Sin duda, el mejor taco de la ciudad.", exZh: "毫无疑问是全城最好吃的塔可。" },
      { es: "quizás", en: "maybe", zh: "也许", emoji: "🎲", ex: "Quizás vaya mañana.", exZh: "也许我明天去。" },
      { es: "es decir", en: "that is to say", zh: "也就是说", emoji: "💬", ex: "Es decir, no vienes.", exZh: "也就是说，你不来了。" },
      { es: "por ejemplo", en: "for example", zh: "比如", emoji: "📌", ex: "Por ejemplo, el mole de Puebla.", exZh: "比如普埃布拉的莫莱酱。" },
      { es: "sin embargo", en: "however", zh: "然而", emoji: "↩️", ex: "Es caro; sin embargo, vale la pena.", exZh: "很贵，然而值得。" },
      { es: "al final", en: "in the end", zh: "最后", emoji: "🏁", ex: "Al final, todo salió bien.", exZh: "最后一切顺利。" }
    ]
  },
  {
    id: "cultura", title: "Cultura mexicana · 墨西哥文化", emoji: "🪅", color: "#e8590c", level: 3,
    words: [
      { es: "el Día de Muertos", en: "Day of the Dead", zh: "亡灵节", emoji: "💀", ex: "El Día de Muertos es el 2 de noviembre.", exZh: "亡灵节是11月2日。" },
      { es: "la ofrenda", en: "Day of the Dead altar", zh: "亡灵节祭坛", emoji: "🕯️", ex: "Pusimos la ofrenda para los abuelos.", exZh: "我们为祖辈摆了祭坛。" },
      { es: "la Navidad", en: "Christmas", zh: "圣诞节", emoji: "🎄", ex: "En Navidad hacemos tamales.", exZh: "圣诞节我们做塔玛雷。" },
      { es: "la posada", en: "Christmas party (MX)", zh: "圣诞聚会（墨西哥传统）", emoji: "🎊", ex: "Hay posada en casa de mi tía.", exZh: "我阿姨家有圣诞聚会。" },
      { es: "el mariachi", en: "mariachi band", zh: "墨西哥街头乐队", emoji: "🎺", ex: "Contratamos mariachis para la fiesta.", exZh: "我们为派对请了墨西哥乐队。" },
      { es: "la lucha libre", en: "Mexican wrestling", zh: "墨西哥摔角", emoji: "🤼", ex: "Fuimos a la lucha libre en la Arena México.", exZh: "我们去墨西哥竞技场看了摔角。" },
      { es: "la piñata", en: "piñata", zh: "皮纳塔（打彩罐）", emoji: "🪅", ex: "Los niños rompieron la piñata.", exZh: "孩子们打破了彩罐。" },
      { es: "la Virgen de Guadalupe", en: "Virgin of Guadalupe", zh: "瓜达卢佩圣母", emoji: "⛪", ex: "El 12 de diciembre es día de la Virgen.", exZh: "12月12日是圣母节。" },
      { es: "los quince años", en: "quinceañera party", zh: "十五岁成人礼", emoji: "👗", ex: "Mi prima celebró sus quince años.", exZh: "我表妹办了十五岁成人礼。" },
      { es: "las vacaciones", en: "vacation", zh: "假期", emoji: "🏖️", ex: "En vacaciones vamos a Cancún.", exZh: "假期我们去坎昆。" },
      { es: "el puente", en: "long weekend (MX)", zh: "连休（字面\"桥\"）", emoji: "🌉", ex: "Este fin es puente, ¡tres días!", exZh: "这周末连休三天！" },
      { es: "la feria", en: "fair / festival", zh: "庙会 / 游乐集市", emoji: "🎡", ex: "Hay feria en el pueblo.", exZh: "镇上有庙会。" },
      { es: "el fútbol", en: "soccer", zh: "足球", emoji: "⚽", ex: "El fútbol es pasión nacional.", exZh: "足球是全民热爱。" },
      { es: "la selección", en: "national team", zh: "国家队", emoji: "🏆", ex: "Hoy juega la selección.", exZh: "今天国家队有比赛。" },
      { es: "el papalote", en: "kite (MX)", zh: "风筝（源自纳瓦特语）", emoji: "🪁", ex: "Volamos papalotes en febrero.", exZh: "我们二月放风筝。" },
      { es: "la telenovela", en: "soap opera", zh: "肥皂剧", emoji: "📺", ex: "Mi abuela ve telenovelas.", exZh: "我奶奶看肥皂剧。" }
    ]
  },
  {
    id: "jerga2", title: "Jerga avanzada · 深度俚语", emoji: "🔥", color: "#087f5b", level: 3,
    words: [
      { es: "¡qué oso!", en: "how embarrassing! (MX)", zh: "太尴尬了！（字面\"什么熊\"）", emoji: "🐻", ex: "Me caí en la calle, ¡qué oso!", exZh: "我在街上摔倒了，太丢人了！" },
      { es: "el chisme", en: "gossip", zh: "八卦", emoji: "🍵", ex: "Cuéntame el chisme.", exZh: "快跟我说说八卦。" },
      { es: "¡a huevo!", en: "hell yeah! (MX)", zh: "必须的！/ 太棒了！（粗俗）", emoji: "💪", ex: "—¿Ganamos? —¡A huevo!", exZh: "—我们赢了？—必须的！" },
      { es: "ni modo", en: "oh well (MX)", zh: "没办法 / 认了", emoji: "🤷", ex: "Perdimos el camión, ni modo.", exZh: "错过公交了，认了吧。" },
      { es: "echar la hueva", en: "to laze around (MX)", zh: "躺平 / 犯懒", emoji: "🛋️", ex: "Hoy solo quiero echar la hueva.", exZh: "今天我只想躺平。" },
      { es: "la banda", en: "the crew / friends (MX)", zh: "朋友们 / 圈子", emoji: "🎸", ex: "Voy a salir con la banda.", exZh: "我要和朋友们出去。" },
      { es: "el compa", en: "buddy (MX)", zh: "兄弟 / 哥们", emoji: "🤜", ex: "Mi compa me ayudó a mudarme.", exZh: "我哥们帮我搬了家。" },
      { es: "estar cañón", en: "to be tough (MX)", zh: "很难 / 很猛", emoji: "🔥", ex: "El examen estuvo cañón.", exZh: "考试太难了。" },
      { es: "el desmadre", en: "chaos / wild party (MX)", zh: "一团糟 / 狂欢", emoji: "🎉", ex: "La fiesta fue un desmadre.", exZh: "那个派对嗨翻了。" },
      { es: "¡aguanta!", en: "hold on! (MX)", zh: "等等！/ 顶住！", emoji: "⏸️", ex: "¡Aguanta! Ya casi llego.", exZh: "等等！我马上到。" },
      { es: "de volada", en: "right away (MX)", zh: "立刻 / 飞快地", emoji: "⚡", ex: "Voy de volada por las tortillas.", exZh: "我飞快去买玉米饼。" },
      { es: "hacer el paro", en: "to do a favor (MX)", zh: "帮个忙", emoji: "🤝", ex: "Hazme el paro, préstame cien.", exZh: "帮个忙，借我一百。" },
      { es: "el varo", en: "money / peso (MX)", zh: "钱（俚语）", emoji: "💵", ex: "No traigo ni un varo.", exZh: "我一分钱都没带。" },
      { es: "chismear", en: "to gossip (MX)", zh: "嚼舌根 / 聊八卦", emoji: "🗣️", ex: "Nos quedamos chismeando toda la noche.", exZh: "我们聊八卦聊了一整晚。" },
      { es: "¡ándale!", en: "come on! / that's it! (MX)", zh: "快点！/ 对头！", emoji: "🏃", ex: "¡Ándale, se nos hace tarde!", exZh: "快点，我们要迟到了！" },
      { es: "chambear", en: "to work (MX slang)", zh: "干活（俚语）", emoji: "🛠️", ex: "Mañana hay que chambear.", exZh: "明天还得搬砖。" }
    ]
  },
  {
    id: "emergencias", title: "Emergencias · 紧急情况", emoji: "🚨", color: "#c92a2a", level: 3,
    words: [
      { es: "¡ayuda!", en: "help!", zh: "救命！", emoji: "🆘", ex: "¡Ayuda, por favor!", exZh: "请帮帮我！" },
      { es: "la policía", en: "police", zh: "警察", emoji: "👮", ex: "Llama a la policía.", exZh: "快报警。" },
      { es: "la ambulancia", en: "ambulance", zh: "救护车", emoji: "🚑", ex: "Necesitamos una ambulancia.", exZh: "我们需要救护车。" },
      { es: "el incendio", en: "fire (emergency)", zh: "火灾", emoji: "🔥", ex: "Hubo un incendio en la colonia.", exZh: "街区发生了火灾。" },
      { es: "el temblor", en: "earthquake (MX)", zh: "地震（墨西哥叫法）", emoji: "🌎", ex: "¿Sentiste el temblor?", exZh: "你感觉到地震了吗？" },
      { es: "perdido", en: "lost", zh: "迷路的 / 丢失的", emoji: "🧭", ex: "Estoy perdido, ¿me ayuda?", exZh: "我迷路了，能帮我吗？" },
      { es: "robar", en: "to steal / rob", zh: "偷 / 抢", emoji: "🥷", ex: "Me robaron el celular.", exZh: "我的手机被偷了。" },
      { es: "la denuncia", en: "police report", zh: "报案", emoji: "📋", ex: "Levanté una denuncia.", exZh: "我报了案。" },
      { es: "el consulado", en: "consulate", zh: "领事馆", emoji: "🏛️", ex: "Llama al consulado chino.", exZh: "联系中国领事馆。" },
      { es: "la embajada", en: "embassy", zh: "大使馆", emoji: "🌐", ex: "La embajada está en Polanco.", exZh: "大使馆在波兰科区。" },
      { es: "urgente", en: "urgent", zh: "紧急的", emoji: "🚨", ex: "Es urgente, contesta.", exZh: "很紧急，接电话。" },
      { es: "la salida de emergencia", en: "emergency exit", zh: "安全出口", emoji: "🚪", ex: "Ubica la salida de emergencia.", exZh: "找到安全出口的位置。" },
      { es: "tener cuidado", en: "to be careful", zh: "小心", emoji: "⚠️", ex: "Ten cuidado en la noche.", exZh: "晚上要小心。" },
      { es: "el 911", en: "911 (emergency number)", zh: "急救电话911", emoji: "📞", ex: "Marca el nueve uno uno.", exZh: "拨打911。" }
    ]
  },
  {
    id: "fiesta", title: "Fiesta y social · 派对社交", emoji: "🎉", color: "#f59f00", level: 3,
    words: [
      { es: "la fiesta", en: "party", zh: "派对", emoji: "🎉", ex: "La fiesta es el sábado.", exZh: "派对在周六。" },
      { es: "el cumpleaños", en: "birthday", zh: "生日", emoji: "🎂", ex: "¡Feliz cumpleaños!", exZh: "生日快乐！" },
      { es: "brindar", en: "to toast", zh: "干杯 / 祝酒", emoji: "🥂", ex: "Brindemos por los amigos.", exZh: "为朋友们干杯。" },
      { es: "¡salud!", en: "cheers!", zh: "干杯！（也用于打喷嚏后）", emoji: "🍻", ex: "—¡Salud! —¡Salud!", exZh: "—干杯！—干杯！" },
      { es: "el regalo", en: "gift", zh: "礼物", emoji: "🎁", ex: "Te traje un regalo.", exZh: "我给你带了礼物。" },
      { es: "invitar", en: "to invite / treat", zh: "邀请 / 请客", emoji: "💌", ex: "Yo invito los tacos.", exZh: "塔可我请。" },
      { es: "la música", en: "music", zh: "音乐", emoji: "🎵", ex: "Sube la música.", exZh: "把音乐调大声。" },
      { es: "la canción", en: "song", zh: "歌", emoji: "🎤", ex: "Esta canción me encanta.", exZh: "我超爱这首歌。" },
      { es: "la botana", en: "snacks (MX)", zh: "小吃 / 下酒菜（墨西哥叫法）", emoji: "🍿", ex: "Trae botana para la fiesta.", exZh: "给派对带点小吃。" },
      { es: "el tequila", en: "tequila", zh: "龙舌兰酒", emoji: "🍹", ex: "El tequila es de Jalisco.", exZh: "龙舌兰酒产自哈利斯科。" },
      { es: "el mezcal", en: "mezcal", zh: "梅斯卡尔酒", emoji: "🥃", ex: "El mezcal se toma despacio.", exZh: "梅斯卡尔要慢慢品。" },
      { es: "la michelada", en: "michelada (beer cocktail)", zh: "米切拉达（调味啤酒）", emoji: "🍺", ex: "Una michelada con clamato.", exZh: "来一杯加蛤蜊汁的米切拉达。" },
      { es: "pasarla bien", en: "to have a good time", zh: "玩得开心", emoji: "😄", ex: "¡La pasamos súper bien!", exZh: "我们玩得特别开心！" },
      { es: "el convivio", en: "get-together (MX)", zh: "聚会（墨西哥叫法）", emoji: "🫶", ex: "Hay convivio en la oficina.", exZh: "办公室有聚会。" }
    ]
  }
];

// 拼写练习用的西语特殊字符
const SPECIAL_CHARS = ["á", "é", "í", "ó", "ú", "ñ", "ü", "¿", "¡"];
APP_CONFIG.specialChars = SPECIAL_CHARS;
APP_CONFIG.sampleText = "¡Hola! ¿Qué onda?";
APP_CONFIG.sampleText2 = "Buenos días";
APP_CONFIG.customExample = "la playa = 海滩\nel boleto = 车票\nnadar = 游泳";
APP_CONFIG.appSwitch = { href: "english.html", label: "🇺🇸 切换到英语版 LexiPad" };

if (typeof module !== "undefined") { module.exports = { UNITS, SPECIAL_CHARS, APP_CONFIG }; }
