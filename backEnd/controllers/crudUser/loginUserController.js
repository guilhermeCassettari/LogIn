const mysql = require('../../model/connectionMysql')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.get = async (req, res) => {
    try {

        const queryUser = `SELECT * FROM users WHERE email = '${req.body.email}'`
        let resultUserLogin = await mysql.execute(queryUser)


        if (resultUserLogin.length === 0) {
            return res.status(500).send({msg: "Falha na autenticação"})
        }
        
        if (await bcrypt.compareSync(req.body.password, resultUserLogin[0].password)) {
            let token = jwt.sign({
                id: resultUserLogin[0].id,
                email: resultUserLogin[0].email,
                name: resultUserLogin[0].name
            },
                "segredoSuperSecreto",
                {
                    expiresIn: "1h"
                })
            return res.status(200).send({
                token: token,
                id: resultUserLogin[0].id,
                email: resultUserLogin[0].email,
                name: resultUserLogin[0].name,
                phone: resultUserLogin[0].phone

            })
        } else {
            return res.status(500).send({msg: "Falha na autenticação"})
        }

    } catch (error) {
        res.status(500).send(error)
    }
}

