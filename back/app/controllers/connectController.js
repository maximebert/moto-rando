const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userMapper = require('../models/user');

const connectController = {
  async connexion(req, res) {
    const userMail = req.body.email;
    try {
      // on vérifie dans la BDD si l'utilisateur existe grâce à son email
      const user = await userMapper.findByMail(userMail);
      // Si pas d'utilisateur, on renvoie un message d'ereur
      if (!user) {
        return res.status(403).json("Cet utilisateur n'existe pas.");
      }
      // Si on a un utilisateur, on teste si le mot de passe est valide
      const validPwd = await bcrypt.compare(req.body.password, user.password);
      // Si le mot de passe ne correspond pas, message d'erreur
      if (!validPwd) {
        return res.status(403).json("Le mot de passe et l'email ne correspondent pas.");
      }
      // Si c'est valide, on renvoie l'utilisateur après avoir enlever le mot de passe
      delete user.password;

      const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { algorithm: 'HS256', expiresIn: '2h' });

      return res.status(200).json({ accessToken, user });

      // return res.status(200).json(user);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  },
};

module.exports = connectController;
