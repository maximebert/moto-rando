const express = require('express');

const userRouter = require('./user');
const itinaryRouter = require('./itinary');

const router = express.Router();

router.use('/profil', userRouter);

router.use('/itineraires', itinaryRouter);

module.exports = router;
