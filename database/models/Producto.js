module.exports = (sequelize, DataTypes) => {
    let alias = 'Producto';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.STRING
        },
        descripcion: {
            type: DataTypes.INTEGER
        },
        imagen: {
            type: DataTypes.STRING
        },
        usuario_id: {
            type: DataTypes.INTEGER
        },
        fecha_creacion: {
            type: DataTypes.DATE
        },
        created_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
    }

    let config = {
        tableName: 'producto',
        underscored: true,

    }

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function (models) {
        Producto.belongsTo(models.Usuario, {
            as: "producto_usuario",
            foreignKey: "usuario_id"
        })

        Producto.hasMany(models.Comentarios, {
            as: 'producto_comentarios',
            foreignKey: 'producto_id',
        });
    }


return Producto;    
}