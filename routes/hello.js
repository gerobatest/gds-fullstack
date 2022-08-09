const express = require('express')
router = express.Router()
hello = require('../controllers/hello')

//appelle hello.hello avec la route '/'
router.get('/', hello.hello) //dans controllers

module.exports = router