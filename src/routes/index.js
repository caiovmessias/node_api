const { Router } = require('express');

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../docs/swagger/swagger.json');

const laboratorioRoutes = require('./laboratorio.routes');
const exameRoutes = require('./exame.routes');
const laboratorioExameRoutes = require('./laboratorioExame.routes');

const router = Router();

router.use('/laboratorio', laboratorioRoutes);
router.use('/exame', exameRoutes);
router.use('/', laboratorioExameRoutes);
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = router;