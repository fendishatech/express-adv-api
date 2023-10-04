const userModel = require("../models/user.model");

// DEV
const sync_models = async () => {
  try {
    await userModel.sync();
    console.log("Table Migrated Successfully");
  } catch (error) {
    console.error("Error synchronizing database:", error);
  }
};

module.exports = sync_models;
