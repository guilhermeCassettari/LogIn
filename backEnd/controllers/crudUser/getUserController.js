const mysql = require('../../model/connectionMysql')

exports.get = async (req, res) => {
    try {
        const queryGetUser = "SELECT * FROM users"
        let getUser = await mysql.execute(queryGetUser)

        return res.send(getUser)



    } catch (error) {
        res.status(500).send(`Erro: ${error}`)
    }

}