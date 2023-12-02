import { openDb } from '../configDb.js';

// const db é uma varíavel que espera a conexão com o banco, facilitando o nosso codigo. 

const db = await openDb();

// Query feita para criar uma tabela de Plataformas e adicionar 10 valores por padrão. 

export async function createTablePlataformas() {

    await db.exec(
            `
            CREATE TABLE IF NOT EXISTS plataformas 
                (idPlataforma INTEGER PRIMARY KEY AUTOINCREMENT, 
                nome_plataforma NOT NULL)
            `
            );

}


export async function initInserirPlataformas() {
 
    try {

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
    } catch (error) {
            console.log("Não foi possivel inserir os dados nas plataformas")
    }

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

    const id = req.params.idPlataforma;

    try {   

        const plataforma = await db.get(
            `
                SELECT *
                FROM plataformas 
                WHERE idPlataforma =?
            `, [id])
        
        console.log(`A plataforma foi encontrada`, plataforma)
            
        if (!plataforma) {
            return res.status(404).json({error: 'Plataforma não encontrada'});
        }

        res.json(plataforma)
} catch (error) {
        console.log(`Não foi possivel selecionar a plataforma ${plataforma.nome_plataforma}`);   
        res.status(500).json({error:'Erro interno ao selecionar a plataforma'})    
  }

}


// Query feita para adicionar uma plataforma na tabela. 

export async function adicionarPlataforma(req, res) {

    const plataforma = req.body.nome_plataforma;

       try {
            await db.run(
                `
                    INSERT INTO plataformas 
                    (nome_plataforma) 
                    VALUES (?)
                `, [plataforma]) ;

            res.json({
                "statusCode":200
            });
                
       } catch (error) {
            console.log("Não foi possivel adicionar a plataforma.")
       }

  

}

// Query feita para atualizar uma plataforma na tabela. 

export async function updatePlataforma(req, res) {

    const plataforma = req.body;

        await db.run(
            `
                UPDATE plataformas 
                SET nome_plataforma =?
                WHERE idPlataforma =?
            `,[plataforma.nome_plataforma, plataforma.idPlataforma]
            );

    res.json({
        "statusCode":200
    });


}

// Query feita para deletar uma plataforma da tabela, pelo nome. 

export async function deletePlataforma(req,res) {

    const id = req.params.idPlataforma;

    try {
        await db.run(
                    `
                        DELETE 
                        FROM plataformas 
                        WHERE idPlataforma =?    
                    `, [id]);

    console.log(`A plataforma de ${id}, foi deletado com sucesso!`);

    res.json({
        "statusCode":201
    });    

    } catch (error) {
        res.json({
            "statusCode":402
        })
        console.log(`Não foi possivel deletar o plataformas ${plataforma.nome_plataforma}`);
    }

    
}