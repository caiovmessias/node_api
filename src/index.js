const express = require('express');
const cors = require('cors');
require('./app/models');
const router = require('./routes/index');

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

module.exports = app;