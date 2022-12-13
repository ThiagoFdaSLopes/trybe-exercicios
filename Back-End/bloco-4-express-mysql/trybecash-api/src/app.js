const express = require('express');

const app = express();

app.use(express.json());

const peopleRoutes = require('./routes/peopleRoutes');

app.use('/people', peopleRoutes);

module.exports = app;