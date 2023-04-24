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

<p>Contribuições são bem-vindas! Para sugestões e correções, abra uma <a href="https://github.com/ms-gustavo/toughts-project/issues">issue</a> ou envie um <a href="https://github.com/ms-gustavo/toughts-project/pulls">pull request</a>.</p>

<h2>Dependências</h2>

<p>As seguintes dependências foram utilizadas neste projeto:</p>

<table>
  <thead>
    <tr>
      <th>Dependency</th>
      <th>Version</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>bcryptjs</td>
      <td><code>^2.4.3</code></td>
    </tr>
    <tr>
      <td>connect-flash</td>
      <td><code>^0.1.1</code></td>
    </tr>
    <tr>
      <td>cookie-parser</td>
      <td><code>^1.4.6</code></td>
    </tr>
    <tr>
      <td>cookie-session</td>
      <td><code>^2.0.0</code></td>
    </tr>
    <tr>
      <td>dns</td>
      <td><code>^0.2.2</code></td>
    </tr>
    <tr>
      <td>dotenv</td>
      <td><code>^16.0.3</code></td>
    </tr>
    <tr>
      <td>express</td>
      <td><code>^4.18.2</code></td>
    </tr>
    <tr>
      <td>express-flash</td>
      <td><code>^0.0.2</code></td>
    </tr>
    <tr>
      <td>express-handlebars</td>
      <td><code>^7.0.6</code></td>
    </tr>
    <tr>
      <td>express-session</td>
      <td><code>^1.17.3</code></td>
    </tr>
    <tr>
      <td>isemail</td>
      <td><code>^3.2.0</code></td>
    </tr>
    <tr>
      <td>mysql2</td>
      <td><code>^3.2.0</code></td>
    </tr>
    <tr>
      <td>nodemon</td>
      <td><code>^2.0.22</code></td>
    </tr>
    <tr>
      <td>sequelize</td>
      <td><code>^6.31.0</code></td>
    </tr>
    <tr>
      <td>session-file-store</td>
      <td><code>^1.5.0</code></td>
    </tr>
  </tbody>
</table>
