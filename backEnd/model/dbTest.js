var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345678",
    port: "3306"
    
});

con.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected!");
        
    }
});

