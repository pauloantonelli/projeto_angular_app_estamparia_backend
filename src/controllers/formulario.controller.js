const mongoose = require('mongoose');

const entrada = mongoose.model('Formulario');

module.exports = {
    async getAll(req, res) {
        const { page = 1 } = req.query;
        const getBusca = await entrada.paginate({}, { page: page, limit: 10 });

        return res.json(getBusca);
    },
    async getUnico(req, res) {
        const getItem = await entrada.findById(req.params.id);

        return res.json(getItem);
    },
    async setNovo(req, res) {
        const setItem = await entrada.create(req.body);

        return res.json(setItem);
    },
    async setUpdate(req, res) {
        const setItem = await entrada.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(setItem);
    },
    async setDelete(req, res) {
        const setItem = await entrada.findByIdAndRemove(req.params.id);

        return res.send(setItem);
    }
}