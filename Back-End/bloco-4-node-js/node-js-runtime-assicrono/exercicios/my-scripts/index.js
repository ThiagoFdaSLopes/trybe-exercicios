const fs = require('fs').promises;

async function replaceSimpson() {
  const data = await fs.readFile('./simpsonFamily.json');
  const result = JSON.parse(data);
}