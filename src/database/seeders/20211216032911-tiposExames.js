'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tiposExames', [
      {
        tipo: 'Análise clinica',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tipo: 'Imagem',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tiposExames', null, {});
  }
};
