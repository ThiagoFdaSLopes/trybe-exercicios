-- Vamos lá! Faça uma consulta na tabela item que retorne todos os dados em que a coluna name comece com as letras GR.
USE store;
SELECT * FROM itens
WHERE name LIKE 'GR%';

SELECT * FROM supplies
WHERE item_id = 2
ORDER BY supplier_id;

SELECT 
item_id AS 'ID do Item',
price  AS preço,
supplier_id 'Supplier ID'
FROM supplies
WHERE supplier_id LIKE '%N%';

SELECT * FROM suppliers
WHERE name LIKE '%LTDA%'
ORDER BY name DESC;

SELECT COUNT(*) 'Quantidade de ID'  FROM suppliers
WHERE id LIKE '%F%';

SELECT * FROM supplies
WHERE price BETWEEN 15.00 AND 40.00
ORDER BY price;

SELECT COUNT(*) vendas FROM sales
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';



