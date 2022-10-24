const Project = require("../../models/v1/Project");

exports.getAllProjects = async () => {
    const project = await Project.find({});
    return project;
};
exports.getProjectById = async id => {
    const project = await Project.find({ _id: id });
    return project;
};
exports.updateProjectById = async (id, data) => {
    const project = await Project.updateOne({ _id: id }, { $set: data });
    return project;
};
exports.createProject = async data => {
    const project = await Project.create(data);
    return project;
};
