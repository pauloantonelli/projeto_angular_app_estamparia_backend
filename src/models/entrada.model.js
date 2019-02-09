const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const entradaModel = new mongoose.Schema({
    dia: {
        type: Date,
        default: Date.now
    },
    horas: {
        type: Number,
        required: false,
        default: null
    },
    minutos: {
        type: Number,
        required: false,
        default: null
    },
    revisitas: {
        type: Number,
        required: false,
        default: null
    },
    revistas: {
        type: Number,
        required: false,
        default: null
    },
    livros: {
        type: Number,
        required: false,
        default: null
    },
    broxuras: {
        type: Number,
        required: false,
        default: null
    },
    observacoes: {
        type: String,
        required: false,
        default: ''
    }
});

entradaModel.plugin(mongoosePaginate);

mongoose.model('Entrada', entradaModel);