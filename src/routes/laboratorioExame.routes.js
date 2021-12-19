const { Router } = require('express');

const LaboratorioExists = require('../app/middlewares/LaboratorioExists');
const ExameExists = require('../app/middlewares/ExameExists');
const AssociacaoExists = require('../app/middlewares/AssociacaoExists');
const NomeExameExists = require('../app/middlewares/NomeExameExists');

const LaboratorioExameController = require('../app/controllers/LaboratorioExameController');

const laboratorioExameRoutes = Router();

laboratorioExameRoutes.post('/associar/:idExame/:idLaboratorio', LaboratorioExists, ExameExists, LaboratorioExameController.associar);
laboratorioExameRoutes.delete('/desassociar/:idExame/:idLaboratorio', AssociacaoExists, LaboratorioExameController.desassociar);
laboratorioExameRoutes.get('/laboratorios/exames', NomeExameExists, LaboratorioExameController.exames);

module.exports = laboratorioExameRoutes;