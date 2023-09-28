const express = require('express'); /* importar o express */
require('express-async-errors');

const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');
const routes = require('./routes'); /* importando arquivo de rotas */

const app = express(); /* const para receber o express (const express) */

app.use(express.json()); /* Receber "bodys" da requisição */
app.use(cors);
app.use(routes); /* Consumindo as rotas da const "routes" com a função "use" */
app.use(errorHandler);

app.listen(3001, () => console.log('🔥 Server started at http://localhost:3001')); /* subir express, estrutura: porta/arrow function de callback */
