import { openDb } from '../configDb.js';

// const db é uma varíavel que espera a conexão com o banco, facilitando o nosso codigo. 

const db = await openDb();

// Query feita para criar uma tabela de Usuarios e adicionar 10 valores por padrão. 

export async function createTableCategorias() {
    
    await db.run(
        `
            CREATE TABLE IF NOT EXISTS categorias (
                idCategorias INTEGER PRIMARY KEY AUTOINCREMENT, 
                categoria_name TEXT NOT NULL 
            )
        `
    )
}

export async function initCategorias() {

    try {

        await db.run (
            `
                INSERT INTO categorias (idCategorias,categoria_name)
                VALUES 
                (1,'Battle Royale'),
                (2,'Ação'),
                (3,'RPG'),
                (4,'Esportes'),
                (5,'RTS'),
                (6,'SandBox'),
                (7,'FPS'),
                (8,'Jogos Indies'),
                (9,'Simulação'),
                (10,'MMORPG')
            `
        );

    } catch (error) {
        console.log("Não foi possível inserir os dados em categorias");
    }

}

export async function selectCategorias(req, res) {

    try {
        
        await db.all(
            `
                SELECT * 
                FROM categorias
            `
        ).then(categorias => res.json(categorias));

    } catch (error) {
        consolee.log("Não foi possivel enviar as categorias.")
            .then(res.json = ({
                "statusCode":404
        }))
    }

}