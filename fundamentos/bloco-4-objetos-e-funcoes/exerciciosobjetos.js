/*------------------------------------------
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
};
console.log("A Jogadora " + player['name'] + ' ' + player['lastName'] + ' Tem ' + player['age'] + ' Anos' );
------------------------------------------------------------------------*/
/*
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
};
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log('A Jogadora ' + player.name + ' ' + player.lastName + ' Foi eleite a melhor do mundo ' + player['bestInTheWorld'].length + ' Vezes');
----------------------------------------------------------------------------------------------------------------*/

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
};

console.log('A Jogadora ' + player.name + ' ' + player.lastName + ' Possui ' + player['medals']['golden'] + ' Medalhas de Ouro e ' + player['medals']['silver'] + ' Medalhas de Prata');
