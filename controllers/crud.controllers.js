
const sequelize = require("../config")
const express = require('express')
const app = express()
const books_issue = require("../models/books_issue.model")
const Books = require("../models/Books.model")
const fine_info = require("../models/fine_info")
const Student = require("../models/Student.model")
const Teacher = require("../models/Teacher.model")
const Admin = require("../models/Admin.model")
const Borrowing = require("../models/Borrowing.model")
const Categories = require("../models/Categories.model")
const Language = require("../models/Language.model")
const { Op } = require("sequelize");
const error = require("../utlis/errorHandle");



////---------------------ADD----------------
const addBooks = (req, res) => {
  try {
    sequelize.sync();
    console.log('Books issue table created successfully!');

    const Book = Books.create({
      Book_Name: req.query.Book_Name,
      Book_Genre: req.query.Book_Genre,
      Book_Author: req.query.Book_Author,
      Book_Price: req.query.Book_Price,
      Reference_No: req.query.Reference_No
    })
    console.log(Book);
    res.send(Book)
   .then((result) => {
      res.json(result)
    });
  }
  catch (error) {
    console.error("Failed to create a new record : ", error);
    res.status(500).send(error.message);
  }
};

const issued_details = (req, res) => {
  try {
    sequelize.sync()
    console.log('Books table created successfully!');
    const Issuebook = books_issue.create({
      BookName: req.query.BookName,
      Bookgenre: req.query.Bookgenre,
      IssueDate: req.query.IssueDate,
      ReturnDate: req.query.ReturnDate
    })
    console.log(Issuebook);
    res.send(Issuebook)
      .then((result) => {
        res.json(result);
      })
  }
  catch (error) {
    console.error("Failed to create a new record : ", error);
    res.status(500).send(error.message);
  }
};


const Fine_details = (req, res) => {
  try {
    sequelize.sync()
    console.log('Student Fine table created successfully!');
    const Fine = fine_info.create({
      Student_Name: req.query.Student_Name,
      Fine_Date: req.query.Fine_Date,
      Amount: req.query.Amount,
      Email: req.query.Email
    })
    console.log(Fine);
    res.send(Fine)
      .then((result) => {
        res.json(result);
      })
  }
  catch (error) {
    console.error("Failed to create a new record : ", error);
    res.status(500).send(error.message);
  }
};

const addStudent = (req, res) => {
  try{
  sequelize.sync()
    console.log('Student table created successfully!');
   const student =  Student.create({
      First_Name: req.query.First_Name,
      Last_Name: req.query.Last_Name,
      Roll_No: req.query.Roll_No,
      BookName: req.query.BookName,
      Issue_date: req.query.Issue_date,
      release_date: req.query.release_date
    })
    console.log(student);
    res.send(student)
   .then((result) => {
      res.json(result);
    })}
    catch(error){
      console.error("Failed to create a new record : ", error);
  res.status(500).send(error.message);
    }
};

const addTeacher = (req, res) => {
  try{
  sequelize.sync()
    console.log('Student table created successfully!');
    const teacher = Teacher.create({
      First_Name: req.query.First_Name,
      Last_Name: req.query.Last_Name,
      Roll_No: req.query.Roll_No,
      BookName: req.query.BookName,
      Department: req.query.Department,
      Issue_date: req.query.Issue_date,
      release_date: req.query.release_date
    }) 
    console.log(teacher);
    res.send(teacher)
   .then((result) => {
      res.json(result);
    })}
    catch(error){
      console.error("Failed to create a new record : ", error);
  res.status(500).send(error.message);
    }
};


const addAdmin = (req, res) => {
  try{
  sequelize.sync()
    console.log('Student table created successfully!');
    const admin = Admin.create({
      Name: req.query.Name,
      Email: req.query.Email,
      Password: req.query.Password
    }) 
    console.log(admin);
    res.send(admin)
   .then((result) => {
      res.json(result);
    })}
    catch(error){
      console.error("Failed to create a new record : ", error);
  res.status(500).send(error.message);
    }
};

const addBorrowing = (req, res) => {
  try{
  sequelize.sync()
    console.log('Student table created successfully!');
   const borrow =  Borrowing.create({
      Name: req.query.Name,
      Reference_No: req.query.Reference_No,
      Author_Name: req.query.Author_Name,
      Issue_date: req.query.Issue_date,
      release_date: req.query.release_date
    })
    console.log(borrow);
    res.send(borrow)
   .then((result) => {
      res.json(result);
    })}
    catch(error){
      console.error("Failed to create a new record : ", error);
  res.status(500).send(error.message);
    }
};

const addCategories = (req, res) => {
  try{
  sequelize.sync()
    console.log('Student table created successfully!');
   const categories =  Categories.create({
      Name: req.query.First,
      Author_Name: req.query.Author_Name,
      Reference_No: req.query.Reference_No,
    })
    console.log(category);
    res.send(category)
   .then((result) => {
      res.json(result);
    })}
    catch(error){
      console.error("Failed to create a new record : ", error);
  res.status(500).send(error.message);
    }
};


