const express = require('express');
const districtController = require('../controllers/districtController');

// Il est prévu d'ajouter la validation des données via Joi et les schemas

const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

// Routes de récupération de toutes les régions
router.route('/')
  .get(controllerHandler(districtController.findAll));

// Routes de récupération d'une région
router.route('/:id')
  .get(controllerHandler(districtController.findOne));

module.exports = router;

/**
 * GET /regions
 * @summary Get all districts
 * @tags Districts - districts management
 */
/**
 * GET /regions/{id}
 * @summary Get a one district
 * @tags Districts - districts management
 * @param {number} id.path.required - the first part of a sentence
 * @return {District} 200 - district object
 * @return {object} 404 - Input data invalid
 */
