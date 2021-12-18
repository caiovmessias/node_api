const { Router } = require('express');

const laboratorioRoutes = require('./laboratorio.routes');
const exameRoutes = require('./exame.routes');
const laboratorioExameRoutes = require('./laboratorioExame.routes');

const router = Router();

router.use('/laboratorio', laboratorioRoutes);
router.use('/exame', exameRoutes);
router.use('/', laboratorioExameRoutes);

module.exports = router;