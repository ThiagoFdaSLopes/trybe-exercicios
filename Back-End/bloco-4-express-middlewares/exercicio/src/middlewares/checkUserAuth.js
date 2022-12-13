const readDatabase = require('../utils/fs/readFile');

const PATH_CLIENTES = 'src/database/clientes.json';

const CheckUserAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  const file = await readDatabase(PATH_CLIENTES);

  const teste = file.find((e) => e.autorization === authorization);
  if (!teste) return res.status(401).json({ message: 'Token inválido!' });

  next();
};

module.exports = CheckUserAuth;