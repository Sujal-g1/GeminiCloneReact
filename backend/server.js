import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 5050; // changed port

app.use(cors());   // ✅ this alone handles preflight correctly
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_KEY
});

app.post("/api/generate", async (req, res) => {
  try {
    console.log("REQ BODY:", req.body); 

    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        temperature: 0.8,
        maxOutputTokens: 2048
      }
    });

    console.log("Gemini success , ok");

    res.json({ text: response.text });
  } catch (error) {
    console.error("Gemini error:", error);
    res.status(500).json({ error: "Gemini API failed" });
  }
});


app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
