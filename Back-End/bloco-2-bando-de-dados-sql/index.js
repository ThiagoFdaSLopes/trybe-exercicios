// Iniciando dia do banco de dados

// Comando para gerar imagem docker com mysql
// docker container run --name container-mysql -e MYSQL_ROOT_PASSWORD=senha-mysql -d -p 3306:3306 mysql

// flagas usadas:

// –name: Através desta flag, estamos nomeando o nosso container e facilitando a identificação do mesmo;

// -e: Utilizada para informar nossas variáveis de ambiente. No nosso exemplo, como iremos acessar o container como usuário root, passaremos a seguinte variável de ambiente e senha MYSQL_ROOT_PASSWORD=senha-mysql;

// -d: Utilizada para fazer com que o nosso container rode em segundo plano;

// -p: Indicaremos qual porta no nosso sistema operacional o docker estará em funcionamento. Perceba que passamos 3306:3306. A porta 3306 (lado esquerdo) significa que a porta 3306 do nosso computador receberá o container docker. A porta 3306 (lado direito) significa que a porta que teremos acesso dentro do container. Lembrando que 3306 é a porta padrão do MySQL.

// para parar o container: docker container stop container-mysql

// Iniciando ou removendo container

// docker container start container-mysql
// ## Deletando seu container
// Se agora você não quer mais usar esse container e quer removê-lo, pare o container e execute o comando abaixo:
// ## quando o container estiver parado
// docker container rm container-mysql

// Podemos acessar o container com mysql e usar terminal 

// docker exec -it container-mysql bash

// Em seguida acessar o mysql com a senha criada anteriormente: mysql -u root -p

// Mostrar databases criadas:

// SHOW DATABASES; < Não esqueça do ponto e virgula

// O comando USE serve pra definir a referência do banco de dados que será utilizado na query:

// USE nome_do_banco_de_dados_que_quero_conectar;

// Uma outra forma de fazer referência ao banco, sem ter que rodar o USE é no formato banco_de_dados.tabela:

// SELECT * FROM banco_de_dados.tabela;

// Para retornar todas as tabelas inicializadas no seu server:
// SHOW TABLES;

// Visualizar estrutura de uma tabela:
//  DESCRIBE nome_da_tabela;

// Criar um banco de dados:
// CREATE DATABASE nome_do_banco_de_dados;