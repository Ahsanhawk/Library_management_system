const sequelize = require("../config")
const { Sequelize, DataTypes } = require("sequelize");


const fine_info = sequelize.define("fine information", {
  Student_Name: {
    type: DataTypes.STRING,
    allowNull:false
  },
  Fine_Date: {
    type: DataTypes.DATEONLY,
  },
  Amount: {
    type: DataTypes.INTEGER,
  },
  Email: {
      type: DataTypes.STRING,
  }

});


 module.exports = fine_info