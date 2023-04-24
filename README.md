<h1>Toughts</h1>

<p>O Toughts é uma aplicação web onde os usuários podem publicar suas ideias, pensamentos e opiniões. O projeto foi desenvolvido com Node.js, Express e Sequelize, utilizando o SQL como banco de dados.</p>

<h2>Instalação</h2>

<ol>
  <li>Clone o repositório:</li>
</ol>

<pre><code>git clone https://github.com/seu-usuario/toughts.git
</code></pre>

<ol start="2">
  <li>Instale as dependências:</li>
</ol>

<pre><code>cd toughts
npm install
</code></pre>

<ol start="3">
  <li>Configure o banco de dados:</li>
</ol>

<p>Crie um arquivo <code>.env</code> na raiz do projeto com as seguintes variáveis de ambiente:</p>

<pre><code>DB_HOST=seu-host-do-banco-de-dados
DB_USER=seu-usuario-do-banco-de-dados
DB_PASS=sua-senha-do-banco-de-dados
DB_NAME=nome-do-banco-de-dados
</code></pre>

<ol start="4">
  <li>Rode as migrações:</li>
</ol>

<pre><code>npm run sequelize db:migrate
</code></pre>

<ol start="5">
  <li>Inicie o servidor:</li>
</ol>

<pre><code>npm start
</code></pre>

<h2>Uso</h2>

<ol>
  <li>Acesse a aplicação em <code>http://localhost:3000</code>.</li>
  <li>Crie uma conta de usuário.</li>
  <li>Faça login na aplicação.</li>
  <li>Crie uma nova publicação.</li>
  <li>Visualize as publicações criadas pelos outros usuários.</li>
</ol>

<h2>Contribuição</h2>

<p>Contribuições são bem-vindas! Para sugestões e correções, abra uma <a href="https://github.com/seu-usuario/toughts/issues">issue</a> ou envie um <a href="https://github.com/seu-usuario/toughts/pulls">pull request</a>.</p>

<h2>Dependências</h2>

<p>As seguintes dependências foram utilizadas neste projeto:</p>

<table>
  <thead>
    <tr>
      <th>Nome</th>
      <th>Versão</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>bcryptjs</td>
      <td>^2.4.3</td>
    </tr>
    <tr>
      <td>connect-flash</td>
      <td>^0.1.1</td>
    </tr>
    <tr>
      <td>cookie-parser</td>
      <td>^1.4.6</td>
    </tr>
    <tr>
      <td>cookie-session</td>
      <td>^2.0.0</td>
    </tr>
    <tr>
      <td>dns</td>
      <td>^0.2.2</td>
    </tr>
    <tr>
      <td>dotenv</td>
      <td>^16.0.3</td>
    </tr>
