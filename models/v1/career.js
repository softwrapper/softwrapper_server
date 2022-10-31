const mongoose = require("mongoose");

const careerSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"],
    },
    address: {
        type: String,
        required: [true, "Please enter a address"],
    },
    education: {
        type: String,
        required: [true, "Please enter education"],
    },
    email: {
        type: String,
        required: [true, "Please enter email address"],
    },
    phone: {
        type: String,
        required: [true, "Please enter phone number"],
    },
    portfolio: {
        type: String,
        required: [true, "Please enter portfolio"],
    },
    resume: {
        type: String,
        required: [true, "Please enter resume"],
    },
    linkedIn: {
        type: String,
        required: [true, "Please enter linkedIn"],
    },
});
const Career = mongoose.model("Career", careerSchema);
module.exports = Career;
