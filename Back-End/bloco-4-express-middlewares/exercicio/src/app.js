const express = require('express');

// Routes
const ecoturismRoutes = require('./routes/ecoturismRoutes');

// Middlewares
const app = express();
app.use(express.json());
app.use(ecoturismRoutes);

module.exports = app;
