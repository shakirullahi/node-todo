var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var config = require("./config");
var mongoose = require("mongoose");
var setupController = require("./controllers/setupController");
var apiController = require("./controllers/apiController");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/assets", express.static(__dirname + "/public"));
app.use("/api/todos", apiController);

app.set("view engine", "ejs");

mongoose.connect(config.getDBConnectionString());
// setupController(app);

app.listen(PORT);
