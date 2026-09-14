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
    },
    // ================= หมวด RACING (เพิ่มเติม) =================
    "need-for-speed-heat": { 
        name: "Need for Speed Heat", platform: "PC / Console", category: "RACING", score: "8.0", developer: "Ghost Games", year: "2019", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1222680/header.jpg", 
        description: "ซิ่งกลางวันเพื่อหาเงิน และแข่งใต้ดินตอนกลางคืนเพื่อสร้างชื่อเสียงหนีการไล่ล่าของตำรวจ", 
        features: ["แข่งรถสองช่วงเวลา", "แต่งรถได้อิสระมาก", "ตำรวจไล่ล่าดุเดือด", "กราฟิกสีสันสไตล์นีออน", "เล่นออนไลน์กับเพื่อน"], 
        min: ["Intel Core i5-3570", "8 GB", "GTX 760", "50 GB", "Windows 10"], rec: ["Intel Core i7-4790", "16 GB", "GTX 1060", "50 GB", "Windows 10"] 
    },
    "carx-drift-racing": { 
        name: "CarX Drift Racing Online", platform: "PC / Console", category: "RACING", score: "8.8", developer: "CarX Technologies", year: "2017", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/320140/header.jpg", 
        description: "สุดยอดเกมจำลองการดริฟต์ที่สมจริงและได้รับความนิยมสูงสุดในหมู่ผู้เล่นสายรถซิ่ง", 
        features: ["ฟิสิกส์การดริฟต์สมจริง", "ปรับจูนเครื่องยนต์ละเอียด", "ระบบสร้างลายรถ", "ห้องเล่นออนไลน์ลื่นไหล", "รองรับพวงมาลัยครบชุด"], 
        min: ["Intel Core i5-4590", "4 GB", "GTX 950", "6 GB", "Windows 10"], rec: ["Intel Core i5-8300H", "8 GB", "GTX 1050", "6 GB", "Windows 10"] 
    },
    "snowrunner": { 
        name: "SnowRunner", platform: "PC / Console", category: "RACING", score: "8.9", developer: "Saber Interactive", year: "2021", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1465360/header.jpg", 
        description: "ขับรถลุยโคลนและหิมะในสภาพแวดล้อมสุดหฤโหดเพื่อส่งของและกู้ภัย", 
        features: ["ระบบฟิสิกส์โคลนและน้ำสมจริง", "ยานพาหนะออฟโรด 40+ คัน", "แผนที่ขนาดใหญ่", "ภารกิจท้าทายความอดทน", "Co-op 4 คน"], 
        min: ["Intel Core i3-4130", "8 GB", "GTX 660", "20 GB", "Windows 10"], rec: ["Intel Core i7-8700", "16 GB", "GTX 970", "20 GB", "Windows 10"] 
    },
    "wrc-generations": { 
        name: "WRC Generations", platform: "PC / Console", category: "RACING", score: "8.1", developer: "KT Racing", year: "2022", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1953520/header.jpg", 
        description: "เกมแข่งรถแรลลี่ลิขสิทธิ์แท้ที่รวบรวมรถและสนามแข่งมากที่สุดในซีรีส์", 
        features: ["ระบบเครื่องยนต์ไฮบริด", "สนามแข่ง 165 สเตจ", "ระบบลีกออนไลน์", "สภาพอากาศไดนามิก", "สร้างทีมแข่งของตัวเอง"], 
        min: ["Intel Core i5-2300", "8 GB", "GTX 650 Ti", "47 GB", "Windows 10"], rec: ["Intel Core i7-4790K", "16 GB", "GTX 1070", "47 GB", "Windows 10"] 
    },
    "f1-manager-2023": { 
        name: "F1 Manager 2023", platform: "PC / Console", category: "RACING", score: "8.3", developer: "Frontier Developments", year: "2023", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2287220/header.jpg", 
        description: "รับบทผู้จัดการทีม Formula 1 ควบคุมทุกอย่างตั้งแต่รถยันกลยุทธ์พิตสต็อป", 
        features: ["บริหารจัดการทีม F1", "ภาพกราฟิกการแข่งสมจริง", "กำหนดกลยุทธ์ยาง", "พัฒนารถยนต์", "รับมืออุบัติเหตุในสนาม"], 
        min: ["Intel Core i5-4590", "8 GB", "GTX 960", "30 GB", "Windows 10"], rec: ["Intel Core i7-7700", "16 GB", "GTX 1080", "30 GB", "Windows 10"] 
    },

    // ================= หมวด ACTION (เพิ่มเติม) =================
    "god-of-war": { 
        name: "God of War", platform: "PC / Console", category: "ACTION", score: "9.7", developer: "Santa Monica Studio", year: "2022", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg", 
        description: "การผจญภัยครั้งใหม่ของเครโทสและเอเทรอัสในดินแดนเทพเจ้านอร์สสุดโหด", 
        features: ["ระบบต่อสู้ด้วยขวานสุดมันส์", "เนื้อเรื่องซาบซึ้งกินใจ", "มุมกล้องแบบ Long Take เล่าเรื่องต่อเนื่อง", "อัปเกรดสกิลและชุด", "บอสไฟต์อลังการ"], 
        min: ["Intel Core i5-2500K", "8 GB", "GTX 960", "70 GB", "Windows 10"], rec: ["Intel Core i5-6600K", "16 GB", "GTX 1060", "70 GB", "Windows 10"] 
    },
    "devil-may-cry-5": { 
        name: "Devil May Cry 5", platform: "PC / Console", category: "ACTION", score: "9.4", developer: "Capcom", year: "2019", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/601150/header.jpg", 
        description: "กลับมาทวงบัลลังก์เกมแอ็กชันสับแหลก ทำคอมโบสุดเท่เพื่อคะแนน SSS", 
        features: ["ตัวละครหลัก 3 ตัวละคร", "คอมโบสุดอลังการ", "กราฟิกสมจริงด้วย RE Engine", "เพลงประกอบปลุกใจ", "ความยากหลายระดับ"], 
        min: ["Intel Core i5-4460", "8 GB", "GTX 760", "35 GB", "Windows 10"], rec: ["Intel Core i7-4770K", "8 GB", "GTX 1060", "35 GB", "Windows 10"] 
    },
    "doom-eternal": { 
        name: "DOOM Eternal", platform: "PC / Console", category: "ACTION", score: "9.3", developer: "id Software", year: "2020", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/782330/header.jpg", 
        description: "สวมบท Doom Slayer กระโดดสับและยิงแหลกฝ่าดงปีศาจจากนรก", 
        features: ["เกมเพลย์ยิงปืนรวดเร็ว", "ระบบเติมเลือดจากการ Glory Kill", "ปืนและอุปกรณ์ทำลายล้าง", "ดนตรีเมทัลโยกหัวดุดัน", "แพลตฟอร์มมิ่งปีนป่าย"], 
        min: ["Intel Core i5 @ 3.3 GHz", "8 GB", "GTX 1050 Ti", "80 GB", "Windows 10"], rec: ["Intel Core i7-6700K", "8 GB", "GTX 1080", "80 GB", "Windows 10"] 
    },
    "sifu": { 
        name: "Sifu", platform: "PC / Console", category: "ACTION", score: "8.9", developer: "Sloclap", year: "2023", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2138710/header.jpg", 
        description: "เกมกังฟูที่ตายแล้วจะแก่ขึ้น ต้องล้างแค้นด้วยศิลปะการต่อสู้มือเปล่า", 
        features: ["ระบบต่อสู้ระยะประชิดล้ำลึก", "แก่ขึ้นทุกครั้งที่ตาย", "ฉากแอ็กชันคล้ายหนังภาพยนตร์", "เรียนรู้คอมโบกังฟู", "ท้าทายทักษะผู้เล่น"], 
        min: ["Intel Core i5-3470", "8 GB", "GTX 660", "22 GB", "Windows 10"], rec: ["Intel Core i7-6700K", "10 GB", "GTX 970", "22 GB", "Windows 10"] 
    },
    "armored-core-6": { 
        name: "ARMORED CORE VI", platform: "PC / Console", category: "ACTION", score: "9.1", developer: "FromSoftware", year: "2023", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1888160/header.jpg", 
        description: "สร้างหุ่นรบและปรับแต่งชิ้นส่วนเพื่อออกไปทำภารกิจสุดมันส์สไตล์หุ่นยนต์", 
        features: ["ปรับแต่งหุ่นรบได้อิสระ", "การเคลื่อนที่ 3 มิติ", "บอสไฟต์อลังการ", "ภารกิจหลากหลายรูปแบบ", "กราฟิกเอฟเฟกต์ระเบิดสมจริง"], 
        min: ["Intel Core i7-4790K", "12 GB", "GTX 1650", "60 GB", "Windows 10"], rec: ["Intel Core i7-7700", "12 GB", "GTX 1060", "60 GB", "Windows 11"] 
    },

    // ================= หมวด RPG (เพิ่มเติม) =================
    "horizon-forbidden-west": { 
        name: "Horizon Forbidden West", platform: "PC / Console", category: "RPG", score: "9.2", developer: "Guerrilla Games", year: "2024", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2420110/header.jpg", 
        description: "ผจญภัยไปในดินแดนตะวันตกที่เต็มไปด้วยเครื่องจักรกลไดโนเสาร์", 
        features: ["กราฟิกโคตรสวยงาม", "ต่อสู้กับหุ่นยนต์ยักษ์", "สำรวจโลกใต้น้ำ", "อาวุธธนูหลากชนิด", "เนื้อเรื่องไซไฟผจญภัย"], 
        min: ["Intel Core i3-8100", "16 GB", "GTX 1650", "150 GB", "Windows 10"], rec: ["Intel Core i5-8600", "16 GB", "RTX 3060", "150 GB", "Windows 10"] 
    },
    "mass-effect-legendary": { 
        name: "Mass Effect Legendary Edition", platform: "PC / Console", category: "RPG", score: "9.5", developer: "BioWare", year: "2021", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1328670/header.jpg", 
        description: "มหากาพย์ไซไฟ RPG ตะลุยอวกาศที่รวมเอา 3 ภาคมารีมาสเตอร์ใหม่", 
        features: ["รวมเกม 3 ภาคจบ", "ทางเลือกส่งผลต่อทั้งไตรภาค", "เนื้อเรื่องอวกาศสุดเข้มข้น", "สร้างตัวละครผู้บัญชาการ Shepard", "กราฟิกรีมาสเตอร์"], 
        min: ["Intel Core i5 3570", "8 GB", "GTX 760", "120 GB", "Windows 10"], rec: ["Intel Core i7-7700", "16 GB", "GTX 1070", "120 GB", "Windows 10"] 
    },
    "diablo-4": { 
        name: "Diablo IV", platform: "PC / Console", category: "RPG", score: "8.5", developer: "Blizzard Entertainment", year: "2023", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2344520/header.jpg", 
        description: "เกม Action RPG ระดับตำนานตะลุยดันเจี้ยน ฟาร์มของสู้ปีศาจ", 
        features: ["โลก Open World มืดมน", "บิลด์ตัวละครหลากหลาย", "ระบบฤดูกาลอัปเดตต่อเนื่อง", "Co-op ล่าบอสโลก", "คลาสตัวละครเอกลักษณ์ชัดเจน"], 
        min: ["Intel Core i5-2500K", "8 GB", "GTX 660", "90 GB", "Windows 10"], rec: ["Intel Core i5-4670K", "16 GB", "GTX 970", "90 GB", "Windows 10"] 
    },
    "persona-3-reload": { 
        name: "Persona 3 Reload", platform: "PC / Console", category: "RPG", score: "9.3", developer: "ATLUS", year: "2024", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2161700/header.jpg", 
        description: "ภาครีเมคของเกม RPG สุดคลาสสิก เรื่องราวของเด็กนักเรียนกับชั่วโมงที่ 25", 
        features: ["กราฟิกรีเมคใหม่หมด", "UI สุดเท่และมีสไตล์", "ระบบความสัมพันธ์ตัวละครลึกซึ้ง", "ดันเจี้ยนทาร์ทารัส", "เพลงประกอบยอดเยี่ยม"], 
        min: ["Intel Core i5-2300", "8 GB", "GTX 650 Ti", "30 GB", "Windows 10"], rec: ["Intel Core i7-4790", "8 GB", "GTX 1650", "30 GB", "Windows 10"] 
    },
    "ff7-remake": { 
        name: "Final Fantasy VII Remake Intergrade", platform: "PC / Console", category: "RPG", score: "9.6", developer: "Square Enix", year: "2021", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1462040/header.jpg", 
        description: "รีเมคตำนานเกม RPG ที่เปลี่ยนระบบต่อสู้ให้เป็นแอ็กชันผสมแทคติค", 
        features: ["เมืองมิดการ์สุดอลังการ", "ระบบต่อสู้แอ็กชัน + ATB", "เนื้อเรื่องขยายความใหม่", "มาพร้อมเนื้อเรื่องเสริมของ Yuffie", "กราฟิกระดับ Next-gen"], 
        min: ["Intel Core i5 3330", "8 GB", "GTX 780", "100 GB", "Windows 10"], rec: ["Intel Core i7-3770", "12 GB", "GTX 1080", "100 GB", "Windows 10"] 
    },

    // ================= หมวด SIMULATION (เพิ่มเติม) =================
    "farming-simulator-22": { 
        name: "Farming Simulator 22", platform: "PC / Console", category: "SIMULATION", score: "8.8", developer: "GIANTS Software", year: "2021", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1248130/header.jpg", 
        description: "จำลองการทำเกษตรกรรมที่สมจริงที่สุด ตั้งแต่ปลูกพืช เลี้ยงสัตว์ ไปจนถึงสร้างโรงงาน", 
        features: ["เครื่องจักรการเกษตรของจริง", "ระบบฤดูกาลสี่ฤดู", "ระบบเครือข่ายการผลิต", "มัลติเพลเยอร์ช่วยกันทำฟาร์ม", "รองรับ Mod เต็มรูปแบบ"], 
        min: ["Intel Core i5-3330", "8 GB", "GTX 660", "35 GB", "Windows 10"], rec: ["Intel Core i5-5675C", "8 GB", "GTX 1060", "35 GB", "Windows 10"] 
    },
    "frostpunk-2": { 
        name: "Frostpunk 2", platform: "PC / Console", category: "SIMULATION", score: "8.7", developer: "11 bit studios", year: "2024", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1601580/header.jpg", 
        description: "สร้างและบริหารเมืองในยุคน้ำแข็ง พร้อมการตัดสินใจด้านศีลธรรมสุดกดดัน", 
        features: ["สร้างมหานครแห่งการเอาชีวิตรอด", "ระบบการเมืองและสภาเมือง", "สภาพอากาศสุดขั้ว", "ทางเลือกที่ส่งผลกระทบต่อประชาชน", "กราฟิกขยายสเกลเมืองใหญ่ขึ้น"], 
        min: ["Intel Core i5", "8 GB", "GTX 1050 Ti", "30 GB", "Windows 10"], rec: ["Intel Core i7", "16 GB", "RTX 2060", "30 GB", "Windows 11"] 
    },
    "jurassic-world-evo-2": { 
        name: "Jurassic World Evolution 2", platform: "PC / Console", category: "SIMULATION", score: "8.6", developer: "Frontier Developments", year: "2021", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1244460/header.jpg", 
        description: "สร้างสวนสนุกไดโนเสาร์และดูแลจัดการสัตว์ดึกดำบรรพ์ให้อยู่ในความควบคุม", 
        features: ["ไดโนเสาร์มากกว่า 75 ชนิด", "สร้างและออกแบบกรงสัตว์", "รับมือภัยพิบัติพายุ", "โหมดทฤษฎีความวุ่นวาย (Chaos Theory)", "ระบบพันธุกรรมสีสัตว์"], 
        min: ["Intel Core i5-4590", "8 GB", "GTX 1050 Ti", "14 GB", "Windows 10"], rec: ["Intel Core i7-5775C", "16 GB", "GTX 1070", "14 GB", "Windows 10"] 
    },
    "two-point-campus": { 
        name: "Two Point Campus", platform: "PC / Console", category: "SIMULATION", score: "8.8", developer: "Two Point Studios", year: "2022", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1649080/header.jpg", 
        description: "สร้างและบริหารมหาวิทยาลัยสุดป่วน จัดการหลักสูตรแปลกแหวกแนวให้เหล่านักศึกษา", 
        features: ["สร้างมหาวิทยาลัยในฝัน", "วิชาเรียนตลกขบขัน (เช่น เวทมนตร์, สายลับ)", "ดูแลความสุขนักศึกษา", "จัดกิจกรรมชมรม", "กราฟิกการ์ตูนน่ารัก"], 
        min: ["Intel Core i3-6100", "4 GB", "GTX 460", "6 GB", "Windows 10"], rec: ["Intel Core i5-6600", "8 GB", "GTX 1060", "6 GB", "Windows 10"] 
    },
    "american-truck-simulator": { 
        name: "American Truck Simulator", platform: "PC", category: "SIMULATION", score: "9.5", developer: "SCS Software", year: "2016", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/270880/header.jpg", 
        description: "ขับรถบรรทุกยักษ์สไตล์อเมริกันข้ามรัฐ ส่งสินค้าและชมวิวทิวทัศน์ชื่อดัง", 
        features: ["รถบรรทุกอเมริกันแท้", "ถนนยาวไกลข้ามรัฐ", "ทิวทัศน์อันเป็นเอกลักษณ์", "บริหารธุรกิจขนส่ง", "ฟังวิทยุผ่อนคลายขณะขับ"], 
        min: ["Intel Core i5", "8 GB", "GTX 760", "25 GB", "Windows 10"], rec: ["Intel Core i7", "16 GB", "GTX 1660", "25 GB", "Windows 10"] 
    },

    // ================= หมวด ADVENTURE (เพิ่มเติม) =================
    "resident-evil-4-remake": { 
        name: "Resident Evil 4", platform: "PC / Console", category: "ADVENTURE", score: "9.7", developer: "Capcom", year: "2023", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg", 
        description: "ลีออนกลับมาอีกครั้งในภารกิจช่วยลูกสาวประธานาธิบดีจากหมู่บ้านปริศนา", 
        features: ["เกมเพลย์ยิงซอมบี้สุดระทึก", "กราฟิกรีเมคใหม่สยองขวัญกว่าเดิม", "ระบบปัดป้องด้วยมีด (Parry)", "ไขปริศนาสไตล์ RE", "พ่อค้าขายของสุดคลาสสิก"], 
        min: ["AMD Ryzen 3 1200", "8 GB", "GTX 1050 Ti", "73 GB", "Windows 10"], rec: ["AMD Ryzen 5 3600", "16 GB", "GTX 1070", "73 GB", "Windows 10"] 
    },
    "control": { 
        name: "Control Ultimate Edition", platform: "PC / Console", category: "ADVENTURE", score: "8.9", developer: "Remedy Entertainment", year: "2020", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/870780/header.jpg", 
        description: "รับบทผู้อำนวยการหน่วยงานลึกลับ ใช้พลังจิตต่อสู้ในอาคารที่เปลี่ยนรูปร่างได้", 
        features: ["พลังจิตปาของใส่ศัตรู", "บรรยากาศลึกลับซับซ้อน", "ปืนเปลี่ยนร่างได้", "โชว์เทคโนโลยี Ray Tracing", "เนื้อเรื่องแหวกแนว"], 
        min: ["Intel Core i5-4690", "8 GB", "GTX 780", "42 GB", "Windows 10"], rec: ["Intel Core i5-7600K", "16 GB", "GTX 1060", "42 GB", "Windows 10"] 
    },
    "jedi-survivor": { 
        name: "STAR WARS Jedi: Survivor", platform: "PC / Console", category: "ADVENTURE", score: "8.7", developer: "Respawn", year: "2023", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1774580/header.jpg", 
        description: "คัล เคสทิส กลายเป็นเจไดเต็มตัว ผจญภัยหลบหนีการไล่ล่าของจักรวรรดิ", 
        features: ["ท่าร่างดาบเลเซอร์ 5 แบบ", "ดาวดวงใหม่กว้างใหญ่ให้สำรวจ", "ปริศนาเจได", "ระบบต่อสู้เข้มข้น", "เนื้อเรื่องจักรวาล Star Wars"], 
        min: ["Intel Core i7-7700", "8 GB", "GTX 1070", "155 GB", "Windows 10"], rec: ["Intel Core i5 11600K", "16 GB", "RTX 2070", "155 GB", "Windows 10"] 
    },
    "plague-tale-requiem": { 
        name: "A Plague Tale: Requiem", platform: "PC / Console", category: "ADVENTURE", score: "9.0", developer: "Asobo Studio", year: "2022", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1182900/header.jpg", 
        description: "การเดินทางหนีตายของสองพี่น้อง ท่ามกลางดงหนูนรกและทหารรับจ้าง", 
        features: ["ฝูงหนูนับแสนตัวอลังการ", "เนื้อเรื่องดราม่าเข้มข้น", "ลอบเร้นและเอาชีวิตรอด", "งานภาพสวยงามระดับ Next-gen", "หน้าไม้และอุปกรณ์เล่นแร่แปรธาตุ"], 
        min: ["Intel Core i5-4690K", "16 GB", "GTX 970", "55 GB", "Windows 10"], rec: ["Intel Core i7-8700K", "16 GB", "RTX 3070", "55 GB", "Windows 10"] 
    },
    "tomb-raider-shadow": { 
        name: "Shadow of the Tomb Raider", platform: "PC / Console", category: "ADVENTURE", score: "8.8", developer: "Eidos-Montréal", year: "2018", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2382140/header.jpg", 
        description: "บทสรุปจุดกำเนิดของลาร่า ครอฟต์ สู่การเป็นนักล่าสุสานในป่าดงดิบมรณะ", 
        features: ["สำรวจสุสานซับซ้อน", "พรางตัวพอกโคลนลอบสังหาร", "สภาพแวดล้อมป่าดิบชื้น", "แก้ปริศนาสุดอันตราย", "ภาพสวยรองรับ Ray Tracing"], 
        min: ["Intel Core i3-3220", "8 GB", "GTX 660", "40 GB", "Windows 10"], rec: ["Intel Core i7-4770K", "16 GB", "GTX 1060", "40 GB", "Windows 10"] 
    },

    // ================= หมวด SPORT (เพิ่มเติม) =================
    "riders-republic": { 
        name: "Riders Republic", platform: "PC / Console", category: "SPORT", score: "8.5", developer: "Ubisoft", year: "2023", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2225070/header.jpg", 
        description: "สนามเด็กเล่นกีฬาเอ็กซ์ตรีมขนาดใหญ่ แข่งจักรยาน สโนว์บอร์ด และเครื่องร่อน", 
        features: ["กีฬาเอ็กซ์ตรีมหลายประเภท", "แผนที่อุทยานแห่งชาติรวมกัน", "แข่ง Mass Race พร้อมกัน 64 คน", "โลกออนไลน์เต็มไปด้วยผู้เล่น", "ปรับแต่งตัวละครอิสระ"], 
        min: ["Intel Core i5-4460", "8 GB", "GTX 970", "20 GB", "Windows 10"], rec: ["Intel Core i7-4790", "16 GB", "GTX 1060", "20 GB", "Windows 10"] 
    },
    "session-skate-sim": { 
        name: "Session: Skate Sim", platform: "PC / Console", category: "SPORT", score: "8.2", developer: "crea-ture Studios", year: "2022", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/861650/header.jpg", 
        description: "เกมสเกตบอร์ดที่เน้นความสมจริง บังคับเท้าซ้ายและขวาด้วยอนาล็อกสติ๊ก", 
        features: ["ระบบบังคับสมจริงยากท้าทาย", "จำลองเมืองยอดฮิตของนักสเกต", "ไม่มีระบบปุ่มกดคอมโบ", "ตัดต่อวิดีโอในเกมได้", "เปลี่ยนมุมกล้องแบบเลนส์ฟิชอาย"], 
        min: ["Intel Core i5-4670", "8 GB", "GTX 1060", "11 GB", "Windows 10"], rec: ["Intel Core i7-7700", "12 GB", "RTX 2070", "11 GB", "Windows 10"] 
    },
    "efootball-2024": { 
        name: "eFootball 2024", platform: "PC / Console", category: "SPORT", score: "7.5", developer: "Konami", year: "2023", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1665460/header.jpg", 
        description: "วิวัฒนาการจาก PES สู่เกมฟุตบอลเล่นฟรี (Free-to-Play) ปะทะผู้เล่นทั่วโลก", 
        features: ["เล่นฟรี", "สร้างทีม Dream Team", "อัปเดตสถิตินักเตะตามจริง", "เล่นข้ามแพลตฟอร์มได้", "ลิขสิทธิ์สโมสรพาร์ทเนอร์"], 
        min: ["Intel Core i5-2300", "8 GB", "GTX 660 Ti", "50 GB", "Windows 10"], rec: ["Intel Core i5-7600", "8 GB", "GTX 1060", "50 GB", "Windows 10"] 
    },
    "pga-tour-2k23": { 
        name: "PGA TOUR 2K23", platform: "PC / Console", category: "SPORT", score: "8.4", developer: "HB Studios", year: "2022", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1351170/header.jpg", 
        description: "จำลองการตีกอล์ฟระดับอาชีพ พร้อมสนามกอล์ฟและนักกอล์ฟชื่อดังระดับโลก", 
        features: ["ระบบสวิงกอล์ฟสมจริง", "โหมด MyCAREER", "นักกอล์ฟโปรชายและหญิง", "สร้างสนามกอล์ฟเองได้", "แฟชั่นชุดกอล์ฟลิขสิทธิ์"], 
        min: ["Intel Core i5-7660U", "6 GB", "GTX 670", "12 GB", "Windows 10"], rec: ["Intel Core i5-4670", "8 GB", "GTX 960", "12 GB", "Windows 10"] 
    },
    "madden-nfl-24": { 
        name: "Madden NFL 24", platform: "PC / Console", category: "SPORT", score: "7.8", developer: "EA Tiburon", year: "2023", 
        image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2140330/header.jpg", 
        description: "เกมอเมริกันฟุตบอลสุดฮิต มาพร้อมระบบ FieldSENSE และแอนิเมชันที่ไหลลื่นขึ้น", 
        features: ["ระบบแอนิเมชัน FieldSENSE", "มินิเกมพัฒนาทักษะ", "โหมด Franchise", "Cross-play ออนไลน์", "ยกระดับกราฟิกนักกีฬา"], 
        min: ["Intel Core i5-6600K", "10 GB", "GTX 1050 Ti", "50 GB", "Windows 10"], rec: ["Intel Core i7-8700K", "12 GB", "RTX 3060", "50 GB", "Windows 10"] 
    }
};