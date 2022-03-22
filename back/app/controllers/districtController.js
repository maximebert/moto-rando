const districtMapper = require('../models/district');

const districtController = {

  // Méthode daffichage de toutes les régions
  async findAll(_, res) {
    const district = await districtMapper.findAll();
    return res.status(200).json(district);
  },

  // Méthode d'affichage d'une région
  async findOne(req, res) {
    const { id } = req.params;
    const district = await districtMapper.findByPk(id);
    return res.status(200).json(district);
  },

};

module.exports = districtController;
