const motorbikeMapper = require('../models/motorbike');

const motorbikeController = {

  async new(req, res) {
    const newMotorbike = req.body;
    const motorbike = await motorbikeMapper.create(newMotorbike);
    return res.json(motorbike).status(200);
  },

  async findAll(req, res) {
    const motorbike = await motorbikeMapper.findAll();
    return res.json(motorbike).status(200);
  },

  async findOne(req, res) {
    const { id } = req.params;
    const motorbike = await motorbikeMapper.findByPk(id);
    return res.json(motorbike).status(200);
  },

  async update(req, res) {
    const { id } = req.params;
    const savedMotorbike = req.body;
    const motorbike = await motorbikeMapper.update(id, savedMotorbike);
    return res.json(motorbike).status(200);
  },

  async delete(req, res) {
    const { id } = req.params;
    const motorbike = await motorbikeMapper.delete(id);
    return res.json(motorbike).status(200);
  },

};

module.exports = motorbikeController;
