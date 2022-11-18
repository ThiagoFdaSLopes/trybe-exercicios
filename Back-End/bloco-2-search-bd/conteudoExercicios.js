// -- Escreva uma query para exibir a string “This is SQL Exercise, Practice and Solution”.
// SELECT '“This is SQL Exercise, Practice and Solution”';
// -- Escreva uma query para exibir três números em três colunas.
// SELECT 1 AS um, 2 AS dois, 3 AS tres;
// -- Escreva uma query para exibir a soma dos números 10 e 15.
// SELECT 10 + 15;
// -- Escreva uma query para exibir o resultado de uma expressão aritmética qualquer.
// SELECT (25 * 2) + 2;
// -- Escreva uma query para exibir todas as informações de todos os cientistas.
// SELECT * FROM Scientists;
// -- Escreva uma query para exibir o nome como “Nome do Projeto” e as horas como “Tempo de Trabalho” de cada projeto.
// SELECT name AS "Nome do Projeto", hours AS "Tempo de Trabalho" FROM Scientists.Projects;
// -- Escreva uma query para exibir o nome dos cientistas em ordem alfabética.
// SELECT name FROM Scientists.Scientists ORDER BY name ASC;
// -- Escreva uma query para exibir o nome dos projetos em ordem alfabética descendente.
// SELECT name FROM Scientists.Projects ORDER BY name DESC;
// -- Escreva uma query que exiba a string “O projeto Name precisou de Hours horas para ser concluído.” para cada projeto.
// SELECT CONCAT('O Projeto', ' ', Name, ' ', 'Precisou de', ' ', Hours , ' ', 'horas para ser concluido') FROM Scientists.Projects;
// -- Escreva uma query para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
// SELECT name, hours FROM Scientists.Projects ORDER BY hours DESC LIMIT 3;
// -- Escreva uma query para exibir o código de todos os projetos da tabela AssignedTo sem que haja repetições.
// SELECT DISTINCT project FROM Scientists.AssignedTo;
// -- Escreva uma query para exibir o nome do projeto com maior quantidade de horas.
// SELECT name FROM Scientists.Projects ORDER BY hours DESC LIMIT 1;
// -- Escreva uma query para exibir o nome do segundo projeto com menor quantidade de horas.
// SELECT name FROM Scientists.Projects ORDER BY hours ASC LIMIT 1 OFFSET 1;
// -- Escreva uma query para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
// SELECT name FROM Scientists.Projects ORDER BY hours ASC LIMIT 5;
// -- Escreva uma query que exiba a string “Existem Number cientistas na tabela Scientists.”, em que Number se refira a quantidade de cientistas.
// SELECT CONCAT('Existem', COUNT(Scientists.Scientists.name), ' ', 'cientistas na tabela Scientists') FROM Scientists.Scientists;