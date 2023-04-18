const express = require('express')
const router = express.Router()

const fuction = require('../controllers/crud.controllers')
const check = require("../middleware/checkDuplicate")


router.post('/addbooks' , fuction.addBooks)
router.post('/add_issue_details' , fuction.issued_details)
router.post('/add_fine_details', fuction.Fine_details)
router.delete('/delete_book' , fuction.deleteBook)
router.delete('/delete_issue_info' , fuction.deleteIssue_details)
router.delete('/delete_fine_info' , fuction.delete_fine_details)
router.get('/retrive_books' , fuction.Retrive_Books)
router.get('/filterbooks',fuction.filterBooks)
router.get('/retrive_fine_info' , fuction.Retrive_Books_Fine)
router.get('/retrive_issue_book' , fuction.Retrive_issue_book)
router.put('/updates_book', fuction.updateBooks)
router.put('/update_fine_details', fuction.update_fine_details)
router.put('/update_issued_details', fuction.update_issue_books)
router.post('/addstudent' , fuction.addStudent)
router.post('/addteacher', fuction.addTeacher)
router.post('/addadmin', fuction.addAdmin)
router.delete('/deletestudent' , fuction.deleteStudent)
router.delete('/deleteteacher' , fuction.deleteTacher)
router.delete('/deleteadmin' , fuction.deleteAdmin)
router.get('/retrivestudent' , fuction.retriveStudent)
router.get('/filterstudent',fuction.filterStudent)
router.get('/retriveteacher' , fuction.retriveTeacher)
router.get('/retriveadmin' , fuction.retriveAdmin)
router.put('/updatestudent', fuction.updateStudent)
router.put('/updateteacher', fuction.updateTeacher)
router.put('/updateadmin', fuction.updateAdmin)
router.post('/addborrow' , fuction.addBorrowing)
router.post('/addcategory' , fuction.addCategories)
router.post('/addlanguage' , fuction.addLanguage)
router.delete('/deleteborrow' , fuction.deleteBorrowing)
router.delete('/deletecategory' , fuction.deleteCategories)
router.delete('/deletelanguage' , fuction.deleteLanguage)
router.get('/retriveborrow' , fuction.retriveBorrowing)
router.get('/retrivecategory' , fuction.retriveCategories)
router.get('/filtercategories',fuction.filterCategories)
router.get('/retrivelanguage' , fuction.retriveLanguage)
router.put('/updateborrow', fuction.updateBorrowing)
router.put('/updatecategory', fuction.updateCategories)
router.put('/updatelanguage', fuction.updateLanguage)

router.get('/',(req,res) =>{
    res.render("index.html", {message : "Home"});
});

module.exports = router
