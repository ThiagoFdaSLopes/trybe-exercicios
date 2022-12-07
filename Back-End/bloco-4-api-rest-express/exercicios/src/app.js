const express = require('express');
const { readFileJson } = require('./readFileJson');

const app = express();

const json = readFileJson();

app.use(express.json());

app.get('/movies', (req, res) => res.status(200).json({ json }));

// app.get('/movies/:id', (req, res) => {
//   const { id } = req.params;

//   const movie = json.find((e) => e.id === Number(id));

//   if (!movie) {
//     res.status(400).json({ error: 'ID não encontrado' });
//   }

//   res.status(200).json({ movie });
// });

app.post('/movies', (req, res) => {
  const { movie, price } = req.body;

  json.push({ id: (json.length + 1), movie, price });

  res.status(200).json({ message: 'Filme Adicionado' });
});

app.put('/movies/:id', (req, res) => {
  const { id } = req.params;
  const { movie, price } = req.body;

  const film = json.find((e) => e.id === Number(id));

  if (!film) {
    res.status(400).json({ error: 'ID não encontrado' });
  }

  film.movie = movie;
  film.price = price;

  res.status(200).json({ message: 'Filme Editado' });
});

app.delete('/movies/:id', (req, res) => {
  const { id } = req.params;

  const film = json.findIndex((e) => e.id === Number(id));
  json.splice(film, 1);

  if (!film) {
    res.status(400).json({ error: 'ID não encontrado' });
  }

  res.status(200).json({ message: 'Filme Deletado' });
});

app.get('/movies/search', (req, res) => {
  const { q } = req.query;

  const movies = json.filter((e) => e.movie.includes(q));

  res.status(200).json({ movies });
});

module.exports = app;