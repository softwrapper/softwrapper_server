const { createProject, getAllProjects } = require("../../services/v1/project.services");

exports.getProjects = async (req, res, next) => {
    try {
        const result = await getAllProjects();
        res.send(result);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get the data",
            error: error.message,
        });
    }
};
exports.addProject = async (req, res, next) => {
    try {
        const result = await createProject(req.body);
        res.send(result);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't add the data",
            error: error.message,
        });
    }
};
