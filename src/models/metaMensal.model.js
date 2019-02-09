const mongoose = require('mongoose');

const metaMensalModel = mongoose.Schema({
    mes: {
        type: String,
        require: false
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

mongoose.model('MetaMensal', metaMensalModel);