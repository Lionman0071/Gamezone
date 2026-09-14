// ============================================================
// chat-worker.js
// Cloudflare Worker — ตัวกลางระหว่างเว็บ GAMEZONE กับ Gemini API
// เก็บ API Key ไว้ฝั่งเซิร์ฟเวอร์ ไม่ให้หลุดไปอยู่ใน JS หน้าเว็บ
//
// วิธี Deploy:
// 1. สมัคร Cloudflare (ฟรี) ที่ https://dash.cloudflare.com
// 2. ไปที่ Workers & Pages > Create > "Start with Hello World!"
//    ตั้งชื่อ เช่น gamezone-chatbot แล้ว Deploy
// 3. กด "Edit code" ลบโค้ดเดิมทั้งหมด วางโค้ดนี้แทน แล้ว Deploy
// 4. ไปที่ Settings > Variables and Secrets ของ Worker นี้
//    เพิ่ม Secret ชื่อ GEMINI_API_KEY ใส่ค่า API Key
//    (ขอฟรีได้ที่ https://aistudio.google.com/apikey ไม่ต้องผูกบัตร)
// 5. คัดลอก URL ของ Worker (เช่น https://gamezone-chatbot.xxxx.workers.dev)
//    ไปใส่ที่ CHAT_API_URL ในไฟล์ chatbot.js
// 6. แก้ CORS_ALLOW_ORIGIN ด้านล่างเป็นโดเมนเว็บจริงของนาย หลัง deploy จริงแล้ว
// ============================================================

const CORS_ALLOW_ORIGIN = "*"; // แนะนำให้เปลี่ยนเป็นโดเมนจริงหลัง deploy

const GEMINI_MODEL = "gemini-3.6-flash";

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders() });
    }

    if (request.method !== "POST") {
      return jsonResponse({ error: "Method not allowed" }, 405);
    }

    try {
      const { message, history = [], serverContext = "" } = await request.json();

      if (!message || typeof message !== "string") {
        return jsonResponse({ error: "message is required" }, 400);
      }

      const contents = history
        .filter(m => m.role === "user" || m.role === "assistant")
        .map(m => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }]
        }));
      contents.push({ role: "user", parts: [{ text: message }] });

      const systemPrompt = serverContext || "คุณคือผู้ช่วยแนะนำเกมของเว็บไซต์ GAMEZONE ตอบเป็นภาษาไทยอย่างสุภาพและกระชับ";

      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${env.GEMINI_API_KEY}`;

      const result = await callGemini(apiUrl, {
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents: contents,
        generationConfig: { maxOutputTokens: 2000 }
      });

      if (!result.ok) {
        console.error("Gemini API error:", result.errText);
        const msg = (result.status === 503 || result.status === 429)
          ? "ตอนนี้ AI มีคนใช้งานเยอะ กรุณาลองใหม่อีกครั้งในอีกสักครู่"
          : "AI service error";
        return jsonResponse({ reply: null, error: msg }, 502);
      }

      const data = result.data;
      const reply = data.candidates?.[0]?.content?.parts?.[0]?.text
        || "ขออภัย ไม่สามารถตอบคำถามได้ในขณะนี้";

      return jsonResponse({ reply });

    } catch (err) {
      console.error("Worker error:", err);
      return jsonResponse({ error: "Internal error" }, 500);
    }
  }
};

// ---------------------------------------------------------------
// เรียก Gemini API พร้อมลองใหม่อัตโนมัติถ้าเจอ error 503/429 (โมเดลคนใช้เยอะ/ยิงถี่เกินไป)
// ---------------------------------------------------------------
async function callGemini(apiUrl, body, maxRetries = 2) {
  let lastErrText = "";

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    const apiRes = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });

    if (apiRes.ok) {
      return { ok: true, data: await apiRes.json() };
    }

    lastErrText = await apiRes.text();

    const isRetryable = apiRes.status === 503 || apiRes.status === 429;
    if (!isRetryable || attempt === maxRetries) {
      return { ok: false, status: apiRes.status, errText: lastErrText };
    }

    await new Promise(r => setTimeout(r, 700 * (attempt + 1)));
  }

  return { ok: false, status: 503, errText: lastErrText };
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": CORS_ALLOW_ORIGIN,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
}

function jsonResponse(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders()
    }
  });
}
