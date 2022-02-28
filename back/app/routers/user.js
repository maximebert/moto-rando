const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// router.post('/', userController.connexion); // A voir plus tard

// router.post('/inscription', userController.create);

router.route('/:id')
  .get(userController.findOne)
  .patch(userController.update)
  .delete(userController.delete);

module.exports = router;
