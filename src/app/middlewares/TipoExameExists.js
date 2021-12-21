const { TipoExame } = require('../models');

async function TipoExameExists(request, response, next) {
  const { tipo } = request.body;

  if(tipo) {
    const tipoExameExists = await TipoExame.findByPk(tipo);

    if(!tipoExameExists) {
      return response.status(406).json({ error: 'Tipo Exame not found' });
    }
  }

  return next();
}

module.exports = TipoExameExists;