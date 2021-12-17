const { Router } = require('express');
const LaboratorioController = require('../app/controllers/LaboratorioController');

const laboratorioRoutes = Router();

laboratorioRoutes.post('', LaboratorioController.store);
laboratorioRoutes.get('', LaboratorioController.index);

module.exports = laboratorioRoutes;