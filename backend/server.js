const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "../frontend")));

// API routes
const lostRoutes = require("./routes/lost");
const foundRoutes = require("./routes/found");

app.use("/api/lost", lostRoutes);
app.use("/api/found", foundRoutes);

// Serve HTML pages
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "../frontend/index.html")));
app.get("/lost", (req, res) => res.sendFile(path.join(__dirname, "../frontend/lost.html")));
app.get("/found", (req, res) => res.sendFile(path.join(__dirname, "../frontend/found.html")));

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
