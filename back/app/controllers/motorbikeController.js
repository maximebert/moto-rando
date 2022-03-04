const motorbikeMapper = require('../models/motorbike');

const motorbikeController = {

  // Méthode d'ajout d'une moto
  async new(req, res) {
    const newMotorbike = req.body;
    const motorbike = await motorbikeMapper.create(newMotorbike);
    return res.json(motorbike).status(201);
  },

  // Méthode daffichage de toutes les motos
  async findAll(req, res) {
    const motorbike = await motorbikeMapper.findAll();
    return res.json(motorbike).status(200);
  },

  // Méthode d'affichage d'une moto
  async findOne(req, res) {
    const { id } = req.params;
    const motorbike = await motorbikeMapper.findByPk(id);
    return res.json(motorbike).status(200);
  },

  // Méthode de mise à jour d'une moto
  async update(req, res) {
    const { id } = req.params;
    const savedMotorbike = req.body;
    const motorbike = await motorbikeMapper.update(id, savedMotorbike);
    return res.json(motorbike).status(200);
  },

  // Méthode de suppression d'une moto
  async delete(req, res) {
    const { id } = req.params;
    const motorbike = await motorbikeMapper.delete(id);
    return res.json(motorbike).status(200);
  },

};

module.exports = motorbikeController;
