const { Laboratorio } = require('../models');

class LaboratorioController {
  async store(request, response) {
    try {
      const { nome, endereco } = request.body;
      const status = true;

      const laboratorio = await Laboratorio.create({ nome, endereco, status });
      return response.status(201).json(laboratorio);
      
    } catch (error) {
      return response.status(400).json({ error: 'Informe os campos nome e endereco' });
    }
  }

  async index(request, response) {
    try {
      const laboratorios = await Laboratorio.findAll({
        where: {
          status: true
        },
        order: [ 
          [ 'id', 'ASC' ]
         ]
      });
  
      return response.status(200).json(laboratorios);

    } catch (error) {
      return response.status(400).json({ error: error });
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params;
      const { nome, endereco } = request.body;

      await Laboratorio.update({ nome, endereco }, {
        where: {
          id: id
        }
      });

      const laboratorioAtualizado = await Laboratorio.findByPk(id);

      return response.status(200).json(laboratorioAtualizado);

    } catch (error) {
      return response.status(400).json({ error: error });
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;

      await Laboratorio.update({ status: false }, {
        where: {
          id: id
        }
      });

      return response.status(200).send();

    } catch (error) {
      return response.status(400).json({ error: error });
    }
  }
}

module.exports = new LaboratorioController();