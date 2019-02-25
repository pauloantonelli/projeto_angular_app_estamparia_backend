const mongoose = require('mongoose');

const portifolioModel = mongoose.Schema({
    portifolio: {
        titulo: {
            type: String,
            require: true,
        },
        subtitulo: {
            type: String,
            require: true,
        },
        imagens: {
            type: Array,
            require: true,
        },
    }
});

mongoose.model('Portifolio', portifolioModel);
