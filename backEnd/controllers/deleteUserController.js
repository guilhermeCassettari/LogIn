const mysql = require('mysql')
const dbConfig = require("../model/dbConfig/dbConfig")


exports.delete =  async (req, res) => {
    const con = await mysql.createConnection({ ...dbConfig })
    try {
        con.connect(async (err) => {           
            var sql = `DELETE FROM users WHERE id = '${req.body.id}'`;
            await con.query(sql,  (err, result) => res.status(200).send("Success"))
        });
    } catch (error) {
        res.status(500).send(error)
    }
}