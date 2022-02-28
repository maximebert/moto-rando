const userMapper = require('../models/user');
const { ApiError } = require('../helpers/errorHandler');

const userController = {

  //   async connection(req, res) {

  //   },

  async inscription(req, res) {
    const newUser = req.body;
    const user = await userMapper.create(newUser);
    return res.json(user).status(200);
  },

  async findOne(req, res) {
    const { id } = req.params;
    const user = await userMapper.findByPk(id);

    if (!user) {
      throw new ApiError(404, 'User not found');
    }

    return res.json(user).status(200);
  },

  async update(req, res) {
    const { id } = req.params;
    const savedUser = req.body;
    const user = await userMapper.update(id, savedUser);
    return res.json(user).status(200);
  },

  async delete(req, res) {
    const { id } = req.params;
    const user = await userMapper.delete(id);
    return res.json(user).status(200);
  },

};

module.exports = userController;
