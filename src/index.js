const express = require('express'); /* importar o express */
require('express-async-errors');

const routes = require('./routes'); /* importando arquivo de rotas */

const app = express(); /* const para receber o express (const express) */

app.use(express.json()); /* Receber "bodys" da requisição */

app.use(routes); /* Consumindo as rotas da const "routes" com a função "use" */

app.use((error, request, response, next) => { /* Middleware de tratamento de erro, para evitar "try/catch" em todos os controllers */
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000')); /* subir express, estrutura: porta/arrow function de callback */
