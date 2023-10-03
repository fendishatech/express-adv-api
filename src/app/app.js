const express = require("express");

class App {
  constructor() {
    this.app = express();
    this.setMiddleware();
    this.setRoutes();
  }

  setMiddleware() {
    this.app.use(express.json());
    console.log("setting middleware");
  }
  setRoutes() {
    const exampleRoutes = require("./routes/exampleRoutes");
    this.app.use("/example", exampleRoutes);
    console.log("Setting routes");
  }

  start() {
    this.setMiddleware();
    this.setRoutes();
  }
}

module.exports = App;
