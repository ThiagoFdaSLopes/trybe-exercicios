const express = require('express');
const { readFileJson } = require('./readFileJson');

const app = express();

const json = readFileJson();

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ json }));

app.get('/movies/:id', (req, res) => {
  const { id } = req.params;

  const movie = json.find((e) => e.id === Number(id));

  if (!movie) {
    res.status(400).json({ error: 'ID não encontrado' });
  }

  res.status(200).json({ movie });
  });

module.exports = app;