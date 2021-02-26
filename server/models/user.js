'use strict';
const { Model } = require('sequelize');
const bcrypt = require("bcrypt-nodejs");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.TodoItem, {
        foreignKey: 'userId',
        as: 'todoItems',
      });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        set (value) {
          this.setDataValue('password', bcrypt.hashSync(value, bcrypt.genSaltSync(8), null))
        }
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
