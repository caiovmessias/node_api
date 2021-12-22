const request = require('supertest');

const app = require('../../src/index');
const { Laboratorio } = require('../../src/app/models');

describe('Cadastro de laboratorio', () => {
  it('Deve ser possível cadastrar um laboratório informando corretamente os campos', async () => {
    const response = await request(app)
      .post('/laboratorio')
      .send({
        nome: 'Laboratorio Teste',
        endereco: 'Rua das amoras, 5000', 
      });

    expect(response.status).toBe(201);
    
    expect(response.body).toMatchObject({
      nome: 'Laboratorio Teste',
      endereco: 'Rua das amoras, 5000', 
      status: true
    });
  });

  it('Não deve ser possível cadastrar um laboratório caso não informe o campo endereco', async () => {
    const response = await request(app)
      .post('/laboratorio')
      .send({
        nome: 'Laboratorio Teste'
      });

    expect(response.status).toBe(400);
    
    expect(response.body).toMatchObject({
      error: 'Informe os campos nome e endereco'
    });
  });

  it('Não deve ser possível cadastrar um laboratório caso não informe o campo nome', async () => {
    const response = await request(app)
      .post('/laboratorio')
      .send({
        endereco: 'Rua das amoras, 5000'
      });

    expect(response.status).toBe(400);
    
    expect(response.body).toMatchObject({
      error: 'Informe os campos nome e endereco'
    });
  });
});

describe('Atualização de laboratorio', () => {
  it('Deve ser possível atualizar um laboratório informando corretamente os campos', async () => {
    const response = await request(app)
      .put('/laboratorio/1')
      .send({
        nome: 'Laboratorio Atualizado'
      });

    expect(response.status).toBe(200);
    
    expect(response.body).toMatchObject({
      id: 1,
      nome: 'Laboratorio Atualizado'
    });

    const response2 = await request(app)
      .put('/laboratorio/1')
      .send({
        endereco: 'Endereco Atualizado, 10'
      });

    expect(response2.status).toBe(200);
    
    expect(response2.body).toMatchObject({
      id: 1,
      endereco: 'Endereco Atualizado, 10'
    });
  });

  it('Não deve ser possível atualizar um laboratório que não exista', async () => {
    const response = await request(app)
      .put('/laboratorio/10')
      .send({
        nome: 'Laboratorio Atualizado'
      });

    expect(response.status).toBe(404);
    
    expect(response.body).toMatchObject({
      error: 'Laboratorio not found'
    });
  });
});

describe('Busca de laboratorio', () => {
  it('Deve ser possível retornar todos os laboratórios ativos', async () => {
    const laboratorios = await Laboratorio.findAll({
      where: {
        status: true
      },
      order: [ 
        [ 'id', 'ASC' ]
       ]
    });

    const response = await request(app)
    .get('/laboratorio');

    expect(response.status).toBe(200);

    expect(response.body.length).toBe(laboratorios.length);
  });
});

describe('Remoção de laboratorio', () => {
  it('Deve ser possível remover um laboratório logicamente', async () => {
    const responseCreate = await request(app)
      .post('/laboratorio')
      .send({
        nome: 'Laboratorio Teste',
        endereco: 'Rua das amoras, 5000', 
      });

    const id = responseCreate.body.id;

    const responseGet = await request(app)
    .get('/laboratorio');

    const quantidadeRegistros = responseGet.body.length;

    const responseDelete = await request(app)
      .delete(`/laboratorio/${id}`);

    expect(responseDelete.status).toBe(200);

    const responseConfirmaExclusao = await request(app)
      .get('/laboratorio');

    expect(responseConfirmaExclusao.status).toBe(200);

    expect(responseConfirmaExclusao.body.length).toBe(quantidadeRegistros - 1);
  });

  it('Não deve ser possível remover um laboratório que não exista', async () => {
    const response = await request(app)
      .delete('/laboratorio/10');

    expect(response.status).toBe(404);
    
    expect(response.body).toMatchObject({
      error: 'Laboratorio not found'
    });
  });
});