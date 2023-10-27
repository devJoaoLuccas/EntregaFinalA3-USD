import { openDb } from "../configDb.js";

// const db é uma varíavel que espera a conexão com o banco, facilitando o nosso codigo. 

const db = await openDb();

// Query para Criar a tabela de relação um para muitos. 
// Jogo 1 * n ---> Plataformas e adicionar 10 valores por padrões 

export async function createTableJogosPlataformas() {

    await db.run (`CREATE TABLE IF NOT EXISTS jogos_plataformas (idJogosPlataformas INTEGER PRIMARY KEY AUTOINCREMENT,
                   idJogo INTEGER, idPlataforma INTEGER, FOREIGN KEY (idJogo) REFERENCES jogos (idJogo),
                   FOREIGN KEY (idPlataforma) REFERENCES plataformas (idPlataforma) )`)

    await db.run(`INSERT INTO jogos_plataformas (idJogo, idPlataforma) VALUES (1,5)`);

    await db.run(`INSERT INTO jogos_plataformas (idJogo, idPlataforma) VALUES (4,3)`);

    await db.run(`INSERT INTO jogos_plataformas (idJogo, idPlataforma) VALUES (6,7)`);

    await db.run(`INSERT INTO jogos_plataformas (idJogo, idPlataforma) VALUES (5,4)`);

    await db.run(`INSERT INTO jogos_plataformas (idJogo, idPlataforma) VALUES (3,2)`);

    await db.run(`INSERT INTO jogos_plataformas (idJogo, idPlataforma) VALUES (10,1)`);

    await db.run(`INSERT INTO jogos_plataformas (idJogo, idPlataforma) VALUES (9,2)`);

    await db.run(`INSERT INTO jogos_plataformas (idJogo, idPlataforma) VALUES (3,6)`);

    await db.run(`INSERT INTO jogos_plataformas (idJogo, idPlataforma) VALUES (3,10)`);

    await db.run(`INSERT INTO jogos_plataformas (idJogo, idPlataforma) VALUES (7,8)`);


}