const { Laboratorio } = require('../models');

async function LaboratorioExists(request, response, next) {
  const id = request.params.id !== undefined ? request.params.id : request.params.idLaboratorio;

  const laboratorioExists = await Laboratorio.findByPk(id);

  if(!laboratorioExists || !laboratorioExists.dataValues.status) {
    return response.status(404).json({ error: 'Laboratorio not found' });
  }

  return next();
}

module.exports = LaboratorioExists;