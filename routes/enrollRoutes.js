const express = require("express");
const router = express.Router();
const { enrollUser } = require("../controllers/enrollController");

router.post("/ecosystem-enroll", enrollUser);

module.exports = router;