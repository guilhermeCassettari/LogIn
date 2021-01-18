const mysql = require('../../model/connectionMysql')
const bcrypt = require('bcrypt')

exports.put =  async (req, res) => {
    
    
    try {
        const bryptPassword = await bcrypt.hash(req.body.password, 10);
        let queryUpdateUser = `UPDATE users SET name ='${req.body.name}', password ='${bryptPassword}', email = '${req.body.email}', phone = '${req.body.phone}' WHERE id = '${req.body.id}'`
        let updateUser = await mysql.execute(queryUpdateUser)

        
        return res.status(200).send({msg: "Usuario deletado com sucesso"})
        
    } catch (error) {
        res.status(500).send(error)
    }
}