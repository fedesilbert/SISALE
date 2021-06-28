let db = require("../database/models");
 
 
let op = db.Sequelize.Op;
 
let resultadoBusquedaController = {
   search: function (req, res) {
       let criteria = req.query.search
        db.Producto.findAll({
               where: { nombre: { [op.like]:'%'+criteria+'%'} },// si anda con fallas el op es .like
            })
            
            .then((data) => {
                return res.render('products/resultadoBusqueda', {
                    producto: data,
                }) 
                
            })
 
    },
}
 
module.exports = resultadoBusquedaController;
