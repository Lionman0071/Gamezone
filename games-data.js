const gamesDatabase = {
    // ================= หมวด RACING =================
    "assetto-corsa-evo": { 
        name: "Assetto Corsa EVO", platform: "PC / Console", category: "RACING", score: "9.8", developer: "KUNOS Simulazioni", year: "2025", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3058630/header.jpg", 
        description: "เกมแข่งรถจำลองสมจริงที่เน้นฟิสิกส์ การควบคุมรถ และประสบการณ์การขับขี่", 
        features: ["ระบบฟิสิกส์รถยนต์สมจริง", "รถยนต์หลายประเภท", "สนามแข่งรายละเอียดสูง", "รองรับพวงมาลัย", "เหมาะสำหรับผู้เล่นสาย Simulation"], 
        min: ["Intel Core i5", "16 GB", "GTX 1060", "100 GB", "Windows 10"], rec: ["Intel Core i7", "32 GB", "RTX 3070", "100 GB", "Windows 11"] 
    },
    "beamng-drive": { 
        name: "BeamNG.drive", platform: "PC", category: "RACING", score: "9.6", developer: "BeamNG", year: "2015", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/284160/header.jpg", 
        description: "เกมขับรถที่โดดเด่นด้านระบบฟิสิกส์และการจำลองความเสียหายของรถ", 
        features: ["ระบบฟิสิกส์รถแบบละเอียด", "แผนที่ขนาดใหญ่", "รถยนต์หลายประเภท", "รองรับ Mods", "โหมดการเล่นหลากหลาย"], 
        min: ["Intel Core i5", "16 GB", "GTX 1060", "50 GB", "Windows 10"], rec: ["Intel Core i7", "32 GB", "RTX 3060", "50 GB", "Windows 11"] 
    },
    "forza-motorsport": { 
        name: "Forza Motorsport", platform: "PC / Console", category: "RACING", score: "9.2", developer: "Turn 10 Studios", year: "2023", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2440510/header.jpg", 
        description: "เกมแข่งรถที่มีรถยนต์และสนามแข่งหลากหลาย พร้อมระบบการแข่งขันออนไลน์", 
        features: ["รถยนต์จำนวนมาก", "สนามแข่งหลากหลาย", "ระบบปรับแต่งรถ", "การแข่งขันออนไลน์", "กราฟิกคุณภาพสูง"], 
        min: ["Intel Core i5", "8 GB", "GTX 1060", "110 GB", "Windows 10"], rec: ["Intel Core i7", "16 GB", "RTX 2080 Ti", "110 GB", "Windows 11"] 
    },
    "forza-horizon-5": { 
        name: "Forza Horizon 5", platform: "PC / Console", category: "RACING", score: "9.5", developer: "Playground Games", year: "2021", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1551360/header.jpg", 
        description: "เกมแข่งรถ Open World ในเม็กซิโกที่มีรถยนต์และกิจกรรมมากมาย", 
        features: ["Open World", "รถยนต์จำนวนมาก", "การแข่งขันออนไลน์", "ระบบปรับแต่งรถ", "กราฟิกสวยงามตระการตา"], 
        min: ["Intel Core i5", "8 GB", "GTX 970", "110 GB", "Windows 10"], rec: ["Intel Core i7", "16 GB", "RTX 3060", "110 GB", "Windows 11"] 
    },
    "f1-24": { 
        name: "F1 24", platform: "PC / Console", category: "RACING", score: "8.5", developer: "Codemasters", year: "2024", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2488620/header.jpg", 
        description: "เกมแข่งรถ Formula 1 ฤดูกาล 2024 ที่มาพร้อมระบบฟิสิกส์การขับขี่แบบใหม่", 
        features: ["รถและนักแข่งฤดูกาล 2024 ครบถ้วน", "ระบบฟิสิกส์ EA SPORTS Dynamic Handling", "อัปเกรด Career Mode โฉมใหม่", "รองรับพวงมาลัยจำลอง", "เล่นแบบ Cross-play ออนไลน์ได้"], 
        min: ["Intel Core i3", "8 GB", "GTX 1060", "100 GB", "Windows 10"], rec: ["Intel Core i5", "16 GB", "RTX 2070", "100 GB", "Windows 11"] 
    },
    "need-for-speed-unbound": { 
        name: "Need for Speed Unbound", platform: "PC / Console", category: "RACING", score: "8.2", developer: "Criterion Games", year: "2022", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1846380/header.jpg", 
        description: "เกมแข่งรถสตรีทเรซซิ่งที่ผสมผสานกราฟิกสไตล์เซลเฉดและสตรีทอาร์ต", 
        features: ["กราฟิกสไตล์คอมิก", "แข่งรถใต้ดิน", "หนีตำรวจ", "ปรับแต่งรถอิสระ", "เพลงประกอบสไตล์ฮิปฮอป"], 
        min: ["Intel Core i5", "8 GB", "GTX 1050 Ti", "50 GB", "Windows 10"], rec: ["Intel Core i7", "16 GB", "RTX 2070", "50 GB", "Windows 11"] 
    },
    "dirt-rally-2": { 
        name: "DiRT Rally 2.0", platform: "PC / Console", category: "RACING", score: "9.0", developer: "Codemasters", year: "2019", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/690790/header.jpg", 
        description: "สุดยอดเกมจำลองการแข่งแรลลี่ที่ท้าทายและสมจริงที่สุด", 
        features: ["ฟิสิกส์แรลลี่สมจริง", "สนามแข่งทั่วโลก", "รถคลาสสิก", "สภาพอากาศเปลี่ยนแปลง", "รองรับ VR"], 
        min: ["Intel Core i3", "8 GB", "GTX 650 Ti", "100 GB", "Windows 10"], rec: ["Intel Core i5", "8 GB", "GTX 1070", "100 GB", "Windows 11"] 
    },
    "the-crew-motorfest": { 
        name: "The Crew Motorfest", platform: "PC / Console", category: "RACING", score: "8.6", developer: "Ivory Tower", year: "2023", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2698940/header.jpg", 
        description: "เทศกาลแข่งรถบนเกาะฮาวายที่มีทั้งรถยนต์ มอเตอร์ไซค์ เครื่องบิน และเรือ", 
        features: ["แผนที่เกาะฮาวาย", "ยานพาหนะหลากหลาย", "เทศกาล Motorfest", "เล่นร่วมกับเพื่อน", "กราฟิกสดใส"], 
        min: ["Intel Core i5", "8 GB", "GTX 960", "40 GB", "Windows 10"], rec: ["Intel Core i7", "16 GB", "RTX 3060", "40 GB", "Windows 11"] 
    },

    // ================= หมวด ACTION =================
    "black-myth-wukong": { 
        name: "Black Myth: Wukong", platform: "PC / Console", category: "ACTION", score: "9.5", developer: "Game Science", year: "2024", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg", 
        description: "เกม Action RPG สุดอลังการที่สร้างจากวรรณกรรมไซอิ๋ว", 
        features: ["กราฟิก Unreal Engine 5", "บอสไฟต์สุดท้าทาย", "แปลงร่างได้หลากหลาย", "วิชาเวทมนตร์", "เนื้อเรื่องอิงตำนานจีน"], 
        min: ["Intel Core i5", "16 GB", "GTX 1060", "130 GB", "Windows 10"], rec: ["Intel Core i7", "32 GB", "RTX 4070", "130 GB", "Windows 11"] 
    },
    "helldivers-2": { 
        name: "HELLDIVERS 2", platform: "PC / Console", category: "ACTION", score: "9.3", developer: "Arrowhead Game Studios", year: "2024", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2580160/header.jpg", 
        description: "เกมยิง Co-op ที่ให้คุณร่วมมือกับเพื่อนกอบกู้จักรวาลจากเอเลี่ยน", 
        features: ["Co-op 4 คน", "อาวุธทำลายล้าง", "เรียกสเตราทาเจ็ม", "ระบบ Friendly Fire", "สงครามระดับกาแล็กซี"], 
        min: ["Intel Core i7", "8 GB", "GTX 1050 Ti", "100 GB", "Windows 10"], rec: ["Intel Core i7", "16 GB", "RTX 2060", "100 GB", "Windows 11"] 
    },
    "cyberpunk-2077": { 
        name: "Cyberpunk 2077", platform: "PC / Console", category: "ACTION", score: "9.2", developer: "CD Projekt Red", year: "2020", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg", 
        description: "เกม Open World RPG ในโลกอนาคตที่เต็มไปด้วยเรื่องราวและภารกิจ", 
        features: ["โลก Night City", "เนื้อเรื่องขนาดใหญ่", "ระบบอัปเกรดไซเบอร์แวร์", "อาวุธหลากหลาย", "กราฟิก Ray Tracing"], 
        min: ["Intel Core i7", "16 GB", "GTX 1060", "70 GB", "Windows 10"], rec: ["Intel Core i7", "16 GB", "RTX 3070", "70 GB", "Windows 11"] 
    },
    "red-dead-redemption-2": { 
        name: "Red Dead Redemption 2", platform: "PC / Console", category: "ACTION", score: "9.8", developer: "Rockstar Games", year: "2019", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg", 
        description: "เกมผจญภัย Open World ในโลกตะวันตกที่มีเนื้อเรื่องเข้มข้นที่สุด", 
        features: ["โลกคาวบอยสมจริง", "เนื้อเรื่องระดับรางวัล", "ระบบความสัมพันธ์ค่าย", "กิจกรรมตกปลาล่าสัตว์", "Red Dead Online"], 
        min: ["Intel Core i5", "8 GB", "GTX 1060", "150 GB", "Windows 10"], rec: ["Intel Core i7", "16 GB", "RTX 2070", "150 GB", "Windows 11"] 
    },
    "ghost-of-tsushima": { 
        name: "Ghost of Tsushima", platform: "PC / Console", category: "ACTION", score: "9.4", developer: "Sucker Punch", year: "2024", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2215430/header.jpg", 
        description: "สวมบทซามูไรปกป้องเกาะสึชิมะจากการรุกรานของมองโกล", 
        features: ["ระบบต่อสู้ซามูไร", "ภาพบรรยากาศสวยงาม", "ลอบเร้นแบบนินจา", "โหมด Co-op Legends", "รองรับจอกว้าง"], 
        min: ["Intel Core i3", "8 GB", "GTX 960", "75 GB", "Windows 10"], rec: ["Intel Core i5", "16 GB", "RTX 2060", "75 GB", "Windows 11"] 
    },
    "spider-man-remastered": { 
        name: "Marvel's Spider-Man", platform: "PC / Console", category: "ACTION", score: "9.1", developer: "Insomniac Games", year: "2022", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1817070/header.jpg", 
        description: "ผจญภัยในมหานครนิวยอร์กด้วยการโหนใยสุดมันส์", 
        features: ["การโหนใยสมูท", "ระบบต่อสู้คอมโบ", "เนื้อเรื่องซูเปอร์ฮีโร่", "ปลดล็อกชุดสไปเดอร์แมน", "รองรับ Ray Tracing"], 
        min: ["Intel Core i3", "8 GB", "GTX 950", "75 GB", "Windows 10"], rec: ["Intel Core i5", "16 GB", "GTX 1060", "75 GB", "Windows 11"] 
    },
    "sekiro": { 
        name: "Sekiro: Shadows Die Twice", platform: "PC / Console", category: "ACTION", score: "9.5", developer: "FromSoftware", year: "2019", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg", 
        description: "เกมแอ็กชันยากระดับตำนานที่เน้นการแพรี่และจังหวะต่อสู้", 
        features: ["ระบบปัดป้อง (Parry)", "แขนกลนินจา", "ความยากระดับท้าทาย", "บรรยากาศญี่ปุ่นโบราณ", "บอสไฟต์ดุเดือด"], 
        min: ["Intel Core i3", "4 GB", "GTX 760", "25 GB", "Windows 10"], rec: ["Intel Core i5", "8 GB", "GTX 970", "25 GB", "Windows 10"] 
    },
    "space-marine-2": { 
        name: "Warhammer 40k: Space Marine 2", platform: "PC / Console", category: "ACTION", score: "8.9", developer: "Saber Interactive", year: "2024", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2183900/header.jpg", 
        description: "เกมยิงเดือดเลือดสาดสวมบทสเปซมารีนถล่มฝูงเอเลี่ยน", 
        features: ["อาวุธทำลายล้าง", "ฝูงศัตรูจำนวนมหาศาล", "โหมด Co-op 3 คน", "กราฟิก Next-Gen", "อัปเกรดคลาส"], 
        min: ["Intel Core i5", "8 GB", "GTX 1060", "75 GB", "Windows 10"], rec: ["Intel Core i7", "16 GB", "RTX 3070", "75 GB", "Windows 11"] 
    },

    // ================= หมวด RPG =================
    "elden-ring": { 
        name: "Elden Ring", platform: "PC / Console", category: "RPG", score: "9.8", developer: "FromSoftware", year: "2022", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg", 
        description: "สุดยอดเกม Action RPG Open World ระดับ Game of the Year", 
        features: ["โลก Open World", "บอสสุดท้าทาย", "บิลด์ตัวละครอิสระ", "เนื้อเรื่องซ่อนเร้น", "Co-op / PvP"], 
        min: ["Intel Core i5", "12 GB", "GTX 1060", "60 GB", "Windows 10"], rec: ["Intel Core i7", "16 GB", "RTX 2070", "60 GB", "Windows 11"] 
    },
    "baldurs-gate-3": { 
        name: "Baldur's Gate 3", platform: "PC / Console", category: "RPG", score: "9.9", developer: "Larian Studios", year: "2023", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg", 
        description: "เกม RPG เทิร์นเบสที่มีเนื้อเรื่องและทางเลือกแตกแขนงมากมาย", 
        features: ["ระบบ D&D 5e", "ทางเลือกส่งผลต่อเนื้อเรื่อง", "ตัวละครมีมิติ", "Co-op เล่นกับเพื่อน", "งานภาพสวยงาม"], 
        min: ["Intel Core i5", "8 GB", "GTX 970", "150 GB", "Windows 10"], rec: ["Intel Core i7", "16 GB", "RTX 2060", "150 GB", "Windows 11"] 
    },
    "witcher-3": { 
        name: "The Witcher 3: Wild Hunt", platform: "PC / Console", category: "RPG", score: "9.7", developer: "CD Projekt Red", year: "2015", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg", 
        description: "สวมบทวิทเชอร์ล่าปีศาจในโลกแฟนตาซีที่มีเควสต์ระดับตำนาน", 
        features: ["โลก Open World", "เควสต์รองยอดเยี่ยม", "ระบบต่อสู้ใช้เวทมนตร์", "เกมไพ่ Gwent", "เนื้อเรื่องลึกซึ้ง"], 
        min: ["Intel Core i5", "6 GB", "GTX 660", "50 GB", "Windows 10"], rec: ["Intel Core i7", "8 GB", "GTX 770", "50 GB", "Windows 11"] 
    },
    "monster-hunter-world": { 
        name: "Monster Hunter: World", platform: "PC / Console", category: "RPG", score: "9.2", developer: "Capcom", year: "2018", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/582010/header.jpg", 
        description: "ออกล่ามอนสเตอร์ขนาดยักษ์ คราฟต์อาวุธ และเล่นร่วมกับเพื่อน", 
        features: ["อาวุธ 14 ชนิด", "มอนสเตอร์ขนาดใหญ่", "ระบบคราฟต์ของ", "สภาพแวดล้อมมีชีวิต", "Co-op 4 คน"], 
        min: ["Intel Core i5", "8 GB", "GTX 760", "48 GB", "Windows 10"], rec: ["Intel Core i7", "8 GB", "GTX 1060", "48 GB", "Windows 11"] 
    },
    "persona-5-royal": { 
        name: "Persona 5 Royal", platform: "PC / Console", category: "RPG", score: "9.5", developer: "ATLUS", year: "2022", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1687950/header.jpg", 
        description: "ใช้ชีวิตนักเรียน ม.ปลาย สลับกับเป็นจอมโจรขโมยหัวใจคนชั่ว", 
        features: ["ระบบ Turn-based", "งานศิลป์สไตล์อนิเมะ", "ดนตรีประกอบสุดเท่", "ระบบจีบสาว/ผูกมิตร", "ดันเจี้ยนซับซ้อน"], 
        min: ["Intel Core i7", "8 GB", "GTX 650 Ti", "41 GB", "Windows 10"], rec: ["Intel Core i7", "8 GB", "GTX 760", "41 GB", "Windows 11"] 
    },
    "fallout-4": { 
        name: "Fallout 4", platform: "PC / Console", category: "RPG", score: "8.8", developer: "Bethesda", year: "2015", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/377160/header.jpg", 
        description: "เอาชีวิตรอดในโลกหลังสงครามนิวเคลียร์ สร้างฐาน และสำรวจ", 
        features: ["โลก Wasteland", "ระบบสร้างฐาน", "ปรับแต่งอาวุธปืน", "มีคอมพาเนียนช่วยสู้", "รองรับ Mods มหาศาล"], 
        min: ["Intel Core i5", "8 GB", "GTX 550 Ti", "30 GB", "Windows 10"], rec: ["Intel Core i7", "8 GB", "GTX 780", "30 GB", "Windows 11"] 
    },
    "hogwarts-legacy": { 
        name: "Hogwarts Legacy", platform: "PC / Console", category: "RPG", score: "9.0", developer: "Avalanche Software", year: "2023", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/990080/header.jpg", 
        description: "สานฝันการเป็นนักเรียนฮอกวอตส์ในโลกเวทมนตร์ปลายศตวรรษที่ 18", 
        features: ["สำรวจฮอกวอตส์อิสระ", "เรียนคาถาเวทมนตร์", "ขี่ไม้กวาดบิน", "ผสมยาและปลูกพืช", "เนื้อเรื่องออริจินัล"], 
        min: ["Intel Core i5", "16 GB", "GTX 960", "85 GB", "Windows 10"], rec: ["Intel Core i7", "16 GB", "RTX 3060", "85 GB", "Windows 11"] 
    },
    "dragons-dogma-2": { 
        name: "Dragon's Dogma 2", platform: "PC / Console", category: "RPG", score: "8.7", developer: "Capcom", year: "2024", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2054970/header.jpg", 
        description: "ผจญภัยในโลกแฟนตาซีพร้อมระบบ Pawn สุดล้ำลึก", 
        features: ["ระบบลูกน้อง Pawn", "ต่อสู้ปีนป่ายมอนสเตอร์", "อาชีพหลากหลาย", "โลกอิสระไม่มีโหลดดิ้ง", "เวทมนตร์อลังการ"], 
        min: ["Intel Core i5", "16 GB", "GTX 1070", "100 GB", "Windows 10"], rec: ["Intel Core i7", "16 GB", "RTX 2080", "100 GB", "Windows 11"] 
    },

    // ================= หมวด SIMULATION =================
    "the-sims-4": { 
        name: "The Sims 4", platform: "PC / Console", category: "SIMULATION", score: "8.9", developer: "Maxis", year: "2014", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222670/header.jpg", 
        description: "เกมจำลองการใช้ชีวิตที่ให้คุณสร้างตัวละครและบ้านในฝัน", 
        features: ["สร้างซิมส์อิสระ", "โหมดสร้างบ้านละเอียด", "ระบบอารมณ์ความรู้สึก", "ส่วนเสริม (DLC) เพียบ", "ชุมชน Mods ยิ่งใหญ่"], 
        min: ["Intel Core 2 Duo", "4 GB", "GT 1030", "18 GB", "Windows 10"], rec: ["Intel Core i5", "8 GB", "GTX 1650", "30 GB", "Windows 11"] 
    },
    "stardew-valley": { 
        name: "Stardew Valley", platform: "PC / Console", category: "SIMULATION", score: "9.8", developer: "ConcernedApe", year: "2016", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg", 
        description: "สืบทอดฟาร์มจากปู่ ปลูกผัก เลี้ยงสัตว์ จีบสาวในเมือง", 
        features: ["ทำฟาร์มครบวงจร", "ขุดเหมืองสู้มอนสเตอร์", "ระบบความสัมพันธ์", "Co-op เล่นกับเพื่อน", "ภาพพิกเซลคลาสสิก"], 
        min: ["2 GHz CPU", "2 GB", "Intel HD", "500 MB", "Windows 10"], rec: ["3 GHz CPU", "4 GB", "GTX 960", "500 MB", "Windows 11"] 
    },
    "planet-zoo": { 
        name: "Planet Zoo", platform: "PC / Console", category: "SIMULATION", score: "9.1", developer: "Frontier Developments", year: "2019", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/703080/header.jpg", 
        description: "สร้างและบริหารสวนสัตว์ระดับโลก ดูแลสัตว์ป่าอย่างใกล้ชิด", 
        features: ["สร้างสวนสัตว์อิสระ", "สัตว์ป่าสมจริง", "ระบบเศรษฐกิจ", "ปรับแต่งสภาพแวดล้อม", "โหมด Sandbox"], 
        min: ["Intel Core i5", "8 GB", "GTX 770", "16 GB", "Windows 10"], rec: ["Intel Core i7", "16 GB", "GTX 1070", "16 GB", "Windows 11"] 
    },
    "euro-truck-simulator-2": { 
        name: "Euro Truck Simulator 2", platform: "PC", category: "SIMULATION", score: "9.6", developer: "SCS Software", year: "2012", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/227300/header.jpg", 
        description: "จำลองการขับรถบรรทุกและบริหารบริษัทขนส่งทั่วยุโรป", 
        features: ["แผนที่ยุโรปสมจริง", "รถบรรทุกลิขสิทธิ์แท้", "บริหารบริษัทขนส่ง", "วิทยุอินเทอร์เน็ตในเกม", "รองรับพวงมาลัย"], 
        min: ["Intel Core i5", "8 GB", "GTX 760", "25 GB", "Windows 10"], rec: ["Intel Core i7", "16 GB", "GTX 1660", "50 GB", "Windows 11"] 
    },
    "microsoft-flight-simulator": { 
        name: "Microsoft Flight Simulator", platform: "PC / Console", category: "SIMULATION", score: "9.3", developer: "Asobo Studio", year: "2020", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1250410/header.jpg", 
        description: "จำลองการบินที่ดึงข้อมูลแผนที่จากดาวเทียมมาสร้างโลกทั้งใบ", 
        features: ["บินไปได้ทั่วโลก", "กราฟิกสมจริงขั้นสุด", "สภาพอากาศเรียลไทม์", "เครื่องบินหลากหลาย", "ฟิสิกส์การบินละเอียด"], 
        min: ["Intel Core i5", "16 GB", "GTX 970", "150 GB", "Windows 10"], rec: ["Intel Core i7", "32 GB", "RTX 3070", "150 GB", "Windows 11"] 
    },
    "cities-skylines": { 
        name: "Cities: Skylines", platform: "PC / Console", category: "SIMULATION", score: "9.2", developer: "Colossal Order", year: "2015", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/255710/header.jpg", 
        description: "สุดยอดเกมสร้างเมืองที่เน้นการวางระบบจราจรและผังเมือง", 
        features: ["วางผังเมืองอิสระ", "ระบบจราจรซับซ้อน", "นโยบายระดับเขต", "บริการสาธารณะ", "Mods จำนวนมหาศาล"], 
        min: ["Intel Core 2 Duo", "4 GB", "GTX 260", "4 GB", "Windows 10"], rec: ["Intel Core i5", "8 GB", "GTX 660", "4 GB", "Windows 11"] 
    },
    "house-flipper-2": { 
        name: "House Flipper 2", platform: "PC / Console", category: "SIMULATION", score: "8.6", developer: "Frozen District", year: "2023", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1190970/header.jpg", 
        description: "รับเหมาทำความสะอาด ซ่อมแซม และรีโนเวทบ้านเพื่อขายทำกำไร", 
        features: ["ทาสีและปูกระเบื้อง", "ทุบกำแพงสร้างใหม่", "ทำความสะอาด", "โหมดเนื้อเรื่อง", "เครื่องมืออัปเกรดได้"], 
        min: ["Intel Core i5", "8 GB", "GTX 970", "6 GB", "Windows 10"], rec: ["Intel Core i7", "16 GB", "RTX 2060", "6 GB", "Windows 11"] 
    },

    // ================= หมวด ADVENTURE =================
    "the-last-of-us-part-1": { 
        name: "The Last of Us Part I", platform: "PC / Console", category: "ADVENTURE", score: "9.4", developer: "Naughty Dog", year: "2023", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg", 
        description: "การเดินทางเอาชีวิตรอดสุดสะเทือนอารมณ์ของโจเอลและเอลลี่", 
        features: ["เนื้อเรื่องระดับรางวัล", "กราฟิกรีเมคใหม่ทั้งหมด", "ระบบคราฟต์ไอเทม", "ศัตรูติดเชื้อสยองขวัญ", "ลอบเร้นตึงเครียด"], 
        min: ["Intel Core i7", "16 GB", "GTX 1050 Ti", "75 GB", "Windows 10"], rec: ["Intel Core i7", "32 GB", "RTX 3060", "75 GB", "Windows 11"] 
    },
    "uncharted-legacy": { 
        name: "UNCHARTED: Legacy of Thieves", platform: "PC / Console", category: "ADVENTURE", score: "9.0", developer: "Naughty Dog", year: "2022", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1659420/header.jpg", 
        description: "ออกล่าสมบัติระดับบล็อกบัสเตอร์ไปกับนาธาน เดรก", 
        features: ["ฉากแอ็กชันอลังการ", "แก้ปริศนาโบราณสถาน", "ภาพวิวทิวทัศน์สวยงาม", "ปีนป่ายผาดโผน", "ยิงปืนที่กำบัง"], 
        min: ["Intel Core i5", "8 GB", "GTX 960", "126 GB", "Windows 10"], rec: ["Intel Core i7", "16 GB", "RTX 2060", "126 GB", "Windows 11"] 
    },
    "hollow-knight": { 
        name: "Hollow Knight", platform: "PC / Console", category: "ADVENTURE", score: "9.7", developer: "Team Cherry", year: "2017", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg", 
        description: "เกมอินดี้แนว Metroidvania สไตล์ 2D ลงดันเจี้ยนแมลง", 
        features: ["สำรวจโลกใต้ดิน", "บอสไฟต์ท้าทาย", "อัปเกรดสกิลอิสระ", "ดนตรีประกอบไพเราะ", "งานภาพวาดมือ"], 
        min: ["Intel Core 2 Duo", "4 GB", "GeForce 9800GTX", "9 GB", "Windows 10"], rec: ["Intel Core i5", "8 GB", "GTX 560", "9 GB", "Windows 11"] 
    },
    "palworld": { 
        name: "Palworld", platform: "PC / Console", category: "ADVENTURE", score: "8.9", developer: "Pocketpair", year: "2024", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1623730/header.jpg", 
        description: "เอาชีวิตรอด จับมอนสเตอร์ (Pals) มาสร้างฐานและต่อสู้ติดอาวุธปืน", 
        features: ["จับและใช้งาน Pals", "ระบบสร้างฐานอัตโนมัติ", "สำรวจโลก Open World", "ต่อสู้ด้วยปืน", "Co-op สูงสุด 32 คน"], 
        min: ["Intel Core i5", "16 GB", "GTX 1050", "40 GB", "Windows 10"], rec: ["Intel Core i9", "32 GB", "RTX 2070", "40 GB", "Windows 11"] 
    },
    "it-takes-two": { 
        name: "It Takes Two", platform: "PC / Console", category: "ADVENTURE", score: "9.6", developer: "Hazelight", year: "2021", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg", 
        description: "เกมบังคับเล่น Co-op 2 คนสุดหรรษาเพื่อกอบกู้ความสัมพันธ์", 
        features: ["บังคับเล่น 2 คน (Split Screen)", "ระบบเกมเพลย์หลากหลาย", "พัซเซิลร่วมมือ", "ภาพสไตล์แอนิเมชัน", "เพื่อนเล่นฟรีได้ (Friend's Pass)"], 
        min: ["Intel Core i3", "8 GB", "GTX 660", "50 GB", "Windows 10"], rec: ["Intel Core i5", "16 GB", "GTX 980", "50 GB", "Windows 11"] 
    },
    "stray": { 
        name: "Stray", platform: "PC / Console", category: "ADVENTURE", score: "9.2", developer: "BlueTwelve Studio", year: "2022", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1332010/header.jpg", 
        description: "รับบทเป็นแมวจรจัดในเมืองไซเบอร์พังก์ที่ไร้ผู้คน", 
        features: ["เล่นเป็นแมว", "เมืองไซเบอร์พังก์", "แก้ปริศนาเบาๆ", "ปุ่มร้องเหมียว", "บรรยากาศลึกลับ"], 
        min: ["Intel Core i5", "8 GB", "GTX 650 Ti", "10 GB", "Windows 10"], rec: ["Intel Core i5", "8 GB", "GTX 780", "10 GB", "Windows 11"] 
    },

    // ================= หมวด SPORT =================
    "ea-sports-fc-25": { 
        name: "EA SPORTS FC 25", platform: "PC / Console", category: "SPORT", score: "8.4", developer: "EA Sports", year: "2024", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2669320/header.jpg", 
        description: "เกมฟุตบอลภาคใหม่ล่าสุดจาก EA พร้อมระบบแทคติคสมจริง", 
        features: ["โหมด 5v5 Rush", "ระบบ FC IQ", "ลิขสิทธิ์สโมสรแท้", "Ultimate Team", "Career Mode"], 
        min: ["Intel Core i5", "8 GB", "GTX 1050 Ti", "100 GB", "Windows 10"], rec: ["Intel Core i7", "16 GB", "RTX 2070", "100 GB", "Windows 11"] 
    },
    "nba-2k25": { 
        name: "NBA 2K25", platform: "PC / Console", category: "SPORT", score: "8.3", developer: "Visual Concepts", year: "2024", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2878980/header.jpg", 
        description: "จำลองบาสเกตบอล NBA สมจริงบนกราฟิก Next-Gen", 
        features: ["ระบบ ProPLAY", "MyCAREER", "MyTEAM", "The City โฉมใหม่", "แอนิเมชันนักบาสสมจริง"], 
        min: ["Intel Core i3", "8 GB", "GTX 960", "150 GB", "Windows 10"], rec: ["Intel Core i5", "16 GB", "RTX 2070", "150 GB", "Windows 11"] 
    },
    "wwe-2k24": { 
        name: "WWE 2K24", platform: "PC / Console", category: "SPORT", score: "8.6", developer: "Visual Concepts", year: "2024", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2315690/header.jpg", 
        description: "ฉลองครบรอบ 40 ปี WrestleMania ในเกมมวยปล้ำสุดมันส์", 
        features: ["โหมด WrestleMania", "นักมวยปล้ำ 200+ คน", "ประเภทแมตช์ใหม่", "MyGM", "สร้างตัวละครอิสระ"], 
        min: ["Intel Core i5", "8 GB", "GTX 1060", "90 GB", "Windows 10"], rec: ["Intel Core i7", "16 GB", "RTX 2060", "90 GB", "Windows 11"] 
    },
    "football-manager-2024": { 
        name: "Football Manager 2024", platform: "PC / Console", category: "SPORT", score: "9.3", developer: "Sports Interactive", year: "2023", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2252570/header.jpg", 
        description: "บริหารสโมสรฟุตบอล ซื้อขายนักเตะ และวางแทคติค", 
        features: ["ระบบแทคติคละเอียด", "ฐานข้อมูลนักเตะระดับโลก", "ตลาดซื้อขายสมจริง", "คุมทีมแข่ง 3D", "นำเข้าเซฟเก่าได้"], 
        min: ["Intel Core 2 Duo", "4 GB", "Intel GMA", "7 GB", "Windows 10"], rec: ["Intel Core i5", "8 GB", "GTX 960", "7 GB", "Windows 11"] 
    },
    "tony-hawks-pro-skater-1-2": { 
        name: "Tony Hawk's Pro Skater 1 + 2", platform: "PC / Console", category: "SPORT", score: "9.0", developer: "Vicarious Visions", year: "2023", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2395210/header.jpg", 
        description: "รีเมคเกมสเกตบอร์ดระดับตำนาน กลับมาพร้อมกราฟิกคมชัด", 
        features: ["คอมโบท่าสเกต", "ดนตรีพังก์ร็อกดั้งเดิม", "เล่น Split Screen", "สร้างลานสเกตเอง", "นักสเกตระดับโปร"], 
        min: ["Intel Core i3", "8 GB", "GTX 1050 Ti", "24 GB", "Windows 10"], rec: ["Intel Core i5", "12 GB", "GTX 1060", "24 GB", "Windows 11"] 
    }
};