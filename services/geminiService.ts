import { ContentPart } from "../types";

// This service has been decommissioned.
// The function remains to prevent import errors in other files.
export const generateCodenixIdeResponse = async (prompt: string): Promise<ContentPart[]> => {
  return Promise.resolve([
    { 
      type: 'text', 
      value: "The Codenix IDE model is currently offline and has been decommissioned. Please select another model." 
    }
  ]);
};