const addLanguage = (req, res) => {
  try{
  sequelize.sync()
    console.log('Student table created successfully!');
   const language =  Language.create({
      Book_Name: req.query.Book_Name,
      Reference_No: req.query.Reference_No,
      Author_Name: req.query.Author_Name,
      Language_: req.query.Language_
    }) 
    console.log(language);
    res.send(language)
   .then((result) => {
      res.json(result);
    })}
    catch(error){
      console.error("Failed to create a new record : ", error);
  res.status(500).send(error.message);
    }
};


// //////--------------------------delete--------------------



const deleteBook = (req, res) => {
  sequelize.sync().then(() => {
    console.log(req.query.id);
    Books.destroy({
      where: {
        id: parseInt(req.query.id),
      },
    })
      .then((result) => {
        res.send("Delete").status(200);
      })
      .catch((error) => {
        console.log("Not Delete");
      });
  })
};



const deleteIssue_details = (req, res) => {
  sequelize.sync().then(() => {
    console.log(req.query.id);
    books_issue.destroy({
      where: {
        id: parseInt(req.query.id),
      },
    })
      .then((result) => {
        res.send("Delete").status(200);
      })
      .catch((error) => {
        console.log("Not Delete");
      });
  })
};


const delete_fine_details = (req, res) => {
  sequelize.sync().then(() => {
    console.log(req.query.id);
    fine_info.destroy({
      where: {
        id: parseInt(req.query.id),
      },
    })
      .then((result) => {
        res.send("Delete").status(200);
      })
      .catch((error) => {
        console.log("Not Delete");
      });
  })
};


const deleteStudent = (req, res) => {
  sequelize.sync().then(() => {
    console.log(req.query.id);
    Student.destroy({
      where: {
        id: parseInt(req.query.id),
      },
    })
      .then((result) => {
        res.send("Delete").status(200);
      })
      .catch((error) => {
        console.log("Not Delete");
      });
  })
};



const deleteTacher = (req, res) => {
  sequelize.sync().then(() => {
    console.log(req.query.id);
    Teacher.destroy({
      where: {
        id: parseInt(req.query.id),
      },
    })
      .then((result) => {
        res.send("Delete").status(200);
      })
      .catch((error) => {
        console.log("Not Delete");
      });
  })
};


const deleteAdmin = (req, res) => {
  sequelize.sync().then(() => {
    console.log(req.query.id);
    Admin.destroy({
      where: {
        id: parseInt(req.query.id),
      },
    })
      .then((result) => {
        res.send("Delete").status(200);
      })
      .catch((error) => {
        console.log("Not Delete");
      });
  })
};



const deleteBorrowing = (req, res) => {
  sequelize.sync().then(() => {
    console.log(req.query.id);
    Borrowing.destroy({
      where: {
        id: parseInt(req.query.id),
      },
    })
      .then((result) => {
        res.send("Delete").status(200);
      })
      .catch((error) => {
        console.log("Not Delete");
      });
  })
};



const deleteCategories = (req, res) => {
  sequelize.sync().then(() => {
    console.log(req.query.id);
    Categories.destroy({
      where: {
        id: parseInt(req.query.id),
      },
    })
      .then((result) => {
        res.send("Delete").status(200);
      })
      .catch((error) => {
        console.log("Not Delete");
      });
  })
};


const deleteLanguage = (req, res) => {
  sequelize.sync().then(() => {
    console.log(req.query.id);
    Language.destroy({
      where: {
        id: parseInt(req.query.id),
      },
    })
      .then((result) => {
        res.send("Delete").status(200);
      })
      .catch((error) => {
        console.log("Not Delete");
      });
  })
};



// /////////----------------------UPDATE------------------

const updateBorrowing = (req, res) => {
  Borrowing.update(
    {
      Reference_No: 1112434,
    },
    {
      where: { id: 1 },
    }
  ).then(() => {
    console.log(" upadted data ")
    res.send("updated")
  })

};


const updateCategories = (req, res) => {
  Categories.update(
    {
      Name: xyz,
    },
    {
      where: { id: 1 },
    }
  ).then(() => {
    console.log(" upadted data ")
    res.send("updated")
  })

};

const updateLanguage = (req, res) => {
  Language.update(
    {
      Book_Name: web_development,
    },
    {
      where: { id: 1 },
    }
  ).then(() => {
    console.log(" upadted data ")
    res.send("updated")
  })

};


const updateStudent = (req, res) => {
  Student.update(
    {
      Roll_No: 1115,
    },
    {
      where: { id: 4 },
    }
  ).then(() => {
    console.log(" upadted data ")
    res.send("updated")
  })

};


const updateTeacher = (req, res) => {
  Teacher.update(
    {
      Name: xyz,
    },
    {
      where: { id: 4 },
    }
  ).then(() => {
    console.log(" upadted data ")
    res.send("updated")
  })

};

const updateAdmin = (req, res) => {
  Admin.update(
    {
      Password: 1115,
    },
    {
      where: { id: 4 },
    }
  ).then(() => {
    console.log(" upadted data ")
    res.send("updated")
  })

};


