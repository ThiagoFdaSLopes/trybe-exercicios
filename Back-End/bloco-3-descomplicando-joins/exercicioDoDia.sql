-- Utilizando o INNER JOIN, 
-- encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.

SELECT box.movie_id, mov.title, box.domestic_sales, box.international_sales
FROM box_office AS box
INNER JOIN movies AS mov
ON box.movie_id = mov.id;

-- Utilizando o INNER JOIN, faça uma busca que retorne o 
-- número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).

SELECT box.movie_id, mov.title, (box.domestic_sales + box.international_sales) AS Vendas
FROM box_office AS box
INNER JOIN movies AS mov
ON box.movie_id = mov.id
WHERE box.domestic_sales < box.international_sales;

-- Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.

SELECT box.movie_id, m.title, box.rating
FROM box_office AS box
INNER JOIN movies AS m
ON box.movie_id = m.id
ORDER BY box.rating DESC;