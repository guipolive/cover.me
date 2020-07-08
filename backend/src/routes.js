const express = require('express');

const routes = express.Router();

const MusicController = require('./controllers/MusicController'); // importando nossa controller para podermos usar as funções 
const ArtistController = require('./controllers/ArtistController');

// rotas de music
routes.get('/musics', MusicController.index); // mostra tudo
routes.post('/musics', MusicController.store); // cadastro 

// rotas de artist
routes.get('/artists', ArtistController.index); // mostra tudo
routes.post('/artists', ArtistController.store); // mostra tudo

//exportando as rotas
module.exports = routes;