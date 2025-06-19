const fs = require("fs");
const path = require("path");
const RULEMAP_PATH = path.join(__dirname, "../db/ruleMap.json");
const { isValidApiKeyValue } = require("../utils/validate");

exports.getRuleMap = (req, res) => {
  const map = JSON.parse(fs.readFileSync(RULEMAP_PATH));
  res.json(map);
};

exports.updateRuleMap = (req, res) => {
  const { apikey } = req.body;
  if (!isValidApiKeyValue(apikey)) {
    return res.status(401).json({ error: "Unauthorized API key." });
  }
  fs.writeFileSync(RULEMAP_PATH, JSON.stringify(req.body.map, null, 2));
  res.json({ status: "Rule map updated." });
};
