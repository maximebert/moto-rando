// APPLICATION EXPRESS
// const path = require('path');

// ici on require/import ce dont on aura besoin
const cors = require('cors');

const express = require('express');

const fileUpload = require('express-fileupload');

const router = require('./routers');

const app = express();
require('./helpers/apiDocs')(app);

// ici on definit ce que l'on va utiliser sur notre app
app.use(
  fileUpload({
    createParentPath: true,
  }),
);
// pour "lire" des json
app.use(express.json());

// TODO : Levée de la restriction des Cors à configurer dans ce cas on accepte tout
app.use(cors());
// pour parser (lire) le contenu du form envoyer dans l'url
app.use(express.urlencoded({ extended: true }));
// le dossier ou se trouve nos static (image, geojson, css)
app.use(express.static('public'));
// la requete est "redirigé" sur le router
app.use(router);

module.exports = app;
