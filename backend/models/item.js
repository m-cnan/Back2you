const pool = require("../db"); // ✅ Correct path

// Function to add a lost or found item
async function addItem(type, name, location, image, email) {
    const query = `
        INSERT INTO ${type}_items (type, name, location, image, email)
        VALUES ($1, $2, $3, $4, $5) RETURNING *;
    `;
    const values = [type, name, location, image, email];
    const result = await pool.query(query, values);
    return result.rows[0];
}

// Function to get all lost or found items
async function getItems(type) {
    const query = `SELECT * FROM ${type}_items ORDER BY created_at DESC;`;
    const result = await pool.query(query);
    return result.rows;
}

module.exports = { addItem, getItems };
