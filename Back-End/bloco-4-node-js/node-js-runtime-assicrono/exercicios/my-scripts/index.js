const fs = require('fs').promises;

async function readSimpsons() {
  try {
    const data = await fs.readFile('./simpsons.json');
    const result = JSON.parse(data);

    for(let i = 0; i < result.length; i ++) {
      console.log(`${result[i].id} - ${result[i].name}`);
    }
  } catch(error) {
    console.log('Erro %s', error);
  }
}

async function

readSimpsons();

