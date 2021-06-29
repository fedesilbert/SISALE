let express = require('express');
 
let router = express.Router();
 
let profileEditController = require('../controllers/profileEditController');
 
let multer = require('multer');
 
let path = require('path');
 
 
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null,'./public/images/users')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname) )
    },
 
})
 
let upload = multer({ storage: storage})
 
 
 
 
router.get('/:id/profile-edit', profileEditController.update);
router.post('/:id/profile-edit', upload.single('image'), profileEditController.update)
 
 
module.exports = router;
