USE sakila;

SELECT a.actor_id, a.first_name, f.film_id
FROM actor a
INNER JOIN film_actor f
ON a.actor_id = f.actor_id;

SELECT s.first_name, s.last_name, a.address
FROM staff AS s
INNER JOIN address AS a
ON s.address_id = a.address_id;

SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;

SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
WHERE a.district = 'California' AND c.first_name LIKE '%rene%';

SELECT c.first_name, c.last_name, COUNT(r.rental_id) AS quantidade
FROM customer AS c
INNER JOIN rental AS r
ON c.customer_id = r.customer_id
WHERE c.active = 1
GROUP BY c.customer_id
ORDER BY first_name, last_name DESC;

SELECT s.first_name, s.last_name, AVG(p.amount)
FROM staff AS s
INNER JOIN payment AS p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY s.first_name, s.last_name;

SELECT a.actor_id, a.first_name, fa.film_id, f.title
FROM actor AS a
INNER JOIN film_actor AS fa
ON a.actor_id = fa.actor_id
INNER JOIN film AS f
ON f.film_id = fa.film_id;

