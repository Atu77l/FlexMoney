const express = require("express");
const cors = require("cors");
const mysql2=require('mysql2');
var mysql = require('mysql');
const app = express();


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

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});
// Route for creating the post
app.post('/register', (req,res)=> {

const name = req.body.name;
const address = req.body.address;
const number = req.body.number;
const gender = req.body.gender;
const dom = req.body.dom;
const time = req.body.time;
const payment = req.body.payment;
con.query("INSERT INTO customers(name,address,number,gender,date,time,payment) VALUES (?,?,?,?,?,?,?)",[name,address,number,gender,dom,time,payment], (err,result)=>{
   if(err) {
   console.log(err)
   } 
   console.log(result)
});   })

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});