const { Router } = require('express');

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../docs/swagger/swagger.json');

const laboratorioRoutes = require('./laboratorio.routes');
const exameRoutes = require('./exame.routes');
const laboratorioExameRoutes = require('./laboratorioExame.routes');
const loteRoutes = require('./lote.routes');

const router = Router();

router.get('/', (request, response) => {
  const dados = {
    Desenvolvido_Por: 'Caio Messias',
    Email: 'caiov.messias@icloud.com',
    Linkedin: 'https://www.linkedin.com/in/caiomessias',
    URL_Repositorio: 'https://github.com/caiovmessias/node_api',
    Documentacao_Endpoints: '/docs'
  };

  return response.status(200).json(dados);
})

router.use('/laboratorio', laboratorioRoutes);
router.use('/exame', exameRoutes);
router.use('/', laboratorioExameRoutes);
router.use('/lote/exame', loteRoutes);
router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = router;