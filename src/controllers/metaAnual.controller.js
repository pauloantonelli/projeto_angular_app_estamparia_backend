const mongoose = require('mongoose');

const metaAnual = mongoose.model('MetaAnual');

module.exports = {
    async getAll(req, res) {
        const getBusca = await metaAnual.find();

        return res.json(getBusca);
    },
    async getUnico(req, res) {
        const getItem = await metaAnual.findById(req.id);

        return res.json(getItem);
    },
    async setNovo(req, res) {
        const setItem = await metaAnual.create(req.body);

        return res.json(setItem);
    },
    async setUpdate(req, res) {
        const setItem = await metaAnual.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(setItem);
    },
    async setDelete(req, res) {
        const setItem = await metaAnual.findByIdAndRemove(req.params.id);

        return res.send(setItem);
    }
}