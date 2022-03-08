const express = require('express');
const multer = require('multer');

const fs = require('fs');
const { promisify } = require('util');
const pipeline = promisify(require('stream').pipeline);

const pictureController = require('../controllers/pictureController');

// Il est prévu d'ajouter la validation des données via Joi et les schemas

const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

const upload = multer();
// Routes de récupération de tous les images et d'ajout d'une image
router.route('/')
  .get(controllerHandler(pictureController.findAll))
  .post(upload.single('file'), async (req, res, next) => {
    const now = Date.now();
    const {
      file, // On récupère le fichier sélectionné en front
      body: { name }, // on récupère les champs du formulaire
    } = req;

    if (file.detectedFileExtension !== '.jpg') {
      next(new Error('invalid file type')); // Si le fichier n'a pas l'exteniosn jpg, on renvoie une erreur
    }

    const fileName = `${name}_${now}${file.detectedFileExtension}`;

    await pipeline(
      file.stream,
      fs.createWriteStream(`${__dirname}/../../../front/src/assets/images/${fileName}`),
    );

    res.send(`File Uploaded as ${fileName}`);
  }, controllerHandler(pictureController.new));

// Routes de récupération, de mise à jour ou de suppression d'1 image
router.route('/:id')
  .get(controllerHandler(pictureController.findOne))
  .patch(controllerHandler(pictureController.update))
  .delete(controllerHandler(pictureController.delete));

module.exports = router;

// /**
//  *  * GET /
//      * @summary Get a picture
//      * @tags Generate - Routes to get all pictures
//      * @param {string} request.query - the first part of a sentence
//      * @returns {pictureController} 200 - picture object
//      * @returns {Error} 404 - Input data invalid
//  */

// /**
//  * * POST
//      * @summary Send new word and get a picture
//      * @tags Store - Routes to save end get a itinerary
//      * @param {string} body.required - the first part of a sentencesentence
//      * @returns {pictureController} 200 - picture object
//      * @returns {Error} 404 - Input data invalid

//  */
// /**
//  * * GET(/:id)
//      * @summary Get a one picture
//      * @tags Generate - Routes to get one picture
//      * @param {string} request.query - the first part of a sentence
//      * @returns {pictureController} 200 - picture object
//      * @returns {Error} 404 - Input data invalid
//  */
// /**
//  * * PATCH(/:id)
//      * @summary Update a picture
//      * @tags Generate - Generate - Routes to get update one picture
//      * @param {string} request.query - the first part of a sentence
//      * @returns {pictureController} 200 - picture object
//      * @returns {Error} 404 - Input data invalid
//  */
// /**
//  * * DELETE(/:id)
//      * @summary Delete a picture
//      * @tags Generate - Routes to deleting a picture
//      * @param {string} request.query - the first part of a sentence
//      * @returns {pictureController} 200 - picture object
//      * @returns {Error} 404 - Input data invalid
//  */
