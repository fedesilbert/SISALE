const express = require('express');

const router = express.Router();

const securityController = require('../controllers/securityController');

router.get('/login', securityController.login);
router.post('/login', securityController.authenticate);
router.get('/register',securityController.register)
router.post('/register',securityController.register)
router.get('/logout', securityController.logout);
router.all('/', securityController.headerL)

module.exports = router;