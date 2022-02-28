const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// router.post('/', userController.connexion); // A voir plus tard

router.route('/:id')
  .get(userController.findOne)
  .patch(userController.update)
  .delete(userController.delete);

router.route('/inscription')
  .post(userController.inscription);
module.exports = router;
