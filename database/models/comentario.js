module.exports = (sequelize, DataTypes) => {
    let alias = 'user';

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
        tableName: 'user',
        underscored: true
    }

    const user = sequelize.define(alias, cols, config);

    return user;
}