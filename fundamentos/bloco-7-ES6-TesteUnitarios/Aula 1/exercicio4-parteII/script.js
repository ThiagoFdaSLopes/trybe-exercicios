const teste = (nome) => {
    const frase = 'Tryber x aqui!';
    const fraseDois = frase.split(' ');

    for( let i = 0; i < fraseDois.length; i += 1){
        if(fraseDois[i] === 'x'){
            fraseDois[i] = nome;
        }
    }

    return fraseDois.join(' ');

}

const testeDois = (a) => {
    const skills = ['HTML', 'CSS', 'JAVASCRIPT'];

    const result = `${a}\nMinhas três principais habilidades são:\n-${skills[0]}\n-${skills[1]}\n-${skills[2]}`;

    return result;
}

console.log(testeDois(teste('Thiago')))


