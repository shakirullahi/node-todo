var mongoose = require("mongoose");

var toDoSchema = new mongoose.Schema({
  username: String,
  todo: String,
  isDone: Boolean,
  hasAttachment: Boolean,
});

var Todos = new mongoose.model("Todos", toDoSchema);
module.exports = Todos;
