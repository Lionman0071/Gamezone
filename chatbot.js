// เปลี่ยน URL ไปเรียก API ของ Vercel ในโปรเจกต์เดียวกัน
const CHAT_API_URL = "/api/chat";

// ฟังก์ชันสร้าง Context แบบแปรผันตามหน้าเว็บ
function getDynamicContext() {
    let baseContext = `คุณคือ "GameZone Bot" ผู้ช่วยแนะนำเกมประจำเว็บไซต์ GAMEZONE
หน้าที่ของคุณ:
1. แนะนำ เปรียบเทียบ และให้ข้อมูลเกี่ยวกับเกม PC เท่านั้น
2. ให้คำปรึกษาเรื่องสเปกคอมพิวเตอร์ จัดสเปก หรือวิเคราะห์ฮาร์ดแวร์อย่างผู้เชี่ยวชาญ
3. แนะนำแนวทางการเล่น (เทคนิค, ไกด์, วิธีผ่านด่าน) ของเกมต่างๆ
กฎ: ตอบเป็นภาษาไทย เป็นกันเอง กระชับ และ ห้ามใช้สัญลักษณ์ Markdown (เช่น ** หรือ #) เพราะข้อความจะพัง`;

    if (window.location.pathname.includes('game-detail.html')) {
        const params = new URLSearchParams(window.location.search);
        const gameKey = params.get('game');
        
        if (gameKey && typeof gamesDatabase !== 'undefined' && gamesDatabase[gameKey]) {
            const game = gamesDatabase[gameKey];
            baseContext += `\n\n[ข้อมูลสำคัญมาก]: ขณะนี้ผู้ใช้กำลังดูข้อมูลเกมชื่อ "${game.name}" อยู่บนหน้าจอ
ข้อมูลของเกมนี้:
- หมวดหมู่: ${game.category}
- แพลตฟอร์ม: ${game.platform}
- ผู้พัฒนา: ${game.developer}
- คะแนน: ${game.score}/10
- เนื้อเรื่อง/รายละเอียด: ${game.description}
- จุดเด่น: ${game.features.join(", ")}
- สเปกขั้นต่ำ: CPU ${game.min[0]}, RAM ${game.min[1]}, GPU ${game.min[2]}, ใช้พื้นที่ ${game.min[3]}
- สเปกแนะนำ: CPU ${game.rec[0]}, RAM ${game.rec[1]}, GPU ${game.rec[2]}, ใช้พื้นที่ ${game.rec[3]}

หากผู้ใช้ถามลอยๆ เช่น "เกมนี้สเปกเท่าไหร่", "ผ่านด่านยังไง", "สนุกไหม" ให้เข้าใจทันทีว่าหมายถึงเกม "${game.name}" และใช้ข้อมูลด้านบนตอบกลับได้เลย`;
        }
    }
    return baseContext;
}

document.addEventListener("DOMContentLoaded", () => {
    injectWidget();

    const toggleBtn = document.getElementById("gz-chat-toggle");
    const chatWindow = document.getElementById("gz-chat-window");
    const closeBtn = document.getElementById("gz-chat-close");
    const sendBtn = document.getElementById("gz-chat-send");
    const input = document.getElementById("gz-chat-input");
    const messages = document.getElementById("gz-chat-messages");

    let history = [];

    toggleBtn.addEventListener("click", () => {
        chatWindow.classList.toggle("open");
    });
    closeBtn.addEventListener("click", () => {
        chatWindow.classList.remove("open");
    });

    sendBtn.addEventListener("click", sendMessage);
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    async function sendMessage() {
        const text = input.value.trim();
        if (!text) return;

        addBubble(text, "user");

        const historyToSend = history.slice(-10);
        input.value = "";

        const typingEl = addBubble("กำลังพิมพ์...", "bot typing");

        try {
            const res = await fetch(CHAT_API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: text,
                    history: historyToSend,
                    serverContext: getDynamicContext()
                })
            });

            if (!res.ok) throw new Error("API error " + res.status);
            const data = await res.json();
            const reply = data.reply || "ขออภัย ไม่สามารถตอบคำถามได้ในขณะนี้";

            typingEl.remove();
            addBubble(reply, "bot");

            history.push({ role: "user", content: text });
            history.push({ role: "assistant", content: reply });

        } catch (err) {
            typingEl.remove();
            addBubble("ระบบเชื่อมต่อแชทบอทไม่สำเร็จ ลองใหม่อีกครั้งนะครับ", "bot");
            console.error("Chatbot error:", err);
        }
    }

    function addBubble(text, cls) {
        const el = document.createElement("div");
        el.className = "gz-msg " + cls;
        el.textContent = text;
        messages.appendChild(el);
        messages.scrollTop = messages.scrollHeight;
        return el;
    }

    function injectWidget() {
        const toggle = document.createElement("button");
        toggle.id = "gz-chat-toggle";
        // SVG ไอคอนจอยสติ๊กแทนอิโมจิ
        toggle.innerHTML = `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="4"/><path d="M6 12h4"/><path d="M8 10v4"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/></svg>`;
        toggle.setAttribute("aria-label", "เปิดแชทบอทแนะนำเกม");

        const win = document.createElement("div");
        win.id = "gz-chat-window";
        win.innerHTML = `
            <div class="gz-chat-header">
                <div>
                    <h4 style="display: flex; align-items: center;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><rect x="2" y="6" width="20" height="12" rx="4"/><path d="M6 12h4"/><path d="M8 10v4"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/></svg>
                        GameZone Bot
                    </h4>
                    <span>ผู้ช่วยแนะนำเกมและสเปก PC</span>
                </div>
                <button id="gz-chat-close" style="display: flex; align-items: center; justify-content: center; width: 24px; height: 24px;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
            </div>
            <div id="gz-chat-messages">
                <div class="gz-msg bot">สวัสดีครับ! อยากได้เกม PC แนวไหน ให้ช่วยจัดสเปกคอม หรือหาเทคนิคการเล่นเกมอะไร บอกมาได้เลยครับ</div>
            </div>
            <div id="gz-chat-input-row">
                <textarea id="gz-chat-input" rows="1" placeholder="พิมพ์คำถาม..."></textarea>
                <button id="gz-chat-send" style="display: flex; align-items: center; justify-content: center; width: 42px; padding: 0;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
            </div>
        `;

        document.body.appendChild(toggle);
        document.body.appendChild(win);
    }
});