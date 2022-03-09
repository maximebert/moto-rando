const { ApiError } = require('../helpers/errorHandler');
const itineraryMapper = require('../models/itinerary');

const itineraryController = {
  // Méthode d'ajout d'un utilisateur
  async new(req, res) {
    const newItinerary = req.body;
    const itinerary = await itineraryMapper.create(newItinerary);
    return res.json(itinerary).status(201);
  },

  // Méthode d'affichage de tous les utilisateurs
  async findAll(req, res) {
    const itineraries = await itineraryMapper.findAll();
    return res.json(itineraries).status(200);
  },

  // Méthode d'affichage d'un utilisateur
  async findOne(req, res) {
    const { id } = req.params;
    const itinerary = await itineraryMapper.findByPk(id);

    if (!itinerary) {
      throw new ApiError(404, 'Itinerary not found');
    }

    return res.json(itinerary);
  },

  // Méthode de mise à jour d'un utilisateur
  async update(req, res) {
    const { id } = req.params;
    const savedItinerary = req.body;
    const itinerary = await itineraryMapper.update(id, savedItinerary);
    // const updatedItinerary = await itineraryMapper.findByPk(id);
    return res.json(itinerary).status(200);
  },

  // Méthode de suppression d'un utilisateur
  async delete(req, res) {
    const { id } = req.params;
    const itinerary = await itineraryMapper.delete(id);
    return res.json(itinerary).status(204);
  },

  async upload(req, res) {
    if (!req.files) {
      res.send({
        status: false,
        message: 'No file uploaded',
      });
    } else {
      const imageUploaded = req.files.photo;
      imageUploaded.mv(`../../images/${imageUploaded.name}`);

      const image = res.send({
        status: true,
        message: `${req.files.photo.name} uploaded with success`,
        data: {
          name: imageUploaded.name,
          mimetype: imageUploaded.mimetype,
          size: imageUploaded.size,
        },
      });
      console.log('image', image.files);
      return image;
    }
  },

};

module.exports = itineraryController;
