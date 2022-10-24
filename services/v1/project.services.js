const Project = require("../../models/v1/Project");

exports.createProject = async data => {
    const project = await Project.create(data);
    return project;
};
