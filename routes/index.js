var express = require('express');
var router = express.Router();
var productController = require('../controllers/productosController');

router.get('/', productController.index);



module.exports = router;
