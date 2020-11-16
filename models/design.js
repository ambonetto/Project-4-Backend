'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Design extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Design can have only one Order
      // Design has a one-to-many relationship with Order
      Design.belongsTo(models.Orders, {foreignKey: 'order_id'})
    }
  };
  Design.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    order_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Design',
  });
  return Design;
};