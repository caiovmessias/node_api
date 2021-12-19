const { Exame, TipoExame } = require('../models');

class ExameController {
  async store(request, response) {
    const { nome, tipo } = request.body;

    const exame = await Exame.create({ nome, tipo });

    return response.status(201).json(exame);
  }

  async index(request, response) {
    const exames = await Exame.findAll({
      where: {
        status: true
      },
      include: [ TipoExame ]
    });

    return response.status(200).json(exames);
  }

  async update(request, response) {
    const { id } = request.params;
    const { nome, tipo } = request.body;

    await Exame.update({ nome, tipo }, {
      where: {
        id: id
      }
    });

    const exameAtualizado = await Exame.findByPk(id);

    return response.status(200).json(exameAtualizado);
  }

  async delete(request, response) {
    const { id } = request.params;

    await Exame.update({ status: false }, {
      where: {
        id: id
      }
    });

    return response.status(200).send();
  }
}

module.exports = new ExameController();