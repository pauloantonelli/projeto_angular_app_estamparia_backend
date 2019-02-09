const express = require('express');
const entradaController = require('./controllers/entrada.controller');
const metaAnualController = require('./controllers/metaAnual.controller');
const metaMensalController = require('./controllers/metaMensal.controller');
const pessoasController = require('./controllers/pessoas.controller');

const routes = express.Router();

//entrada
routes.get('/entrada/todos', entradaController.getAll);
routes.get('/entrada/buscar:id', entradaController.getUnico);
routes.post('/entrada/inserir', entradaController.setNovo);
routes.put('/entrada/editar:id', entradaController.setUpdate);
routes.delete('/entrada/deletar:id', entradaController.setDelete);

//meta anual
routes.get('/meta-ano/todos', metaAnualController.getAll);
routes.get('/meta-ano/buscar:id', metaAnualController.getUnico);
routes.post('/meta-ano/inserir', metaAnualController.setNovo);
routes.put('/meta-ano/editar:id', metaAnualController.setUpdate);
routes.delete('/meta-ano/deletar:id', metaAnualController.setDelete);

//meta mensal
routes.get('/meta-mensal/todos', metaMensalController.getAll);
routes.get('/meta-mensal/buscar:id', metaMensalController.getUnico);
routes.post('/meta-mensal/inserir', metaMensalController.setNovo);
routes.put('/meta-mensal/editar:id', metaMensalController.setUpdate);
routes.delete('/meta-mensal/deletar:id', metaMensalController.setDelete);

//pessoas
routes.get('/estudantes/todos', pessoasController.getAll);
routes.get('/estudantes/buscar:id', pessoasController.getUnico);
routes.post('/estudantes/inserir', pessoasController.setNovo);
routes.put('/estudantes/editar:id', pessoasController.setUpdate);
routes.delete('/estudantes/deletar:id', pessoasController.setDelete);

module.exports = routes;