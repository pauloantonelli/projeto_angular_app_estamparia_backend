const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const pessoas = mongoose.model('Pessoas');

module.exports = {
    async getAll(req, res) {
        const { page = 1 } = req.query;
        const getItem = await pessoas.paginate({}, { page: page, limit: 10 });

        return res.json(getItem);
    },
    async getUnico(req, res) {
        const getItem = await pessoas.findById(req.params.id);

        return res.json(getItem);
    },
    async setNovo(req, res) {
        const setItem = await pessoas.create(req.body);

        return res.json(setItem);
    },
    async setUpdate(req, res) {
        const setItem = await pessoas.findByIdAndUpdate(req.params.id, req.body);

        return res.json(setItem);
    },
    async setDelete(req, res) {
        const setItem = await pessoas.findByIdAndRemove(req.params.id);

        return res.send(setItem);
    }
}