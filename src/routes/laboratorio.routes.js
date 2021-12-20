const { Router } = require('express');
const LaboratorioExists = require('../app/middlewares/LaboratorioExists');
const LaboratorioAssociacaoExists = require('../app/middlewares/LaboratorioAssociacaoExists');
const LaboratorioController = require('../app/controllers/LaboratorioController');

const laboratorioRoutes = Router();

laboratorioRoutes.post('/', LaboratorioController.store);
laboratorioRoutes.get('/', LaboratorioController.index);
laboratorioRoutes.put('/:id', LaboratorioExists, LaboratorioController.update);
laboratorioRoutes.delete('/:id', LaboratorioExists, LaboratorioAssociacaoExists, LaboratorioController.delete);

module.exports = laboratorioRoutes;