const fs = require('fs').promises;

async function replaceSimpson() {
  const data = await fs.readFile('./simpsonFamily.json');
  const result = JSON.parse(data);

  const removeNelson = result.filter((e) => e.name !== 'Nelson Muntz');

  const newPerson = {
    id: '5',
    name: 'Maggie Simpson'
  }

  removeNelson.push(newPerson);

  const string = JSON.stringify(removeNelson);

  fs.writeFile('./simpsonFamily.json', string);
}

replaceSimpson();