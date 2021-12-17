const express = require('express');
const cors = require('cors');
// require('./database');
require('./app/models');

const { Laboratorio } = require('./app/models');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  return res.json({ log: 'Rota /' });
});

app.post('/laboratorio', async (req, res) => {
  const { nome, endereco } = req.body;

  const laboratorio = await Laboratorio.create({ nome, endereco });

  return res.status(201).json(laboratorio);
});

module.exports = app;