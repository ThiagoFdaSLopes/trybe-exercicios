const fs = require('fs').promises;

const writeDatabase = async (data) => {
  await fs.writeFile('src/database/locations.json', JSON.stringify(data, null, 2));
  return true;
};

module.exports = writeDatabase;