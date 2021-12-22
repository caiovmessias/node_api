const { LaboratorioExame } = require('../models');

async function LaboratorioAssociacaoExists(request, response, next) {
  const id = request.params.id;

  const exames = await LaboratorioExame.findAll({
    where: {
      idExame: id
    }
  });

  if(exames.length > 0) {
    return response.status(404).json({ error: 'Exame associado a um laboratório' });
  }

  return next();
}

module.exports = LaboratorioAssociacaoExists;