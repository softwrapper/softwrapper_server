const { postCareerServices, getCareerServices, deleteCareerServices } = require("../../services/v1/career.services");

exports.postCareerData = async (req, res) => {
    try {
        const result = await postCareerServices(req.body);
        res.send(result);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't post the data",
            error: error.message,
        });
    }
};
exports.getCareerData = async (req, res) => {
    try {
        const result = await getCareerServices();
        res.send(result);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get the career data",
            error: error.message,
        });
    }
};
exports.deleteCareerData = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await deleteCareerServices(id);
        res.send(result);
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get the career data",
            error: error.message,
        });
    }
};
