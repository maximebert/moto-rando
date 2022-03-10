const express = require('express');
const districtController = require('../controllers/districtController');
const validate = require('../validation');
const districtSchema = require('../validation/schemas/district');
// Il est prévu d'ajouter la validation des données via Joi et les schemas

const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

// Routes de récupération de toutes les régions
router.route('/')
  .get(validate(districtSchema, 'query'), controllerHandler(districtController.findAll));

// Routes de récupération d'une région
router.route('/:id')
  .get(validate(districtSchema, 'query'), controllerHandler(districtController.findOne));

module.exports = router;
