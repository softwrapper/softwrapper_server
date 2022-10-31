const Career = require("../../models/v1/career");

exports.postCareerServices = async data => {
    const result = await Career.create(data);
    return result;
};
