'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LaboratorioExame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Laboratorio, {
        foreignKey: 'idLaboratorio',
        onDelete: 'CASCADE',
      });

      this.belongsTo(models.Exame, {
        foreignKey: 'idExame',
        onDelete: 'CASCADE',
      });
    }
  };
  LaboratorioExame.init({
    idLaboratorio: DataTypes.INTEGER,
    idExame: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'LaboratorioExame',
    tableName: 'laboratoriosExames'
  });
  return LaboratorioExame;
};