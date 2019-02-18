const mongoose = require('mongoose');
const paginate = require('mongoose-paginate');

const formularioModel = mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    telefone: {
        type: Number,
        require: false,
    },
    celular: {
        type: Number,
        require: false,
    },
    empresa: {
        type: String,
        require: false,
    },
    cpf: {
        type: Number,
        require: false,
    },
    cnpj: {
        type: Number,
        require: false,
    },
    segmento: {
        type: String,
        require: true,
    },
    tipoServico: {
        type: String,
        require: false,
    },
    detalhamento: {
        largura: {
            type: Number,
            require: false,
        },
        altura: {
            type: Number,
            require: false,
        },
        quantidade: {
            type: Number,
            require: false,
        },
        cor: {
            type: String,
            require: false,
        },
        mensagem: {
            type: String,
            require: false,
        },
        anexo: {
            type: String,
            require: false,
        },
    }
});

formularioModel.plugin(paginate);

mongoose.model('Formulario', formularioModel);
