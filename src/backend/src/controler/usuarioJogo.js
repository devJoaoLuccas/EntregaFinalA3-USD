import { openDb } from "../configDb.js";

// const db é uma varíavel que espera a conexão com o banco, facilitando o nosso codigo. 

const db = await openDb();

// Query para Criar a tabela de relação um para muitos. 
// Usuario 1 * n ---> Jogo e adicionar 10 valores por padrões 

export async function createTableUsuarioJogo() {

    await db.run(
            `
            CREATE TABLE IF NOT EXISTS usuario_jogo 
                (idUsuarioJogo INTEGER PRIMARY KEY AUTOINCREMENT,
                idUser INTEGER, 
                idJogo INTEGER, 
                FOREIGN KEY (idUser) REFERENCES usuarios(idUser) ON DELETE CASCADE,
                FOREIGN KEY (idJogo) REFERENCES jogos (idJogo) ON DELETE CASCADE)
            `
            );
    
}

export async function initInserirUsuarioJogo() {

    await db.run(
            `
            INSERT INTO usuario_jogo (idUsuarioJogo, idJogo, idUser)
            VALUES
                (1, 1, 10),
                (2, 5, 6),
                (3, 4, 2),
                (4, 3, 1),
                (5, 4, 9),
                (6, 9, 8),
                (7, 5, 5),
                (8, 10, 7),
                (9, 8, 6),
                (10, 5, 4);
            `
    )

}

/* Querry naõ esta funcionando 

export async function selectUsuarioJogo() {

    await db.all(`SELECT idUsuarioJogo, username, idUser FROM usuario_jogo INNER JOIN usuarios
                  ON usuarios.idUser = usuario_jogo.idUser`)

}
*/