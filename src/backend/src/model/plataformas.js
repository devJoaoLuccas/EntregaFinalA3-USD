import { openDb } from "../configDb.js";

// const db é uma varíavel que espera a conexão com o banco, facilitando o nosso codigo. 

const db = await openDb();

// Query feita para criar uma tabela de Plataformas e adicionar 10 valores por padrão. 

export async function createTablePlataformas() {

    await db.exec(
            `
            CREATE TABLE IF NOT EXISTS plataformas 
                (idPlataforma INTEGER PRIMARY KEY AUTOINCREMENT, 
                nome_plataforma TEXT CHECK (LENGTH(nome_plataforma) <= 50) NOT NULL)
            `
            );

}


export async function initInserirPlataformas() {
    await db.run (
            `
            INSERT INTO plataformas (idPlataforma, nome_plataforma) 
            VALUES 
                (1,"Steam"),
                (2,"Epic Games"),
                (3,"Playstation"),
                (4,"Xbox"),
                (5,"Nintendo"),
                (6,"Battle.Net"),
                (7,"Uplay"),
                (8,"Origin"),
                (9,"Mobile"),
                (10,"Web");
            `
                );
}
// Query feita para selecionar todas as plataformas da tabela. 

export async function selectPlataformas(req, res) {

    try {
        await db.all(
            `
                SELECT * 
                FROM plataformas
            `)
        .then(plataformas => res.json(plataformas));

    } catch (error) {
        console.log(`Não foi possivel selecionar as plataformas`);
    }
}

// Query feita para selecionar uma plataforma da tabela, pelo nome. 

export async function selectPlataforma(req, res) {

    const plataforma = req.body;

    try {   

        await db.run(
            `
                SELECT *
                FROM plataformas 
                WHERE nome_plataforma =?
            `, [plataforma.nome_plataforma])
        .then(plataformas => res.json(plataformas));
} catch (error) {
        console.log(`Não foi possivel selecionar a plataforma ${plataforma.nome_plataforma}`);       
  }

}


// Query feita para adicionar uma plataforma na tabela. 

export async function adicionarPlataforma(req, res) {

    const plataforma = req.body;

    try {

        await db.run(
            `
                INSERT INTO plataformas 
                (nome_plataforma) 
                VALUES ("?")
            `, [plataforma.nome_plataforma]);

        res.json({
            "statusCode":200
        });
                
    } catch (error) {
        console.log("Não foi possivel inserir os dados em plataformas");
    }

  

}

// Query feita para atualizar uma plataforma na tabela. 

export async function updatePlataforma(req, res) {

    const plataforma = req.body;

    try {
        await db.run(
            `
                UPDATE plataformas 
                SET nome_plataforma =?, 
                WHERE id =?
            `);

    res.json({
        "statusCode":200
    });

    } catch (error) {
        console.log(`Não foi possivel atualizar a plataforma de id ${plataforma.idPlataforma}`);   
    }

}

// Query feita para deletar uma plataforma da tabela, pelo nome. 

export async function deletePlataforma(req,res) {

    const plataforma = req.body;

    try {
        await db.run(
                    `
                        DELETE 
                        FROM plataformas 
                        WHERE nome_plataforma =?    
                    `, [plataforma.nome_plataforma]);

    res.json({
        "statusCode":201
    });    

    } catch (error) {
        console.log(`Não foi possivel deletar o plataformas ${plataforma.nome_plataforma}`);
    }

    
}