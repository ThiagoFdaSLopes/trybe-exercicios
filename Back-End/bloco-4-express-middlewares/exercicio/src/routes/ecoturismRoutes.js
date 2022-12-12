const express = require('express');

const checkName = require('../middlewares/checkName');
const checkCreatedAt = require('../middlewares/checkCreatedAt');
const checkDescription = require('../middlewares/checkDescription');
const checkPrice = require('../middlewares/checkPrice');
const checkRating = require('../middlewares/checkRating');
const checkDifficulty = require('../middlewares/checkDifficulty');
const writeDatabase = require('../utils/fs/writeFile');
const readDatabase = require('../utils/fs/readFile');

const router = express.Router();

router.use(checkName);
router.use(checkCreatedAt);
router.use(checkDescription);
router.use(checkPrice);
router.use(checkRating);
router.use(checkDifficulty);

router.post('/activities', 
  checkName, 
  checkPrice, checkDescription, checkRating, checkDifficulty, checkCreatedAt, 
  async (req, res) => {
  const { name } = req.body;
  const file = await readDatabase();
  const location = file.find((e) => e.name === name);

  if (!location) {
    file.push(req.body);
    await writeDatabase(file);
    return res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
  }
  res.status(400).json({ message: 'Localização já existe no bando de dados' });
});

module.exports = router;