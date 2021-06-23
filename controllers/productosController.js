let db = require("../database/models");

const op = db.Sequelize.Op;
//Novedades: mostrará los últimos productos agregados de forma descendente. El último producto agregado debe verse en primer lugar.


const productsController = {
    index: function (req, res) {
        db.Producto.findAll({
            include:[ 
               { association: "comentarios"} 
            ],
            order: [
                ["created_at", "DESC"]
            ]
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
    async show(req, res) {
        const product = await db.Producto.findByPk(req.params.id, { include: [{ association: 'usuario' }] });
        const comments = await db.Comentarios.findAll(
          { where: { producto_id: req.params.id }, include: [{ association: 'usuario' }] },
        );
    
        res.render('products/show', {
          product,
          comments,
        });
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