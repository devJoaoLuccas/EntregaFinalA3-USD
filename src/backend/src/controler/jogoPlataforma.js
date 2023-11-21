import { openDb } from "../configDb.js";

// const db é uma varíavel que espera a conexão com o banco, facilitando o nosso codigo. 

const db = await openDb();

// Query para Criar a tabela de relação um para muitos. 
// Jogo 1 * n ---> Plataformas e adicionar 10 valores por padrões 

export async function createTableJogosPlataformas() {

    await db.exec (
            `
                CREATE TABLE IF NOT EXISTS plataformas_jogos 
                    (idPlataformaJogo INTEGER PRIMARY KEY AUTOINCREMENT,
                    idPlataforma INTEGER NOT NULL, 
                    idJogo INTEGER NOT NULL,
                    FOREIGN KEY (idPlataforma) REFERENCES plataformas (idPlataforma) ON DELETE CASCADE,
                    FOREIGN KEY (idJogo) REFERENCES jogos (idJogo) ON DELETE CASCADE)
            `
                 );


}

export async function initInserirJogoPlataforma() {

    await db.run(
            `
            INSERT INTO plataformas_jogos (idPlataformaJogo, idPlataforma, idJogo)
            VALUES 
                (1, 1, 1),
                (2, 1, 2),
                (3, 1, 3),
                (4, 1, 4),
                (5, 1, 5),
                (6, 2, 1),
                (7, 2, 2),
                (8, 2, 3),
                (9, 2, 4),
                (10, 2, 5),
                (11, 3, 1),
                (12, 3, 2),
                (13, 3, 3),
                (14, 3, 4),
                (15, 3, 5),
                (16, 4, 1),
                (17, 4, 2),
                (18, 4, 3),
                (19, 4, 4),
                (20, 4, 5),
                (21, 5, 1),
                (22, 5, 2),
                (23, 5, 3),
                (24, 5, 4),
                (25, 5, 5),
                (26, 6, 1),
                (27, 6, 2),
                (28, 6, 3),
                (29, 6, 4),
                (30, 6, 5),
                (31, 7, 1),
                (32, 7, 2),
                (33, 7, 3),
                (34, 7, 4),
                (35, 7, 5),
                (36, 8, 1),
                (37, 8, 2),
                (38, 8, 3),
                (39, 8, 4),
                (40, 8, 5),
                (41, 9, 1),
                (42, 9, 2),
                (43, 9, 3),
                (44, 9, 4),
                (45, 9, 5),
                (46, 10, 1),
                (47, 10, 2),
                (48, 10, 3),
                (49, 10, 4),
                (50, 10, 5)
            `
    );

}

export async function selectPlataformaJogos(req, res) {

    try {
        
        await db.all(
            `
                SELECT jogos.name_game, plataformas.nome_plataforma
                FROM plataformas_jogos
                JOIN jogos ON plataformas_jogos.idJogo = jogos.idJogo
                JOIN plataformas ON plataformas_jogos.idPlataforma = plataformas.idPlataforma;
            `
        ).then(plataformasJogos => res.json(plataformasJogos));
    } catch (error) {
        console.log("Não foi possivel buscar os valores de plataformas_jogos")
    }
}

export async function adicionarPlataformaJogos(req, res) {

    const plataformaJogo = req.body;

    try {
        
        await db.run(
            `
                INSERT INTO plataformas_jogos (idPlataforma, idJogo)
                VALUES
                (?,?)
            `, [plataformaJogo.idPlataforma, plataformaJogo.idJogo]
        );

        res.json({
            "statusCode":200
        })

    } catch (error) {
        console.log("Não foi possível adicionar o item em plataformas_jogos");
    }

}