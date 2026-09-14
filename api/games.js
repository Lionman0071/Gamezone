export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const CLIENT_ID = process.env.TWITCH_CLIENT_ID;
  const CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET;

  if (!CLIENT_ID || !CLIENT_SECRET) {
    return res.status(400).json({ error: "Missing API Keys in Vercel" });
  }

  // ระบบข้อมูลสำรอง กรณี IGDB ไม่ตอบสนอง
  const fallbackData = {
    "1091500": {
      name: "Cyberpunk 2077", platform: "PC", category: "ACTION", score: "9.2", developer: "CD Projekt Red", year: "2020",
      image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg",
      description: "ข้อมูลสำรอง: เกม Action RPG ในโลก Night City",
      features: ["โหลดข้อมูลสำรองสำเร็จ", "ระบบ IGDB ขัดข้องชั่วคราว"],
      min: ["Intel Core i7", "16 GB", "GTX 1060", "70 GB", "Windows 10"], rec: ["Intel Core i7", "16 GB", "RTX 3070", "70 GB", "Windows 11"]
    },
    "1245620": {
      name: "Elden Ring", platform: "PC / Console", category: "RPG", score: "9.8", developer: "FromSoftware", year: "2022",
      image: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg",
      description: "ข้อมูลสำรอง: สุดยอดเกม Action RPG Open World",
      features: ["โหลดข้อมูลสำรองสำเร็จ", "ระบบ IGDB ขัดข้องชั่วคราว"],
      min: ["Intel Core i5", "12 GB", "GTX 1060", "60 GB", "Windows 10"], rec: ["Intel Core i7", "16 GB", "RTX 2070", "60 GB", "Windows 11"]
    }
  };

  try {
    const tokenRes = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`, { method: 'POST' });
    const tokenData = await tokenRes.json();
    
    if (!tokenData.access_token) return res.status(401).json({ error: "Auth Failed" });

    // ใช้คำสั่งแบบเรียบง่ายที่สุด บังคับว่าต้องมีหน้าปก และเรียงตามลำดับความนิยม
    const igdbQuery = "fields name, cover.image_id, summary, genres.name, platforms.name, total_rating, first_release_date, external_games.category, external_games.uid; where cover.image_id != null; sort follows desc; limit 30;";

    const igdbRes = await fetch('https://api.igdb.com/v4/games', {
      method: 'POST',
      headers: {
        'Client-ID': CLIENT_ID,
        'Authorization': `Bearer ${tokenData.access_token}`,
        'Accept': 'application/json',
        'Content-Type': 'text/plain' // จำเป็นมากสำหรับ IGDB
      },
      body: igdbQuery
    });

    const games = await igdbRes.json();

    // ดักจับกรณีส่งกลับมาเป็น Array ว่าง ให้ใช้ Fallback ทันที
    if (!Array.isArray(games) || games.length === 0) {
      console.warn("IGDB คืนค่ากลับมาว่างเปล่า (โหลด Fallback)");
      return res.status(200).json(fallbackData);
    }

    const formattedGames = {};
    const extractSpec = (html, keywordRegex) => {
        if (!html) return "-";
        const match = html.match(keywordRegex);
        return match ? match[1].replace(/<[^>]*>?/gm, '').trim() : "ไม่ระบุ";
    };

    const parseSteamRequirements = (reqHtml) => {
        if(!reqHtml) return ["ไม่ระบุ", "ไม่ระบุ", "ไม่ระบุ", "ไม่ระบุ", "ไม่ระบุ"];
        return [
            extractSpec(reqHtml, /(?:Processor|CPU)[^:]*:\s*(?:<\/strong>)?(.*?)(?:<br>|<\/li>)/i),
            extractSpec(reqHtml, /Memory[^:]*:\s*(?:<\/strong>)?(.*?)(?:<br>|<\/li>)/i),
            extractSpec(reqHtml, /(?:Graphics|Video)[^:]*:\s*(?:<\/strong>)?(.*?)(?:<br>|<\/li>)/i),
            extractSpec(reqHtml, /(?:Storage|Hard Drive)[^:]*:\s*(?:<\/strong>)?(.*?)(?:<br>|<\/li>)/i),
            extractSpec(reqHtml, /OS[^:]*:\s*(?:<\/strong>)?(.*?)(?:<br>|<\/li>)/i)
        ];
    };

    for (const game of games) {
      const key = game.id.toString(); 
      const category = game.genres ? game.genres[0].name.toUpperCase() : 'GAME';
      const imageUrl = game.cover && game.cover.image_id 
          ? `https://images.igdb.com/igdb/image/upload/t_1080p/${game.cover.image_id}.jpg` 
          : 'https://via.placeholder.com/460x215?text=No+Image';

      let minSpec = ["กำลังดึงข้อมูล...", "-", "-", "-", "-"];
      let recSpec = ["กำลังดึงข้อมูล...", "-", "-", "-", "-"];

      let steamAppId = null;
      if (game.external_games) {
          const steamData = game.external_games.find(ext => ext.category === 1);
          if (steamData && steamData.uid) steamAppId = steamData.uid;
      }

      if (steamAppId) {
          try {
              const steamRes = await fetch(`https://store.steampowered.com/api/appdetails?appids=${steamAppId}&filters=pc_requirements`);
              if (steamRes.ok) {
                  const steamJson = await steamRes.json();
                  const steamGame = steamJson[steamAppId];
                  if (steamGame && steamGame.success && steamGame.data.pc_requirements) {
                      const reqs = steamGame.data.pc_requirements;
                      if (reqs.minimum) minSpec = parseSteamRequirements(reqs.minimum);
                      if (reqs.recommended) recSpec = parseSteamRequirements(reqs.recommended);
                      else recSpec = minSpec; 
                  }
              }
          } catch (e) {
              console.error(`ข้ามการดึงสเปกเกม ${steamAppId}`);
          }
      }

      formattedGames[key] = {
        name: game.name,
        platform: game.platforms ? game.platforms[0].name : 'PC / Console',
        category: category,
        score: game.total_rating ? (game.total_rating / 10).toFixed(1) : 'N/A',
        developer: "ดึงข้อมูลจาก IGDB",
        year: game.first_release_date ? new Date(game.first_release_date * 1000).getFullYear().toString() : '-',
        image: imageUrl,
        description: game.summary ? game.summary : 'ไม่มีข้อมูลรายละเอียด',
        features: ["อัปเดตข้อมูลอัตโนมัติจาก IGDB", "สเปกดึงตรงจาก Steam"],
        min: minSpec, rec: recSpec
      };
    }
    res.status(200).json(formattedGames);
  } catch (error) {
    res.status(200).json(fallbackData);
  }
}