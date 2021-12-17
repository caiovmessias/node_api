const { Laboratorio } = require('../models');

class LaboratorioController {
  async store(request, response) {
    const { nome, endereco } = request.body;

    const laboratorio = await Laboratorio.create({ nome, endereco });
    return response.status(201).json(laboratorio);
  }

  async index(request, response) {
    const laboratorios = await Laboratorio.findAll();

    return response.status(200).json(laboratorios);
  }
}

module.exports = new LaboratorioController();