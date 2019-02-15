const mongoose = require('mongoose');

const menuModel = mongoose.Schema({
    logo: {
        type: String,
        required: true,
    }
});

mongoose.model('Menu', menuModel);