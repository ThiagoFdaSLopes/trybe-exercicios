USE Scientists;

SELECT * FROM Scientists
WHERE name LIKE '%e%';

SELECT * FROM Projects
WHERE code LIKE 'A%'
ORDER BY name;

SELECT code as Codigo, name AS nome FROM Projects
WHERE code LIKE '%3%'
ORDER BY name ASC;

SELECT Scientist FROM AssignedTo
WHERE Project IN('AeH3', 'Ast3', 'Che1');

SELECT * FROM Projects
WHERE hours > 500;

SELECT * FROM Projects
WHERE hours BETWEEN 250 AND 800;

SELECT * FROM Projects
WHERE name NOT LIKE 'A%';

SELECT name FROM Projects
WHERE name LIKE '%H%';