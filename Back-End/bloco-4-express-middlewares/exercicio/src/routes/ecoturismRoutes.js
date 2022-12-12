const express = require('express');

const router = express.Router();

router.post('/activities', (_req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});