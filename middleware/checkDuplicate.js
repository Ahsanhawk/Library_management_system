const Book = require("../models/Books.model");  
const Issuebook = require("../models/books_issue.model")
const Fine = require("../models/fine_info")
const student = require("../models/Student.model")
const teacher = require("../models/Teacher.model")
const borrow = require("../models/Borrowing.model")
const language = require("../models/Language.model")
const admin = require("../models/Admin.model");
const categories = require("../models/Categories.model");

const checkDuplicate = (req, res, next) => {
    Book.findOne({
      where: {
          Book_Name: req.query.Book_Name
      }
    }).then(rs => {
      if (rs) {
        res.status(400).send({message: "Username is already exist"});
        return;
      }
      Book.findOne({
        where: {
          Reference_No: req.query.Reference_No
        }
      }).then(rs => {
        if (rs) {
          res.status(400).send({message: "Reference_No is already exist"});
          return;
        }

        next();
      });
    });
  

  Issuebook.findOne({
    where: {
        BookName: req.query.BookName
    }
  }).then(rs => {
    if (rs) {
      res.status(400).send({message: "Bookname is already exist"});
      return;
    }
  });
  
  student.findOne({
    where: {
        Roll_No: req.query.Roll_No
    }
  }).then(rs => {
    if (rs) {
      res.status(400).send({message: "Roll_no is already exist"});
      return;
    }
  });
  teacher.findOne({
    where: {
        Roll_No: req.query.Roll_No
    }
  }).then(rs => {
    if (rs) {
      res.status(400).send({message: "Roll_no is already exist"});
      return;
    }
  });

  language.findOne({
    where: {
        Reference_No: req.query.Reference_No
    }
  }).then(rs => {
    if (rs) {
      res.status(400).send({message: "Reference_No is already exist"});
      return;
    }
  });

  categories.findOne({
    where: {
        Reference_No: req.query.Reference_No
    }
  }).then(rs => {
    if (rs) {
      res.status(400).send({message: "Reference_No is already exist"});
      return;
    }
  });

  borrow.findOne({
    where: {
        Reference_No: req.query.Reference_No
    }
  }).then(rs => {
    if (rs) {
      res.status(400).send({message: "Reference_No is already exist"});
      return;
    }
  });

  Fine.findOne({
    where: {
        Student_Name: req.query.Student_Name
    }
  }).then(rs => {
    if (rs) {
      res.status(400).send({message: "Student_Name is already exist"});
      return;
    }
  });
}
const checkD = (req, res, next) => {
  admin.findOne({
    where: {
        Email: req.query.Email
    }
  }).then(rs => {
    if (rs) {
      res.status(400).send({message: "Email is already exist"});
      return;
    }
    next();
  });
}

  module.exports = {checkDuplicate,checkD}