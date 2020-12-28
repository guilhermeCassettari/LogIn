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

/**
 * con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
 */