var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController')

router.all('/:id/profile', usersController.index)

module.exports = router;