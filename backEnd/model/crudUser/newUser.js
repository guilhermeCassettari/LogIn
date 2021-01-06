const dbConfig = require('../dbConfig/dbConfig')
const bcrypt = require('bcrypt');

const mysql = require('mysql')

const bcrypt = require('bcrypt')


const newUser = async (userName, userPassword) => {

  var con = mysql.createConnection({ ...dbConfig })

  // this number 10 is a strong of encrypt
  const bryptPassword = await bcrypt.hash(userPassword, 10);
  var responseUserCreated = {message: ""}

  try {
    con.connect( async (err) => {
      let sqlCreateUser = `INSERT INTO users (name, password) VALUES ('${userName}' , '${bryptPassword}');`
      await con.query(sqlCreateUser, (err, result) => {

        return  result 
        console.log(responseUserCreated)
      })
    })
  } catch (error) {
    return error
  }
console.log(responseUserCreated)
  return responseUserCreated

}

module.exports = newUser

