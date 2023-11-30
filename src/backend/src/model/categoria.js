import { openDb } from "../configDb";


const db = await openDb();


export async function createTableCategorias() {
    
    await db.run(
        `
            CREATE TABLE categorias (
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