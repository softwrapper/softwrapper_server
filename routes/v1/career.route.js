const express = require("express");
const { postCareerData } = require("../../controllers/v1/career.controller");
const router = express.Router();

router.route("/").post(postCareerData);

module.exports = router;
