// PalabraPad — 墨西哥西班牙语词汇数据
// 每个词条: es (西语), en (英语), zh (中文), emoji (插图), ex (西语例句), exZh (例句中文)
// 词汇特意采用墨西哥用法 (camión=公交车, alberca=游泳池, elote=玉米 等)

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
];

// ===================== 短句 & 短语讲解 =====================
// 借鉴「日常西语口语跟练」短视频: 整句 + 逐词拆解 + 语音跟读, 红笔标注语法点
// 每条: es (整句) / zh (整句中文) / en (英文) / parts:[{ es, zh, note? }]
//   parts = 把句子拆成词块, 依次朗读 + 红线高亮; note = 手写红笔批注 (语法点, 可选)
const PHRASE_UNITS = [
  {
    id: "p-cotidiano",
    title: "日常口语",
    emoji: "💬",
    color: "#1971c2",
    phrases: [
      { es: "¡Claro que sí!", zh: "当然是的！", en: "Of course!",
        parts: [ { es: "Claro", zh: "清楚、当然" }, { es: "que sí", zh: "是的", note: "连接词" } ] },
      { es: "¿Qué onda?", zh: "怎么样？最近如何？", en: "What's up? (MX)",
        parts: [ { es: "Qué", zh: "什么" }, { es: "onda", zh: "波 → 情况", note: "墨西哥口语" } ] },
      { es: "No manches", zh: "不会吧！别逗了", en: "No way! (MX)",
        parts: [ { es: "No", zh: "不" }, { es: "manches", zh: "别乱说", note: "动词 manchar" } ] },
      { es: "Ahorita voy", zh: "我马上来", en: "I'm coming right now",
        parts: [ { es: "Ahorita", zh: "马上、一会儿", note: "墨西哥万能词" }, { es: "voy", zh: "我去", note: "动词 ir" } ] },
      { es: "Está bien", zh: "好的、没问题", en: "It's fine / OK",
        parts: [ { es: "Está", zh: "它是", note: "动词 estar" }, { es: "bien", zh: "好" } ] },
      { es: "Nos vemos", zh: "回头见", en: "See you",
        parts: [ { es: "Nos", zh: "我们", note: "反身代词" }, { es: "vemos", zh: "见面", note: "动词 verse" } ] },
      { es: "¿Qué te parece?", zh: "你觉得怎么样？", en: "What do you think?",
        parts: [ { es: "Qué", zh: "什么" }, { es: "te", zh: "对你而言", note: "间接宾语" }, { es: "parece", zh: "觉得", note: "动词 parecer" } ] },
      { es: "Vale la pena", zh: "值得", en: "It's worth it",
        parts: [ { es: "Vale", zh: "值得", note: "动词 valer" }, { es: "la pena", zh: "这份辛苦" } ] }
    ]
  },
  {
    id: "p-restaurante",
    title: "餐厅点餐",
    emoji: "🍽️",
    color: "#2f9e44",
    phrases: [
      { es: "La cuenta, por favor", zh: "请结账", en: "The bill, please",
        parts: [ { es: "La cuenta", zh: "账单" }, { es: "por favor", zh: "请", note: "礼貌用语" } ] },
      { es: "¿Qué me recomienda?", zh: "您推荐什么？", en: "What do you recommend?",
        parts: [ { es: "Qué", zh: "什么" }, { es: "me", zh: "给我", note: "间接宾语" }, { es: "recomienda", zh: "推荐", note: "动词 recomendar" } ] },
      { es: "Para llevar, por favor", zh: "请打包带走", en: "To go, please",
        parts: [ { es: "Para llevar", zh: "带走", note: "para + 动词" }, { es: "por favor", zh: "请" } ] },
      { es: "Está muy rico", zh: "很好吃", en: "It's very tasty",
        parts: [ { es: "Está", zh: "它是", note: "动词 estar" }, { es: "muy", zh: "非常" }, { es: "rico", zh: "美味的" } ] },
      { es: "Sin chile, por favor", zh: "请不要辣椒", en: "Without chili, please",
        parts: [ { es: "Sin", zh: "没有、不加" }, { es: "chile", zh: "辣椒" }, { es: "por favor", zh: "请" } ] },
      { es: "¿Cuánto le debo?", zh: "我该付您多少？", en: "How much do I owe you?",
        parts: [ { es: "Cuánto", zh: "多少" }, { es: "le", zh: "给您", note: "间接宾语·敬称" }, { es: "debo", zh: "我欠", note: "动词 deber" } ] },
      { es: "Quiero un taco", zh: "我要一个塔可", en: "I want a taco",
        parts: [ { es: "Quiero", zh: "我想要", note: "动词 querer" }, { es: "un taco", zh: "一个塔可" } ] }
    ]
  },
  {
    id: "p-calle",
    title: "问路出行",
    emoji: "🧭",
    color: "#0c8599",
    phrases: [
      { es: "¿Dónde está el baño?", zh: "洗手间在哪里？", en: "Where is the bathroom?",
        parts: [ { es: "Dónde", zh: "哪里" }, { es: "está", zh: "在", note: "动词 estar" }, { es: "el baño", zh: "洗手间" } ] },
      { es: "¿Cómo llego a…?", zh: "我怎么到……？", en: "How do I get to…?",
        parts: [ { es: "Cómo", zh: "如何" }, { es: "llego", zh: "我到达", note: "动词 llegar" }, { es: "a", zh: "到", note: "介词" } ] },
      { es: "Está a la derecha", zh: "在右边", en: "It's on the right",
        parts: [ { es: "Está", zh: "在", note: "动词 estar" }, { es: "a la derecha", zh: "在右边" } ] },
      { es: "Todo derecho", zh: "一直往前", en: "Straight ahead",
        parts: [ { es: "Todo", zh: "全程、一直" }, { es: "derecho", zh: "直走", note: "≠ derecha 右" } ] },
      { es: "¿Me puede ayudar?", zh: "您能帮我吗？", en: "Can you help me?",
        parts: [ { es: "Me", zh: "帮我", note: "直接宾语" }, { es: "puede", zh: "能", note: "动词 poder" }, { es: "ayudar", zh: "帮助" } ] },
      { es: "Voy en camión", zh: "我坐公交", en: "I go by bus (MX)",
        parts: [ { es: "Voy", zh: "我去", note: "动词 ir" }, { es: "en camión", zh: "乘公交", note: "墨西哥叫 bus" } ] }
    ]
  },
  {
    id: "p-social",
    title: "社交礼貌",
    emoji: "😊",
    color: "#9c36b5",
    phrases: [
      { es: "Mucho gusto", zh: "很高兴认识你", en: "Nice to meet you",
        parts: [ { es: "Mucho", zh: "很多" }, { es: "gusto", zh: "愉快" } ] },
      { es: "¿Cómo te llamas?", zh: "你叫什么名字？", en: "What's your name?",
        parts: [ { es: "Cómo", zh: "如何" }, { es: "te", zh: "你自己", note: "反身代词" }, { es: "llamas", zh: "称呼", note: "动词 llamarse" } ] },
      { es: "Con permiso", zh: "借过 / 失陪一下", en: "Excuse me",
        parts: [ { es: "Con", zh: "带着" }, { es: "permiso", zh: "许可", note: "礼貌用语" } ] },
      { es: "No hay problema", zh: "没问题", en: "No problem",
        parts: [ { es: "No hay", zh: "没有", note: "hay 存在句" }, { es: "problema", zh: "问题", note: "阳性!" } ] },
      { es: "Que te vaya bien", zh: "一路顺风、保重", en: "Have a good one",
        parts: [ { es: "Que", zh: "愿", note: "祝愿句" }, { es: "te vaya", zh: "你过得", note: "ir 虚拟式" }, { es: "bien", zh: "好" } ] },
      { es: "Lo siento mucho", zh: "我很抱歉", en: "I'm so sorry",
        parts: [ { es: "Lo siento", zh: "对不起", note: "动词 sentir" }, { es: "mucho", zh: "非常" } ] }
    ]
  },
  {
    id: "p-jerga",
    title: "地道俚语",
    emoji: "🔥",
    color: "#e8590c",
    phrases: [
      { es: "¡Órale!", zh: "哇！/ 走起！", en: "Wow! / Let's go! (MX)",
        parts: [ { es: "Órale", zh: "万能感叹词", note: "无直译" } ] },
      { es: "¡Qué padre!", zh: "太棒了！", en: "How cool! (MX)",
        parts: [ { es: "Qué", zh: "多么" }, { es: "padre", zh: "棒", note: "字面“父亲”" } ] },
      { es: "Está bien chido", zh: "真的很酷", en: "It's really cool (MX)",
        parts: [ { es: "Está", zh: "是", note: "动词 estar" }, { es: "bien", zh: "很" }, { es: "chido", zh: "酷", note: "墨西哥俚语" } ] },
      { es: "La neta", zh: "说真的、实话", en: "The truth / for real (MX)",
        parts: [ { es: "La", zh: "定冠词" }, { es: "neta", zh: "真相", note: "墨西哥俚语" } ] },
      { es: "Ándale pues", zh: "那好吧、快点", en: "Come on / alright (MX)",
        parts: [ { es: "Ándale", zh: "快、好吧", note: "动词 andar" }, { es: "pues", zh: "那么" } ] },
      { es: "Échale ganas", zh: "加油！全力以赴", en: "Give it your all (MX)",
        parts: [ { es: "Échale", zh: "给它使劲", note: "动词 echar" }, { es: "ganas", zh: "劲头、欲望" } ] }
    ]
  }
];

// 拼写练习用的西语特殊字符
const SPECIAL_CHARS = ["á", "é", "í", "ó", "ú", "ñ", "ü", "¿", "¡"];

if (typeof module !== "undefined") { module.exports = { UNITS, PHRASE_UNITS, SPECIAL_CHARS }; }
