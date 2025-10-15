
import { GoogleGenAI } from "@google/genai";
import { ContentPart } from "../types";

if (!process.env.API_KEY) {
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const generateCodenixIdeResponse = async (prompt: string): Promise<ContentPart[]> => {
  if (!process.env.API_KEY) {
    return Promise.resolve([{ type: 'text', value: "API_KEY is not configured. Please set the environment variable to use Codenix IDE." }]);
  }
  
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-pro',
        contents: `You are Codenix IDE, a world-class AI coding assistant. Your purpose is to provide clean, efficient, and accurate code, explanations, and debugging help. Be concise and clear. User prompt: "${prompt}"`,
    });
    return [{ type: 'text', value: response.text }];
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return [{ type: 'text', value: "Sorry, I encountered an error trying to generate a response. Please check the console for details." }];
  }
};