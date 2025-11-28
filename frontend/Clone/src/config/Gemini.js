// const apiKey = 'AIzaSyDRmIyDpPaIjUCaHvU6FIvMVjD1QDqY0T0'

// npm install @google/genai

// Import the Google GenAI SDK

import { GoogleGenAI } from "@google/genai";



// 2. Initialize the Gemini Client
// Pass the API key directly to the constructor
const ai = new GoogleGenAI({ apiKey: "AIzaSyDRmIyDpPaIjUCaHvU6FIvMVjD1QDqY0T0",});


async function runGenerativeModel(prompt) {
  try {
    // --- Configuration (Config Object) ---
    // Define the configuration for your API call 
    const config = {
      model: 'gemini-2.5-flash', 
      config: {
        // Use a moderate temperature for some creativity
        temperature: 0.8, 
        maxOutputTokens: 2048, 
      },
    };

    // --- Making the API Call ---
    // const prompt = "Write a short, creative slogan for a coffee shop named 'The Quantum Bean'.";

    console.log(`Calling model: ${config.model} with prompt: '${prompt.substring(0, 40)}...'`);

    const response = await ai.models.generateContent({
      model: config.model,
      contents: prompt,
      config: config.config,
    });

    console.log("\n--- Model Response ---");
    const responseText= response.text; // Get the text from the response
    console.log(response.text);

    return responseText

  } catch (error) {
    console.error("An error occurred during the API call. Check if your API key is valid:", error);
  }
}

export default runGenerativeModel;