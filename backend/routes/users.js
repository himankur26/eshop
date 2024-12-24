var express = require('express');
var router = express.Router();
const authMiddleware =  require('../middleware/auth_middleware')

var authController = require("../controller/authController")
router.post('/createUsers',authController.createUsers)
router.post('/loginUser',authController.loginUser)
router.get('/user',authMiddleware,authController.user)
router.get('/getSingleUser/:id',authController.getSingleUser)

module.exports = router;
