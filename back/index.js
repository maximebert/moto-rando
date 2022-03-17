require('dotenv').config();
const http = require('http');
const app = require('./app');

// ici on va écouter le port et si il ne le trouve pas on écoute le 3000
const port = process.env.PORT ?? 3000;

// Connexion à l'app
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
