const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const emailPromoModel = mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
});

emailPromoModel.plugin(mongoosePaginate);

mongoose.model('Email', emailPromoModel);
