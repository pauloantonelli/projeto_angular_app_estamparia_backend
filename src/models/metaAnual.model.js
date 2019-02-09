const mongoose = require('mongoose');
const anoAtual = new Date();

const metaAnualModel = mongoose.Schema({
    ano: {
        type: Date,
        default: anoAtual.getFullYear()
    },
    hora: {
        type: Number,
        require: true,
        default: 1
    },
    revisita: {
        type: Number,
        require: true,
        default: 1
    },
    revista: {
        type: Number,
        require: true,
        default: 1
    },
    livro: {
        type: Number,
        require: true,
        default: 1
    },
    broxura: {
        type: Number,
        require: true,
        default: 1
    }
});

mongoose.model('MetaAnual', metaAnualModel);