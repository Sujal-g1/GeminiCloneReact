import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_KEY
    });

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        temperature: 0.8,
        maxOutputTokens: 2048
      }
    });

    res.status(200).json({
      text:
        response.text ||
        response.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response generated"
    });
  } catch (error) {
    console.error("Vercel Gemini error:", error);
    res.status(500).json({ error: "Gemini API failed" });
  }
}
