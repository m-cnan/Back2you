const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();
const pool = require("./models/db"); // PostgreSQL connection

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function findMatches(lostItem) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Fetch all found items from the database
    const foundItemsQuery = "SELECT * FROM found";
    const foundItems = (await pool.query(foundItemsQuery)).rows;

    let bestMatch = null;
    let highestScore = 0;

    for (let foundItem of foundItems) {
        const prompt = `Compare these two items:\n\nLost Item: ${lostItem.description}\nFound Item: ${foundItem.description}\nDo they match? Respond with a similarity score from 0 to 100.`;
        
        const result = await model.generateContent(prompt);
        const score = parseInt(result.response.text.trim(), 10);

        if (score > highestScore) {
            highestScore = score;
            bestMatch = foundItem;
        }
    }

    return highestScore >= 80 ? bestMatch : null; // Only consider matches with a high score
}

module.exports = findMatches;
