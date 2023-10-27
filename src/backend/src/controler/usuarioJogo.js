import { openDb } from "../configDb.js";

// const db é uma varíavel que espera a conexão com o banco, facilitando o nosso codigo. 

const db = await openDb();

// Query para Criar a tabela de relação um para muitos. 
// Usuario 1 * n ---> Jogo e adicionar 10 valores por padrões 

export async function createTableUsuarioJogo() {

    await db.run(`CREATE TABLE IF NOT EXISTS usuario_jogo (idUsuarioJogo INTENGER PRIMARY KEY AUTOINCREMENT, 
                idUser INTENGER, idJogo INTENGER, FOREGEIN KEY (idUser) REFERENCES usuario(idUser),
                FOREGEIN KEY (idJogo) REFERENCES jogos (idJogo) )`)
    
    await db.run(`INSERT INTO usuario_jogo (idJogo, idUser) VALUES (1,10)`);

    await db.run(`INSERT INTO usuario_jogo (idJogo, idUser) VALUES (5,6)`);

    await db.run(`INSERT INTO usuario_jogo (idJogo, idUser) VALUES (4,2)`);

    await db.run(`INSERT INTO usuario_jogo (idJogo, idUser) VALUES (3,1)`);

    await db.run(`INSERT INTO usuario_jogo (idJogo, idUser) VALUES (4,9)`);

    await db.run(`INSERT INTO usuario_jogo (idJogo, idUser) VALUES (9,8)`);

    await db.run(`INSERT INTO usuario_jogo (idJogo, idUser) VALUES (5,5)`);

    await db.run(`INSERT INTO usuario_jogo (idJogo, idUser) VALUES (10,7)`);

    await db.run(`INSERT INTO usuario_jogo (idJogo, idUser) VALUES (8,6)`);

    await db.run(`INSERT INTO usuario_jogo (idJogo, idUser) VALUES (5,4)`);

}

/* Querry naõ esta funcionando 

export async function selectUsuarioJogo() {

    await db.all(`SELECT idUsuarioJogo, username, idUser FROM usuario_jogo INNER JOIN usuarios
                  ON usuarios.idUser = usuario_jogo.idUser`)

}
*/