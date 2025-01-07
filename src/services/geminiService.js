import { GoogleGenerativeAI } from '@google/generative-ai';
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
export const analyzeMathProblem = async (imageData) => {
  try {
    if (!import.meta.env.VITE_GEMINI_API_KEY) {
      throw new Error('Gemini API key is not configured');
    }
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    if (!imageData || !imageData.includes('base64')) {
      throw new Error('Invalid image data provided');
    }
    const base64Image = imageData.split(',')[1];
    
    const prompt = `Please analyze this mathematical problem and provide:
      1. A clear step-by-step solution
      2. Indicate if each step is correct
      3. The final answer
      4. If there are any errors, explain what they are
      
      If the image doesn't contain a mathematical problem, please respond with "This image does not appear to contain a mathematical problem."`;
    
    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: base64Image
        }
      }
    ]);
    if (!result || !result.response) {
      throw new Error('No response received from Gemini API');
    }
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error analyzing math problem:', error);
    if (error.message.includes('API key')) {
      throw new Error('API configuration error. Please check your API key.');
    } else if (error.message.includes('image data')) {
      throw new Error('Invalid image provided. Please try again with a different image.');
    } else if (error.message.includes('PERMISSION_DENIED')) {
      throw new Error('API access denied. Please check your API key permissions.');
    } else {
      throw new Error('Failed to analyze the math problem. Please try again.');
    }
  }
};