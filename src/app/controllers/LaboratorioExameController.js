const { LaboratorioExame, Laboratorio } = require('../models');

class LaboratorioExameController {
  async associar(request, response) {
    try {
      const { idLaboratorio, idExame } = request.params;

      const laboratorioExame = await LaboratorioExame.create({ idLaboratorio, idExame });
  
      return response.status(201).json(laboratorioExame);
    } catch (error) {
      return response.status(400).json({ error: error });
    }
  }

  async desassociar(request, response) {
    try {
      const { associacao } = request;

      await associacao.destroy();

      return response.status(200).send();
    } catch (error) {
      return response.status(400).json({ error: error });
    }

  }

  async exames(request, response) {
    try {
      const { id } = request.exame.dataValues;

      const exames = await LaboratorioExame.findAll({
        attributes: { 
          exclude: [ 'id', 'idLaboratorio', 'idExame', 'createdAt', 'updatedAt' ]
        },
        where: {
          idExame: id
        },
        include: [ Laboratorio ]
      });

      return response.status(200).json(exames);
    } catch (error) {
      return response.status(400).json({ error: error });
    }
  }
}

module.exports = new LaboratorioExameController();