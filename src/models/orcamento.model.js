const mongoose = require("mongoose");

const orcamentoModel = mongoose.Schema({
  aviso: {
    ativo: {
      type: Boolean,
      require: true
    },
    mensagem: {
      type: String,
      require: true
    }
  },
  formulario: {
    titulo: {
      type: String,
      require: true
    },
    descricao: {
      type: String,
      require: true
    },
    servicos: {
      titulo: {
        type: String,
        require: true
      },
      tiposDeServicos: {
        type: Array,
        require: true,
      },
      imagens: {
        type: Array,
        require: true,
      }
    }
  },
  segmento: {
    type: Array,
    require: true
  },
  pedidoMinimo: {
    type: Number,
    require: true
  },
  mensagemDeSucesso: {
    titulo: {
      type: String,
      require: true
    },
    subtitulo: {
      type: String,
      require: true
    }
  }
});

mongoose.model("Orcamento", orcamentoModel);
