import express from 'express';
import cors from 'cors';

import router from './router/routes.js';

import { createTableUsuarios, initInserirUsuario } from './model/usuario.js';
import { createTableJogos, initInserirJogos } from './model/jogos.js';
import { createTablePlataformas, initInserirPlataformas } from './model/plataformas.js';


import { createTableJogosPlataformas, initInserirJogoPlataforma } from './model/jogoPlataforma.js';
import { createTableNotasJogos, initInserirNotasJogos } from './model/notaJogo.js';


// criar o nosso servidor e instancia a biblioteca express do node 

const app = express();

// Diz que o nosso servidor vai usar express cm json

app.use(express.json());

app.use(cors());

// Diz que o nosso servidor esta utilizando as rotas de router. 

app.use(router);

// Instância das querys de criação de tabelas padrões (é nescessário rodar no começo da API)

try {
    createTableUsuarios();
    createTableJogos(); 
    createTablePlataformas();
    createTableJogosPlataformas();
    createTableNotasJogos();
    } catch (error) {
    console.log(`Não é possível criar as tabelas!`)
}

// Instância a inserção de dados por padrão nas tabelas, caso de erro, será enviada uma mensagem no console avisando que não foi possível adicionar os itens

try {
   await initInserirJogos();   
   await initInserirUsuario(); 
   await initInserirPlataformas();
   await initInserirJogoPlataforma();
   await initInserirNotasJogos();
} catch (error) {
    console.log("Não foi possivel adicionar os itens, provavelmente já foram adicionados.")
}

// O servidor está ouvindo pela porta 3000 

app.listen(3000, ()=> {
    console.log("A api esta ouvindo na porta 3000");
})
