const sequelize = require("../config")
const { Sequelize, DataTypes } = require("sequelize");


const Teacher = sequelize.define("Teacher", {
  First_Name: {
     type: DataTypes.STRING,
     allowNull: false
   },
   Last_Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
   Roll_No: {
     type: DataTypes.INTEGER,
     allowNull: false
   },
   BookName: {
    type: DataTypes.STRING,
  },
  Department: {
    type: DataTypes.STRING,
  },
   Issue_date: {
    type: DataTypes.DATEONLY,
  },
   release_date: {
     type: DataTypes.DATEONLY,
   }
});

 module.exports = Teacher