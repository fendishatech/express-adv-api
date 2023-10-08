const Sequelize = require("sequelize");
const sequelize = require("../helpers/database");
const Todo = require("./todo.model");

const { DataTypes } = Sequelize;

const Task = sequelize.define(
  "tasks",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
  }
);

Todo.hasMany(Task, { onDelete: "CASCADE", onUpdate: "CASCADE" });
Task.belongsTo(Todo);

module.exports = Task;
