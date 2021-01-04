const mysql = require('mysql')
const dbConfig = require('../dbConfig/dbConfig')
const allUser = {}

const listUser = async () => {
    let conn = await mysql.createConnection({ ...dbConfig })


    try {
        const [rows] = await conn.query('SELECT * FROM users;');
        console.log(...rows)
    return [...rows];
    } catch (error) {
        return error
    }


}

module.exports = listUser