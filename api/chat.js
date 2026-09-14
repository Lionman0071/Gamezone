// api/chat.js
export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

    try {
        const { message, history = [], serverContext = "" } = req.body;
        const GEMINI_API_KEY = process.env.GEMINI_API_KEY; // อย่าลืมใส่ Key นี้ใน Vercel Environment Variables

        const contents = history.map(m => ({
            role: m.role === "assistant" ? "model" : "user",
            parts: [{ text: m.content }]
        }));
        contents.push({ role: "user", parts: [{ text: message }] });

        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${GEMINI_API_KEY}`;

        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                system_instruction: { parts: [{ text: serverContext }] },
                contents: contents,
                generationConfig: { maxOutputTokens: 2000 }
            })
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error?.message || "API Error");

        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "ขออภัย ไม่สามารถตอบคำถามได้ในขณะนี้";
        res.status(200).json({ reply });

    } catch (error) {
        console.error("Chat API Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}