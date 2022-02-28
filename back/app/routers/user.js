const express = require('express');
const userController = require('../controllers/userController');

const controllerHandler = require('../helpers/controllerHandler');

const router = express.Router();

// router.post('/', userController.connexion); // A voir plus tard

// router.post('/inscription', userController.create);

router.route('/:id')
  .get(controllerHandler(userController.findOne))
  .patch(controllerHandler(userController.update))
  .delete(controllerHandler(userController.delete));

module.exports = router;
