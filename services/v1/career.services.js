const Career = require("../../models/v1/career");

exports.postCareerServices = async data => {
    const result = await Career.create(data);
    return result;
};
exports.getCareerServices = async () => {
    const result = await Career.find({});
    return result;
};
