/* importação utilizada inicialmente
const express = require('express');
*/

const { Router } = require('express'); /* Importação desestruturada, importando a função "Router" diretamente do 'express' */

const ContactController = require('./app/controllers/ContactController'); /* Importando a classe ContactController */

const router = Router(); /* atribuindo a função Router a uma constante */

/* criando uma rota utilizando a constante router e as funções da classe ContactController */
router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);

module.exports = router; /* exportando a rota */
