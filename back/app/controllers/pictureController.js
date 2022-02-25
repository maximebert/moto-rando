const pictureMapper = require('../models/picture');

const pictureController = {

  async main(_, res) {
    const list = await pictureMapper.findByPk();
    res.json(list);
  },
};

module.exports = pictureController;
