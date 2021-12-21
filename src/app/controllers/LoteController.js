const { Exame, TipoExame } = require('../models');
const { Readable } = require('stream');
const readline = require('readline');

class LoteController {
  async store(request, response) {
    try {
      const { file } = request;
      const { buffer } = file;

      const readableFile = new Readable();
      readableFile.push(buffer);
      readableFile.push(null);
      
      const linhaExame = readline.createInterface({
        input: readableFile
      });

      const exames = [];

      for await(let linha of linhaExame) {
        const split = linha.split(',');

        const exame = await Exame.create({
          nome: split[0],
          tipo: split[1],
          status: true,
        });
        
        exames.push(exame);
      }

      return response.status(201).json(exames);
    } catch (error) {
      return response.status(400).json({ error: 'Erro na leitura do arquivo. Os valores devem ser informados no seguinte padrão: { Nome exame, tipo }' });
    }

  }

  async update(request, response) {
    try {
      const { file } = request;
      const { buffer } = file;

      const readableFile = new Readable();
      readableFile.push(buffer);
      readableFile.push(null);
      
      const linhaExame = readline.createInterface({
        input: readableFile
      });

      const exames = [];

      for await(let linha of linhaExame) {
        const split = linha.split(',');
        
        await Exame.update({
          nome: split[1],
          tipo: split[2]
        },
        {
          where: {
            id: split[0]
          }
        });
        
        const exameAtualizado = await Exame.findByPk(split[0],{
          attributes: {
            exclude: [ 'tipo' ]
          },
          include: [ TipoExame ]
        });

        exames.push(exameAtualizado);
      }

      return response.status(200).json(exames);
    } catch (error) {
      return response.status(400).json({ error: 'Erro na leitura do arquivo. Os valores devem ser informados no seguinte padrão: { Id, Nome exame, tipo }' });
    }
  }

  async delete(request, response) {
    try {
      const { file } = request;
      const { buffer } = file;

      const readableFile = new Readable();
      readableFile.push(buffer);
      readableFile.push(null);
      
      const linhaExame = readline.createInterface({
        input: readableFile
      });

      for await(let linha of linhaExame) {
        const split = linha.split(',');

        await Exame.update({
          status: false
        },
        {
          where: {
            id: split[0]
          }
        });
      }

      return response.status(200).send();
    } catch (error) {
      return response.status(400).json({ error: 'Erro na leitura do arquivo. Os valores devem ser informados no seguinte padrão: { Id }' });
    }
  }
}

module.exports = new LoteController();