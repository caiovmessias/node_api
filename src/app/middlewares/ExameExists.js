const { Exame } = require('../models');

async function ExameExists(request, response, next) {
  const id = request.params.id !== undefined ? request.params.id : request.params.idExame;

  const exameExists = await Exame.findByPk(id);

  if(!exameExists || !exameExists.dataValues.status) {
    return response.status(404).json({ error: 'Exame not found' });
  }

  return next();
}

module.exports = ExameExists;