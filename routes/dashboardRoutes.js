const express = require("express");
const router = express.Router();
const { getDB } = require("../db/sqlite"); // your SQLite DB helper

router.get("/api/dashboard", (req, res) => {
  const db = getDB();

  // Query all enrollments ordered by newest first
  db.all("SELECT * FROM enrollments ORDER BY id DESC", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    // Calculate total enrollments all time
    const totalAllTime = rows.length;

    // Calculate today's enrollments
    const todayDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
    const totalToday = rows.filter(row => row.date === todayDate).length;

    // Prepare recent 25 transactions
    const recent = rows.slice(0, 25).map(row => ({
      email: row.email,
      source: row.source,
      destinations: JSON.parse(row.destinations),
      date: row.date,
    }));

    res.json({ totalAllTime, totalToday, recent });
  });
});

module.exports = router;
