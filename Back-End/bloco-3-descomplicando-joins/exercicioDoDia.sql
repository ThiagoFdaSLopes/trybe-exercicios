-- Utilizando o INNER JOIN, 
-- encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.

SELECT box.movie_id, mov.title, box.domestic_sales, box.international_sales
FROM box_office AS box
INNER JOIN movies AS mov
ON box.movie_id = mov.id;

