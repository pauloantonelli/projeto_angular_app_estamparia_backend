const mongoose = require("mongoose");
const paginate = require("mongoose-paginate");

const formularioModel = mongoose.Schema({
  formularioCliente: {
    nome: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    telefoneFixo: {
      type: Array,
      require: false
    },
    celular: {
      type: Array,
      require: true
    },
    empresa: {
      type: String,
      require: false
    },
    tipoPessoa: {
        tipo: {
            type: String,
            require: false
        },
        numero: {
            type: String,
            require: false,
        },
    },
    segmento: {
      type: String,
      require: false
    },
    servicoEscolhido: {
      type: String,
      require: false
    },
    detalhamento: {
      largura: {
        type: Number,
        require: false
      },
      altura: {
        type: Number,
        require: false
      },
      quantidade: {
        type: Number,
        require: false
      },
      cor: {
        type: String,
        require: false
      },
      mensagem: {
        type: String,
        require: false
      },
      anexo: {
        type: String,
        require: false
      }
    }
  }
});

formularioModel.plugin(paginate);

mongoose.model("Formulario", formularioModel);
