const express = require("express");
const router = express.Router();
const { addItem, getItems } = require("../models/item");

// POST request to report a found item
router.post("/", async (req, res) => {
    try {
        const { type, name, description, location, email, number } = req.body; // ✅ Correct structure
        const newItem = await addItem("found", type, name, description, location, email, number); // ✅ `type` is category
        res.status(201).json(newItem);
    } catch (error) {
        console.error("Error in /api/found:", error);
        res.status(500).json({ error: error.message });
    }
});

// GET request to fetch found items
router.get("/", async (req, res) => {
    try {
        const items = await getItems("found");
        res.json(items);
    } catch (error) {
        console.error("Error fetching found items:", error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
