const express = require('express');
const homeController = require('./controllers/home.controller');
const menuController = require('./controllers/menu.controller');
const orcamentoController = require('./controllers/orcamento.controller');
const sublimacaoController = require('./controllers/sublimacao.controller');
const contatoController = require('./controllers/contato.controller');
const mensagemContatoController = require('./controllers/mensagem-contato.controller');
const portifolioController = require('./controllers/portifolio.controller');
const formularioController = require('./controllers/formulario.controller');
const emailPromoController = require('./controllers/email.controller');
const preRodapeController = require('./controllers/pre-rodape.controller');
const rodapeController = require('./controllers/rodape.controller');

const routes = express.Router();

// home
routes.get('/home/todos', homeController.getAll);
routes.get('/home/buscar/:id', homeController.getUnico);
routes.post('/home/inserir', homeController.setNovo);
routes.put('/home/editar/:id', homeController.setUpdate);
routes.delete('/home/deletar/:id', homeController.setDelete);

// menu
routes.get('/menu/todos', menuController.getAll);
routes.get('/menu/buscar/:id', menuController.getUnico);
routes.post('/menu/inserir', menuController.setNovo);
routes.put('/menu/editar/:id', menuController.setUpdate);
routes.delete('/menu/deletar/:id', menuController.setDelete);

// orcamento
routes.get('/orcamento/todos', orcamentoController.getAll);
routes.get('/orcamento/buscar/:id', orcamentoController.getUnico);
routes.post('/orcamento/inserir', orcamentoController.setNovo);
routes.put('/orcamento/editar/:id', orcamentoController.setUpdate);
routes.delete('/orcamento/deletar/:id', orcamentoController.setDelete);

// sublimacao
routes.get('/sublimacao/todos', sublimacaoController.getAll);
routes.get('/sublimacao/buscar/:id', sublimacaoController.getUnico);
routes.post('/sublimacao/inserir', sublimacaoController.setNovo);
routes.put('/sublimacao/editar/:id', sublimacaoController.setUpdate);
routes.delete('/sublimacao/deletar/:id', sublimacaoController.setDelete);

// contato
routes.get('/contato/todos', contatoController.getAll);
routes.get('/contato/buscar/:id', contatoController.getUnico);
routes.post('/contato/inserir', contatoController.setNovo);
routes.put('/contato/editar/:id', contatoController.setUpdate);
routes.delete('/contato/deletar/:id', contatoController.setDelete);

// mensagem contato
routes.get('/mensagem-contato/todos', mensagemContatoController.getAll);
routes.get('/mensagem-contato/buscar/:id', mensagemContatoController.getUnico);
routes.post('/mensagem-contato/inserir', mensagemContatoController.setNovo);
routes.put('/mensagem-contato/editar/:id', mensagemContatoController.setUpdate);
routes.delete('/mensagem-contato/deletar/:id', mensagemContatoController.setDelete);

// portifolio
routes.get('/portifolio/todos', portifolioController.getAll);
routes.get('/portifolio/buscar/:id', portifolioController.getUnico);
routes.post('/portifolio/inserir', portifolioController.setNovo);
routes.put('/portifolio/editar/:id', portifolioController.setUpdate);
routes.delete('/portifolio/deletar/:id/', portifolioController.setDelete);

// formulario
routes.get('/formulario/todos', formularioController.getAll);
routes.get('/formulario/buscar/:id', formularioController.getUnico);
routes.post('/formulario/inserir', formularioController.setNovo);
routes.put('/formulario/editar/:id', formularioController.setUpdate);
routes.delete('/formulario/deletar/:id', formularioController.setDelete);

// promo via email
routes.get('/email/todos', emailPromoController.getAll);
routes.get('/email/buscar/:id', emailPromoController.getUnico);
routes.post('/email/inserir', emailPromoController.setNovo);
routes.put('/email/editar/:id', emailPromoController.setUpdate);
routes.delete('/email/deletar/:id', emailPromoController.setDelete);

// pre rodape
routes.get('/pre-rodape/todos', preRodapeController.getAll);
routes.get('/pre-rodape/buscar/:id', preRodapeController.getUnico);
routes.post('/pre-rodape/inserir', preRodapeController.setNovo);
routes.put('/pre-rodape/editar/:id', preRodapeController.setUpdate);
routes.delete('/pre-rodape/deletar/:id', preRodapeController.setDelete);

// rodape
routes.get('/rodape/todos', rodapeController.getAll);
routes.get('/rodape/buscar/:id', rodapeController.getUnico);
routes.post('/rodape/inserir', rodapeController.setNovo);
routes.put('/rodape/editar/:id', rodapeController.setUpdate);
routes.delete('/rodape/deletar/:id', rodapeController.setDelete);
module.exports = routes;