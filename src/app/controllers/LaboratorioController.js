const { Laboratorio } = require('../models');

class LaboratorioController {
  async store(request, response) {
    const { nome, endereco } = request.body;

    const laboratorio = await Laboratorio.create({ nome, endereco });
    return response.status(201).json(laboratorio);
  }

  async index(request, response) {
    const laboratorios = await Laboratorio.findAll({
      where: {
        status: true
      }
    });

    return response.status(200).json(laboratorios);
  }

  async update(request, response) {
    const { id } = request.params;
    const { nome, endereco } = request.body;

    await Laboratorio.update({ nome, endereco }, {
      where: {
        id: id
      }
    });

    const laboratorioAtualizado = await Laboratorio.findByPk(id);

    return response.status(200).json(laboratorioAtualizado);
  }

  async delete(request, response) {
    const { id } = request.params;

    await Laboratorio.update({ status: false }, {
      where: {
        id: id
      }
    });

    return response.status(200).send();
  }
}

module.exports = new LaboratorioController();