require('../model/crudUser/newUser')


module.exports = function (app) {

    app.get('/', (req, res) => {
        console.log("main")
        res.send("isso ai")
    })

 

    app.get('/signup', (req, res) => {
        console.log("Cadastro")
    })

    app.get('/login', (req, res) => {
        console.log("login")
    })




}


