const { LaboratorioExame, Laboratorio } = require('../models');

class LaboratorioExameController {
  async associar(request, response) {
    const { idLaboratorio, idExame } = request.params;

    const laboratorioExame = await LaboratorioExame.create({ idLaboratorio, idExame });

    return response.status(201).json(laboratorioExame);
  }

  async desassociar(request, response) {
    const { associacao } = request;

    await associacao.destroy();

    return response.status(200).send();
  }

  async exames(request, response) {
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
  }
}

module.exports = new LaboratorioExameController();