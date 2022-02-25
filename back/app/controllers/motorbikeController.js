const motorbikeMapper = require('../models/motorbike');

const motorbikeController = {

  async main(_, res) {
    const list = await motorbikeMapper.findByPk();
    res.json(list);
  },
};

module.exports = motorbikeController;
