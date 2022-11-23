
DELETE FROM actor
WHERE first_name = 'Karl';

DELETE FROM film_actor
WHERE actor_id IN(8, 103, 181, 523);

DELETE FROM actor
WHERE first_name = 'MATTHEW';

DELETE FROM film_text
WHERE description LIKE '%saga%';

TRUNCATE film_actor;
TRUNCATE film_category;