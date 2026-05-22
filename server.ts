import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Safe lazy initializer for GoogleGenAI
  let ai: GoogleGenAI | null = null;
  function getGemini(): GoogleGenAI {
    if (!ai) {
      const apiKey = process.env.GEMINI_API_KEY || "";
      ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    }
    return ai;
  }

  // API chat route for Raja Rani Stitching AI assistant
  app.post("/api/chat", async (req: express.Request, res: express.Response) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Messages array is required." });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === "MY_GEMINI_API_KEY" || apiKey.trim() === "") {
        // Fallback offline mock assistant replies
        const lastMsg = messages[messages.length - 1];
        const textLower = (lastMsg.text || lastMsg.content || "").toLowerCase();
        let reply = "";

        if (textLower.includes("blouse")) {
          reply = "Hey designer! 👗 Our **Online Blouse Masterclass** is our superpower! Priya Prasad teaches 28+ celebrity cut blouses (Princess cut, double Katori, designer Sabyasachi backlines). It is usually ₹1,499 with lifetime updates and digital certificate on our App! Want to enroll? ✨";
        } else if (textLower.includes("farma") || textLower.includes("pattern") || textLower.includes("cut")) {
          reply = "Oh, our **Raja Rani Farma** cutting templates are absolute game-changers! ✂️ They are physical paper stencils or acrylic templates, meticulously graded in sizes (28 to 42). You just lay them directly on fabric, mark, and cut—saving you painful calculation errors! Packs start from ₹999 on our store. ✨";
        } else if (textLower.includes("offline") || textLower.includes("stud") || textLower.includes("ahm")) {
          reply = "Yes! Our direct offline fashion studio is located in **Ahmedabad, Gujarat** (near Shivranjani area). We run 15-day and 30-day cohorts with hands-on practice, fabrics, machines, and direct mentorship by Priya Prasad herself! 🪡✨";
        } else if (textLower.includes("kurti") || textLower.includes("suit")) {
          reply = "Our **Kurti Masterclass** covers 15+ stunning Kurti cuts, side slits, armhole fit adjustments, collar integration, and neck styling! Normal price is just ₹999 online. You'll draft beautiful shapes in hours! 🌸";
        } else {
          reply = "Hello future boutique owner! 🪡 I am your Raja Rani Stitching Assistant. Ask me anything about our top-selling courses (Blouse Masterclass, Kurti Masterclass), our famous layout Farma (patterns), or our physical tailoring academy in Ahmedabad! Let's get stitching! 🌸✨";
        }

        return res.json({ text: reply + "\n\n*(Note: Configure your GEMINI_API_KEY in Settings > Secrets to activate real-time intelligence!)*" });
      }

      const client = getGemini();

      // Standard context translation
      const formattedHistory = messages.map(m => {
        const roleName = m.role === 'user' ? 'User' : 'Assistant';
        const textContent = m.text || m.content || "";
        return `${roleName}: ${textContent}`;
      }).join("\n");

      const systemPrompt = `You are the AI support agent for "Raja Rani Stitching Academy" (also known as Raja Rani Coaching). The academy is India's leading online & offline sewing and fashion coaching portal with over 1 million followers.

Founders:
- Priya Prasad: Master fashion designer, tailoress, and highly popular stitching instructor.
- Mohit Prasad: Coordinates business growth, physical academy cohorts, and student experience.

Courses we offer:
1. Online Blouse Masterclass (Best Seller): ~₹1,499. Includes 28+ styles (princess, katori, double katori, padding, corsets, sabyasachi necklines). Includes live chat help, grading formulas, and digital certificate.
2. Online Kurti Masterclass: ~₹999. Includes 15+ kurti cuts, slit alignment, armhole fitting, piping, collars, sleeves design.
3. Offline Cohort (Ahmedabad Studio): Complete, highly hands-on offline sewing class under Priya's supervision near Shivranjani, Ahmedabad.
4. Farma Layout templates (Bestseller!): Physical pre-cut paper Patterns & heavy-graded acrylic sheets (bust 28-42). Ideal for absolute beginners who hate layout calculations. Place, draw, and cut fabric instantly. Price range: ₹999 - ₹2,499.

Your Personality:
Warm, high-energy, encouraging (Gen Z friendly, fashion forward!). Speak with professional Tailor-industry terms (grading, seams, bias lines, canvas fusing, farma, katori) but explain things simply so beginners aren't intimidated. Let's make stitching cool, modern, and highly profitable! Use emojis (🪡, 👗, 🌸, ✨, 👚, ✂️). Answer concisely, in clean markdown format. Prefer bullet points where possible.`;

      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents: formattedHistory + "\nAssistant:",
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.7,
        },
      });

      return res.json({ text: response.text || "Stitching ideas together... Let's try that again." });
    } catch (err: any) {
      console.error("Gemini Route Error:", err);
      return res.status(500).json({ error: err.message || "Something went wrong in the AI engine." });
    }
  });

  // Hook up Vite development server
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req: express.Request, res: express.Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Raja Rani Academy Server] Online on http://0.0.0.0:${PORT}`);
  });
}

startServer();
