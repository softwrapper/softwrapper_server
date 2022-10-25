const mongoose = require("mongoose");

const ourteamSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"],
    },
    role: {
        type: String,
        required: [true, "Please enter a role"],
    },
    facebook: {
        type: String,
        required: [true, "Please enter a facebook link"],
    },
    linkedIn: {
        type: String,
        required: [true, "Please enter a linkedIn link"],
    },
    twitter: {
        type: String,
        required: [true, "Please enter a twitter link"],
    },
    image: {
        type: String,
        required: [true, "Please enter a image link"],
    },
});
const Ourteam = mongoose.model("Ourteam", ourteamSchema);
module.exports = Ourteam;
