const express = require("express");
const router = express.Router();
const { addItem, getItems } = require("../models/item");

// POST request to report a found item
router.post("/", async (req, res) => {
    try {
        const { type, name, location, image, email } = req.body;
        const newItem = await addItem("found", name, location, image, email);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET request to fetch found items
router.get("/", async (req, res) => {
    try {
        const items = await getItems("found");
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
