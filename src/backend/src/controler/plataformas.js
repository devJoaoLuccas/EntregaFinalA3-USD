import { openDb } from "../configDb.js";

// const db é uma varíavel que espera a conexão com o banco, facilitando o nosso codigo. 

const db = await openDb();

// Query feita para criar uma tabela de Plataformas e adicionar 10 valores por padrão. 

export async function createTablePlataformas() {

    await db.exec(`CREATE TABLE IF NOT EXISTS plataformas (idPlataforma INTEGER PRIMARY KEY AUTOINCREMENT, 
                   nome_plataforma TEXT CHECK (LENGTH(nome_plataforma) <= 50) NOT NULL)`);

    await db.run(`INSERT INTO plataformas (nome_plataforma) values ("Steam")`);

    await db.run(`INSERT INTO plataformas (nome_plataforma) values ("Epic Games")`);

    await db.run(`INSERT INTO plataformas (nome_plataforma) values ("Playstation")`);

    await db.run(`INSERT INTO plataformas (nome_plataforma) values ("Xbox")`);

    await db.run(`INSERT INTO plataformas (nome_plataforma) values ("Nintendo")`);

    await db.run(`INSERT INTO plataformas (nome_plataforma) values ("Battle.Net")`);

    await db.run(`INSERT INTO plataformas (nome_plataforma) values ("Uplay")`);

    await db.run(`INSERT INTO plataformas (nome_plataforma) values ("Origin")`);

    await db.run(`INSERT INTO plataformas (nome_plataforma) values ("Mobile")`);

    await db.run(`INSERT INTO plataformas (nome_plataforma) values ("Microsoft Store")`);
}

// Query feita para selecionar todas as plataformas da tabela. 

export async function selectPlataformas(req, res) {

    await db.all(`SELECT * FROM plataformas`)
            .then(plataformas => res.json(plataformas));

}

// Query feita para selecionar uma plataforma da tabela, pelo nome. 

export async function selectPlataforma(req, res) {

    let plataforma = req.body;

    await db.run(`SELECT * FROM plataformas WHERE nome_plataforma =?`, [plataforma.nome_plataforma])
            .then(plataformas => res.json(plataformas));
}


// Query feita para adicionar uma plataforma na tabela. 

export async function adicionarPlataforma(req, res) {

    let plataforma = req.body;

    await db.run(`INSERT INTO plataformas (nome_plataforma) values ("?")`, [plataforma.nome_plataforma]);

    res.json({
        "statusCode":200
    });

}

// Query feita para atualizar uma plataforma na tabela. 

export async function updatePlataforma(req, res) {

    let plataforma = req.body;

    await db.run(`UPDATE plataformas SET nome_plataforma =?, WHERE ID =? `);

    res.json({
        "statusCode":200
    });

}

// Query feita para deletar uma plataforma da tabela, pelo nome. 

export async function deletePlataforma(req,res) {

    let plataforma = req.body;

    await db.run(`DELETE FROM plataformas WHERE nome_plataforma =?`, [plataforma.nome_plataforma]);

    res.json({
        "statusCode":201
    });
}