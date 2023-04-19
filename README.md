
# Library Management System

Library Management System is an open source platform that allows its users to manage their libararies regarding different roles. Role of every user is defined e.g Teacher, Student and Admin. These roles as users combine to manage the whole library using this system, that can make it easier to manage a department. It has alot of features that can help manage the library. It has modules to keep track of the books that has been borrowed, if not returned then it can also track the fine of not returning the books and it can also keep track of the times whenever the book has been borrowed. Collectively, this platfform can provide ease to users when it comes to managing a library.


## Support Features

- Books module to keep track of all available books in library 
- Categories module to keep track of all the categories of books available
- Module to keep track of books that have been issued to students or readers
- Module to keep track of fine per day if books are not returned
- Module to keep track of books that have been borrowed for short time from library
 


## Installation

Install this project or api by:
- Cloning this repository [here]
(https://github.com/MohsinShahid052/LIBRARY-MANAGEMENT-SYSTEM)
- The master branch is the most stable branch at any given time, ensure that you're working from it.
- Run the given command to install all dependencies

```bash
  npm install
```
- You can either work with the default XAMPP sql database or use your locally installed mysql server/workbench according to your ease.
- Create an .env file in your project root folder and add your variables.
    
## Usage

* Run npm start:dev to start the application.
* Connect to the API using Postman on port 7066.


## API Reference

| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| POST | /api/addbooks | To add new books |
| POST | /api/add_issue_details | To Add if there exist some issues |
| POST | /api/add_fine_details | To add details of fine |
| DELETE | /api/delete_books | To delete single/multiple books |
| DELETE | /api/delete_fine_info | To delete single/multiple information/s of fine |
| DELETE| /api/delete_issue_info | To delete single/multiple information/s of issues |
| GET | /api/retrieve_books | To get information pf single/multiple book/s |
| GET | /api/filterbooks | To gwt filtered or specific information about book |
| GET | /api/retrieve_issue_books | To get all books that have been issued|
| GET | /api/retrieve_fine_info | To get all information about fines |
| PUT | /api/update_books | To update books or information revevied|
| PUT | /api/update_fine_details| To update fine detaiks |
| PUT | /api/update_issue_details | To update issue details |
| POST | /api/addstudent | To add new student |
| POST | /api/addteacher | To add new teacher |
| POST | /api/addadmin | To add new admin |
| DELETE | /api/deletestudent | To delete a student |
| DELETE | /api/deleteteacher | To delete a teacher |
| DELETE | /api/deleteadmin | To delete an admin |
| GET | /api/retrievestudent | To get information about student |
| GET | /api/filterstudent | To filter students |
| GET | /api/retrieveteacher | To get information about teacher |
| GET | /api/retrieveadmin | To get information about admin |
| PUT | /api/updatestudent| To update student info |
| PUT | /api/updateteacher | To update teacher info |
| PUT | /api/updateadmin | To update admin info |
| POST | /api/addcategory | To add a new category |
| POST | /api/addborrow | To add info about borrowing |
| POST | /api/addlanguage | To add new language for books |
| DELETE | /api/deleteborrow | To delete info about borrowing |
| DELETE | /api/deletecategory | To delete a category |
| DELETE | /api/deletelanguage | To delete a language |
| GET | /api/retrieveborrow | To get information about borrow |
| GET | /api/retrievecategory | To get information about category |
| GET | /api/retrievelangauge | To get information about language |
| GET | /api/filtercategory | To filter book categories |
| PUT | /api/updateborrow | To update info about borrow |
| PUT | /api/updatelanguage | To update info about language |
| PUT | /api/updatecategory | To update info about category |




## Technologies Used

* [NodeJS](https://nodejs.org/) This is a cross-platform runtime environment built on Chrome's V8 JavaScript engine used in running JavaScript codes on the server. It allows for installation and managing of dependencies and communication with databases.
* [ExpressJS](https://www.expresjs.org/) This is a NodeJS web application framework.
* [MySQL](https://www.mysql.com/) This is a free open source SQL database with scalability and flexibility. Data are stored in flexible JSON-like documents.

## Authors

- [Subhan Attique](https://github.com/subhan-a19)
- [Mohsin Shahid](https://github.com/MohsinShahid052)
- [Abdul Basit Ahsan](https://github.com/Ahsanhawk)


## License

This project is available for use under the [MIT](https://choosealicense.com/licenses/mit/) License.
