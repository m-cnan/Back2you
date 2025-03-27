const express = require("express");
const router = express.Router();
const { addItem, getItems } = require("../models/item");

// POST request to report a found item
router.post("/", async (req, res) => {
    try {
        const { type, name, description, location, email, number, dateFound } = req.body;

        if (!type || !name || !location || !email || !number) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // ✅ Set dateFound to current date if not provided
        const newItem = await addItem("found", type, name, description, location, email, number, dateFound || new Date());
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
