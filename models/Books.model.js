const sequelize = require("../config")
const { Sequelize, DataTypes } = require("sequelize");

const Books = sequelize.define("Books", {
  Book_Name: {
    type: DataTypes.STRING,
    allowNull:false
  },
  Book_Genre: {
    type: DataTypes.STRING,
    allowNull:false
  },
  Book_Author: {
      type: DataTypes.STRING,
      allowNull:false
  },
  Book_Price: {
      type: DataTypes.INTEGER,
  },
  Reference_No:{
    type: DataTypes.INTEGER,
    allowNull:false

  }

});

 module.exports = Books