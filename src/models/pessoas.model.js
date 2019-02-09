const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const pessoasModel = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    apelido: {
        type: String,
        require: false,
        default: ''
    },
    dia: {
        type: Date,
        require: true,
        default: Date.now
    },
    hora: {
        type: Number,
        require: false,
        default: null
    },
    minutos: {
        type: Number,
        require: false,
        default: null
    },
    revisita: {
        type: Number,
        require: false,
        default: null
    },
    revista: {
        type: Number,
        require: false,
        default: null
    },
    livros: {
        type: Number,
        require: false,
        default: null
    },
    broxura: {
        type: Number,
        require: false,
        default: null
    },
    observacoes: {
        type: String,
        require: true,
        default: ''
    }
});

pessoasModel.plugin(mongoosePaginate);

mongoose.model('Pessoas', pessoasModel);