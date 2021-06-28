let db = require("../database/models");
 
 
let op = db.Sequelize.Op;
 
let profileEditController = {
    update: function(req, res) {
 
        let usuarios = db.Usuario.update(req.body)
 
        if(req.method == 'POST') {
             usuarios = {
                nombre: req.usuario.nombreusuario,
                telefono: req.usuario.telefono,
                fecha_nacimiento: req.usuario.fecha_nacimiento,   
            }
 
 
 
            db.Usuario.update(usuarios, {
              
                where: {id: req.session.user.id}
 
            })
            .then((user_id) =>{
                db.Usuario.findByPk(req.session.usuario.id)
                .then(user =>{
                    req.session.usuario = user
                    res.redirect('/profile-edit')
                })
            })
           
        }
        if(req.method == 'GET'){
            db.Usuario.findByPk(req.params.id)
            .then((data) => {
                return res.render('seguridad/profile-edit', { 
                    users: data,
                });
            })
        }
   }
}
module.exports = profileEditController
