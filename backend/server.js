// importando os módulos e arquivos
const express = require("express"); // importando o módulo express
const cors = require('cors'); // o cors vai nos permitir, além de outras coisas, disponibilizar essa aplicação para que outros domínios tenham acesso
const mongoose = require("mongoose"); // importando o ORM mongoose
const requireDir = require("require-dir"); // require-dir nos permite importar automaticamente algo em toda a aplicação
// const {errors} = require('celebrate'); // tratamento de erros vindos da validação com o celebrate, feita nas rotas

const atlas_url = require('../../safe/cover.me/atlas_url.js');

// console.log(atlas_url);

// iniciando o app
const app = express(); 

// permite enviarmos dados no formato de JSON para a nossa aplicação ( via método post )
app.use(express.json()); 

// fazendo uso do cors para que nossa aplicação possa ser acessada publicamente/ de outro domínio
app.use(cors()); 

mongoose.connect(atlas_url, {useNewUrlParser: true, useUnifiedTopology: true})
  .then( () => {
    console.log('Connection to the Atlas Cluster is successful!')
  })
  .catch( (err) => console.error(err));

// conexão com o banco de dados ATLAS
// mongoose.connect(atlas_url, {useNewUrlParser: true, useUnifiedTopology: true});

// faz com que essa pasta seja importada automaticamente em toda a aplicação
requireDir('./src/models'); 

// o 'use' vai aceitar todo tipo de requisição (get, post, delete, etc)
app.use('/api', require('./src/routes')); 

// o servidor está rodando na porta 3001
app.listen(3001);

/* // nos ajuda a tratar o erro de uma forma melhor para o frontend 
app.use(errors());  */