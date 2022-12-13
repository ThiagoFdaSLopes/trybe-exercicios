const fs = require('fs').promises;

const writeDatabase = async (data, path) => {
  await fs.writeFile(path, JSON.stringify(data, null, 2));
  return true;
};

module.exports = writeDatabase;