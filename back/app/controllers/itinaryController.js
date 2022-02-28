const itinaryMapper = require('../models/itinary');

const itinaryController = {

  async new(req, res) {
    const newItinary = req.body;
    const itinary = await itinaryMapper.create(newItinary);
    return res.json(itinary).status(200);
  },

  async findAll(req, res) {
    const itinaries = await itinaryMapper.findAll();
    return res.json(itinaries).status(200);
  },

  async findOne(req, res) {
    const { id } = req.params;
    const itinary = await itinaryMapper.findByPk(id);
    return res.json(itinary).status(200);
  },

  async update(req, res) {
    const { id } = req.params;
    const savedItinary = req.body;
    const itinary = await itinaryMapper.update(id, savedItinary);
    return res.json(itinary).status(200);
  },

  async delete(req, res) {
    const { id } = req.params;
    const itinary = await itinaryMapper.delete(id);
    return res.json(itinary).status(200);
  },

};

module.exports = itinaryController;
