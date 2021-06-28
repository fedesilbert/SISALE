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
                    ],
                    order:[
                        ["fecha_comentario", "DESC"]
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
    add: async (req, res)=> {
        if (req.method === 'POST') {
     let informacion = req.body;
     await db.Producto.create({
         usuario_id: req.session.user.id,
         imagen: req.file.filename,
         nombre: informacion.nombre,
         fecha_creacion: new Date().getTime(),
         descripcion: informacion.descripcion,
     })}
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
        db.Producto.update(req.body,{
            where:{
                id: req.params.id   
            }
        })
            .then((data) => {
              
               return res.redirect( "/"+ req.params.id + "/detail");
           })
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