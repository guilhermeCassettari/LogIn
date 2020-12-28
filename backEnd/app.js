const express = require('express')
const app = express()
const port = 3003

let routes = require('./routes/routes')(app)


app.listen(port, () => {
  console.log(`Server at port 3003`)
})