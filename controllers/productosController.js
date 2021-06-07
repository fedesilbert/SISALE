
let db = require("../database/models");

const productsController = {
    index: function (req, res) {
        db.producto.findAll()
        .then((data) => {
            return res.render('products/product', { 
                products: data 
            });
        })
        .catch((error) => {
            return res.send(error);
        })
    },
}
   

    
module.exports = productsController;