const db = require("../db"); // Ensure correct database connection

async function addItem(status, item_type, item_name, description, location, email, phone_number, date) { 
    try {
        // Select the correct table and date field
        const tableName = status === "lost" ? "lost_item" : "found_item";
        const dateColumn = status === "lost" ? "date_lost" : "date_found";

        const query = `
            INSERT INTO ${tableName} (item_type, item_name, description, location, email, phone_number, ${dateColumn}) 
            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
        const values = [item_type, item_name, description, location, email, phone_number, date || new Date()];

        const result = await db.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("Database error in addItem:", error);
        throw error;
    }
}

async function getItems(status) {
    try {
        // Select the correct table based on the status
        const tableName = status === "lost" ? "lost_item" : "found_item";

        const query = `SELECT * FROM ${tableName}`;
        const result = await db.query(query);
        return result.rows;
    } catch (error) {
        console.error("Database error in getItems:", error);
        throw error;
    }
}

module.exports = { addItem, getItems };
