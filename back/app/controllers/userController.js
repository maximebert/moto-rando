const userMapper = require('../models/user');

const userController = {

  async main(_, res) {
    const list = await userMapper.findAll();
    res.json(list);
  },
};

module.exports = userController;
