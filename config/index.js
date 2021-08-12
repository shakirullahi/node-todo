var configFile = require("./config.json");

module.exports = {
  getDBConnectionString: () => {
    return `mongodb+srv://${configFile.username}:${configFile.password}@cluster0.phcoq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  },
};
