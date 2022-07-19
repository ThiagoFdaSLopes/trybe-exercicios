const {encode, decode} = require('./script');

// describe('Testando a função SOMA: ', () => {

//     it('Teste se o retorno de sum(4, 5) é 9 e sum(0,0) é igual a 0', ()=>{
//         expect(sum(4,5)).toBe(9);
//         expect(sum(0,0)).toBe(0);
//     });
//     it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)', ()=> {
//         expect(() => sum(4, '5')).toThrow();
//         expect(() => sum(4, '5')).toThrowError(('parameters must be numbers'));
//     });
// });

// EXERCICIO 2

// describe('Criando teste para a função REMOVE', () => {
//     it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
//         expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
//     });
//     it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
//         expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
//     });
//     it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
//         expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
//     })
// });

// Exercicio 3

// describe('Testando a função myFizzBuzz', () => {
//     it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
//         expect(myFizzBuzz(15)).toBe('fizzbuzz');
//     });
//     it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
//         expect(myFizzBuzz(9)).toBe('fizz');
//     });
//     it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
//         expect(myFizzBuzz(25)).toBe('buzz');
//     });
//     it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
//         expect(myFizzBuzz(2)).toBe(2);
//     });
//     it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
//         expect(myFizzBuzz('string')).toBeFalsy();
//     });
// })

// EXERCICIO 4
describe('Testando se as funções Encode e Decode existe', () => {
    it('Encode é uma função?', () => {
        expect(typeof encode === 'function').toBeTruthy();
    })
    it('Decode é uma função?', () => {
        expect(typeof decode === 'function').toBeTruthy();
    })
});
describe('Testando os retornos de Encode e Decode', () => {
    it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente;', () => {
        expect(encode('aeiou')).toBe('12345');
        expect(encode('aeiouzhg')).toBe('12345zhg')
    })
    it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
        expect(decode('12345')).toBe('aeiou');
        expect(decode('12345678')).toBe('aeiou678')
    });
    it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
        expect(encode('aeiou').length).toBe(5);
    })
})