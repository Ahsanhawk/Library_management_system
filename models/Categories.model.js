const sequelize = require("../config")
const { Sequelize, DataTypes } = require("sequelize");

const Categories = sequelize.define("Categories", {
    Name: {
      type: DataTypes.STRING,
      // allowNull: false
    },
    Reference_No: {
      type: DataTypes.INTEGER,
      // allowNull: false
    },
    Author_Name: {
        type: DataTypes.STRING,
        // allowNull: false
    }

 });
 module.exports = Categories