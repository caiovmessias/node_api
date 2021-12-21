const { Exame } = require('../models');

async function NomeExameExists(request, response, next) {
  const { nome } = request.headers;

  const exameExists = await Exame.findOne({
    where: {
      nome
    }
  });

  if(!exameExists || !exameExists.dataValues.status) {
    return response.status(404).json({ error: 'Exame not found' });
  }

  request.exame = exameExists;

  return next();
}

module.exports = NomeExameExists;