const mongoose = require('mongoose');

const metaMensal = mongoose.model('Orcamento');

module.exports = {
    async getAll(req, res) {
        const getItem = await metaMensal.find();

        return res.json(getItem);
    },
    async getUnico(req, res) {
        const getItem = await metaMensal.findById(req.params.id);

        return res.json(getItem);
    },
    async setNovo(req, res) {
        const setItem = await metaMensal.create(req.body);

        return res.json(setItem);
    },
    async setUpdate(req, res) {
        const setItem = await metaMensal.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(setItem);
    },
    async setDelete(req, res) {
        const setItem = await metaMensal.findByIdAndRemove(req.params.id);

        return res.json(setItem);
    }
}