const { createProject, getAllProjects, getProjectById, updateProjectById, deleteProjectById } = require("../../services/v1/project.services");

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
exports.getProjectById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await getProjectById(id);
        res.send(result);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get the data by id",
            error: error.message,
        });
    }
};
exports.updateProjectById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateProjectById(id, req.body);
        res.send(result);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't update the data by id",
            error: error.message,
        });
    }
};
exports.deleteProjectById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await deleteProjectById(id);
        res.send(result);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't delete the data by id",
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
