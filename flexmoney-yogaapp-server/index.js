const express = require("express");
const cors = require("cors");
const mysql2=require('mysql2');
var mysql = require('mysql');
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Atul@2000",
    database: "mydb"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    // var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255),number VARCHAR(10),gender VARCHAR(255),date VARCHAR(255),time VARCHAR(255),payment VARCHAR(255))";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });
  });

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
app.post("/register",(req,res)=>{
  console.log(req);
  res.json("Data Submitted");
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});