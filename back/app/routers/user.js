const express = require('express');
const userController = require('../controllers');

const router = express.Router();

router.post('/', userController.connexion); // A voir plus tard

router.post('/inscription', userController.create);

router.use('/:id')
  .get(userController.findOne)
  .patch(userController.update)
  .delete(userController.delete);

module.exports = router;
