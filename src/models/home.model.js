const mongoose = require('mongoose');

const homeModel = new mongoose.Schema({
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
    slides: {
        titulo: {
            type: Array,
            require: true,
        },
        subtitulo: {
            type: Array,
            require: true,
        },
        imagens: {
            type: Array,
            require: true,
        },
    },
    titulo: {
        type: String,
        require: true,
    },
    subtitulo: {
        type: String,
        require: true,
    },
    propaganda01: {
        imagem: {
            type: String,
            require: true,
        },
        titulo: {
            type: String,
            require: true,
        },
        descricao: {
            type: String,
            require: true,
        },
        subtitulo: {
            type: String,
            require: true,
        },
        lista: {
            type: Array,
            require: true,
        },
        btnTxt: {
            type: String,
            require: true,
        }
    },
    propaganda02: {
        imagem: {
            type: String,
            require: true,
        },
        titulo: {
            type: String,
            require: true,
        },
        descricao: {
            type: String,
            require: true,
        },
        subtitulo: {
            type: String,
            require: true,
        },
        lista: {
            type: Array,
            require: true,
        },
        btnTxt: {
            type: String,
            require: true,
        }
    },
});

mongoose.model('Home', homeModel);