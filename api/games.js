export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const CLIENT_ID = process.env.TWITCH_CLIENT_ID;
    const CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET;

    // 1. ขอ Token จาก Twitch
    const tokenRes = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`, { method: 'POST' });
    const tokenData = await tokenRes.json();
    const accessToken = tokenData.access_token;

    // 2. ดึงข้อมูลจาก IGDB พร้อมขอ external_games (จำกัดแค่ 30 เกมเพื่อป้องกัน Vercel Timeout)
    const igdbRes = await fetch('https://api.igdb.com/v4/games', {
      method: 'POST',
      headers: {
        'Client-ID': CLIENT_ID,
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json'
      },
      body: `
        fields name, cover.image_id, summary, genres.name, platforms.name, total_rating, first_release_date, external_games.category, external_games.uid;
        where category = 0 & cover != null & total_rating != null;
        sort total_rating desc;
        limit 30;
      `
    });

    const games = await igdbRes.json();
    const formattedGames = {};

    // ฟังก์ชันย่อยสำหรับดึงข้อความจาก HTML ของ Steam
    const extractSpec = (html, keywordRegex) => {
        if (!html) return "-";
        const match = html.match(keywordRegex);
        return match ? match[1].replace(/<[^>]*>?/gm, '').trim() : "ไม่ระบุ";
    };

    // แปลง HTML เป็น Array 5 ช่อง [CPU, RAM, GPU, Storage, OS]
    const parseSteamRequirements = (reqHtml) => {
        if(!reqHtml) return ["ไม่ระบุ", "ไม่ระบุ", "ไม่ระบุ", "ไม่ระบุ", "ไม่ระบุ"];
        const cpu = extractSpec(reqHtml, /(?:Processor|CPU)[^:]*:\s*(?:<\/strong>)?(.*?)(?:<br>|<\/li>)/i);
        const ram = extractSpec(reqHtml, /Memory[^:]*:\s*(?:<\/strong>)?(.*?)(?:<br>|<\/li>)/i);
        const gpu = extractSpec(reqHtml, /(?:Graphics|Video)[^:]*:\s*(?:<\/strong>)?(.*?)(?:<br>|<\/li>)/i);
        const storage = extractSpec(reqHtml, /(?:Storage|Hard Drive|Network)[^:]*:\s*(?:<\/strong>)?(.*?)(?:<br>|<\/li>)/i);
        const os = extractSpec(reqHtml, /OS[^:]*:\s*(?:<\/strong>)?(.*?)(?:<br>|<\/li>)/i);
        return [cpu, ram, gpu, storage, os];
    };

    // 3. วนลูปจับคู่ Steam App ID และดึงข้อมูลสเปกเครื่องพร้อมกัน (Promise.all)
    await Promise.all(games.map(async (game) => {
      const key = game.id.toString(); 
      const category = game.genres ? game.genres[0].name.toUpperCase() : 'GAME';
      const imageUrl = game.cover && game.cover.image_id 
          ? `https://images.igdb.com/igdb/image/upload/t_1080p/${game.cover.image_id}.jpg` 
          : '';

      let minSpec = ["ข้อมูลเบื้องต้น", "-", "-", "-", "ระบบขั้นต่ำ"];
      let recSpec = ["ข้อมูลแนะนำ", "-", "-", "-", "ระบบที่แนะนำ"];

      // ตรวจหา ID ของระบบ Steam
      let steamAppId = null;
      if (game.external_games) {
          const steamData = game.external_games.find(ext => ext.category === 1);
          if (steamData && steamData.uid) {
              steamAppId = steamData.uid;
          }
      }

      // ถ้าเจอเกมบน Steam ให้ยิง API ไปดึงสเปกเครื่อง (ไม่มีการยืนยันตัวตน)
      if (steamAppId) {
          try {
              const steamRes = await fetch(`https://store.steampowered.com/api/appdetails?appids=${steamAppId}&filters=pc_requirements`);
              const steamJson = await steamRes.json();
              const steamGame = steamJson[steamAppId];
              
              if (steamGame && steamGame.success && steamGame.data.pc_requirements) {
                  const reqs = steamGame.data.pc_requirements;
                  if (reqs.minimum) minSpec = parseSteamRequirements(reqs.minimum);
                  if (reqs.recommended) recSpec = parseSteamRequirements(reqs.recommended);
                  else recSpec = minSpec; 
              }
          } catch (e) {
              console.error(`โหลดสเปก Steam ของเกม ${steamAppId} ไม่สำเร็จ:`, e);
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
        features: ["ดึงข้อมูลอัตโนมัติจาก IGDB API", "สเปกเครื่องดึงข้อมูลสดจาก Steam"],
        min: minSpec,
        rec: recSpec
      };
    }));

    res.status(200).json(formattedGames);
  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({ error: 'Failed to fetch combined data' });
  }
}