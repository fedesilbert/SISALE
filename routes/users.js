var express = require('express');
var router = express.Router();

router.get('/profile', (req, res) => {
    res.render('default');
});
router.get('/:id', (req, res) => {
    res.render('default');
});


module.exports = router;
