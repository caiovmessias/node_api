'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoExame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Exame, {
        foreignKey: 'tipo', 
        onDelete: 'CASCADE',
      });
    }
  };
  TipoExame.init({
    tipo: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TipoExame',
    tableName: 'tiposExames'
  });
  return TipoExame;
};