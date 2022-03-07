const express = require('express');

const userRouter = require('./user');
const itinaryRouter = require('./itinerary');

const { errorHandler } = require('../helpers/errorHandler');

const motorbikeRouter = require('./motorbike');
const pictureRouter = require('./picture');
// const authenticateToken = require('../helpers/auth');

const router = express.Router();

// Quand on créer un routeur central, dont le but est de chargé les
// différents router de l'application en leur assignant un prefixe de route

// router.use('<prefixe de route>', router);
// L'ordre est très important. Pour savoir dans quel ordre on doit organiser nos router,
// on les classes du plus spécifique au moins spécifique

// Un préfixe ça veut la route commence par. Donc l'ordre est important

// On préfixe les routers

router.use('/profil', userRouter);
router.use('/itineraires', itinaryRouter);
router.use('/motos', motorbikeRouter);
router.use('/images', pictureRouter);

router.use((err, _, response, next) => {
  errorHandler(err, response, next);
  console.log(err);
});

module.exports = router;
