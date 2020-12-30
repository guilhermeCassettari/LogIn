const mysql = require('mysql')

const firstDbConfig = require('./dbConfig/firstDbConfig')
const dbConfig = require('./dbConfig/dbConfig')

let firstCon = mysql.createConnection({ ...firstDbConfig })
let con = mysql.createConnection({ ...dbConfig })

const createTableUser = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), password VARCHAR(255))";

firstCon.connect(async (err) => {
    try {
        console.log("Connected!");
        await firstCon.query("CREATE DATABASE users", (err, result) => console.log("Database created"))
        await  con.query(createTableUser, (err, result) => console.log("Table created"))
    } catch (error) {
        console.log(error)
    }

});


