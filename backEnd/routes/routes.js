const express = require('express')
const router = express.Router()

const getUserController = require('../controllers/getUserController')
const postRegisterController = require('../controllers/postRegisterController')
const deleteUserController = require('../controllers/deleteUserController')
const updateUserController = require('../controllers/updateUserController')
const loginUserController = require('../controllers/loginUserController')

router.get('/', getUserController.get)
router.post('/register', postRegisterController.post)
router.delete('/delete', deleteUserController.delete)
router.put('/update', updateUserController.put)
router.get('/login', loginUserController.get)

module.exports = router


