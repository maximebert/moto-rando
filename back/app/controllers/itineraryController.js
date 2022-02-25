const itinaryMapper = require('../models/itinary');

const itinaryController = {

  async main(_, res) {
    const list = await itinaryMapper.findAll();
    res.json(list);
  },
};

module.exports = itinaryController;
