const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

async function sendMatchNotification(userEmail, foundItem) {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: userEmail,
        subject: "Lost & Found Match Notification",
        text: `We found a potential match for your lost item:\n\n${foundItem.description}\n\nContact: ${foundItem.contact}`
    };

    return transporter.sendMail(mailOptions);
}

module.exports = sendMatchNotification;
