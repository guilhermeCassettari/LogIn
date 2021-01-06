const mysql = require('mysql')
const dbConfig = require("../model/dbConfig/dbConfig")

const bcrypt = require('bcrypt')

exports.post = async (req, res) => {    
    try {
        const con = await mysql.createConnection({ ...dbConfig })
        const bryptPassword = await bcrypt.hash(req.body.password, 10);
        con.connect( async (err) => {
            let sqlCreateUser = `INSERT INTO users (name, password) VALUES ('${req.body.name}' , '${bryptPassword}');`
            await con.query(sqlCreateUser, (err, result) => res.status(201).send("Usuario criado com sucesso"))
        })
    } catch (error) {
        res.status(500).send(`Erro: ${error}`)
    }

}