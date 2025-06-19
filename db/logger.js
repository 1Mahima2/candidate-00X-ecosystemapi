const { getDB } = require("./sqlite");

function logTransaction(email, source, destinations, date) {
  const db = getDB();
  db.run(
    "INSERT INTO enrollments (email, source, destinations, date) VALUES (?, ?, ?, ?)",
    [email, source, JSON.stringify(destinations), date],
    (err) => {
      if (err) {
        console.error("Failed to log transaction:", err.message);
      }
    }
  );
}

module.exports = {
  logTransaction,
};
