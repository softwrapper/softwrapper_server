const express = require("express");
const { addProject, getProjects, getProjectById, updateProjectById, deleteProjectById } = require("../../controllers/v1/project.controller");
const router = express.Router();

router.route("/").get(getProjects).post(addProject);
router.route("/:id").get(getProjectById).patch(updateProjectById).delete(deleteProjectById);

module.exports = router;
