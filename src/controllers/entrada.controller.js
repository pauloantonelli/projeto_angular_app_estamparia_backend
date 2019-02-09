const mongoose = require('mongoose');

const entrada = mongoose.model('Entrada');

module.exports = {
    async getAll(req, res) {
        const { page = 1 } = req.query,
        const getBusca = await entrada.paginate({}, { page: page, limit: 10 });

        return res.json(getBusca);
    },
    async getItem(req, res) {
        const getdoUnico = await entrada.findById(req.params.id);

        return res.json(getdoUnico);
    },
    async setNovo(req, res) {
        const setItem = await entrada.create(req.body);

        return res.json(setItem);
    },
    async setUpdate(req, res) {
        const setItemUpdate = await entrada.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(setItemUpdate);
    },
    async setDelete(req, res) {
        const setItemDelete = await entrada.findByIdAndRemove(req.params.id);

        return res.send(setItemDelete);
    }
}