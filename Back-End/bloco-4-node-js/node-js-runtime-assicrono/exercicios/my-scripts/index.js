const fs = require('fs').promises;

async function newsSimpson() {
  const data = await fs.readFile('./simpsons.json');
  const result = JSON.parse(data);

  const novos = JSON.stringify(result.filter((e) => e.id <= '4'));
  

  fs.appendFile('./simpsonFamily.json', novos);
}

newsSimpson();