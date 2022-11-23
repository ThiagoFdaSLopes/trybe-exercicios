USE sakila;

SELECT * FROM staff;

INSERT IGNORE INTO sakila.staff (first_name, last_name, address_id, store_id, username) 
VALUES ('Thiago', 'Lopes', 4, 2, 'TornadoZero');

INSERT IGNORE INTO sakila.staff (first_name, last_name, address_id, store_id, username) VALUES
	('Joao', 'Lopes', 4, 2, 'Joaozin'),
    ('Antonio', 'Lopes', 4, 2, 'Antonin');

INSERT INTO actor (first_name, last_name)
	SELECT first_name, last_name FROM customer
    LIMIT 5;
    
INSERT INTO category (name) VALUES
	('Sensação'),
    ('Dia de Terror'),
    ('Inverno');

INSERT INTO store (address_id, manager_staff_id)
VALUES (4, 6);