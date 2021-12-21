'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.TipoExame, {
        foreignKey: 'tipo', 
        onDelete: 'CASCADE',
      });
      this.belongsToMany(models.LaboratorioExame, {
        through: 'laboratoriosExames',
        foreignKey: 'idExame',
        onDelete: 'CASCADE',
      });
    }
  };
  Exame.init({
    nome: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo:{ 
      type: DataTypes.INTEGER,
      allowNull: false
    }, 
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Exame',
    tableName: 'exames'
  });
  return Exame;
};