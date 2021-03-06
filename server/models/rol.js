'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      rol.belongsTo(models.user,
        {
            as: 'user',
            foreignKey: 'id_usuario',
        }
    );

    }
  };
  rol.init({
    id_rol: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
  },
    nombre: {
      allowNull: false,
      type: DataTypes.STRING
    },
    register_date: {
      allowNull: false,
      type: DataTypes.DATE
    },
  }, {
    sequelize,
    modelName: 'rol',
  });
  return rol;
};