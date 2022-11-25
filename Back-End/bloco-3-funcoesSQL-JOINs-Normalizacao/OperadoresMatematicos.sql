SELECT IF(15 MOD 2 = 0, 'Par', 'Impar') AS 'Par ou Impar';

SELECT 220 DIV 12;

SELECT IF(220 MOD 12 = 0, 'NÃO', CONCAT('SIM, ', 220 MOD 12));

-- OPERADOR ROUND 
--O ROUND arredonda os números de acordo com sua parte decimal. Se for maior ou igual a 0.5, 
- o resultado é um arredondamento para cima. Caso contrário, ocorre um arredondamento para baixo
-- Podemos omitir ou especificar quantas casas decimais queremos
SELECT ROUND(10.4925); -- 10
SELECT ROUND(10.5136); -- 11
SELECT ROUND(-10.5136); -- -11
SELECT ROUND(10.4925, 2); -- 10.49
SELECT ROUND(10.4925, 3); -- 10.493

-- ARREDONDAMENTO SEMPRE PARAC CIMA PODE SER FEITO COM CEIL
SELECT CEIL(10.51); -- 11
SELECT CEIL(10.49); -- 11
SELECT CEIL(10.2); -- 11

-- ARREDONDAMENTO SEMPRE PARA BAIXO PODE SER FEITO COM FLOOR
SELECT FLOOR(10.51); -- 10
SELECT FLOOR(10.49); -- 10
SELECT FLOOR(10.2); -- 10

-- Para cálculos de exponenciação e raiz quadradas, podemos utilizar as funções POW e SQRT, respectivamente.

-- Elevando um número X à potência Y usando a função POW:
SELECT POW(2, 2); -- 4
SELECT POW(2, 4); -- 16

-- Encontrando a raiz quadrada de um valor usando SQRT:
SELECT SQRT(9); -- 3
SELECT SQRT(16); -- 4

-- Para situações em que se faz necessário gerar valores aleatórios, podemos usar a função RAND, em conjunto com as funções anteriores.
-- Para gerar um valor aleatório entre 0 e 1:
SELECT RAND();

-- Para gerar um valor entre 7 e 13:
SELECT ROUND(7 + (RAND() * 6));

-- O cálculo que é feito é o seguinte: (7 + (0.0 a 1.0 * 6))

 -- Exercicios da pagina
-- Monte uma query que gere um valor entre 15 e 20.
 SELECT ROUND(15 + (RAND() * 5));
 
 -- Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.
 SELECT ROUND(15.7515971, 5);
 
 -- Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?
 
 SELECT FLOOR(39.494);
 
 -- Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?
 SELECT CEIL(85.234);