const express = require('express');

const checkName = require('../middlewares/checkName');
const checkCreatedAt = require('../middlewares/checkCreatedAt');
const checkDescription = require('../middlewares/checkDescription');
const checkPrice = require('../middlewares/checkPrice');
const checkRating = require('../middlewares/checkRating');
const checkDifficulty = require('../middlewares/checkDifficulty');
const writeDatabase = require('../utils/fs/writeFile');

const router = express.Router();

router.use(checkName);
router.use(checkCreatedAt);
router.use(checkDescription);
router.use(checkPrice);
router.use(checkRating);
router.use(checkDifficulty);

router.post('/activities', 
  checkName, 
  checkPrice, checkDescription, checkRating, checkDifficulty, checkCreatedAt, async (req, res) => {
  await writeDatabase(req.body);
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

module.exports = router;