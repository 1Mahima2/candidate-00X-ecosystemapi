const fs = require("fs");
const path = require("path");
const RULEMAP_PATH = path.join(__dirname, "../db/ruleMap.json");

exports.getRuleMapFromDB = async () => {
  const data = fs.readFileSync(RULEMAP_PATH);
  return JSON.parse(data);
};
