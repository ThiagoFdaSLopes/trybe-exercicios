const fs = require('fs').promises;

// async function newsSimpson() {
//   const data = await fs.readFile('./simpsons.json');
//   const result = JSON.parse(data);

//   const novos = JSON.stringify(result.filter((e) => e.id <= '4'));
  

//   fs.writeFile('./simpsonFamily.json', novos);
// }

// newsSimpson();

async function simpsonFamily() {
  const data = await fs.readFile('./simpsonFamily.json');
  const result = JSON.parse(data);

  const newPerson = {
    id: '5',
    name: 'Nelson Muntz'
  };
  
  result.push(newPerson);

  const teste = JSON.stringify(result);

  fs.writeFile('./simpsonFamily.json', teste);
}

simpsonFamily();