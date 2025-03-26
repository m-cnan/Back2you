require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function matchLostAndFound(lostItem, foundItem) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
        Compare these two items and check if they are likely the same:
        Lost Item: ${JSON.stringify(lostItem)}
        Found Item: ${JSON.stringify(foundItem)}
        Respond with "MATCH" if they are likely the same, otherwise "NO MATCH".
    `;

    try {
        const result = await model.generateContent(prompt);
        const response = result.response.text();

        return response.includes("MATCH");
    } catch (error) {
        console.error("Error with Gemini API:", error);
        return false;
    }
}

module.exports = matchLostAndFound;
