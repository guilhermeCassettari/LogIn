const mysql = require('../../model/connectionMysql')


exports.delete =  async (req, res) => {
    
    try {
        let queryDeleteUser = `DELETE FROM users WHERE id = '${req.body.id}'`
        let deleteUser = await mysql.execute(queryDeleteUser)

        return res.status(200).send({msg: "Usuario Deletado com Sucesso"})

       
    } catch (error) {
        res.status(500).send(error)
    }
}