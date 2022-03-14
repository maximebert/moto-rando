const motorbikeMapper = require('../models/motorbike');

const motorbikeController = {

  // Méthode d'ajout d'une moto
  async new(req, res) {
    const newMotorbike = req.body;
    const motorbike = await motorbikeMapper.create(newMotorbike);
    return res.status(201).json(motorbike);
  },

  // Méthode daffichage de toutes les motos
  async findAll(req, res) {
    const motorbike = await motorbikeMapper.findAll();
    return res.status(200).json(motorbike);
  },

  // Méthode d'affichage d'une moto
  async findOne(req, res) {
    const { id } = req.params;
    const motorbike = await motorbikeMapper.findByPk(id);
    return res.status(200).json(motorbike);
  },

  // Méthode de mise à jour d'une moto
  async update(req, res) {
    const { id } = req.params;
    const savedMotorbike = req.body;
    const motorbike = await motorbikeMapper.update(id, savedMotorbike);
    return res.status(200).json(motorbike);
  },

  // Méthode de suppression d'une moto
  async delete(req, res) {
    const { id } = req.params;
    const motorbike = await motorbikeMapper.delete(id);
    return res.status(200).json(motorbike);
  },

};

module.exports = motorbikeController;
