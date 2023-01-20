const express = require('express');

const app = express();

const { BooksRouter } = require('./routers');

app.use(express.json());

app.use('/books', BooksRouter);

module.exports = app;

