'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class laboratoriosExames extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.laboratorios, {
      //   foreignKey: 'idLaboratorio',
      //   onDelete: 'CASCADE',
      // });

      // this.belongsTo(models.exames, {
      //   foreignKey: 'idExame',
      //   onDelete: 'CASCADE',
      // });
    }
  };
  laboratoriosExames.init({
    idLaboratorio: DataTypes.INTEGER,
    idExame: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'laboratoriosExames',
  });
  return laboratoriosExames;
};