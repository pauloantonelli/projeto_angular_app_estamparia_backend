const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const mensagemContatoModel = mongoose.Schema({
    mensagem: {
        nome: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        telefone: {
            type: String,
            require: true
        },
        tipoPessoa: {
          tipo: {
            type: String,
            require: true
        },
          numero: {
            type: String,
            require: true
        },
        },
        corpoMensagem: {
            type: String,
            require: true
        },
      }
});

mensagemContatoModel.plugin(mongoosePaginate);

mongoose.model('MensagemContato', mensagemContatoModel);