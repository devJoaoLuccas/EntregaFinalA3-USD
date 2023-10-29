import { openDb } from "../configDb.js";

// const db é uma varíavel que espera a conexão com o banco, facilitando o nosso codigo. 

const db = await openDb();

// Query para Criar a tabela de relação um para muitos. 
// Jogo 1 * n ---> Plataformas e adicionar 10 valores por padrões 

export async function createTableJogosPlataformas() {

    await db.run (
            `
            CREATE TABLE IF NOT EXISTS jogos_plataformas 
                (idJogosPlataformas INTEGER PRIMARY KEY AUTOINCREMENT,
                idJogo INTEGER, 
                idPlataforma INTEGER, 
                FOREIGN KEY (idJogo) REFERENCES jogos (idJogo) ON DELETE CASCADE,
                FOREIGN KEY (idPlataforma) REFERENCES plataformas (idPlataforma) ON DELETE CASCADE)
            `
                 );


}

export async function initInserirJogoPlataforma() {

    await db.run(
            `
            INSERT INTO jogos_plataformas (idJogosPlataformas, idJogo, idPlataforma)
            VALUES
                (1, 1, 5),
                (2, 4, 3),
                (3, 6, 7),
                (4, 5, 4),
                (5, 3, 2),
                (6, 10, 1),
                (7, 9, 2),
                (8, 3, 6),
                (9, 3, 10),
                (10, 7, 8);
            `
    );

}