let sobreMim = {
    name: 'Thiago',
    sobreNome: 'Lopes',
    cidadeNatal: 'Bebedouro',
    estadoNatal: 'São Paulo',
    dataDeNascimento: '10/07/1996',
        bancos: {
        nameBanco: ['Itau', 'Bradesco', 'Nubank'],
        cidadeBanco: ['Bebedouro', 'Limeira']
    }
};
sobreMim.bancos.nameBanco.push('Banco do Brasil');
console.table(sobreMim.bancos.nameBanco);