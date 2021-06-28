let express = require('express');
 
let router = express.Router();
 
let profileEditController = require('../controllers/profileEditController');
 
 
router.all('/:id/profile-edit', profileEditController.update);
 
 
module.exports = router;
