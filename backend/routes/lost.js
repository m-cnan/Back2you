const express = require("express");
const router = express.Router();
const { addItem, getItems } = require("../models/item");

// POST request to report a lost item
router.post("/", async (req, res) => {
    try {
        const { type, name, location, image, email } = req.body;
        const newItem = await addItem("lost", name, location, image, email);
        const newItem = await addItem("lost", name, type, location, image, email, number);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET request to fetch lost items
router.get("/", async (req, res) => {
    try {
        const items = await getItems("lost");
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
