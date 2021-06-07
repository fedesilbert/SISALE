module.exports = (sequelize, DataTypes) => {
    let alias = 'comentarios';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        producto_id: {
            type: DataTypes.INTEGER
        },
       user_id: {
            type: DataTypes.INTEGER
        },
       comentario: {
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
        tableName: 'comentarios',
        underscored: true
    }

    const comentarios = sequelize.define(alias, cols, config);

    return comentarios;
}