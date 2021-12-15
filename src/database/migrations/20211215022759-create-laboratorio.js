'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('laboratorio', { 
      id:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
      },
      nome:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      endereco:{
       type: Sequelize.STRING,
       allowNull: false,
      },
      status:{
       type: Sequelize.BOOLEAN,
       allowNull: false,
       default: true,
      },
      createdAt:{
       type: Sequelize.DATE,
       allowNull: false
      },
      updatedAt:{
       type: Sequelize.DATE,
       allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('laboratorio');
  }
};