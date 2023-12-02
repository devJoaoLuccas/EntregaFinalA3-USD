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
                note REAL)
            `
                );
}

// Querry feita para adicionar 10 valores por padrão. 

export async function initInserirJogos() {
     
    try {
        await db.run(
            `
            INSERT INTO jogos (idJogo, name_game, developed_by, category_name, data_criacao) 
            VALUES
                (1,'League Of Legends', 'Riot Games', 'MOBA', '2009-10-01'),
                (2,'Assassin''s Creed II', 'Ubisoft', 'Ação e Aventura', '2009-09-17'),
                (3,'The Witcher 3 - Wild Hunt', 'CD Projekt RED', 'RPG', '2015-05-19'),
                (4,'Pokemon Go', 'Niantic, Inc', 'Realidade Aumentada', '2016-07-06'),
                (5,'Fortnite', 'Epic Games', 'Battle Royale', '2017-07-25'),
                (6,'Dark Souls', 'FromSoftware', 'RPG', '2011-09-22'),
                (7,'Minecraft', 'Mojang Studios', 'Sandbox', '2011-01-01'),
                (8,'The Elder Scrolls V - Skyrim', 'Bethesda', 'RPG', '2011-11-11'),
                (9,'Grand Thef Auto V', 'Rockstar North', 'Ação-Aventura', '2013-09-17'),
                (10,'Super Mario 64', 'Nintendo', 'Plataforma', '1996-06-26');
            
            `
); 
    } catch (error) {
        console.log("Não foi possivel inicializar os dados na tabela de jogos.");
    }
  

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

    const id = req.params.idJogos; 

    try {
        const jogo = await db.get(
            `
                SELECT * 
                FROM 
                jogos WHERE idJogo=?
            `,
            [id]
        );
    
        console.log('Jogo encontrado:', jogo); // Verifique se o jogo foi encontrado
    
        if (!jogo) {
            return res.status(404).json({ error: 'Jogo não encontrado' });
        }
    
        res.json(jogo);
    } catch (error) {
        console.log('Erro ao selecionar o jogo:', error);
        res.status(500).json({ error: 'Erro interno ao selecionar o jogo' });
    }

}


// Query feita para adicionar um jogo na tabela. 

export async function adicionarJogo(req,res) {

    const jogo = req.body;

    try {
         await db.run(
            `
            INSERT INTO jogos 
            (name_game, developed_by, category_name, data_criacao, note)
            VALUES (?,?,?,?,?)
            `, [jogo.name_game, jogo.developed_by, jogo.category_name, jogo.data_criacao, jogo.note]
        );

        res.json({
            "statusCode":200
        });
    } catch (error) {
        console.log("Não foi possivel adicionar o jogo")        
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
                SET name_game=?,developed_by=?,category_name=?, data_criacao=?
                WHERE idJogo=?
            `,[jogo.name_game, jogo.developed_by, jogo.category_name, jogo.data_criacao, jogo.idJogo]
        );
    
        console.log(`O jogo de ${jogo.idJogo}, foi atualizado com sucesso`);

        res.json({
            "statusCode":200
        });
    } catch (error) {
        console.log(error)
        console.log(`Não foi possivel atualizar o jogo na tabela.`);
    }

}

// Query feita para deletar um jogo na tabela, pelo nome. 

export async function deleteJogo(req, res){ 

    const id = req.params.idJogos;

    try {
        await db.run(
            `
                DELETE 
                FROM jogos
                WHERE idJogo=? 
            `,[id]
        );
       
        console.log(`O jogo de ${id}, foi deletado com sucesso!`)

        res.json({
            "statusCode":201
        });
    } catch (error) {
        res.json({
            "statusCode":402
        })
        console.log(`Não foi possivel deletar o jogo na tabela.`);
    }
}