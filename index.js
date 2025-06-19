const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { initDB } = require("./db/sqlite");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // ✅ This is required for parsing JSON bodies
app.use(express.static("public"));
initDB();

// Import routes
const enrollRoutes = require("./routes/enrollRoutes");
const adminRoutes = require("./routes/adminRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

// Use routes
app.use(enrollRoutes);
app.use(adminRoutes);
app.use(dashboardRoutes);

const path = require("path");

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "dashboard.html"));
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
