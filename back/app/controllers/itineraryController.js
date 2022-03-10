// const { path } = require('express/lib/application');
const { ApiError } = require('../helpers/errorHandler');
const itineraryMapper = require('../models/itinerary');

const itineraryController = {
  // Méthode d'ajout d'un utilisateur
  async new(req, res) {
    const newItinerary = req.body;
    const itinerary = await itineraryMapper.create(newItinerary);

    // une fois mon itineraire créé récupéré,
    // je veux ajouter la ou les images en utilisant ma methode upload()
    // puis récupérer le lien, les id user et itineraire
    // pour insérer tout ça dans la table picture avec la methode update()

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

  upload(req, res) {
    let imgUploaded = null;
    let pathUploaded = null;
    const now = Date.now();

    if (!req.files) {
      res.status(400).send({
        status: false,
        message: 'No file uploaded',
      });
    }

    imgUploaded = req.files.photo;
    pathUploaded = `${__dirname}/../images/${now}_${imgUploaded.name}`;

    // console.log('img', imgUploaded);
    // console.log('path', pathUploaded);
    // console.log('mv', imgUploaded.mv);

    imgUploaded.mv(pathUploaded, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
    });

    console.log(imgUploaded);

    res.json({
      path: pathUploaded,

      status: true,
      message: `${req.files.photo.name} uploaded with success`,
      data: {
        name: imgUploaded.name,
        mimetype: imgUploaded.mimetype,
        size: imgUploaded.size,
      },

    });
  },

};

module.exports = itineraryController;
