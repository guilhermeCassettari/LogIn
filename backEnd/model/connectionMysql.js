const mysql = require('mysql')
const dbUser = require('./dbConfig/dbConfig')

var pool = mysql.createPool({
    
        host: "localhost",
        user: "root",
        password: "12345678",
        port: "3306",
        database: "users",
    
    
})

exports.execute = (query) => {
        return new Promise((resolve, reject) => {
            pool.query(query, (error, result, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result)
                }
            });
        })
    }



exports.pool = pool

/***
 * const mysql = require('mysql');

var pool = mysql.createPool({
    "connectionLimit" : 1000,
    "user" : process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database" : process.env.MYSQL_DATABASE,
    "host": process.env.MYSQL_HOST,
    "port" : process.env.MYSQL_PORT
});



exports.pool = pool;
 */