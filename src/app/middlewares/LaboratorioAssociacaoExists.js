const { LaboratorioExame } = require('../models');

async function LaboratorioAssociacaoExists(request, response, next) {
  const id = request.params.id;

  const laboratorios = await LaboratorioExame.findAll({
    where: {
      idLaboratorio: id
    }
  });

  if(laboratorios.length > 0) {
    return response.status(404).json({ error: 'Laboratorio associado a um exame' });
  }

  return next();
}

module.exports = LaboratorioAssociacaoExists;