const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());

//router routes
const projectRoute = require("./routes/v1/project.route");
const ourteamRoute = require("./routes/v1/ourteam.route");
const ourCareerRoute = require("./routes/v1/career.route");

app.use("/api/v1/projects", projectRoute);
app.use("/api/v1/ourteams", ourteamRoute);
app.use("/api/v1/career", ourCareerRoute);

app.get("/", (req, res) => {
    res.send("Route is working");
});

module.exports = app;
