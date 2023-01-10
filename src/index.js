const express = require('express'); /* importar o express */

const routes = require('./routes'); /* importando arquivo de rotas */

const app = express(); /* const para receber o express (const express) */

app.use(routes); /* Consumindo as rotas da const "routes" com a função "use" */

app.listen(3000, () => console.log('🔥 Server started at http://localhost:3000')); /* subir express, estrutura: porta/arrow function de callback */
