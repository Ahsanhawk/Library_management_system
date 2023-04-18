const sequelize = require("../config")
const { Sequelize, DataTypes } = require("sequelize");

const Borrowing = sequelize.define("Borrowing", {
  Name: {
     type: DataTypes.STRING,
     allowNull: false
   },
   Reference_No: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Author_Name: {
      type: DataTypes.STRING,
      allowNull: false
  },
   Issue_date: {
    type: DataTypes.DATEONLY,
  },
   release_date: {
     type: DataTypes.DATEONLY,
   }
});

 module.exports = Borrowing