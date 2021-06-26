const { sequelize } = require("../database/models");
let db = require("../database/models");
const op = db.Sequelize.Op;

const productsController = {
    index: function (req, res, next) {
        db.Producto.findAll({
            include: [
                { association: "producto_usuario" },

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
        db.Producto.findByPk(req.params.id, {
            include: [
                { association: 'producto_comentarios' }
            ]
        })
            .then((producto) => {
                db.Comentarios.findAll({
                    where: { producto_id: req.params.id },
                    include: [
                        { association: 'comentarios_usuario' },

                    ]
                })
                
                    .then((comentarios) => {
                        return res.render("products/detail", {
                            producto,
                            comentarios,
                        })

                    });
            });

    },
    add: function(req, res) {
        if (req.method === 'POST') {
          req.body.user_id = req.session.usuario.id;
          if (req.body.url) req.body.image = req.body.url;
          if (req.file) req.body.image = (req.file.destination + req.file.filename).replace('public', '');
          db.Producto.create(req.body)
        }
    
        if (req.method === 'GET') {
          res.render('products/add');
        }
      },
      delete: function(req, res, next) {
        db.Producto.destroy({ where: { id: req.params.id } })
          .then(() => {
            return res.redirect('/');
          })
          
      },
    edit: function(req, res, next) {
        db.Producto.findByPk(req.params.id);
        if (req.method === 'POST') {
          Producto.update(req.body)
            .then((producto) => {
              
              res.redirect( "/"+ producto.id + "/detail");
            })
            .catch((error) => {
              next(error);
            });
        }
    
        if (req.method === 'GET') {
            db.Producto.findByPk(req.params.id)
            .then((data)=>{
         return res.render('products/edit', {producto: data});
        })
          
        }
      },



  
}



module.exports = productsController;