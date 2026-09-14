// บังคับใช้ Global Variable
window.gamesDatabase = {}; 
window.isGamesDataLoaded = false;

async function fetchGamesData() {
    try {
        console.log("กำลังดึงข้อมูลจาก API...");
        const response = await fetch('/api/games');
        
        if (!response.ok) {
            const errText = await response.text();
            throw new Error(`API Error: ${response.status} - ${errText}`);
        }
        
        window.gamesDatabase = await response.json();
        
        // เช็กว่ามีข้อมูลเกมถูกดึงมาจริงๆ หรือไม่
        const gameCount = Object.keys(window.gamesDatabase).length;
        console.log(`🔥 ดึงข้อมูลสำเร็จ! ได้มาทั้งหมด: ${gameCount} เกม`);
        console.log("ข้อมูล:", window.gamesDatabase);

        if (gameCount === 0) {
            console.warn("⚠️ แจ้งเตือน: ดึงข้อมูลสำเร็จแต่ข้อมูลว่างเปล่า (อาจตั้งค่า API ผิด)");
        }
        
    } catch (error) {
        console.error("❌ เกิดข้อผิดพลาดในการโหลดเกม:", error);
    } finally {
        // อัปเดตสถานะว่าโหลดเสร็จแล้ว และส่งสัญญาณบอกหน้าเว็บ
        window.isGamesDataLoaded = true;
        document.dispatchEvent(new Event('gamesDataLoaded'));
    }
}

fetchGamesData();