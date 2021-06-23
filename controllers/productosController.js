let db = require("../database/models");

const op = db.Sequelize.Op;

const productsController = {
    index: function (req, res) {
        db.Producto.findAll({
            include: [
              { association: 'comentarios' },
            ],
          })
        .then((data) => {
            return res.render('products/product', { 
                productos: data 
            });
        })
        .catch((error) => {
            return res.send(error);
        })
    },
    

    detail: function(req,res){
        db.Producto.findByPk(req.params.id)
        .then((data)=>{
            return res.render("products/detail",{
                producto: data
            }); 
            
        })
        .catch((error) => {
            return res.send(error);
        }); 
    },
}
   

    
module.exports = productsController;