const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter a project title"],
        },
        name: {
            type: String,
            required: [true, "Please enter a project name"],
        },
        framework: {
            type: String,
            required: [true, "Please enter a framework"],
        },
        language: {
            type: String,
            required: [true, "Please enter a language which you used in this project"],
        },
        demolink: {
            type: String,
            required: [true, "Please enter a demolink"],
        },
        buylink: {
            type: String,
            required: [true, "Please enter a buylink "],
        },
        price: {
            type: Number,
            required: [true, "Please enter a price for this project "],
        },
        tagline: {
            type: String,
            required: [true, "Please enter a tagline "],
        },
        technology: [
            {
                name: {
                    type: String,
                },
            },
        ],
        overview: {
            type: String,
            required: [true, "Please explain total overview of this project"],
        },
        thumbnail: {
            type: String,
            required: [true, "Please enter a thumbnail image path"],
        },
    },
    { timestamps: true }
);

// SCHEMA -> MODEL -> QUERY
const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
