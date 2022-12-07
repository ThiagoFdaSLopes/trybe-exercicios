const fs = require('fs');

function readFileJson() {
  const data = fs.readFileSync('src/movies.json', 'utf-8');
  const result = JSON.parse(data);
  return result;
}

module.exports = {
  readFileJson,
};