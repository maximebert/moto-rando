const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');
const userMapper = require('../models/user');
const { ApiError } = require('../helpers/errorHandler');

const userController = {
  async inscription(req, res) {
    try {
      const newAlias = req.body.alias;
      const user = await userMapper.findByAlias(newAlias);
      if (user) {
        return res.json('Cet alias est déjà utilisé par un utilisateur.').status(500);
      }
      // - 2: format d'email valide
      if (!emailValidator.validate(req.body.email)) {
        return res.render('signup', {
          error: "Cet email n'est pas valide.",
        });
      }
      // - 3: le mdp et la confirmation ne correspondent pas
      if (req.body.password !== req.body.confirmPassword) {
        return res.render('signup', {
          error: 'La confirmation du mot de passe ne correspond pas.',
        });
      }
      // 5 - On crypt
      const salt = await bcrypt.genSalt(10);
      const encryptedPassword = await bcrypt.hash(req.body.password, salt);

      const { alias, email, presentation } = req.body;
      const hashedPassword = encryptedPassword;

      const newUser = await userMapper.create(alias, email, hashedPassword, presentation);
      return res.status(201).json(newUser);
    } catch (err) {
      return res.status(500).send(err.message);
    }
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