const updateBooks = (req, res) => {
  Books.update(
    {
      Reference_No: 1001,
    },
    {
      where: { id: 2 },
    }
  ).then(() => {
    console.log(" upadted data ")
    res.send("updated")
  })

};


const update_issue_books = (req, res) => {
  books_issue.update(
    {
      Name: silent,
    },
    {
      where: { id: 1 },
    }
  ).then(() => {
    console.log(" upadted data ")
    res.send("updated")
  })

};

const update_fine_details = (req, res) => {
  fine_info.update(
    {
      Student_Name: ahsan,
    },
    {
      where: { id: 1 },
    }
  ).then(() => {
    console.log(" upadted data ")
    res.send("updated")
  })

};

// ////-------------------Retrive------------------

const getPagination = (page) => {
  const limit = 3;
  const offset = page ? page * limit : 0;
  return { limit, offset };
};

const retriveStudent = (req, res) => {
  sequelize.sync().then(() => {
    const { page } = req.query;
    const { limit, offset } = getPagination(page);
    try {
      Student.findAll({ limit, offset }).then((result) => {
        res.json(result)
      })
    }
    catch (error) {
      console.log(error);
    }
  })
};

const filterStudent = (req, res) => {
  sequelize.sync().then(() => {
    Student.findAll({
      where: { id: { [Op.between]: [req.query.fromid, req.query.toid] } }
    })
      .then((data) => {
        console.log(data);
        res.send(data);
      })
      .catch((error) => {
        console.error("Failed to retrieve data : ", error);
      });
  })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};


const retriveTeacher = (req, res) => {
  sequelize.sync().then(() => {
    try {
      Teacher.findAll().then((result) => {
        res.json(result)
      })
    }
    catch (error) {
      console.log(error);
    }
  })
};


const retriveAdmin = (req, res) => {
  sequelize.sync().then(() => {
    try {
      Admin.findAll().then((result) => {
        res.json(result)
      })
    }
    catch (error) {
      console.log(error);
    }
  })
};

const Retrive_Books = (req, res) => {
  sequelize.sync().then(() => {
    const { page } = req.query;
    const { limit, offset } = getPagination(page);
    try {
      Books.findAll({ limit, offset }).then((result) => {
        res.json(result)
      })
    }
    catch (error) {
      console.log(error);
    }
  })
};


const filterBooks = (req, res) => {
  sequelize.sync().then(() => {
    Books.findAll({
      where: { id: { [Op.between]: [req.query.fromid, req.query.toid] } }
    })
      .then((data) => {
        console.log(data);
        res.send(data);
      })
      .catch((error) => {
        console.error("Failed to retrieve data : ", error);
      });
  })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};



const Retrive_issue_book = (req, res) => {
  sequelize.sync().then(() => {
    try {
      books_issue.findAll().then((result) => {
        res.json(result)
      })
    }
    catch (error) {
      console.log(error);
    }
  })
};


const Retrive_Books_Fine = (req, res) => {
  sequelize.sync().then(() => {
    try {
      fine_info.findAll().then((result) => {
        res.json(result)
      })
    }
    catch (error) {
      console.log(error);
    }
  })
};

const retriveBorrowing = (req, res) => {
  sequelize.sync().then(() => {
    try {
      Borrowing.findAll().then((result) => {
        res.json(result)
      })
    }
    catch (error) {
      console.log(error);
    }
  })
};




const retriveCategories = (req, res) => {
  sequelize.sync().then(() => {
    const { page } = req.query;
    const { limit, offset } = getPagination(page);
    try {
      Categories.findAll({ limit, offset }).then((result) => {
        res.json(result)
      })
    }
    catch (error) {
      console.log(error);
    }
  })
};

const filterCategories = (req, res) => {
  sequelize.sync().then(() => {
    Categories.findAll({
      where: { id: { [Op.between]: [req.query.fromid, req.query.toid] } }
    })
      .then((data) => {
        console.log(data);
        res.send(data);
      })
      .catch((error) => {
        console.error("Failed to retrieve data : ", error);
      });
  })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};


const retriveLanguage = (req, res) => {
  sequelize.sync().then(() => {
    try {
      Language.findAll().then((result) => {
        res.json(result)
      })
    }
    catch (error) {
      console.log(error);
    }
  })
};




module.exports = {
  addBooks, issued_details, Fine_details,
  deleteBook, deleteIssue_details, delete_fine_details,
  updateBooks, update_issue_books, update_fine_details,
  Retrive_Books, Retrive_Books_Fine, Retrive_issue_book,
  addStudent, addTeacher, addAdmin, deleteStudent, deleteTacher, deleteAdmin,
  updateStudent, updateTeacher, updateAdmin,
  retriveStudent, retriveTeacher, retriveAdmin, addBorrowing, addCategories, addLanguage,
  deleteBorrowing, deleteCategories, deleteLanguage,
  updateBorrowing, updateCategories, updateLanguage,
  retriveBorrowing, retriveCategories, retriveLanguage, filterStudent, filterBooks, filterCategories
}
