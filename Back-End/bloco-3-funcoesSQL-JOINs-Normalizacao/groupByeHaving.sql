-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

-- Exercicios de GROUp BY
SELECT active, COUNT(*)
FROM sakila.customer
GROUP BY active;

SELECT active, store_id, COUNT(*)
FROM customer
GROUP BY active, store_id;

SELECT AVG(rental_duration) AS avg_rental_duration, rating
FROM sakila.film
GROUP BY rating
ORDER BY avg_rental_duration DESC;

SELECT district, COUNT(*) AS quantidade
FROM address
group by district
ORDER BY quantidade DESC;


-- HAVING
SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
-- melhorando a leitura do resultado
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;

SELECT rating, rental_rate, COUNT(1) as total FROM sakila.film
GROUP BY rental_rate, rating
HAVING total < 70
ORDER BY rating, rental_rate;

-- Exercicios HAVING
SELECT rating, AVG(length) AS quantidade
FROM sakila.film
GROUP BY rating
HAVING quantidade BETWEEN 115.0 AND 121.50
ORDER BY rating DESC;

SELECT rating, SUM(replacement_cost) custo_de_substituicao
FROM sakila.film
GROUP by rating
HAVING custo_de_substituicao > 3950.50
ORDER BY custo_de_substituicao;
