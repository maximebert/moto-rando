const expressJSDocSwagger = require('express-jsdoc-swagger');

const swaggerOptions = {
  info: {
    version: '1.0.0',
    title: 'Motorando API',
    description: 'Customer API Information',
    name: 'Motorando',
  },
  baseDir: __dirname,
  filesPattern: ['../routers/*.js', '../models/*.js'],
  exposeApiDocs: true,
  apiDocspath: '/api-docs',
};

module.exports = (app) => expressJSDocSwagger(app)(swaggerOptions);
