const Todo = require("../models/todo.model");

const createTodo = async (req, res) => {
  return res.json({
    message: "createTodo end point",
  });
};

const getAll = async (req, res) => {
  try {
    const todos = await Todo.findAll();

    if (todos.length === 0) {
      return res.status(200).json({ message: "No records yet." });
    }

    return res.status(200).json(todos);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getTodo = async (req, res) => {
  const todoId = req.params.id;

  try {
    const todo = await Todo.findByPk(todoId);

    if (todo.length === 0) {
      return res.status(200).json({ message: "No records yet." });
    }

    return res.status(200).json(todo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const updateTodo = async (req, res) => {
  return res.json({
    message: "updateTodo end point",
  });
};

const deleteTodo = async (req, res) => {
  const todoId = req.params.id;

  try {
    const todo = await Todo.findByPk(todoId);

    if (todo.length === 0) {
      return res.status(200).json({ message: "No records yet." });
    }

    return res.status(200).json(todo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getAll,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
