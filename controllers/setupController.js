var Todos = require("../models/toDoModel");

module.exports = (app) => {
  app.get("/seed-data", (req, res) => {
    const seed = [
      {
        username: "shakir",
        todo: "Clean wardrobe",
        isDone: false,
        hasAttachment: true,
      },

      {
        username: "Wiliam",
        todo: "Buy car",
        isDone: true,
        hasAttachment: false,
      },
    ];
    Todos.create(seed, (err, result) => {
      res.send(result);
    });
  });
};
