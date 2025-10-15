import { ContentPart } from "../types";

const NIX_1_5_WEBHOOK_URL = 'https://cloud.activepieces.com/api/v1/webhooks/WR43cDYER0O9TiHq8exAH/sync';

export const callNix15Webhook = async (prompt: string): Promise<ContentPart[]> => {
  try {
    const response = await fetch(NIX_1_5_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: prompt }),
    });

    if (!response.ok) {
      console.error(`Webhook failed with status: ${response.status}`, await response.text());
      return [{ type: 'text', value: "Sorry, the connection to Nix 1.5 failed. The service may be temporarily down." }];
    }
    
    const data = await response.json();

    // Prefer structured rich content if available
    if (Array.isArray(data.content)) {
      // Basic validation can be added here if needed
      return data.content as ContentPart[];
    }

    // Fallback to simple text answer
    if (data.answer) {
      return [{ type: 'text', value: String(data.answer) }];
    }
    
    // Handle cases where the response is unexpected
    return [{ type: 'text', value: "Received an unexpected response format from the model." }];

  } catch (error) {
    console.error("Error calling Nix 1.5 webhook:", error);
    return [{ type: 'text', value: "Sorry, the connection to Nix 1.5 failed. Please check your network or try again later." }];
  }
};