const Task = require("../models/task.model");

const createTask = async (req, res) => {
  return res.json({
    message: "createTask end point",
  });
};

const getAll = async (req, res) => {
  return res.json({
    message: "getAll end point",
  });
};

const getTask = async (req, res) => {
  return res.json({
    message: "getTask end point",
  });
};

const updateTask = async (req, res) => {
  return res.json({
    message: "updateTask end point",
  });
};

const deleteTask = async (req, res) => {
  return res.json({
    message: "deleteTask end point",
  });
};

module.exports = {
  getAll,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
