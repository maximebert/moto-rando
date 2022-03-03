// APPLICATION EXPRESS
/*
Désormais notre application est un module qui est exporté, afin de pouvoir require notre application dans différents environnement
*/
const express = require('express');

// const swaggerJsDoc = require('express-jsdoc-swagger');
// const swaggerUi = require('swagger-ui-express');

const router = require('./routers');
const cors = require('cors');

const app = express();

// const swaggerOptions = {
//   swaggerDefinition: {
//     info: {
//       title: 'API',
//       description: 'API information',
//       contact: {
//         name: 'Yann - Motorando',
//       },
//       servers: ['http://localhost:5000'],
//     },
//   },
//   api: ['app.js'],
// };

// const swaggerDocs = swaggerJsDoc(swaggerOptions);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(router);

module.exports = app;
