'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class laboratorios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.laboratoriosExames, {
        through: 'laboratoriosExames',
        foreignKey: 'idLaboratorio'
      });
    }
  };
  laboratorios.init({
    nome: DataTypes.STRING,
    endereco: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'laboratorios',
  });
  return laboratorios;
};