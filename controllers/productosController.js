const { sequelize } = require("../database/models");
let db = require("../database/models");
const op = db.Sequelize.Op;



//Novedades: mostrará los últimos productos agregados de forma descendente. El último producto agregado debe verse en primer lugar.


const productsController = {
    index: function (req, res, next) {
        db.Producto.findAll({
            include: [
                { association: "producto_usuario"},

            ],
            order: [
                ["fecha_creacion", "DESC"]
            ]
        })
            .then((data) => {
                return res.render('products/product', {
                    productos: data
                });

            })
            .catch((error) => {
                return next(error)
            });
    },






    detail: function (req, res) {
        db.Producto.findByPk(req.params.id, { include: [
            { association: 'producto_comentarios' }
        ] 
        })
            .then((producto) => {
                db.Comentarios.findAll( {include: [
                    { association: 'comentarios_usuario' },
                    { association: 'comentarios_producto' }
                ] 
                })
                    .then((comentarios) => {
                        return res.render("products/detail", {
                            producto,
                            comentarios,
                        })

                    });
            });
            
    }
}



module.exports = productsController;