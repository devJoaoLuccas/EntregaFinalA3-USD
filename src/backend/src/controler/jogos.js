import { openDb } from '../configDb.js';

// const db é uma varíavel que espera a conexão com o banco, facilitando o nosso codigo. 

const db = await openDb();

// Query feita para criar uma tabela de Jogos e adicionar 10 valores por padrão. 

export async function createTableJogos() {

    await db.exec('CREATE TABLE IF NOT EXISTS jogos (idJogo INTEGER PRIMARY KEY AUTOINCREMENT, name_game TEXT CHECK (LENGTH(name_game) <= 50) NOT NULL, developed_by TEXT CHECK (LENGTH(developed_by) <= 50) NOT NULL, category_name TEXT CHECK (LENGTH(category_name) <= 50) NOT NULL, data_criacao BLOB NOT NULL, status TEXT CHECK(status IN ("Jogando", "Zerado", "Para jogar")) NOT NULL, note REAL NOT NULl)');

    await db.run('INSERT INTO jogos (name_game, developed_by, category_name, data_criacao, status, note) VALUES ("League Of Legends", "Riot Games", "MOBA","01/10/2009", "Jogando","8.50")')

    await db.run('INSERT INTO jogos (name_game, developed_by, category_name, data_criacao, status, note) VALUES ("Assansis Creed II", "Ubsisoft", "Ação e Aventura", "17/09/2009", "Zerado", "10")')

    await db.run('INSERT INTO jogos (name_game, developed_by, category_name, data_criacao, status, note) VALUES ("The Witcher 3:Wild Hunt", "CD Projekt RED", "RPG", "19/05/2015","Jogando", "9.90")')

    await db.run('INSERT INTO jogos (name_game, developed_by, category_name, data_criacao, status, note) VALUES ("Pokemon Go", "Niantic,Inc", "Realidade Aumentada", "06/07/2016", "Jogando", "8.50")')

    await db.run('INSERT INTO jogos (name_game, developed_by, category_name, data_criacao, status, note) VALUES ("Fortnite", "Epic Games", "Battle Royale", "25/07/2017", "Jogando", "8.80")')

    await db.run('INSERT INTO jogos (name_game, developed_by, category_name, data_criacao, status, note) VALUES ("Dark Souls", "FromSoftware", "RPG de ação", "22/09/2011", "Para jogar", "9.60")')

    await db.run('INSERT INTO jogos (name_game, developed_by, category_name, data_criacao, status, note) VALUES ("Minecraft", "Mojang Studios", "Sandbox", "01/01/2011", "Jogando", "10")')

    await db.run('INSERT INTO jogos (name_game, developed_by, category_name, data_criacao, status, note) VALUES ("The Elder Scrolls V: Skyrim", "Bethesda", "RPG de ação", "11/11/2011", "Zerado", "9.40")')

    await db.run('INSERT INTO jogos (name_game, developed_by, category_name, data_criacao, status, note) VALUES ("Grand Thef Auto V", "Rockstart North", "Ação-Aventura", "17/09/2013", "Zerado", "9.70")')

    await db.run('INSERT INTO jogos (name_game, developed_by, category_name, data_criacao, status, note) VALUES ("The Legend of Zelda: Ocarina of Time", "Nintendo", "Ação-Aventura", "01/01/1998", "Zerado", "10")')

}

// Query feita para selecionar todos os jogos da tabela. 

export async function selectJogos(req, res) {
    
    await db.all('SELECT * FROM jogos')
            .then(jogos => res.json(jogos));

}

// Query feita para selecionar um jogo da tabela, pelo nome. 

export async function selectJogo(req, res) {

    const name = req.body.name_game;

    await db.get('SELECT * FROM jogos WHERE name_game=?', [name])
            .then(jogos => res.json(jogos));

}


// Query feita para adicionar um jogo na tabela. 

export async function adicionarJogo(req,res) {

    const jogo = req.body;

    await db.run('INSERT INTO jogos (name_game, developed_by, category_name, data_criacao, status, note) VALUES (?,?,?,?,?,?)', [jogo.name_game, jogo.developed_by, jogo.category_name, jogo.data_criacao, jogo.status, jogo.note]);

    res.json({
        "statusCode":200
    });

}

// Query feita para atualizar um jogo na tabela. 

export async function updateJogo(req, res) {

    let jogo = req.body;

    await db.run('UPDATE jogos SET name_game=?,developed_by=?,category_name=?,status=?,note=? WHERE idJogo=?',[jogo.name_game, jogo.developed_by, jogo.category_name, jogo.status, jogo.note, jogo.idJogo]);

    res.json({
        "statusCode":200
    });

}

// Query feita para deletar um jogo na tabela, pelo nome. 

export async function deleteJogo(req, res){ 

    let name = req.body.name_game;

    await db.run('DELETE FROM jogos WHERE name_game=?',[name]);
       

    res.json({
        "statusCode":201
    });
}



