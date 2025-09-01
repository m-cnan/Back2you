# 🔎 LISA – Smarter Lost & Found System

**LISA** (Lost Item Search Agent) is a secure, private, and efficient lost-and-found web platform designed to solve a fundamental flaw in traditional systems: **public exposure**. Most platforms let everyone browse lost and found items — making it easy for someone to falsely claim an item or misuse information.

LISA fixes that.

---

## 💡 How It Works

- Users can report **lost** or **found** items.
- Each report includes:
  - Item details
  - Images (optional but improves matching)
  - Contact info (email, phone)
- **No one** can browse or search items.
- A **background matching system** intelligently compares lost and found reports.
- When a match occurs:
  - **Both users receive an email** with each other’s contact info.
  - They can then communicate and resolve the claim privately.

---

## 🛡 Why It’s Better

- 🔐 **Private & Secure** – No public listing, no fakes, no scams.
- 🧠 **Smart Matching** – Uses fields like item type, location, and optionally image recognition.
- 📩 **Notification System** – Instant email alerts to both parties.
- 📍 **Location Specific** – Ideal for campuses, parks, stations, or any closed community.

---

## ⚙️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js
- **Database:** PostgreSQL
- **Matching:** Gemini API (for semantic/image matching)
- **Email Notifications:** Custom `email.js` service
- **Image Processing:** (Optional) TensorFlow / Gemini Vision API

---

## 🚀 Setup Instructions

> ⚠️ Not publicly hosted — run locally.

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Back2you.git
   cd LISA
