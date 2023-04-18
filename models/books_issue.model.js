const sequelize = require("../config")
const { Sequelize, DataTypes } = require("sequelize");

const books_issue = sequelize.define("books Issue", {
  BookName: {
    type: DataTypes.STRING,
    allowNull:false
  },
  Bookgenre: {
    type: DataTypes.STRING,
    allowNull:false
  },
  IssueDate: {
    type: DataTypes.DATEONLY,
    allowNull:false
  },
  ReturnDate: {
      type: DataTypes.DATEONLY,
  },
});
 module.exports = books_issue