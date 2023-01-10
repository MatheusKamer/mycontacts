/* importação utilizada inicialmente
const express = require('express');
*/

const { Router } = require('express'); /* Importação desestruturada, importando a função "Router" diretamente do 'express' */

const ContactController = require('./app/controllers/ContactController'); /* Importando a classe ContactController */

const router = Router(); /* atribuindo a função Router a uma constante */

/* criando uma rota utilizando a constante router e as funções da classe ContactController */
router.get(
  '/contacts',
  (request, response, next) => { /* Middleware 1 | Utilizando middleware - sempre executam na sequencia que são criandos */
    request.appId = 'MeuAppID';
    next();
  },
  ContactController.index,
);

router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);

module.exports = router; /* exportando a rota */
