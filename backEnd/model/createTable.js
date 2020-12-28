var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    port: "3306",
    database: "users",
});






con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    const sql = "CREATE TABLE users (name VARCHAR(255), password VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});