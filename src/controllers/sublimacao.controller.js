const mongoose = require('mongoose');

const pessoas = mongoose.model('Sublimacao');

module.exports = {
    async getAll(req, res) {
        const getItem = await pessoas.find();

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