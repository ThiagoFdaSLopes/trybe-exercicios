// Iniciando dia do banco de dados

// Comando para gerar imagem docker com mysql
// docker container run --name container-mysql -e MYSQL_ROOT_PASSWORD=senha-mysql -d -p 3306:3306 mysql

// flagas usadas:

// –name: Através desta flag, estamos nomeando o nosso container e facilitando a identificação do mesmo;

// -e: Utilizada para informar nossas variáveis de ambiente. No nosso exemplo, como iremos acessar o container como usuário root, passaremos a seguinte variável de ambiente e senha MYSQL_ROOT_PASSWORD=senha-mysql;

// -d: Utilizada para fazer com que o nosso container rode em segundo plano;

// -p: Indicaremos qual porta no nosso sistema operacional o docker estará em funcionamento. Perceba que passamos 3306:3306. A porta 3306 (lado esquerdo) significa que a porta 3306 do nosso computador receberá o container docker. A porta 3306 (lado direito) significa que a porta que teremos acesso dentro do container. Lembrando que 3306 é a porta padrão do MySQL.