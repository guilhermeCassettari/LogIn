const newUser = require('../model/crudUser/newUser')
const listUser = require('../model/crudUser/listUser')

const bcrypt = require('bcrypt');

const mysql = require('mysql')
const dbConfig = require("../model/dbConfig/dbConfig")



module.exports = async (app) => {


    app.get('/', async (req, res) => {
        const con = await mysql.createConnection({ ...dbConfig })
        con.connect(function (err) {
            if (err) throw err;
            con.query("SELECT * FROM users", function (err, result, fields) {
                if (err) throw err;
                res.send(result)
            });
        });
    })



    app.post('/signin', async (req, res) => {
        const con = await mysql.createConnection({ ...dbConfig })
        const bryptPassword = await bcrypt.hash(req.body.password, 10);

        try {
            con.connect(async (err) => {
                let sqlCreateUser = `INSERT INTO users (name, password) VALUES ('${req.body.name}' , '${bryptPassword}');`
                await con.query(sqlCreateUser, (err, result) => {

                    res.send("Usuario criado com sucesso")
                })
            })
        } catch (error) {
            res.send(`Erro: ${error}`)
        }

    })

    app.delete('/delete', async (req, res) => {
        const con = await mysql.createConnection({ ...dbConfig })
        try {
            con.connect(function (err) {
                if (err) throw err;
                var sql = `DELETE FROM users WHERE id = '${req.body.id}'`;
                con.query(sql, function (err, result) {
                    if (err) throw err;
                    console.log();
                    res.send("Success")
                });
            });
        } catch (error) {
            res.send(error)
        }
    })

    app.put('/atualizar', async (req, res) => {
        const con = await mysql.createConnection({ ...dbConfig })
        const bryptPassword = await bcrypt.hash(req.body.password, 10);
        try {
            con.connect(function (err) {
                if (err) throw err;
                var sql = `UPDATE users SET name = '${req.body.name}', password ='${bryptPassword}' WHERE id = '${req.body.id}'`;
                con.query(sql, function (err, result) {
                    if (err) throw err;
                    res.send('Usuario atualizado com sucesso')
                });
            });

        } catch (error) {
            res.send(error)
        }
    })






}


