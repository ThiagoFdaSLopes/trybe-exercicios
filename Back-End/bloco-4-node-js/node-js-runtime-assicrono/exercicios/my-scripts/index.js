const fs = require('fs').promises;

async function removeSimpson() {
  const data = await fs.readFile('./simpsons.json');
  const result = JSON.parse(data);

  const simpson = JSON.stringify(result.filter((e) => e.id !== '6' && e.id !== '10'));

  fs.writeFile('./simpsons.json', simpson);
}

removeSimpson();