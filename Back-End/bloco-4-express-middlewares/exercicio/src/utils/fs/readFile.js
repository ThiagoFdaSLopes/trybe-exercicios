const { readFile } = require('fs/promises');

const readDatabase = async () => {
  const file = await readFile('src/database/locations.json', { encoding: 'utf-8' });
  return JSON.parse(file);
};

module.exports = readDatabase;