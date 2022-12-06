async function searchSimpson(id) {
  const data = await fs.readFile('./simpsons.json');
  const result = JSON.parse(data);

  const simpson = result.find((e) => e.id === id);
  
  if(!simpson){
    console.log('Simpson não encontrado')
  }

  console.log(simpson.name);
}