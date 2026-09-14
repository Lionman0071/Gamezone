export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const CLIENT_ID = process.env.TWITCH_CLIENT_ID;
  const CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET;

  // 1. ดักจับกรณีตั้งค่า Secret Keys ผิดพลาด
  if (!CLIENT_ID || !CLIENT_SECRET) {
    return res.status(400).json({ error: "กรุณาตั้งค่า TWITCH_CLIENT_ID และ TWITCH_CLIENT_SECRET ใน Vercel" });
  }

  try {
    // 2. ขอ Token จาก Twitch
    const tokenRes = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`, { method: 'POST' });
    const tokenData = await tokenRes.json();
    
    if (!tokenData.access_token) {
        return res.status(401).json({ error: "Twitch Auth Failed (รหัส Client Secret อาจไม่ถูกต้อง)", details: tokenData });
    }

    // 3. ดึงข้อมูลจาก IGDB (เขียน Query ให้อยู่ในบรรทัดเดียว ป้องกัน IGDB อ่านค่าผิดพลาด)
    const igdbQuery = "fields name, cover.image_id, summary, genres.name, platforms.name, total_rating, first_release_date, external_games.category, external_games.uid; where category = 0 & total_rating > 80; sort total_rating desc; limit 30;";

    const igdbRes = await fetch('https://api.igdb.com/v4/games', {
      method: 'POST',
      headers: {
        'Client-ID': CLIENT_ID,
        'Authorization': `Bearer ${tokenData.access_token}`,
        'Accept': 'application/json'
      },
      body: igdbQuery
    });

    const games = await igdbRes.json();

    // ดักจับ Error จาก IGDB แบบละเอียด
    if (!Array.isArray(games)) {
        return res.status(400).json({ error: "IGDB Query Error (ไวยากรณ์ API ผิดพลาด)", details: games });
    }
    if (games.length === 0) {
        return res.status(404).json({ error: "ดึงข้อมูลสำเร็จ แต่ไม่พบรายชื่อเกมจากเงื่อนไขที่กำหนด" });
    }

    const formattedGames = {};

    // ฟังก์ชันแยกสเปก Steam ออกเป็น 5 หมวด
    const extractSpec = (html, keywordRegex) => {
        if (!html) return "-";
        const match = html.match(keywordRegex);
        return match ? match[1].replace(/<[^>]*>?/gm, '').trim() : "ไม่ระบุ";
    };

    const parseSteamRequirements = (reqHtml) => {
        if(!reqHtml) return ["ไม่ระบุ", "ไม่ระบุ", "ไม่ระบุ", "ไม่ระบุ", "ไม่ระบุ"];
        const cpu = extractSpec(reqHtml, /(?:Processor|CPU)[^:]*:\s*(?:<\/strong>)?(.*?)(?:<br>|<\/li>)/i);
        const ram = extractSpec(reqHtml, /Memory[^:]*:\s*(?:<\/strong>)?(.*?)(?:<br>|<\/li>)/i);
        const gpu = extractSpec(reqHtml, /(?:Graphics|Video)[^:]*:\s*(?:<\/strong>)?(.*?)(?:<br>|<\/li>)/i);
        const storage = extractSpec(reqHtml, /(?:Storage|Hard Drive|Network)[^:]*:\s*(?:<\/strong>)?(.*?)(?:<br>|<\/li>)/i);
        const os = extractSpec(reqHtml, /OS[^:]*:\s*(?:<\/strong>)?(.*?)(?:<br>|<\/li>)/i);
        return [cpu, ram, gpu, storage, os];
    };

    // 4. วนลูปจับคู่ Steam (ใช้ for...of เพื่อหลีกเลี่ยง Timeout บน Vercel)
    for (const game of games) {
      const key = game.id.toString(); 
      const category = game.genres ? game.genres[0].name.toUpperCase() : 'GAME';
      const imageUrl = game.cover && game.cover.image_id 
          ? `https://images.igdb.com/igdb/image/upload/t_1080p/${game.cover.image_id}.jpg` 
          : 'https://via.placeholder.com/460x215?text=No+Image';

      let minSpec = ["ข้อมูลเบื้องต้น", "-", "-", "-", "ระบบขั้นต่ำ"];
      let recSpec = ["ข้อมูลแนะนำ", "-", "-", "-", "ระบบที่แนะนำ"];

      let steamAppId = null;
      if (game.external_games) {
          const steamData = game.external_games.find(ext => ext.category === 1);
          if (steamData && steamData.uid) {
              steamAppId = steamData.uid;
          }
      }

      // ดึงสเปกจาก Steam หากพบ App ID
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
              // ข้ามเกมที่ Steam API ไม่ตอบสนองเพื่อไม่ให้ระบบหลักพัง
              console.error(`Steam API Error สำหรับเกม ${steamAppId}`);
          }
      }

      formattedGames[key] = {
        name: game.name,
        platform: game.platforms ? game.platforms[0].name : 'PC / Console',
        category: category,
        score: game.total_rating ? (game.total_rating / 10).toFixed(1) : 'N/A',
        developer: "อัปเดตจาก IGDB",
        year: game.first_release_date ? new Date(game.first_release_date * 1000).getFullYear().toString() : '-',
        image: imageUrl,
        description: game.summary ? game.summary : 'ไม่มีข้อมูลรายละเอียดเกมในระบบ',
        features: ["อัปเดตข้อมูลอัตโนมัติจาก IGDB API", "สเปกเครื่องดึงข้อมูลสดจากระบบ Steam"],
        min: minSpec,
        rec: recSpec
      };
    }

    res.status(200).json(formattedGames);
  } catch (error) {
    console.error("Vercel Backend Error:", error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
}