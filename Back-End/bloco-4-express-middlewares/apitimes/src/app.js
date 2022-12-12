const express = require('express');
const apiCredentials = require('./middlewares/apiCredentials');
const teamsRouter = require('./routes/teamsRouter');

const app = express();
app.use(apiCredentials);
app.use(express.json());
app.use('/teams', teamsRouter);

app.use((err, _req, _res, next) => {
  console.error(err.stack);
  next(err);
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: `Algo deu errado! Mensagem: ${err.message}` });
});

module.exports = app;