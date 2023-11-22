import { openDb } from '../configDb.js';

// const db é uma varíavel que espera a conexão com o banco, facilitando o nosso codigo. 

const db = await openDb();

// Query feita para criar uma tabela de Jogos 

export async function createTableJogos() {

    await db.exec (
            `
            CREATE TABLE IF NOT EXISTS jogos
                (idJogo INTEGER PRIMARY KEY AUTOINCREMENT,
                name_game TEXT CHECK (LENGTH(name_game) <= 50) NOT NULL,
                developed_by TEXT CHECK (LENGTH(developed_by) <= 50) NOT NULL,
                category_name TEXT CHECK (LENGTH(category_name) <= 50) NOT NULL,
                data_criacao BLOB NOT NULL,
                note REAL NOT NULl,
                FOREIGN KEY (note) REFERENCES notas_jogos (note) ON DELETE CASCADE)
            `
                );
}

// Querry feita para adicionar 10 valores por padrão. 

export async function initInserirJogos() {
    await db.run(
            `
                INSERT INTO jogos (idJogo, name_game, developed_by, category_name, data_criacao, note) 
                VALUES
                    (1, 'League Of Legends', 'Riot Games', 'MOBA','2009-10-01', 10),
                    (2, 'Assassin"s Creed II', 'Ubsisoft', 'Ação e Aventura', '2009-09-17', 10),
                    (3, 'The Witcher 3:Wild Hunt', 'CD Projekt RED', 'RPG', '2015-05-10' 10),
                    (4, 'Pokemon Go', 'Niantic,Inc', 'Realidade Aumentada', '2016-07-06', 10),
                    (5, 'Fortnite', 'Epic Games', 'Battle Royale', '2017-07-25', 10),
                    (6, 'Dark Souls', 'FromSoftware', 'RPG de ação', '2011-09-22', 10),
                    (7, 'Minecraft', 'Mojang Studios', 'Sandbox', '2011-01-01', 10),
                    (8, 'The Elder Scrolls V: Skyrim', 'Bethesda', 'RPG de ação', '2011-11-11', 10),
                    (9, 'Grand Thef Auto V', 'Rockstart North', 'Ação-Aventura', '2013-09-17', 10),
                    (10, 'The Legend of Zelda: Ocarina of Time', 'Nintendo', 'Ação-Aventura', '1998-01-01', 10)
            `
);
}

// Query feita para selecionar todos os jogos da tabela. 

export async function selectJogos(req, res) {
    
    try {
        await db.all(
            `
                SELECT * 
                FROM
                jogos
            `).then(jogos => res.json(jogos));
    
    } catch (error) {
        console.log(`Não foi possivel selecionar todos os jogos.`)        
    }
}

// Query feita para selecionar um jogo da tabela, pelo nome. 

export async function selectJogo(req, res) {

    const name = req.body.name_game;

    try {
        await db.get(
            `
                SELECT * 
                FROM 
                jogos WHERE name_game=?
            `,[name])
                .then(jogos => res.json(jogos)
        );
    } catch (error) {
        console.log(`Não foi possivel selecionar o jogo.`)
    }

}


// Query feita para adicionar um jogo na tabela. 

export async function adicionarJogo(req,res) {

    const jogo = req.body;

    try {
        await db.run(
            `
                INSERT INTO 
                jogos 
                (name_game, developed_by, category_name, data_criacao, status, note) 
                VALUES (?,?,?,?,?,?)
            `,[jogo.name_game, jogo.developed_by, jogo.category_name, jogo.data_criacao, jogo.status, jogo.note]
        );
    
        res.json({
            "statusCode":200
        });
    } catch (error) {
        console.log(`Não foi possivel adicionar o jogo na tabela`);
    }


}

// Query feita para atualizar um jogo na tabela. 

export async function updateJogo(req, res) {

    const jogo = req.body;

    try {
        await db.run(
            `
                UPDATE 
                jogos 
                SET name_game=?,developed_by=?,category_name=?,status=?,note=? 
                WHERE idJogo=?
            `,[jogo.name_game, jogo.developed_by, jogo.category_name, jogo.status, jogo.note, jogo.idJogo]
        );
    
        res.json({
            "statusCode":200
        });
    } catch (error) {
        console.log(`Não foi possivel atualizar o jogo na tabela.`);
    }

}

// Query feita para deletar um jogo na tabela, pelo nome. 

export async function deleteJogo(req, res){ 

    const name = req.body.name_game;

    try {
        await db.run(
            `
                DELETE 
                FROM jogos
                 WHERE name_game=? 
            `,[name]
        );
       
        res.json({
            "statusCode":201
        });
    } catch (error) {
        console.log(`Não foi possivel deletar o jogo na tabela.`);
    }
}



