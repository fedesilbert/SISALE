var express = require('express');
var router = express.Router();
const multer = require('multer');


let productController= require('../controllers/productosController');

const upload = multer({ dest: 'public/images/' });

router.get('/', productController.index)
router.get('/:id/detail', productController.detail);
router.all('/add', productController.add);
router.all('/:id/delete', productController.delete);
router.all('/:id/edit', productController.edit);
router.all('/', productController.comment);




module.exports = router;