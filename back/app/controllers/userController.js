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
    const userDatas = await userMapper.findByPk(id);

    if (!userDatas) {
      throw new ApiError(404, 'User not found');
    }

    let itinerariesInfos;
    const itinerariesPicTitles = [];
    const itinerariesPicLinks = [];

    userDatas.forEach(element => {
      element.itipic_title.forEach(el => {
        itinerariesPicTitles.push(el);
      });
    });

    userDatas.forEach(element => {
      element.itipic_link.forEach(el => {
        itinerariesPicLinks.push(el);
      });
    });

    userDatas.forEach(element => {
      itinerariesInfos = {
        itinerary_title: element.itinerary_title,
        itipic: {
          itipic_title: itinerariesPicTitles,
          itipic_link: itinerariesPicLinks,
        },
      };
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
