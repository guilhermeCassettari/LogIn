const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const jwtDecode = jwt.verify(token, "segredoSuperSecreto")
        req.usuario = jwtDecode

        next()
    } catch (error) {
        res.status(401).send({msg: "Falha na autenticação"})
    }
}