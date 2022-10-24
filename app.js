const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use(cors());

//router routes
const projectRoute = require("./routes/v1/project.route");

app.use("/api/v1/project", projectRoute);

app.get("/", (req, res) => {
    res.send("Route is working");
});

module.exports = app;
