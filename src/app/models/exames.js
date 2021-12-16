'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class exames extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.tiposExames, {
        foreignKey: 'tipo', 
        as: 'tiposExames'
      });
      this.belongsToMany(models.laboratoriosExames, {
        through: 'laboratoriosExames',
        foreignKey: 'idExame'
      });
    }
  };
  exames.init({
    nome: DataTypes.STRING,
    tipo: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'exames',
  });
  return exames;
};