const pictureMapper = require('../models/picture');

const pictureController = {

  // Méthode d'ajout d'une image
  async new(req, res) {
    const newPicture = req.body;
    const picture = await pictureMapper.create(newPicture);
    return res.json(picture).status(201);
  },

  // Méthode d'affichage de toutes les images'
  async findAll(req, res) {
    const picture = await pictureMapper.findAll();
    return res.json(picture).status(200);
  },

  // Méthode d'affichage d'une image
  async findOne(req, res) {
    const { id } = req.params;
    const picture = await pictureMapper.findByPk(id);
    return res.json(picture).status(200);
  },

  // Méthode de mise à jour d'une image
  async update(req, res) {
    const { id } = req.params;
    const savedPicture = req.body;
    const picture = await pictureMapper.update(id, savedPicture);
    return res.json(picture).status(200);
  },

  // Méthode de suppression d'une image
  async delete(req, res) {
    const { id } = req.params;
    const picture = await pictureMapper.delete(id);
    return res.json(picture).status(200);
  },

};

module.exports = pictureController;
