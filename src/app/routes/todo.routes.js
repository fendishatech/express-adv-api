const router = require("express").Router();
const {
  getAll,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo.controller");

router.get("/", getAll);

router.get("/:id", getTodo);

router.post("/", createTodo);

router.patch("/:id", updateTodo);

router.delete("/:id", deleteTodo);

module.exports = router;
