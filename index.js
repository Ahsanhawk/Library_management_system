// const express = require("express");
// const app = express();
// const router= require("./routes/router")
// const path= require("path")
// const favicon = require("serve-favicon");
// // app.use(express.static("public"));
// app.use(express.static(path.join(__dirname,"photo")));
// app.use(favicon(path.join(__dirname,"photo","logo.ico")));
// app.set("views", path.join(__dirname, "views")); //
// app.set("view engine", "ejs");

// app.engine("html", require("ejs").renderFile);


// app.use(router)

// app.listen(2000);



const express = require("express");
const app = express();
const router= require("./routes/router")
const path= require("path")
const favicon = require("serve-favicon");
const createError = require("http-errors");
const { nextTick } = require("process");
app.use(router);
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname,'photo')));
app.use(favicon(path.join(__dirname,"photo","logo.ico")));

app.use(express.static("photo"));
app.set("views", path.join(__dirname, "views")); //
app.set("view engine", "ejs");
app.engine('html',require('ejs').renderFile);

app.use((req, res ,next) => {
    next(new createError.NotFound());

});

app.use((err,req,res,next)=>{
    res.status(err.status || 500);
    res.render("error.html", { err })
})

app.listen(2000);