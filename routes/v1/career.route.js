const express = require("express");
const { postCareerData, getCareerData, deleteCareerData } = require("../../controllers/v1/career.controller");
const router = express.Router();

router.route("/").post(postCareerData).get(getCareerData);

router.route("/:id").delete(deleteCareerData);

module.exports = router;
