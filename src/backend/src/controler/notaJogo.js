// Inicializa o banco de dados

import { openDb } from '../configDb.js';

const db = await openDb();


export async function createTableNotasJogos() {
    
        await db.exec(
            `
            CREATE TABLE IF NOT EXISTS notas_jogos 
                (idNotaJogo INTEGER PRIMARY KEY AUTOINCREMENT,
                idUser INTEGER NOT NULL, 
                note REAL NOT NULL,
                idJogo INTEGER NOT NULL, 
                FOREIGN KEY (idUser) REFERENCES usuarios (idUser) ON DELETE CASCADE,
                FOREIGN KEY (idJogo) REFERENCES jogos (idJogo) ON DELETE CASCADE)
            `

        );

}

export async function initInserirNotasJogos() {

    try {
        await db.run(
            `
            INSERT INTO notas_jogos (idNotaJogo, idUser, note, idJogo)
            VALUES
            (1, 1, 10, 1),
            (2, 2, 5, 1),
            (3, 3, 6, 1),
            (4, 4, 7, 1),
            (5, 5, 8.8, 1),
            (6, 1, 9.9, 2),
            (7, 2, 10, 2),
            (8, 3, 5.5, 2),
            (9, 4, 7.5, 2),
            (10, 5, 8.0, 2),
            (11, 1, 6.5, 3),
            (12, 2, 7.5, 3),
            (13, 3, 8.0, 3),
            (14, 4, 9.5, 3),
            (15, 5, 10, 3),
            (16, 1, 8.5, 4),
            (17, 2, 9, 4),
            (18, 3, 7.5, 4),
            (19, 4, 10, 4),
            (20, 5, 10, 4),
            (21, 1, 8, 5),
            (22, 2, 6.5, 5),
            (23, 3, 10, 5),
            (24, 4, 3.5, 5),
            (25, 5, 5, 5),
            (26, 1, 10, 6),
            (27, 2, 9.5, 6),
            (28, 3, 7, 6),
            (29, 4, 8.5, 6),
            (30, 5, 6, 6),
            (31, 1, 10, 7),
            (32, 2, 5, 7),
            (33, 3, 6, 7),
            (34, 4, 7.5, 7),
            (35, 5, 9, 7),
            (36, 1, 3, 8),
            (37, 2, 10, 8),
            (38, 3, 8.5, 8),
            (39, 4, 9.3, 8),
            (40, 5, 5.5, 8),
            (41, 1, 10, 9),
            (42, 2, 8, 9),
            (43, 3, 6, 9),
            (44, 4, 9, 9),
            (45, 5, 4, 9),
            (46, 1, 10, 10),
            (47, 2, 8, 10),
            (48, 3, 9.5, 10),
            (49, 4, 7.5, 10),
            (50, 5, 5, 10)
            `
        );

    } catch (error) {
        console.log("Erro ao adicionar as informações em notas_jogos")
    }


}


export async function selectNotasJogos(req, res) {
    
    try {
        await db.all( 
            `
                SELECT usuarios.username, jogos.name_game, notas_jogos.note
                FROM notas_jogos
                JOIN usuarios ON notas_jogos.idUser = usuarios.idUser
                JOIN jogos ON notas_jogos.idJogo = jogos.idJogo;
            `
            ).then(notasJogos => res.json(notasJogos)); 
    } catch (error) {
        console.log(`Não foi possivel selecionar os itens em notas_jogos`)
    }

}

export async function adicionarNotaJogo(req, res) {

    try {
        const notas = req.body;

        await db.run(
            `
                INSERT INTO notas_jogos 
                (idUser, note, idJogo)
                VALUES
                (?,?,?)
            `, [notas.idUser, notas.note, notas.idJogo]
        );

        res.json({
            "statusCode":200
        });

    } catch(error) {
        console.log("Não foi possivel adicionar o item em notas_jogos")
    }

}

export async function updateNotaJogo(req, res) {
    
    const nota = req.body;

    try {

        await db.run(
            `
                UPDATE notas_jogos
                SET idUser=?,note=?,idJogo=?
                WHERE idNotaJogo=?
            `,[nota.idUser, nota.note, nota.idJogo, nota.idNotaJogo]
        );

        res.json({
            "statusCode":200
        })

    } catch(error) {
        console.log(`Não foi possivel atualizar o item ${nota.idNotaJogo}`)
    }

}

export async function deleteNotaJogo(req, res) {

    const nota = req.body.idNotaJogo;

        try {
        
            await db.run (
                `
                DELETE
                FROM notas_jogos
                WHERE idNotaJogo = ?
                `, [nota]
            );

            res.json({
                "statusCode":201
            })

        } catch(error) {
            console.log(`Não foi possivel deletar o jogo com id = ${nota} `)
        }
}