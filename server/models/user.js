'use strict';
const {
  Model
} = require('sequelize');
//const { router } = require('../app');


module.exports = (sequelize, DataTypes) => {
  class user extends Model {
   
    
  };

  user.init({
    id_user: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
  },
    document: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lastname: {
      allowNull: false,
      type: DataTypes.STRING
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    id_rol: {
      allowNull: false,
      type: DataTypes.INTEGER,
      FOREIGNKEYS: true
    },
    status: {
      allowNull: false,
      defaultValue: 1,
      type: DataTypes.CHAR
  },
    register_date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    id_company: {
      allowNull: false,
      type: DataTypes.INTEGER,
    }
  }, {
    
    sequelize,
    modelName: 'user',
  });
  return user;
};