const express = require("express");
const router = express.Router();
const { addItem, getItems } = require("../models/item");

// POST request to report a lost item
router.post("/", async (req, res) => {
    try {
        const { type, name, description, location, email, number, dateLost } = req.body;

        if (!type || !name || !location || !email || !number) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // ✅ Set dateLost to current date if not provided
        const newItem = await addItem("lost", type, name, description, location, email, number, dateLost || new Date());
        res.status(201).json(newItem);
    } catch (error) {
        console.error("Error in /api/lost:", error);
        res.status(500).json({ error: error.message });
    }
});

// GET request to fetch lost items
router.get("/", async (req, res) => {
    try {
        const items = await getItems("lost");
        res.json(items);
    } catch (error) {
        console.error("Error fetching lost items:", error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
