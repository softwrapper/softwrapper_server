const express = require("express");
const app = express();
const cors = require("cors");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

//view engine setup
app.engine("handlebars", exphbs.engine({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", "handlebars");

//middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//router routes
const projectRoute = require("./routes/v1/project.route");
const ourteamRoute = require("./routes/v1/ourteam.route");
const ourCareerRoute = require("./routes/v1/career.route");
const sendMailRoute = require("./routes/v1/sendMail.route");

app.use("/api/v1/projects", projectRoute);
app.use("/api/v1/ourteams", ourteamRoute);
app.use("/api/v1/career", ourCareerRoute);
app.use("/api/v1/sendMails", sendMailRoute);

app.get("/", (req, res) => {
    res.send("Route is working");
});

module.exports = app;
