const { isValidEmail, isValidTimestamp, isValidApiKey } = require("../utils/validate");
const { getRuleMapFromDB } = require("../utils/ruleMap");
const { logTransaction } = require("../db/logger");
const { simulatePost } = require("../utils/simulatePost");

exports.enrollUser = async (req, res) => {
  const { email, source, timestamp, apikey } = req.body;
  if (!isValidEmail(email) || !isValidTimestamp(timestamp)) {
    return res.status(400).json({ error: "Invalid email or timestamp." });
  }
  if (!isValidApiKey(source, apikey)) {
    return res.status(401).json({ error: "Unauthorized API key." });
  }

  const ruleMap = await getRuleMapFromDB();
  const destinations = ruleMap[source] || [];

  const postData = {
    email,
    source: "ecosystem-sync",
    enrolledOn: timestamp.split("T")[0],
  };

  const statusArray = await Promise.all(
    destinations.map(async (dest) => {
      const status = await simulatePost(dest, postData);
      return { destination: dest, status };
    })
  );

  await logTransaction(email, source, destinations, postData.enrolledOn);

  return res.json({ destinations, statusArray });
};
