const express = require("express");
const { addProject } = require("../../controllers/v1/project.controller");
const router = express.Router();

router.route("/").post(addProject);

module.exports = router;
