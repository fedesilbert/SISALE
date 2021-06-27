let db = require("../database/models");

const usersController = {
    index: function (req, res) {
        db.Usuario.findByPk(req.params.id)
        .then((data) => {
            return res.render('seguridad/profile', { 
                users: data,
            });
        })
        .catch((error) => {
            return res.send(error);
        })
    },
 
}


module.exports = usersController;