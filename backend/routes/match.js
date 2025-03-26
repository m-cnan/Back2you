const express = require("express");
const router = express.Router();
const findMatches = require("../match");

router.post("/", async (req, res) => {
    const { lostItem } = req.body;

    try {
        const match = await findMatches(lostItem);
        if (match) {
            res.json({ success: true, match });
        } else {
            res.json({ success: false, message: "No matches found." });
        }
    } catch (error) {
        console.error("Error in match route:", error);
        res.status(500).json({ success: false, message: "Server error." });
    }
});

module.exports = router;
