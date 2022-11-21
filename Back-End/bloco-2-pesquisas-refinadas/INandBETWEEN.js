// USE sakila;

// SELECT * FROM payment 
// WHERE customer_id IN (269, 239, 126, 399, 142);

// SELECT * FROM address
// WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'andalay', 'Nantou', 'Texas');

// SELECT * FROM payment
// WHERE amount BETWEEN 0.99 AND 1.99;

// SELECT * FROM language
// WHERE name BETWEEN 'Italian' AND 'Mandarin'
// ORDER BY name;

// SELECT rental_id, rental_date FROM rental
// WHERE rental_date BETWEEN '2005-05-27' AND '2005-07-17';

// EXERCICIOS

// USE sakila;

// -- Mostre o nome, sobrenome e e-mail dos clientes com os 
// -- seguintes sobrenomes: hicks, crawford, henry, boyd, mason, morales e kennedy, ordenados por nome em ordem alfabética.

// SELECT first_name AS nome, last_name AS sobrenome, email AS email
// FROM customer
// WHERE last_name IN('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
// ORDER BY first_name;

// -- Mostre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176, ordenados em ordem alfabética.

// SELECT email AS email
// FROM customer
// WHERE address_id IN(172, 173, 174, 175, 176)
// ORDER BY first_name;

// -- Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005. Lembre-se de que,
// -- no banco de dados, as datas estão armazenadas no formato ano/mês/dia, diferente do formato brasileiro, que é dia/mês/ano.
// SELECT COUNT(*) AS 'quantidade de pagamentos'
// FROM payment
// WHERE DATE(payment_date) BETWEEN '2005-05-01' AND '2005-08-01';

// SELECT title, release_year, rental_duration
// FROM film
// WHERE rental_duration BETWEEN 3 AND 6
// ORDER BY rental_duration DESC, title ASC;

// SELECT title, rating
// FROM film
// WHERE rating IN('G', 'PG', 'PG-13')
// ORDER BY title
// LIMIT 500;