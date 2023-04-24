Toughts Project

Este projeto é uma aplicação web que permite aos usuários publicar seus pensamentos, ideias e opiniões.

Instalação
Antes de executar o projeto, certifique-se de ter o Node.js instalado em sua máquina.

Clone o repositório em sua máquina local usando o Git:

git clone https://github.com/<seu-nome-de-usuario>/toughts-project.git


Navegue até o diretório do projeto:

cd toughts-project


Instale as dependências do projeto:

npm install


Crie um arquivo .env e adicione as variáveis de ambiente necessárias:


DB_USER=<seu-usuário-do-banco-de-dados>
DB_PASS=<sua-senha-do-banco-de-dados>
DB_NAME=<seu-nome-do-banco-de-dados>


Uso


Para iniciar o servidor, execute o seguinte comando:

npm start


O servidor começará a ouvir na porta 3000. Você pode acessar a aplicação abrindo http://localhost:3000 em seu navegador da web.

Contribuição


Contribuições para este projeto são bem-vindas! Para contribuir, siga estes passos:

Faça um fork do repositório.
Crie um novo branch para sua funcionalidade ou correção de bug.
Commite suas mudanças e envie-as para seu fork.
Envie um pull request.


Dependências
Este projeto usa as seguintes dependências:

bcryptjs

connect-flash

cookie-parser

cookie-session

dns

dotenv

express

express-flash

express-handlebars

express-session

isemail

mysql2

nodemon

sequelize

session-file-store


Você pode instalá-las usando o comando npm install.
