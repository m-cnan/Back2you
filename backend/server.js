const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Add this to handle form submissions


// Serve frontend files
app.use(express.static(path.join(__dirname, "../public")));

// API routes
const lostRoutes = require("./routes/lost");
const foundRoutes = require("./routes/found");

app.use("/api/lost", lostRoutes);
app.use("/api/found", foundRoutes);

// Serve HTML pages
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));
app.get("/lost", (req, res) => res.sendFile(path.join(__dirname, "../public/lost.html")));
app.get("/found", (req, res) => res.sendFile(path.join(__dirname, "../public/found.html")));

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
