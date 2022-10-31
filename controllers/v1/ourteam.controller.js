const { getTeamsData, postTeamDataServices, patchTeamDataServices, deleteTeamDataServices } = require("../../services/v1/ourteam.services");

exports.getTeams = async (req, res) => {
    try {
        const result = await getTeamsData();
        res.send(result);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get the data",
            error: error.message,
        });
    }
};
exports.postTeamData = async (req, res) => {
    try {
        const result = await postTeamDataServices(req.body);
        res.send(result);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't post the data",
            error: error.message,
        });
    }
};
exports.patchTeamData = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await patchTeamDataServices(id, req.body);
        res.send(result);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't update the data",
            error: error.message,
        });
    }
};
exports.deleteTeamData = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteTeamDataServices(id);
        res.send(result);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't delete the data",
            error: error.message,
        });
    }
};
