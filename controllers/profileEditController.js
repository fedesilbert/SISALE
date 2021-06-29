const { sequelize } = require("../database/models");
let db = require("../database/models");
const op = db.Sequelize.Op;
 
let profileEditController =  {
    update: function(req, res) {
 
        let usuarios = db.Usuario.update(req.body)
 
        if(req.method == 'POST') {
             usuarios = {
                nombre: req.usuarios.nombreusuario,
                telefono: req.usuarios.telefono,
                fecha_nacimiento: req.usuarios.fecha_nacimiento,
                image: file.filename   
            }
 
 
 
            db.Usuario.update(usuarios, {
              
                where: {id: req.session.user.id}
 
            })
            .then(() =>{
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