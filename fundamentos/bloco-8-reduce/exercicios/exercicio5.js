const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

const totalA = names.reduce((osA, elemento) => osA + elemento.split('').reduce((acc, curr) => {
    if(curr === 'a' || curr === 'A') return acc += 1;
    return acc
}, 0), 0)

console.log(totalA)