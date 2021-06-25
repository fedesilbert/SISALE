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


  const Comentarios = sequelize.define('Comentarios', cols, { underscored: true });

  Comentarios.associate = (models) => {
    Comentarios.belongsTo(models.Producto, {
      as: 'comentarios_producto',
      foreignKey: 'producto_id',
    })
    Comentarios.belongsTo(models.Usuario, {
      as: 'comentarios_usuario',
      foreignKey: 'user_id',
    });
  
  }


  return Comentarios;
}