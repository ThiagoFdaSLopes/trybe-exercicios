// USE sakila;

// SELECT * FROM payment
// WHERE DATE(payment_date) = '2005-07-31';

// -- Teste cada um dos comandos a seguir:
// SELECT DATE(payment_date) FROM sakila.payment; -- YYYY-MM-DD
// SELECT YEAR(payment_date) FROM sakila.payment; -- Ano
// SELECT MONTH(payment_date) FROM sakila.payment; -- Mês
// SELECT DAY(payment_date) FROM sakila.payment; -- Dia
// SELECT HOUR(payment_date) FROM sakila.payment; -- Hora
// SELECT MINUTE(payment_date) FROM sakila.payment; -- Minuto
// SELECT SECOND(payment_date) FROM sakila.payment; -- Segundo

// SELECT COUNT(*)
// FROM payment
// WHERE payment_date LIKE '2005-05-25%';

// SELECT COUNT(*)
// FROM payment
// WHERE DATE(payment_date) BETWEEN '2005-07-01' AND '2005-08-22';

// SELECT 
// 	DATE(rental_date) AS 'data',
//     YEAR(rental_date) AS 'ano',
//     MONTH(rental_date) AS 'mes',
//     DAY(rental_date) AS 'dia',
//     HOUR(rental_date) AS 'hora',
//     MINUTE(rental_date) AS 'minuto',
//     SECOND(rental_date) AS 'segundos'
// FROM rental
// WHERE rental_id = 10330;

// SELECT * FROM payment
// WHERE DATE(payment_date) = '2005-07-28' AND HOUR(payment_date) >= 22;
    
    
    
    