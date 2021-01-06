const express = require('express')
const app = express()
const port = 3003

const http = require('http')
const router = express.Router()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const routes = require('./routes/routes')




app.use(routes)


app.listen(port, () => {
  console.log(`Server at port 3003`)
})