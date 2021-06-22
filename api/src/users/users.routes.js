const express = require('express')
const router = express.Router()

const UserController = require('./users.controller')

router.get('/', UserController.findAll)

router.get('/:id', UserController.findById)

router.post('/', UserController.create)

router.put('/:id', UserController.update)

router.delete('/:id', UserController.remove)

module.exports = router
