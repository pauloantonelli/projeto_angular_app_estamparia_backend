const mongoose = require('mongoose');

const menuModel = mongoose.Schema({
    logo: {
        imagem: {
            type: String,
            required: true,
        },
    }
});

mongoose.model('Menu', menuModel);