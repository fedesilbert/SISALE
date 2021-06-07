
let db = require("../database/models");

const productsController = {
    index: function (req, res) {
        db.Producto.findAll()
        .then((data) => {
            return res.render('products/product', { 
                producto: data 
            });
        })
        .catch((error) => {
            return res.send(error);
        })
    },
}
   

    
module.exports = productsController;