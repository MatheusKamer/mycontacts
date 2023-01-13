/* importação utilizada inicialmente
const express = require('express');
*/

const { Router } = require('express'); /* Importação desestruturada, importando a função "Router" diretamente do 'express' */

const ContactController = require('./app/controllers/ContactController'); /* Importando a classe ContactController */
const CategoryController = require('./app/controllers/CategoryController');

const router = Router(); /* atribuindo a função Router a uma constante */

/* criando uma rota utilizando a constante router e as funções da classe ContactController */
router.get('/contacts', ContactController.index);
router.get('/contacts/:id', ContactController.show);
router.delete('/contacts/:id', ContactController.delete);
router.post('/contacts', ContactController.store);
router.put('/contacts/:id', ContactController.update);

router.get('/categories', CategoryController.index);
router.get('/categories/:id', CategoryController.show);
router.delete('/categories/:id', CategoryController.delete);
router.post('/categories', CategoryController.store);
router.put('/categories/:id', CategoryController.update);

module.exports = router; /* exportando a rota */
