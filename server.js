const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

//inicia a aplicacao
const app = express();

//aplica as regras de cors
app.use(cors());

//instrui a aplicacao a trabalhar com json
app.use(express.json());

//inicia e conecta no banco de dados
mongoose.connect('mongodb://localhost:27017/estamparia-pegadas', { useNewUrlParser: true });

//instancia todos os modelos da aplicacao
requireDir('./src/models');

//instancia as rotas da aplicacao
app.use('/api', require('./src/app.routes'));

//fica escutando as requisicoes na porta definida
app.listen(3002);
