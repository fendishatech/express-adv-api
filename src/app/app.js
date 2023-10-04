const express = require("express");
const cors = require("cors");

// DEV
const sync_models = require("./helpers/syncModels");
// ROUTES
const indexRoutes = require("./routes/index");

class App {
  constructor() {
    this.app = express();
    this.setMiddleware();
    this.setRoutes();
  }

  setMiddleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  setRoutes() {
    this.app.use("/", indexRoutes);
  }

  start(port) {
    // sync_models();
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}

module.exports = App;
