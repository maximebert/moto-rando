const { ApiError } = require('../helpers/errorHandler');
const itineraryMapper = require('../models/itinerary');

const itineraryController = {

  async new(req, res) {
    const newItinerary = req.body;
    const itinerary = await itineraryMapper.create(newItinerary);
    return res.json(itinerary).status(200);
  },

  async findAll(req, res) {
    const itineraries = await itineraryMapper.findAll();
    return res.json(itineraries).status(200);
  },

  async findOne(req, res) {
    const { id } = req.params;
    const itinerary = await itineraryMapper.findByPk(id);

    if (!itinerary) {
      throw new ApiError(404, 'Itinary not found');
    }

    return res.json(itinerary);
  },

  async update(req, res) {
    const { id } = req.params;
    const savedItinerary = req.body;
    const itinerary = await itineraryMapper.update(id, savedItinerary);
    return res.json(itinerary).status(200);
  },

  async delete(req, res) {
    const { id } = req.params;
    const itinerary = await itineraryMapper.delete(id);
    return res.json(itinerary).status(204);
  },

};

module.exports = itineraryController;
