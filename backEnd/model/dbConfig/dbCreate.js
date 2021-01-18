const mysql = require('mysql')

const firstDbConfig = require('./firstDbConfig')
const dbConfig = require('./dbConfig')

let firstCon = mysql.createConnection({ ...firstDbConfig })
let con = mysql.createConnection({ ...dbConfig })

const createTableUser = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255) NOT NULL UNIQUE, password VARCHAR(255) NOT NULL, name VARCHAR(255) NOT NULL, phone VARCHAR(255) NOT NULL)";

firstCon.connect(async (err) => {
    try {
        console.log("Connected!");
        await firstCon.query("CREATE DATABASE users", (err, result) => console.log("Database created"))
        await  con.query(createTableUser, (err, result) => console.log("Table created"))
    } catch (error) {
        console.log(error)
    }

});


