const mysql = require('mysql')
const dbConfig = require("../model/dbConfig/dbConfig")

const bcrypt = require('bcrypt')

exports.get = async (req, res) => {


    // requisição para saber se tem o usuario e a senha
    try {
        const con = await mysql.createConnection({ ...dbConfig })
        const bryptPassword = await bcrypt.hash(req.body.password, 10);
        con.connect(async (err) => {
            let sql = `SELECT * FROM users WHERE name = '${req.body.name}' AND password = '${bryptPassword}'`
            con.query(sql, (err, result) => res.send(result))
        })
    } catch (error) {
        res.status(500).send(error)
    }
}