const mongoose = require('mongoose');

const preRodapePromoModel = mongoose.Schema({
    certificado01: {
        titulo: {
            type: String,
            require: true,
        },
        img: {
            type: String,
            require: true,
        },
        descricao: {
            type: String,
            require: true,
        },
    },
    certificado02: {
        titulo: {
            type: String,
            require: true,
        },
        img: {
            type: String,
            require: true,
        },
        descricao: {
            type: String,
            require: true,
        },
    },
});

mongoose.model('Pre-Rodape', preRodapePromoModel);
