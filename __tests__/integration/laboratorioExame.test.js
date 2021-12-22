const request = require('supertest');

const app = require('../../src/index');

describe('Associação de laboratorios e exames', () => {
  it('Deve ser possível associar um laboratório ativo a um exame ativo', async () => {
    const laboratorioResponse = await request(app)
    .post('/laboratorio')
    .send({
      nome: 'Laboratorio Teste',
      endereco: 'Rua das amoras, 5000', 
    });

    const exameResponse = await request(app)
      .post('/exame')
      .send({
        nome: 'Exame Teste',
        tipo: 1
      });

    const idExame = exameResponse.body.id;
    const idLaboratorio = laboratorioResponse.body.id;

    const response = await request(app)
      .post(`/associar/${idExame}/${idLaboratorio}`);

    expect(response.status).toBe(201);
    
    expect(response.body).toMatchObject({
      idExame: idExame.toString(),
      idLaboratorio: idLaboratorio.toString(),
    });
  });

  it('Não deve ser possível fazer associação se não existir exame', async () => {
    const laboratorioResponse = await request(app)
    .post('/laboratorio')
    .send({
      nome: 'Laboratorio Teste',
      endereco: 'Rua das amoras, 5000', 
    });

    const idLaboratorio = laboratorioResponse.body.id;

    const response = await request(app)
    .post(`/associar/100/${idLaboratorio}`);

    expect(response.status).toBe(404);
    
    expect(response.body).toMatchObject({
      error: 'Exame not found'
    });
  });

  it('Não deve ser possível fazer associação se não existir laboratorio', async () => {
    const exameResponse = await request(app)
    .post('/exame')
    .send({
      nome: 'Exame Teste',
      tipo: 1
    });


    const idExame = exameResponse.body.id;

    const response = await request(app)
    .post(`/associar/${idExame}/100`);

    expect(response.status).toBe(404);
    
    expect(response.body).toMatchObject({
      error: 'Laboratorio not found'
    });
  });
});

describe('Desassociação de laboratorios e exames', () => {
  it('Deve ser possível desassociar laboratório ao exame', async () => {
    const laboratorioResponse = await request(app)
    .post('/laboratorio')
    .send({
      nome: 'Laboratorio Teste',
      endereco: 'Rua das amoras, 5000', 
    });

    const exameResponse = await request(app)
      .post('/exame')
      .send({
        nome: 'Exame Teste',
        tipo: 1
      });

    const idExame = exameResponse.body.id;
    const idLaboratorio = laboratorioResponse.body.id;

    await request(app)
      .post(`/associar/${idExame}/${idLaboratorio}`);

    const response = await request(app)
      .delete(`/desassociar/${idExame}/${idLaboratorio}`);

    expect(response.status).toBe(200);
  });

  it('Não deve ser possível fazer a desassociação se não existir associação', async () => {
    const response = await request(app)
      .delete(`/desassociar/0/1`);

    expect(response.status).toBe(404);
  });
});

describe('Retornar laboratórios vinculados ao exame', () => {
  it('Deve ser possível retornar uma lista com os laboratórios associados aos exames', async () => {
    const laboratorioResponse = await request(app)
    .post('/laboratorio')
    .send({
      nome: 'Laboratorio Teste',
      endereco: 'Rua das amoras, 5000', 
    });

    const exameResponse = await request(app)
    .post('/exame')
    .send({
      nome: 'Exame Teste',
      tipo: 1
    });


    const idExame = exameResponse.body.id;
    const idLaboratorio = laboratorioResponse.body.id;  

    await request(app)
    .post(`/associar/${idExame}/${idLaboratorio}`)
    
    const response = await request(app)
    .get(`/laboratorios/exames`)
    .set('nome', 'Exame Teste')

    expect(response.status).toBe(200);
  });
});