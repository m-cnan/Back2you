const express = require("express");
const router = express.Router();
const sendMatchNotification = require("../email");

router.post("/", async (req, res) => {
    const { userEmail, foundItem } = req.body;

    try {
        await sendMatchNotification(userEmail, foundItem);
        res.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "Email sending failed." });
    }
});

module.exports = router;
