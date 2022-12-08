const { expect } = require('chai');
const calculaSituacao = require('../../examples/calculaSitaucao');

describe('Quando a média for menor que 7', function() {
  it('retorna "reprovação"', function() {
    const resposta = calculaSituacao(4);
    expect(resposta).to.be.equals('reprovado');
  });
});