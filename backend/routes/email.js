const nodemailer = require("nodemailer");
require("dotenv").config();

// Configure the transporter for sending emails
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS  
    }
});

async function sendMatchNotification(userEmail, foundItem) {
    try {
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: userEmail,
            subject: "Lost & Found Match Notification",
            text: `We found a potential match for your lost item:\n\n${foundItem.description}\n\nContact: ${foundItem.number}`
        };

        const info = await transporter.sendMail(mailOptions);
        console.log(`📩 Email sent: ${info.response}`);
        return { success: true, message: "Email sent successfully" };
    } catch (error) {
        console.error("❌ Error sending email:", error);
        return { success: false, message: "Error sending email" };
    }
}

// Export the function so it can be used in other files
module.exports = sendMatchNotification;
