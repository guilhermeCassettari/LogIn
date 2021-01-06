const mysql = require('mysql')
const dbConfig = require("../model/dbConfig/dbConfig")

const bcrypt = require('bcrypt')

exports.put =  async (req, res) => {
    const con = await mysql.createConnection({ ...dbConfig })
    const bryptPassword = await bcrypt.hash(req.body.password, 10);
    try {
        con.connect( async (err) => {            
            var sql = `UPDATE users SET name = '${req.body.name}', password ='${bryptPassword}' WHERE id = '${req.body.id}'`;
            con.query(sql,  () => res.status(200).send('Usuario atualizado com sucesso'))
        })
    } catch (error) {
        res.status(500).send(error)
    }
}