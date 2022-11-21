// USE sakila;

// SELECT 
//     *
// FROM
//     customer
// WHERE
//     email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

// SELECT 
//     *
// FROM
//     customer
// WHERE
//     NOT first_name = 'KENNETH'
//         AND active = 0
//         AND store_id = 2
// ORDER BY first_name ASC;

// SELECT 
//     title, description, release_year, rating, replacement_cost
// FROM
//     film
// WHERE
//     rating <> 'NC-17'
//         AND replacement_cost >= 18.00
// ORDER BY replacement_cost DESC
// LIMIT 100;

// SELECT COUNT(*) AS "Quantidade de clientes ativos" FROM customer
// WHERE active = 1 and store_id = 1;

// SELECT * FROM customer
// WHERE active = 0 and store_id = 1;

// SELECT * FROM film
// WHERE rating = 'NC-17'
// ORDER BY rental_rate, title ASC
// LIMIT 50;