const { ApiError } = require('../helpers/errorHandler');
const itineraryMapper = require('../models/itinerary');
const pictureMapper = require('../models/picture');

const itineraryController = {
  // Méthode d'ajout d'un itinéraire
  async new(req, res) {
    const newItinerary = req.body;
    const itinerary = await itineraryMapper.create(newItinerary);

    // Si mon nouvel itinéraire n'a pas été créé, renvoi d'erreur.
    if (!itinerary) {
      throw new ApiError(404, 'Itinerary not added');
    }
    // Si mon itineraire a été créé et récupéré,
    // je veux ajouter l'image en utilisant ma methode uploadImg()
    if (req.files) {
      // upload de l'image de l'itineraire
      const image = await itineraryController.uploadImg(req, res);

      // puis récupérer le lien, les id user et itineraire
      const imgData = {
        title: image.title,
        link: image.path,
        user_id: req.body.id,
        itinerary_id: itinerary.id,
      };

      // upload du fichier geojson et recup de son lien
      const geoJson = await itineraryController.uploadGeoJson(req, res);

      // pour insérer tout ça dans la table picture avec la methode update()
      const imgInDb = await pictureMapper.createItiPic(imgData);
      // pour insérer tout ça dans la table picture avec la methode update()
      const geoJsonPath = await itineraryMapper.update(itinerary.id, { trace: geoJson });
      return res.json({ itinerary, imgInDb, geoJsonPath });
    }
    throw new ApiError(400, 'Itineray image not added');
  },

  // Méthode d'affichage de tous les itinéraires
  async findAll(_, res) {
    const itineraries = await itineraryMapper.findAll();
    return res.json(itineraries).status(200);
  },

  // Méthode d'affichage d'un itinéraire
  async findOne(req, res) {
    const { id } = req.params;
    const itinerary = await itineraryMapper.findByPk(id);

    if (!itinerary) {
      throw new ApiError(404, 'Itinerary not found');
    }

    return res.json(itinerary);
  },

  // Méthode de mise à jour d'un itinéraire
  async update(req, res) {
    const { id } = req.params;
    const savedItinerary = req.body;
    const itinerary = await itineraryMapper.update(id, savedItinerary);
    // const updatedItinerary = await itineraryMapper.findByPk(id);
    return res.json(itinerary).status(200);
  },

  // Méthode de suppression d'un itinéraire
  async delete(req, res) {
    const { id } = req.params;
    const itinerary = await itineraryMapper.delete(id);
    return res.status(204).json(itinerary);
  },

  uploadImg(req, res) {
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
    const imgName = `${now}_${imgUploaded.name}`;
    pathUploaded = `${__dirname}/../../public/images/${imgName}`;

    // console.log('img', imgUploaded);
    // console.log('path', pathUploaded);
    // console.log('mv', imgUploaded.mv);

    imgUploaded.mv(pathUploaded, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
    });

    const image = {
      path: `http://localhost:3000/images/${imgName}`,
      title: imgUploaded.name,
    };
    return image;
  },

  uploadGeoJson(req, res) {
    let geoUploaded = null;
    let pathUploaded = null;
    const now = Date.now();

    if (!req.files) {
      res.status(400).send({
        status: false,
        message: 'No file uploaded',
      });
    }

    geoUploaded = req.files.map;
    const pathName = `${now}_${geoUploaded.name}`;
    pathUploaded = `${__dirname}/../../public/geoJson/${pathName}`;

    geoUploaded.mv(pathUploaded, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
    });

    const geoJsonPath = `http://localhost:3000/geoJson/${pathName}`;
    return geoJsonPath;
  },

};

module.exports = itineraryController;
