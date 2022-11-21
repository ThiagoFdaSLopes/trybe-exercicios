USE pixar;

INSERT INTO movies(title, director, `year`, length_minutes) VALUES
	('Monstros SA', 'Peter Docter', 2001, 92),
    ('Procurando Nemo', 'John Lasseter', 2003, 107),
    ('Os Incríveis', 'Brad Bird', 2004, 116),
    ('WALL-E', 'Peter Docter', 2008, 116);
    
SELECT * FROM movies;

INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales) VALUES
	(9, 6.8, 450000000, 370000000);
    
UPDATE movies
SET director = 'Andrew Stanton'
WHERE title = 'Procurando Nemo';

UPDATE movies
SET title = 'Ratatouille'
WHERE title = 'Ratatui';

UPDATE movies
SET `year` = 2007
WHERE title = 'Ratatouille';

INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales) VALUES
	(8, 8.5, 300000000, 250000000),
    (10, 7.4, 460000000, 510000000),
    (11, 9.9, 290000000, 280000000);
    
SELECT * FROM movies
WHERE title = 'WALL-E';

DELETE FROM box_office
WHERE movie_id = 11;
    
DELETE FROM movies
WHERE title = 'WALL-E';

SELECT * FROM movies
WHERE director = 'Andrew Stanton';

DELETE FROM box_office
WHERE movie_id IN(2, 9);

DELETE FROM movies
WHERE id IN(2, 9);