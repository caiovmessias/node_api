const request = require('supertest');

const app = require('../../src/index');
const { Exame } = require('../../src/app/models');

describe('Cadastro de exame', () => {
  it('Deve ser possível cadastrar um exame informando corretamente os campos', async () => {
    const response = await request(app)
      .post('/exame')
      .send({
        nome: 'Exame Teste',
        tipo: 1
      });

    expect(response.status).toBe(201);
    
    expect(response.body).toMatchObject({
      nome: 'Exame Teste',
      tipo: 1,
      status: true
    });
  });

  it('Não deve ser possível cadastrar um exame caso não informe o campo tipo', async () => {
    const response = await request(app)
      .post('/exame')
      .send({
        nome: 'Exame Teste'
      });

    expect(response.status).toBe(400);
    
    expect(response.body).toMatchObject({
      error: 'Informe os campos nome e tipo'
    });
  });

  it('Não deve ser possível cadastrar um exame caso não informe um tipo inválido', async () => {
    const response = await request(app)
      .post('/exame')
      .send({
        nome: "Exame teste",
        tipo: 3
      });

    expect(response.status).toBe(406);
    
    expect(response.body).toMatchObject({
      error: 'Tipo Exame not found'
    });
  });

  it('Não deve ser possível cadastrar um exmae caso não informe o campo nome', async () => {
    const response = await request(app)
      .post('/exame')
      .send({
        tipo: 1
      });

    expect(response.status).toBe(400);
    
    expect(response.body).toMatchObject({
      error: 'Informe os campos nome e tipo'
    });
  });
});

describe('Atualização de exame', () => {
  it('Deve ser possível atualizar um exame informando corretamente os campos', async () => {
    const response = await request(app)
      .put('/exame/1')
      .send({
        nome: 'Exame Atualizado'
      });

    expect(response.status).toBe(200);
    
    expect(response.body).toMatchObject({
      id: 1,
      nome: 'Exame Atualizado'
    });

    const response2 = await request(app)
      .put('/exame/1')
      .send({
        tipo: 2
      });

    expect(response2.status).toBe(200);
    
    expect(response2.body).toMatchObject({
      id: 1,
      TipoExame: {
        id: 2,
      }
    });
  });

  it('Não deve ser possível atualizar um exame que não exista', async () => {
    const response = await request(app)
      .put('/exame/10')
      .send({
        nome: 'Exame Atualizado'
      });

    expect(response.status).toBe(404);
    
    expect(response.body).toMatchObject({
      error: 'Exame not found'
    });
  });

  it('Não deve ser possível atualizar um exame com um tipo que não exista', async () => {
    const response = await request(app)
    .put('/exame/1')
    .send({
      tipo: 10
    });
    
    expect(response.status).toBe(406);
    
    expect(response.body).toMatchObject({
      error: 'Tipo Exame not found'
    });
  });
});

describe('Busca de exames', () => {
  it('Deve ser possível retornar todos os exames ativos', async () => {
    const response = await request(app)
    .get('/exame');

    expect(response.status).toBe(200);
  });
});

describe('Remoção de exame', () => {
  it('Deve ser possível remover um exame logicamente', async () => {
    const responseCreate = await request(app)
      .post('/exame')
      .send({
        nome: 'Exame Teste',
        tipo: 1
      });

    const id = responseCreate.body.id;

    const responseGet = await request(app)
    .get('/exame');

    const quantidadeRegistros = responseGet.body.length;

    const responseDelete = await request(app)
      .delete(`/exame/${id}`);

    expect(responseDelete.status).toBe(200);

    const responseConfirmaExclusao = await request(app)
      .get('/exame');

    expect(responseConfirmaExclusao.status).toBe(200);

    expect(responseConfirmaExclusao.body.length).toBe(quantidadeRegistros - 1);
  });

  it('Não deve ser possível remover um exame que não exista', async () => {
    const response = await request(app)
      .delete('/exame/10');

    expect(response.status).toBe(404);
    
    expect(response.body).toMatchObject({
      error: 'Exame not found'
    });
  });
});