const Todo = require("../models/todo.model");
const {
  createTodoSchema,
  updateTodoSchema,
} = require("../validators/todoRequestValidator");

const createTodo = async (req, res) => {
  // Validation
  const { error } = createTodoSchema(req.body);

  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return res.status(400).json({ errors: errorMessages });
  }

  try {
    const { title, description, completed } = req.body;

    // Create a new todo
    const newTodo = await Todo.create({ title, description, completed });

    if (newTodo) {
      res.status(201).json({ message: "Todo added successfully" });
    } else {
      res.status(500).json({ message: "Something went wrong saving todo." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server error", error: error.message });
  }
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

    if (!todo) {
      return res
        .status(200)
        .json({ message: "Todo record could not be found." });
    }

    return res.status(200).json(todo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const updateTodo = async (req, res) => {
  const { error } = updateTodoSchema(req.body);

  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return res.status(400).json({ errors: errorMessages });
  }

  const { title, description, completed } = req.body;

  const todoId = req.params.id;

  try {
    const todo = await Todo.findByPk(todoId);

    if (!todo) {
      return res.status(404).json({ message: "Todo record not found" });
    }

    const result = await Todo.update(
      { title, description, completed },
      { where: { id: todoId }, returning: true }
    );

    return res.json({ message: "Todo updated successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};

const deleteTodo = async (req, res) => {
  const todoId = req.params.id;

  try {
    const todo = await Todo.findByPk(todoId);

    if (!todo) {
      return res
        .status(200)
        .json({ message: "Todo record could not be found." });
    }
    todo.destroy();
    return res.status(200).json({ message: "Todo deleted Successfully" });
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
