const { Router } = require('express');
const LaboratorioExists = require('../app/middlewares/LaboratorioExists');
const LaboratorioController = require('../app/controllers/LaboratorioController');

const laboratorioRoutes = Router();

laboratorioRoutes.post('/', LaboratorioController.store);
laboratorioRoutes.get('/', LaboratorioController.index);
laboratorioRoutes.put('/:id', LaboratorioExists, LaboratorioController.update);
laboratorioRoutes.delete('/:id', LaboratorioExists, LaboratorioController.delete);

module.exports = laboratorioRoutes;