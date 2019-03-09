const mongoose = require('mongoose');

const contatoModel = mongoose.Schema({
    telefones: {
        type: Array,
        default: ['11 1234-5678', '11 8765-4321'],
        require: true,
    },
    atendimento: {
        diaDaSemana: {
            type: String,
            default: 'Segunda a Sexta',
            require: true,
        },
        horario: {
            type: String,
            default: 'Das 9h00 ás 18h00',
            require: true,
        }
    },
    endereco: {
        rua: {
            type: String,
            default: 'Rua Xavier Krauss',
            require: true,
        },
        numero: {
            type: Number,
            default: 001,
            require: true
        },
        bairro: {
            type: String,
            default: 'Vila Leopoldina',
            require: true,
        },
        cep: {
            type: String,
            default: '05313-000',
            require: true,
        },
        estado: {
            type: String,
            default: 'São Paulo - SP',
            require: true,
        }
    },
});

mongoose.model('Contato', contatoModel);