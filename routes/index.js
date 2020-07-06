const express = require('express')
const router = express.Router()
const todos = require('./todos.js')
const users = require('./users.js')
const UserController = require('../controllers/users.js')

router.post('/register', UserController.register)
router.post('/login', UserController.logIn)


router.use('/todos', todos)
router.use('/users', users)
module.exports = router