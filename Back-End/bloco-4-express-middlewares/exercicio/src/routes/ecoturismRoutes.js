const express = require('express');

const checkName = require('../middlewares/checkName');
const checkCreatedAt = require('../middlewares/checkCreatedAt');
const checkDescription = require('../middlewares/checkDescription');
const checkPrice = require('../middlewares/checkPrice');
const checkRating = require('../middlewares/checkRating');
const checkDifficulty = require('../middlewares/checkDifficulty');
const writeDatabase = require('../utils/fs/writeFile');
const readDatabase = require('../utils/fs/readFile');
const checkUserInfos = require('../middlewares/checkUserInfos');
const authGenerator = require('../utils/generator/authGenerator');
const checkUserAuth = require('../middlewares/checkUserAuth');

const PATH_LOCATIONS = 'src/database/locations.json';
const PATH_CLIENTES = 'src/database/clientes.json';

const router = express.Router();
  
  router.post('/activities',
  checkUserAuth,
  checkName, 
  checkPrice, checkDescription, checkRating, checkDifficulty, checkCreatedAt, 
  async (req, res) => {
    const { name } = req.body;
  const file = await readDatabase(PATH_LOCATIONS);
  const location = file.find((e) => e.name === name);
  
  if (!location) {
    file.push(req.body);
    await writeDatabase(file, PATH_LOCATIONS);
    return res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
  }
  res.status(400).json({ message: 'Localização já existe no bando de dados' });
});

router.post('/signup/teste', checkUserInfos, async (req, res) => {
  const { email } = req.body;
  const file = await readDatabase(PATH_CLIENTES);
  const teste = file.find((e) => e.email === email);

  const auth = authGenerator();
  
  if (!teste) {
    req.body.autorization = auth;
    file.push(req.body);
    await writeDatabase(file, PATH_CLIENTES);
    return res.status(201).json({ message: `token:${auth}` });
  }
  res.status(400).json({ message: 'Usuario já existe no banco de dados' });
});

module.exports = router;