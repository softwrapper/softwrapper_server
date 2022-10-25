const express = require("express");
const router = express.Router();
const { getTeams, postTeamData, patchTeamData, deleteTeamData } = require("../../controllers/v1/ourteam.controller");

router.route("/").get(getTeams).post(postTeamData);

router.route("/:id").patch(patchTeamData).delete(deleteTeamData);

module.exports = router;
