const express = require('express')
const router = express.Router()

const getUserController = require('../controllers/crudUser/getUserController')
const postRegisterController = require('../controllers/crudUser/postRegisterController')
const deleteUserController = require('../controllers/crudUser/deleteUserController')
const updateUserController = require('../controllers/crudUser/updateUserController')
const loginUserController = require('../controllers/crudUser/loginUserController')

const authUser = require('../controllers/authUser/auth')

router.get('/',authUser, getUserController.get)
router.post('/register', postRegisterController.post)
router.delete('/delete', authUser, deleteUserController.delete)
router.put('/update', authUser, updateUserController.put)
router.get('/login', loginUserController.get)

module.exports = router


