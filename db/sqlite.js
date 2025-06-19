const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const DB_PATH = path.join(__dirname, "transactions.db");

let db;

function initDB() {
  db = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
      console.error("Failed to connect to SQLite DB:", err.message);
    } else {
      console.log("Connected to SQLite DB");
    }
  });

  db.run(`
    CREATE TABLE IF NOT EXISTS enrollments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL,
      source TEXT NOT NULL,
      destinations TEXT NOT NULL,
      date TEXT NOT NULL
    )
   `);
}

function getDB() {
  return db;
}

module.exports = {
  initDB,
  getDB,
};
