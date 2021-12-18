const { Router } = require('express');

const ExameController = require('../app/controllers/ExameController');
const TipoExameExists = require('../app/middlewares/TipoExameExists');
const ExameExists = require('../app/middlewares/ExameExists');

const exameRoutes = Router();

exameRoutes.get('/', ExameController.index);
exameRoutes.post('/', TipoExameExists, ExameController.store);
exameRoutes.put('/:id', TipoExameExists, ExameExists, ExameController.update);
exameRoutes.delete('/:id', ExameExists, ExameController.delete);

module.exports = exameRoutes;