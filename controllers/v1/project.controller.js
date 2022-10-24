const { createProject } = require("../../services/v1/project.services");

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
