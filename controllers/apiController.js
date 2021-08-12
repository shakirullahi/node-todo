var Todos = require("../models/toDoModel");
var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  var todoList = Todos.find({}, (err, result) => {
    // console.log(result);
    res.send(result);
  });
});

module.exports = router;
