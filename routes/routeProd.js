var express = require('express');
var router = express.Router();
const multer = require('multer');
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "./public/images/products");
    },
    filename: (req, file, cb)=>{
         
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname) )
    }
});
const upload = multer({storage: storage})


let productController= require('../controllers/productosController');



router.all('/add', upload.single('imagen'), productController.add);
router.get('/', productController.index)
router.get('/:id/detail', productController.detail);
router.all('/:id/delete', productController.delete);
router.all('/:id/edit', productController.edit);





module.exports = router;