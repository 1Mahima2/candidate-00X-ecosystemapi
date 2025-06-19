const express = require("express");
const router = express.Router();
const {
  getRuleMap,
  updateRuleMap,
} = require("../controllers/adminController");

router.get("/enrollment-map", getRuleMap);
router.post("/enrollment-map", updateRuleMap);
router.patch("/enrollment-map", updateRuleMap);

module.exports = router;
