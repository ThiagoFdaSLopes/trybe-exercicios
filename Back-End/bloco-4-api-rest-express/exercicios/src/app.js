const express = require('express');
const { readFileJson } = require('./readFileJson');

const app = express();

const json = readFileJson();

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ json }));

module.exports = app;