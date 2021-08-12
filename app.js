var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var config = require("./config");
var mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use("/assets", express.static(__dirname + "/public"));

app.set("view engine", "ejs");

mongoose.connect(config.getDBConnectionString());

app.listen(PORT);
