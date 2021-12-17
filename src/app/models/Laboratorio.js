'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Laboratorio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.LaboratorioExame, {
        through: 'laboratoriosExames',
        foreignKey: 'idLaboratorio',
        onDelete: 'CASCADE',
      });
    }
  };
  Laboratorio.init({
    nome: DataTypes.STRING,
    endereco: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Laboratorio',
    tableName: 'laboratorios'
  });
  return Laboratorio;
};