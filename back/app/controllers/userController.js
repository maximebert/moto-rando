const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');
const userMapper = require('../models/user');
const {
  ApiError,
} = require('../helpers/errorHandler');

const userController = {

  // Méthode d'ajout d'un utilisateur
  async inscription(req, res) {
    try {
      const newAlias = req.body.alias;
      // On vérifie en BDD si le pseudo existe déjà
      const user = await userMapper.findByAlias(newAlias);
      // S'il existe, message d'erreur
      if (user) {
        return res.status(401).json('Cet alias est déjà utilisé par un utilisateur.');
      }
      // Vérification du format de l'email
      if (!emailValidator.validate(req.body.email)) {
        return res.render('signup', {
          error: "Cet email n'est pas valide.",
        });
      }
      // Vérification entre Password et confirmation de Password lors de la création du Password
      if (req.body.password !== req.body.confirmPassword) {
        return res.render('signup', {
          error: 'La confirmation du mot de passe ne correspond pas.',
        });
      }
      // Cryptage du Password
      const salt = await bcrypt.genSalt(10);
      const encryptedPassword = await bcrypt.hash(req.body.password, salt);

      const {
        alias,
        email,
        presentation,
      } = req.body;
      const hashedPassword = encryptedPassword;

      const newUser = await userMapper.create(alias, email, hashedPassword, presentation);
      return res.status(201).json(newUser);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  },

  // Méthode d'affichage d'un utilisateur
  async findOne(req, res) {
    const {
      id,
    } = req.params;
    // On récupère les informations de l'utilisateur
    const userDatas = await userMapper.findByPk(id);

    if (!userDatas) {
      throw new ApiError(403, 'User not found');
    }

    const itinerariesInfos = [];

    // Rreforlmatage du json pour affichage de tous les éléments du profil de manière organisée
    userDatas.forEach((element) => {
      itinerariesInfos.push({
        title: element.itinerary_title,
        pics: element.itipic,
      });
    });

    const userInfos = {
      user_id: userDatas[0].user_id,
      user_alias: userDatas[0].user_alias,
      user_email: userDatas[0].user_email,
      user_presentation: userDatas[0].user_presentation,
      motorbike_id: userDatas[0].motorbike_id,
      motorbike_brand: userDatas[0].motorbike_brand,
      motorbike_model: userDatas[0].motorbike_model,
      motopic_title: userDatas[0].motopic_title,
      motopic_link: userDatas[0].motopic_link,
      itineraries: itinerariesInfos,
    };

    return res.json(userInfos).status(200);
  },

  // Méthode de mise à jour d'un utilisateur
  async update(req, res) {
    console.log(req.body);
    const {
      id,
    } = req.params;
    const savedUser = req.body;
    // const salt = await bcrypt.genSalt(10);
    // savedUser.password = await bcrypt.hash(req.body.password, salt);
    const user = await userMapper.update(id, savedUser);
    // delete user.password;
    console.log(user);
    return res.status(200).json(user);
  },

  // Méthode de suppression d'un utilisateur
  async delete(req, res) {
    const {
      id,
    } = req.params;
    const user = await userMapper.delete(id);
    return res.json(user).status(200);
  },

};

module.exports = userController;
