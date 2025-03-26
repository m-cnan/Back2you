const db = require("../db"); // Ensure correct database connection

async function addItem(status, type, name, description, location, email, number) { 
    try {
        const query = `
            INSERT INTO items (status, type, name, description, location, email, number) 
            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
        const values = [status, type, name, description, location, email, number];

        const result = await db.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error("Database error in addItem:", error);
        throw error;
    }
}

async function getItems(status) {
    try {
        const query = "SELECT * FROM items WHERE status = $1";
        const values = [status];

        const result = await db.query(query, values);
        return result.rows;
    } catch (error) {
        console.error("Database error in getItems:", error);
        throw error;
    }
}

module.exports = { addItem, getItems };
