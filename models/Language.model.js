const sequelize = require("../config")
const { Sequelize, DataTypes } = require("sequelize");


const Language = sequelize.define("Language", 
{
  Book_Name: {
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
  Languaage_ : {
    type: DataTypes.STRING,
    allowNull: false
}
});

 module.exports = Language