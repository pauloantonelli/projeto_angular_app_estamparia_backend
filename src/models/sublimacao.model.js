const mongoose = require('mongoose');

const sublimacaoModel = new mongoose.Schema({
    aviso: {
        ativo: {
            type: Boolean,
            require: true,
        },
        mensagem: {
            type: String,
            require: true,
        }
    },
    poster: {
        titulo:{
            type: Array,
            require: false,
        },
        descricao: {
            type: Array,
            require: false,
        },
        imagem: {
            type: Array,
            require: true,
        }
    },
    propaganda: {
        titulo:{
            type: Array,
            require: false,
        },
        descricao: {
            type: Array,
            require: false,
        },
        imagem: {
            type: Array,
            require: true,
        },
    }
});

mongoose.model('Sublimacao', sublimacaoModel);