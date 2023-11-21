import express from 'express';
import { createTableUsuarios, initInserirUsuario } from './controler/usuario.js';
import { createTableJogos, initInserirJogos } from './controler/jogos.js';
import { createTablePlataformas, initInserirPlataformas } from './controler/plataformas.js';

import router from './routes.js';
import { createTableJogosPlataformas, initInserirJogoPlataforma } from './controler/jogoPlataforma.js';
import { createTableNotasJogos, initInserirNotasJogos } from './controler/notaJogo.js';


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
createTableJogosPlataformas();
createTableNotasJogos();

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
