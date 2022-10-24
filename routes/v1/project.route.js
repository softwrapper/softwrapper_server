const express = require("express");
const { addProject, getProjects } = require("../../controllers/v1/project.controller");
const router = express.Router();

router.route("/").get(getProjects).post(addProject);

module.exports = router;
