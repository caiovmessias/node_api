const { Laboratorio } = require('../models');

async function LaboratorioExists(request, response, next) {
  const { id } = request.params;

  const laboratorioExists = await Laboratorio.findByPk(id);

  if(!laboratorioExists) {
    return response.status(404).json({ error: 'Laboratorio not found' });
  }

  return next();
}

module.exports = LaboratorioExists;