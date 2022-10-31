const express = require("express");
const { postCareerData, getCareerData } = require("../../controllers/v1/career.controller");
const router = express.Router();

router.route("/").post(postCareerData).get(getCareerData);

module.exports = router;
