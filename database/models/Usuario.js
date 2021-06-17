module.exports = (sequelize, DataTypes) => {
    let alias = 'Usuario';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombreusuario: {
            type: DataTypes.STRING
        },
        contraseña: {
            type: DataTypes.STRING
        },
        fecha_nacimiento: {
            type: DataTypes.DATE
        }, 
        telefono: {
            type: DataTypes.STRING
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
    }

    let config = {
        tableName: 'usuario',
        underscored: true
    }

    const Usuario = sequelize.define(alias, cols, config);
    Usuario.associate = function(models){
        Usuario.hasMany(models.Producto,{
            as: "producto",
           
        })
    }


    return Usuario;
}