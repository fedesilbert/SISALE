var express = require('express');
var router = express.Router();
var resultadoBusquedaController = require('../controllers/resultadoBusquedaController')
 
 
router.all('/resultadoBusqueda', resultadoBusquedaController.search);
 
 
module.exports = router;