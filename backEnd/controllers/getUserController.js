const mysql = require('mysql')
const dbConfig = require("../model/dbConfig/dbConfig")

exports.get = async (req, res) => {
    try {
        const con = await mysql.createConnection({ ...dbConfig })
        con.connect(async () => {           
            con.query("SELECT * FROM users",  (err, result) => res.send(result))
        })        
    } catch (error) {
        res.status(500).send(`Erro: ${error}`)
    }

}