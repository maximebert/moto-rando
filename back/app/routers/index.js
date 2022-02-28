const express = require('express');

const userRouter = require('./user');
const itinaryRouter = require('./itinary');
const { errorHandler } = require('../helpers/errorHandler');

const router = express.Router();

router.use('/profil', userRouter);

router.use('/itineraires', itinaryRouter);

router.use((err, _, response, next) => {
  errorHandler(err, response, next);
});

module.exports = router;
