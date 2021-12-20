const { Exame, TipoExame } = require('../models');

class ExameController {
  async store(request, response) {
    try {
      const { nome, tipo } = request.body;
      const status = true;

      const exame = await Exame.create({ nome, tipo, status });

      return response.status(201).json(exame);
    } catch (error) {
      return response.status(400).json({ error: 'Informe os campos nome e tipo' });
    }

  }

  async index(request, response) {
    try {
      const exames = await Exame.findAll({
        attributes: {
          exclude: [ 'tipo' ]
        },
        where: {
          status: true
        },
        include: [ TipoExame ]
      });
  
      return response.status(200).json(exames);
    } catch (error) {
      return response.status(400).json({ error: error });
    }
  }

  async update(request, response) {
    try {
      const { id } = request.params;
      const { nome, tipo } = request.body;

      await Exame.update({ nome, tipo }, {
        where: {
          id: id
        }
      });

      const exameAtualizado = await Exame.findByPk(id,{
        attributes: {
          exclude: [ 'tipo' ]
        },
        include: [ TipoExame ]
      });

      return response.status(200).json(exameAtualizado);
    } catch (error) {
      return response.status(400).json({ error: error });
    }
  }

  async delete(request, response) {
    try {
      const { id } = request.params;

      await Exame.update({ status: false }, {
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

module.exports = new ExameController();