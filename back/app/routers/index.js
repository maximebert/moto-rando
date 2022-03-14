const express = require('express');

const userRouter = require('./user');
const itinaryRouter = require('./itinerary');
const districtRouter = require('./district');
const motorbikeRouter = require('./motorbike');
const pictureRouter = require('./picture');
// const authenticateToken = require('../helpers/auth');

const { errorHandler } = require('../helpers/errorHandler');

const router = express.Router();

// Quand on créer un routeur central, dont le but est de chargé les
// différents router de l'application en leur assignant un prefixe de route

// router.use('<prefixe de route>', router);
// L'ordre est très important. Pour savoir dans quel ordre on doit organiser nos router,
// on les classes du plus spécifique au moins spécifique

// Dans le cas où l'on souhaiterais restreindre l'accès à nos fichiers public nous pouvons
// faire une route qui nous permettra de placer un token pour l'acces

// router.use('/public', express.static('public'));

// On préfixe les routers
router.use('/profil', userRouter);
router.use('/itineraires', itinaryRouter);
router.use('/motos', motorbikeRouter);
router.use('/images', pictureRouter);
router.use('/regions', districtRouter);

router.use((err, _, response, next) => {
  errorHandler(err, response, next);
});

module.exports = router;
