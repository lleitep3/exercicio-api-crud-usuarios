# Teste Backend Developer.

### [x] Criar o projeto.
```bash
$ npm install express-generator -g
$ express api-usuarios
$ cd ./api-usuarios
$ npm install
```
### [x] Adicionar o GIT.
```bash
$ git init
$ git checkout -b main
$ touch .gitignore // criar o arquivo `.gitignore`
```
### [x] Adicinar um readme.md.
```bash
$ touch readme.md // criar o arquivo `readme.md`
```
### [x] Adicinar e configurar nodemon.
```bash
$ npm i nodemon --save-dev
```

### [x] Colocar o projeto na estrutura de mercado.
  - [x] Criar a pasta `src`;
  - [x] Mover pasta `routes` e arquivo `app.js` para a pasta `src`;
  - [x] Arrumar referência do `app.js` no arquivo `./bin/www`;

#### [x] Apagar as pastas `public` e `views`.

##### [x] Ao apagar as pastas, não esqueça de adaptar o código do arquivo `app.js`
**Arquivo `app.js`.**
```javascript
//...
// view engine setup <-- APAGAR ESSA LINHA
app.set('views', path.join(__dirname, 'views')) // <-- APAGAR ESSA LINHA
app.set('view engine', 'jade') // <-- APAGAR ESSA LINHA
//...
app.use(express.static(path.join(__dirname, 'public'))) // <-- APAGAR ESSA LINHA
//...
// TROQUE ESSA LINHA:
res.render('error')
// POR ESSA:
res.json(err)
```

##### [x] E o arquivo `./src/routes/index.js`;

Arquivo `./src/routes/index.js`.
**TROQUE:**
```javascript
res.render('index', { title: 'Express' });
```

**PARA :**
```javascript
res.json({ title: 'Express' });
```
### [x] Definir a entidade de usuários.
```json
{
  "id": "1",
  "nome": "Balbina",
  "email": "balbina@email.com",
  "telefone": "(11) 984 347 345",
  "senha": "123Mudar@uol",
  "status": true
}
```

### [X] Definir endpoints da API.
  - Criar usuário     - [POST]   `/usuarios`
  - Listar usuários   - [GET]    `/usuarios`
  - Busca um usuário  - [GET]    `/usuarios/:id`
  - Atualizar usuário - [PUT]    `/usuarios/:id`
  - Apagar usuário    - [DELETE] `/usuarios/:id`


### [X] Criar collections no POSTMAN.

Collection para importação no postman: [API do PROJETO](https://www.getpostman.com/collections/f685e43662909898bb31)


### [X] Criar as rotas da API.

Criar a pasta `users` dentro da pasta `src`.
Na pasta `users`, criar o arquivo de nome `users.routes.js`.

No arquivo `users.routes.js`, configurar suas rotas conforme já definido acima.

*Não se esqueça de importar o arquivo `users.routes.js` no `app.js`.*

### [X] Criar Controller.


### [X] Criar Service.


```
 - Configurar Sequelize
 - Criar Model do user
 - Implementar Model no Service
