const mongoose = require('mongoose');

const homeModel = new mongoose.Schema({
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
    slide: {
        titulo: {
            type: String,
            default: 'Titulo Slide',
            require: false,
        },
        subtitulo: {
            type: String,
            default: 'subtitulo do slide',
            require: false,
        },
        imagens: {
            type: Array,
            default: ['https://cdn-images-1.medium.com/max/1600/1*aeWo6e6FC8InJwBl3TmpDw.jpeg', 'https://cdn-images-1.medium.com/max/1600/1*aeWo6e6FC8InJwBl3TmpDw.jpeg', 'https://cdn-images-1.medium.com/max/1600/1*aeWo6e6FC8InJwBl3TmpDw.jpeg'],
            require: true,
        },
    },
    titulo: {
        type: String,
        default: 'Estamparia digital',
        require: true,
    },
    subtitulo: {
        type: String,
        default: 'Pegadas - Sublimação é a nossa arte',
        require: true,
    },
    propaganda01: {
        imagem: {
            type: String,
            default: 'https://cdn-images-1.medium.com/max/1600/1*aeWo6e6FC8InJwBl3TmpDw.jpeg',
            require: true,
        },
        titulo: {
            type: String,
            default: 'Sublimação com tecnologia, qualidade e velocidade',
            require: true,
        },
        descricao: {
            type: String,
            default: 'A produção de moda está cada vez mais personalizada. Na Dharma Prints as possibilidades para estampar suas coleções e produtos são infinitas. Nossa estamparia digital é especializada em imprimir transfer e estampas em tecido. Temos uma história de trabalho de duas décadas, marcada pela qualidade, responsabilidade e fidelidade aos clientes.',
            require: true,
        }
    },
    propaganda02: {
        titulo: {
            type: String,
            default: 'ESTAMPAMOS TECIDOS E PRODUTOS DE DIVERSOS SEGMENTOS',
            require: true,
        },
        lista: {
            type: Array,
            default: ['Moda Fashion', 'Sportswear e Fitnesswear', 'Brinquedos e Fantasia', 'Decoração', 'Brindes Promocionais'],
            require: true,
        },
        btnTxt: {
            type: String,
            default: 'Conheça a Pegadas Estamparia',
            require: true,
        }
    },
    propaganda03: {
        imagem: {
            type: String,
            default: 'https://cdn-images-1.medium.com/max/1600/1*aeWo6e6FC8InJwBl3TmpDw.jpeg',
            require: true,
        },
        titulo: {
            type: String,
            default: 'Estamparia localizada ou em rolo de tecido',
            require: true,
        },
        descricao: {
            type: String,
            default: 'Sublimação sob demanda com tecnologia inovadora que permite produzir qualquer quantidade de estampas com cores incríveis, qualidade e preços acessíveis. Tecidos sintéticos podem ser estampados por meio da técnica de sublimação. Conte consco desde o início do processo: design da estampa, prova de cor e protótipo e estamparia.',
            require: true,
        }
    },
    propaganda04: {
        titulo: {
            type: String,
            default: 'ESTRUTURA DA ESTAMPARIA DIGITAL',
            require: true,
        },
        lista: {
            type: Array,
            default: ['Impressão offset de transfer para sublimação em grande volume', 'Plotter digital para estampar para qualquer quantidade', 'Design e tratamento de estampas para sublimação', 'Assessoria de design, prova de cores e protótipos', 'Estamparia de tecido em rolo ou localizada'],
            require: true,
        },
        btnTxt: {
            type: String,
            default: 'Estamparia full service',
            require: true,
        }
    },
});

mongoose.model('Home', homeModel);