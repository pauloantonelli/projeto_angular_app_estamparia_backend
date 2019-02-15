const mongoose = require('mongoose');

const sublimacaoModel = new mongoose.Schema({
    aviso: {
        ativo: {
            type: Boolean,
            default: false,
            require: true,
        },
        mensagem: {
            type: String,
            default: 'Quadro de avisos',
            require: true,
        }
    },
    poster: {
        titulo:{
            type: String,
            default: 'Sublimação',
            require: false,
        },
        descricao: {
            type: String,
            default: 'Impressão de estampas para Sublimação',
            require: false,
        },
        imagem: {
            type: String,
            default: 'https://cdn-images-1.medium.com/max/1600/1*aeWo6e6FC8InJwBl3TmpDw.jpeg',
            require: true,
        }
    },
    propaganda01: {
        titulo:{
            type: String,
            default: 'Estampas para sublimação',
            require: false,
        },
        descricao: {
            type: String,
            default: 'A arte de imprimir estampas por sublimação é um processo de transferência da imagem do papel (offset / digital) para tecidos e materiais de base sintética (poliéster/EVA etc..) ou bases mistas (poliéster/algodão). O processo é dividido em duas etapas: a impressão do papel transfer(digital ou offset) e a estamparia (prensa térmica ou um cilindro – média de 200° C) em fibras têxteis. A tinta para sublimação que está no papel transfer em seu estado sólido entra em contato com o tecido ou superfície da imagem e através do calor e pressão, evapora penetrando nas fibras e estrutura dos materiais. A transferência da estampa sublimática acontece quando a tinta contida no papel sofre a pressão e alta temperatura por 20 segundos. O resultado é expressivo, sejam em peças com bases têxteis com elevada composição de poliéster, como tecidos ou malha.',
            require: false,
        },
        imagem: {
            type: String,
            default: 'https://cdn-images-1.medium.com/max/1600/1*aeWo6e6FC8InJwBl3TmpDw.jpeg',
            require: true,
        },
    }
});

mongoose.model('Sublimacao', sublimacaoModel);