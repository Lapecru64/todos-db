import { DataTypes } from "sequelize";
import db from "../utils/database.js";

const Todo = db.define("todos", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }
    });
    
    export default Todo;
    
  