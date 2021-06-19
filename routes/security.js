const express = require('express');

const router = express.Router();

const securityController = require('../controllers/securityController');

router.get('/login', securityController.login);
router.all('/logout', securityController.logout);
router.get('/register', securityController.register);

module.exports = router;