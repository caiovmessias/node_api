const { Router } = require('express');

const multer = require('multer');

const multerConfig = multer();

const LoteController = require('../app/controllers/LoteController');

const loteRoutes = Router();

loteRoutes.post('', multerConfig.single('file'), LoteController.store);
loteRoutes.put('', multerConfig.single('file'), LoteController.update);
loteRoutes.delete('', multerConfig.single('file'), LoteController.delete);

module.exports = loteRoutes;