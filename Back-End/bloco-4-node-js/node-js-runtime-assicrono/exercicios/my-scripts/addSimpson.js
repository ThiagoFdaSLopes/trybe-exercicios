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