USE hr;
SELECT MAX(salary) FROM employees;
SELECT MAX(salary) - MIN(salary) FROM employees;

SELECT job_id, AVG(salary) AS media_salarial
FROM employees
GROUP BY job_id
ORDER BY media_salarial DESC;

SELECT SUM(salary) FROM employees;

SELECT 
MAX(salary) AS 'Salario Maximo',
MIN(salary) AS 'Salario Minimo',
SUM(salary) AS 'Total',
ROUND(AVG(salary), 2) AS 'Média Salario'
FROM employees;

SELECT job_id , COUNT(*)
AS 'total'
FROM hr.employees
WHERE job_id = "it_prog";

SELECT job_id, SUM(salary)
FROM employees
GROUP BY job_id;

SELECT job_id, SUM(salary)
FROM employees
GROUP BY job_id
HAVING job_id = 'it_prog';

SELECT job_id, AVG(salary) AS media_salarial
FROM employees
WHERE job_id <> 'it_prog'
GROUP BY job_id
ORDER BY media_salarial DESC;

-- Escreva um query que exiba média salarial e o número de funcionários
-- de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo department_id
SELECT AVG(salary), department_id, COUNT(*) as count
FROM employees
GROUP BY department_id
HAVING count > 10;

SET SQL_SAFE_UPDATES = 0;

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

SELECT first_name FROM employees
WHERE CHAR_LENGTH(first_name) > 7;

SELECT employee_id AS id,
first_name AS nome,
YEAR(hire_date) AS 'Ano de Contratação'
FROM employees;

SELECT employee_id AS id,
first_name AS nome,
DAY(hire_date) AS 'Day de Contratação'
FROM employees;

SELECT employee_id AS id,
first_name AS nome,
MONTH(hire_date) AS 'Mes de Contratação'
FROM employees;

SELECT UCASE(CONCAT(first_name, ' ', last_name)) FROM employees;

SELECT last_name, hire_date FROM employees
WHERE MONTH(hire_date) = 7 AND YEAR(hire_date) = 1987;

SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) AS 'Dias'
FROM employees;
