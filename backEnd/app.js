const express = require('express')
const app = express()
const port = 3003
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

let routes = require('./routes/routes')(app)


app.listen(port, () => {
  console.log(`Server at port 3003`)
})