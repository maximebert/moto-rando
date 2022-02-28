const pictureMapper = require('../models/picture');

const pictureController = {

  async new(req, res) {
    const newPicture = req.body;
    const picture = await pictureMapper.create(newPicture);
    return res.json(picture).status(200);
  },

  async findAll(req, res) {
    const picture = await pictureMapper.findAll();
    return res.json(picture).status(200);
  },

  async findOne(req, res) {
    const { id } = req.params;
    const picture = await pictureMapper.findByPk(id);
    return res.json(picture).status(200);
  },

  async update(req, res) {
    const { id } = req.params;
    const savedPicture = req.body;
    const picture = await pictureMapper.update(id, savedPicture);
    return res.json(picture).status(200);
  },

  async delete(req, res) {
    const { id } = req.params;
    const picture = await pictureMapper.delete(id);
    return res.json(picture).status(200);
  },

};

module.exports = pictureController;
