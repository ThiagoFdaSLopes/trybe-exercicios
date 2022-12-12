const express = require('express');

const app = express();

// Middlewares
app.use(express.json());

module.exports = app;