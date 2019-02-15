const mongoose = require('mongoose');

const orcamentoModel = mongoose.Schema({
    aviso: {
        ativo: {
            type: Boolean,
            default: false,
            require: false,
        },
        mensagem: {
            type: String,
            default: 'Quadro de avisos',
            require: false,
        }
    },
    formulario: {
        titulo: {
            type: String,
            default: 'Orçamento',
            require: true,
        },
        descricao: {
            type: String,
            default: 'Pedir um orçamento expresso para estamparia Pegadas',
            require: true,
        },
        servicos: {
            titulo: {
                type: String,
                default: 'Escolha o serviço que deseja:',
                require: true,
            },
            tiposServicos: {
                type: Array,
                default: ['Impressão de transfer', 'Estampa em rolo', 'Estampa localizada'],
                require: true,
            },
            imagens: {
                type: Array,
                default: ['https://cdn-images-1.medium.com/max/1600/1*aeWo6e6FC8InJwBl3TmpDw.jpeg', 'https://cdn-images-1.medium.com/max/1600/1*aeWo6e6FC8InJwBl3TmpDw.jpeg', 'https://cdn-images-1.medium.com/max/1600/1*aeWo6e6FC8InJwBl3TmpDw.jpeg'],
                require: true,
            }
        },
        segmento: {
            type: Array,
            default: ['fantasia / brinquedos', 'sportwear / fitness', 'confecção / modinha', 'decoração', 'surf / skate', 'promocional / brindes', 'magazina / private label', 'camisa uniforme de futebol'],
            require: true,
        },
        detalhamento: {
            type: String,
            default: 'Detalhamento técnico da estampa',
            require: true,
        },
    }
});

mongoose.model('Orcamento', orcamentoModel);