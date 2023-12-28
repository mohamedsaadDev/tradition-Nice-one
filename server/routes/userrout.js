const express = require('express')
const router = express.Router()
const userController = require('../controllers/usersControllers')
const veryfiytoken = require('../middleware/veryfiytoken')
//get all user
router.route('/').get(veryfiytoken, userController.getAllusers)
//delete user
router.route('/:userId')
    .delete(userController.deletUser)
//register user
router.route('/register')
    .post(userController.register)
//login user
router.route('/login')
    .post(userController.login)
module.exports = router