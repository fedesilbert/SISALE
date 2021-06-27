const bcrypt = require('bcryptjs');
let db = require("../database/models");
const Usuario = require('../database/models/Usuario');

let securityController = {
    login: function (req, res) {
        return res.render('seguridad/login', {
            failed: req.query.failed
        });
    },

    authenticate: function (req, res) {
        db.Usuario.findOne({ where: { email: req.body.email } })
        .then((user) => {
            if (bcrypt.compareSync(req.body.contrasenia, user.contrasenia)) {
                req.session.user = user;
                if(req.body.rememberme) {
                    res.cookie('userId', user.id, { maxAge: 1000 * 60 * 60 * 24}) 
                }   
               res.redirect('/')
            }
            else res.redirect('/login?failed=1'); 
        })
        .catch((error) => {
            res.redirect('/login?failed=1');
        })
    },
    register: function (req, res) {
        if (req.method == 'POST') {
            req.body.contrasenia = bcrypt.hashSync(req.body.contrasenia);
            db.Usuario.create(req.body)
            .then((user) => {   
               
                return res.redirect('/')
            })
            .catch((error) => {
                return res.send(error);
            })
        }

        if (req.method == 'GET') {
            return res.render('seguridad/register');
        }
    },
    logout: function(req, res){
        req.session.destroy();
        res.clearCookie('userId');

        return res.redirect('/');
    }, 
    headerL: function (req, res){
        db.Usuario.findAll()
        .then ((data) => {
            return res.render("partials/header",{
             usuario: data   
            })

        }
        )
    }
}

module.exports = securityController;