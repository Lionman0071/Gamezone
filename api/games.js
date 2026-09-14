export default async function handler(req, res) {
  // อนุญาตให้เรียกข้ามโดเมนได้
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const CLIENT_ID = process.env.TWITCH_CLIENT_ID;
    const CLIENT_SECRET = process.env.TWITCH_CLIENT_SECRET;

    // 1. ขอ Access Token จากระบบของ Twitch
    const tokenResponse = await fetch(`https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`, {
      method: 'POST'
    });
    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // 2. ดึงข้อมูลจาก IGDB V4 ด้วยรูปแบบ Apicalypse Query
    const igdbResponse = await fetch('https://api.igdb.com/v4/games', {
      method: 'POST',
      headers: {
        'Client-ID': CLIENT_ID,
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json'
      },
      // กรองเอาเฉพาะหมวดหมู่เกมทั่วไป (category=0) ที่มีคะแนนและภาพปก
      body: `
        fields name, cover.image_id, summary, genres.name, platforms.name, total_rating, first_release_date;
        where category = 0 & cover != null & total_rating != null;
        sort total_rating desc;
        limit 50;
      `
    });

    const games = await igdbResponse.json();

    // 3. แปลงข้อมูลให้เข้ากับโครงสร้างเก่าของเว็บ (gamesDatabase)
    const formattedGames = {};
    games.forEach(game => {
      const key = game.id.toString(); 
      const category = game.genres ? game.genres[0].name.toUpperCase() : 'GAME';
      const imageUrl = game.cover && game.cover.image_id 
          ? `https://images.igdb.com/igdb/image/upload/t_1080p/${game.cover.image_id}.jpg` 
          : '';

      formattedGames[key] = {
        name: game.name,
        platform: game.platforms ? game.platforms[0].name : 'PC / Console',
        category: category,
        score: game.total_rating ? (game.total_rating / 10).toFixed(1) : 'N/A', // แปลงเต็ม 100 เป็นเต็ม 10
        developer: "อัปเดตจาก IGDB",
        year: game.first_release_date ? new Date(game.first_release_date * 1000).getFullYear().toString() : '-',
        image: imageUrl,
        description: game.summary ? game.summary : 'ไม่มีข้อมูลรายละเอียดเกมในระบบ',
        features: ["ดึงข้อมูลอัตโนมัติจาก IGDB API", "แสดงรูปภาพความละเอียดสูงสุด"],
        min: ["ข้อมูลเบื้องต้น", "-", "-", "-", "ระบบขั้นต่ำ"],
        rec: ["ข้อมูลแนะนำ", "-", "-", "-", "ระบบที่แนะนำ"]
      };
    });

    res.status(200).json(formattedGames);
  } catch (error) {
    console.error("IGDB Fetch Error:", error);
    res.status(500).json({ error: 'Failed to fetch data from IGDB' });
  }
}