let gamesDatabase = {};

async function fetchGamesData() {
    try {
        console.log("กำลังดึงข้อมูลจาก API...");
        const response = await fetch('/api/games');
        
        if (!response.ok) {
            const errText = await response.text();
            throw new Error(`API Error: ${response.status} - ${errText}`);
        }
        
        gamesDatabase = await response.json();
        console.log("ดึงข้อมูลสำเร็จ!", gamesDatabase);
        
    } catch (error) {
        console.error("เกิดข้อผิดพลาดในการโหลดเกม:", error);
        alert("ไม่สามารถดึงข้อมูลเกมได้ กรุณากด F12 เพื่อดูรายละเอียด Error ใน Console");
    } finally {
        // บังคับให้หน้าเว็บทำงานต่อ แม้ข้อมูลจะว่างเปล่า
        document.dispatchEvent(new Event('gamesDataLoaded'));
    }
}

fetchGamesData();