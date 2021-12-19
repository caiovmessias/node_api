const { LaboratorioExame } = require('../models');

async function AssociacaoExists(request, response, next) {
  const { idExame, idLaboratorio } = request.params;

  const associacaoExists = await LaboratorioExame.findOne({
    where: {
      idExame, 
      idLaboratorio
    }
  });

  if(!associacaoExists) {
    return response.status(404).json({ error: 'Associação not found' });
  }

  request.associacao = associacaoExists;

  return next();
}

module.exports = AssociacaoExists;