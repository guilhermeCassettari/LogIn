const mysql = require('../../model/connectionMysql')



const bcrypt = require('bcrypt')

exports.post = async (req, res) => {
    try {

        const bryptPassword = await bcrypt.hash(req.body.password, 10);

        let queryCreateUser = `INSERT INTO users ( email, name, password, phone) VALUES ('${req.body.email}', '${req.body.name}', '${bryptPassword}', '${req.body.phone}');`
        let queryFindOldUser = `SELECT * FROM users WHERE email = '${req.body.email}'`

        let finOldUser = await mysql.execute(queryFindOldUser)

        if (finOldUser.length > 0) {
            res.status(500).send({msg: "Usuario ja existtente"})
        } else {
            let newUser = await mysql.execute(queryCreateUser)
            return res.status(200).send({msg:"Usuario criado com sucesso"})
        }


    } catch (error) {
        return res.status(500).send(`Erro: ${error}`)
    }

}
