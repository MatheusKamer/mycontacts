module.exports = (error, request, response, next) => { /* Middleware de tratamento de erro, para evitar "try/catch" em todos os controllers */
  console.log(error);
  response.sendStatus(500);
};
