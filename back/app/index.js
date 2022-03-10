// APPLICATION EXPRESS
/*
Désormais notre application est un module qui est exporté, afin de pouvoir require notre application dans différents environnement
*/
// const path = require('path');

const cors = require('cors');

const express = require('express');

const fileUpload = require('express-fileupload');
// const expressJSDocSwagger = require('express-jsdoc-swagger');

// const swaggerJsDoc = require('swagger-jsdoc');
// const swaggerUi = require('swagger-ui-express');

const router = require('./routers');

const app = express();

app.use(
  fileUpload({
    createParentPath: true,
  }),
);

// const swaggerOptions = {
//   swaggerDefinition: {
//     info: {
//       title: 'Motorando API',
//       description: 'Customer API Information',
//       name: 'Motorando',
//     },
//     host: 'http://locahost:3000',
//     basePath: '/',
//   },

//   // filesPattern: ['.routers/*.js', './services/*.js'],
//   // swaggerUIPath: '/api-docs',

//   apis: ['./routers/user.js'],
// };

// const swaggerDocs = swaggerJsDoc(swaggerOptions);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
// app.get('/api-docs.json', (req, res) => {
//   res.setHeader('Content-type', 'application/json');
//   res.send(swaggerDocs);
// });
require('./helpers/apiDocs')(app);
// On active le middleware pour parser le playload JSON - remplace body-parser
app.use(express.json());

// TODO : Levée de la restriction des Cors à configurer
app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('../images'));

app.use(router);

module.exports = app;
