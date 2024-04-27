'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vehicles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vehicles.belongsTo(models.Passergers, { foreignKey: "passergerId" });
      Vehicles.hasMany(models.Seats, { foreignKey: "vehicleId" });
    }
  }
  Vehicles.init({
    name: DataTypes.STRING,
    passergerId: DataTypes.INTEGER,
   
  }, {
    sequelize,
    modelName: 'Vehicles',
  });
  return Vehicles;
};