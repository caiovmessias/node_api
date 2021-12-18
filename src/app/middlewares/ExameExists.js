const { Exame } = require('../models');

async function ExameExists(request, response, next) {
  const { id } = request.params;

  const exameExists = await Exame.findByPk(id);

  if(!exameExists) {
    return response.status(404).json({ error: 'Exame not found' });
  }

  return next();
}

module.exports = ExameExists;