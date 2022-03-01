const bcrypt = require('bcrypt');
const userMapper = require('../models/user');

const connectController = {

  async connexion(req, res) {
    const userAlias = req.body.alias;
    try {
      // on tente de récupérer l'utilisateur qui possède l'id
      const user = await userMapper.findByAlias(userAlias);
      if (!user) {
        return res.json("Cet user n'existe pas.");
      }
      // Si on a un utilisateur, on teste si le mot de passe est valide
      const validPwd = await bcrypt.compare(req.body.password, user.password);
      if (!validPwd) {
        return res.json("Ce n'est pas le bon mot de passe.");
      } return res.status(200).json(user);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  },

};

module.exports = connectController;
