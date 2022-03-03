require('dotenv').config();
const http = require('http');
const app = require('./app');

const port = process.env.PORT ?? 3000;

// Connexion à l'app
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
