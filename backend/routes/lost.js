const express = require("express");
const router = express.Router();
const pool = require("../models/db"); // Database connection

// Endpoint to post a lost item
router.post("/", async (req, res) => {
    try {
        const { item_name, description, location, contact_email } = req.body;
        const result = await pool.query(
            "INSERT INTO lost (item_name, description, location, contact_email) VALUES ($1, $2, $3, $4) RETURNING *",
            [item_name, description, location, contact_email]
        );
        res.status(201).json({ message: "Lost item reported successfully", item: result.rows[0] });
    } catch (error) {
        console.error("Error reporting lost item:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
