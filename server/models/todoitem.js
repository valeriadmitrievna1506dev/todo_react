'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TodoItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TodoItem.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
      });
    }
  }
  TodoItem.init(
    {
      text: DataTypes.STRING,
      done: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'TodoItem',
    }
  );
  return TodoItem;
};
