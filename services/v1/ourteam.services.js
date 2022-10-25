const Ourteam = require("../../models/v1/ourteam");

exports.getTeamsData = async () => {
    const result = await Ourteam.find({});
    return result;
};
exports.postTeamDataServices = async data => {
    const result = await Ourteam.create(data);
    return result;
};
exports.patchTeamDataServices = async (id, data) => {
    const result = await Ourteam.updateOne({ _id: id }, { $set: data });
    return result;
};
exports.deleteTeamDataServices = async id => {
    const result = await Ourteam.deleteOne({ _id: id });
    return result;
};
