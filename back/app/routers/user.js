const express = require('express');
const { userController } = require('../controllers');

const router = express.Router();

router.get('/', userController.find);

module.exports = router;
