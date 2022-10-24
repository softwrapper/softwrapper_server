const Project = require("../../models/v1/Project");

exports.getAllProjects = async () => {
    const project = await Project.find({});
    return project;
};
exports.createProject = async data => {
    const project = await Project.create(data);
    return project;
};
