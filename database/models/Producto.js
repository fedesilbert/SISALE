module.exports = (sequelize, DataTypes) => {
    let alias = 'producto';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        nombre: {
            type: DataTypes.STRING
        },
        imagen: {
            type: DataTypes.STRING
        },
        usuario_id: {
            type: DataTypes.INTEGER
        }, 
    }

    let config = {
        tableName: 'producto',
        underscored: true
    }

    const producto = sequelize.define(alias, cols, config);

    return producto;
}