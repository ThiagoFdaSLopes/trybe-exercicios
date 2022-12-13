const { readFile } = require('fs/promises');

const readDatabase = async (path) => {
  const file = await readFile(path, { encoding: 'utf-8' });
  return JSON.parse(file);
};

module.exports = readDatabase;