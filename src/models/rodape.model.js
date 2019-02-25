const mongoose = require('mongoose');

const rodapeModel = mongoose.Schema({
    rodape: {
        titulo: {
            type: String,
            require: true,
        },
        subtitulo: {
            type: String,
            require: true,
        },
        btnTxt: {
            type: String,
            require: true,
        },
        sucesso: {
            type: String,
            require: true,
        }
    },
    redesSociais: {
        icones: {
            type: Array,
            require: true,
        },
        links: {
            type: Array,
            require: true,
        }
    }
});

mongoose.model('Rodape', rodapeModel);
