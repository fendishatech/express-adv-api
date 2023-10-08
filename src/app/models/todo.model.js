const Sequelize = require("sequelize");
const sequelize = require("../helpers/database");

const { DataTypes } = Sequelize;

const Todo = sequelize.define(
  "todos",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
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

module.exports = Todo;
