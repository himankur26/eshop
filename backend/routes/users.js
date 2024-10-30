var express = require('express');
var router = express.Router();

var authController = require("../controller/authController")
router.post('/createUsers',authController.createUsers)
router.post('/loginUser',authController.loginUser)
module.exports = router;
