// games-data.js (เปลี่ยนเป็นระบบดึงข้อมูลแบบไดนามิก)
let gamesDatabase = {};

async function fetchGamesData() {
    try {
        // เรียกไปยัง Vercel Function ที่เราสร้างขึ้น
        const response = await fetch('/api/games');
        if (!response.ok) throw new Error('API Error');
        gamesDatabase = await response.json();
        
        // ส่งสัญญาณบอกทุกหน้าว่าโหลดข้อมูลเสร็จแล้ว
        document.dispatchEvent(new Event('gamesDataLoaded'));
    } catch (error) {
        console.error("Error loading games:", error);
    }
}

fetchGamesData();