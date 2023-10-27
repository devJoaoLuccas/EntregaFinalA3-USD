import express from 'express';
import { createTableUsuarios } from './controler/usuario.js';
import { createTableJogos } from './controler/jogos.js';
import { createTablePlataformas } from './controler/plataformas.js';
import { createTableUsuarioJogo } from './controler/jogoUsuario.js';

import router from './routes.js';
import { createTableJogosPlataformas } from './controler/jogoPlataforma.js';


// criar o nosso servidor e instancia a biblioteca express do node 

const app = express();

// Diz que o nosso servidor vai usar express cm json

app.use(express.json());

// Diz que o nosso servidor esta utilizando as rotas de router. 

app.use(router);

// Instância das querys de criação de tabelas padrões (é nescessário rodar no começo da API)

createTableUsuarios();
createTableJogos(); 
createTablePlataformas();
createTableUsuarioJogo();
createTableJogosPlataformas();


// O servidor está ouvindo pela porta 3000 

app.listen(3000, ()=> {
    console.log("A api esta ouvindo na porta 3000");
})
