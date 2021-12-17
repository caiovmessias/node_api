const { Router } = require('express');

const laboratorioRoutes = require('./laboratorio.routes');
const exameRoutes = require('./exame.routes');

const router = Router();

router.use('/laboratorio', laboratorioRoutes);
router.use('/exame', exameRoutes);

module.exports = router;