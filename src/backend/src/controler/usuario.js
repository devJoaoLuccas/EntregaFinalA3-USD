import { openDb } from '../configDb.js'

// const db é uma varíavel que espera a conexão com o banco, facilitando o nosso codigo. 

const db = await openDb();

// Query feita para criar uma tabela de Usuarios e adicionar 10 valores por padrão. 

export async function createTableUsuarios() {

    await db.exec(
            `
            CREATE TABLE IF NOT EXISTS usuarios 
                (idUser INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT CHECK(LENGTH(username) <= 20) NOT NULL, 
                email TEXT CHECK (LENGTH(email) <= 255) NOT NULL, 
                password TEXT CHECK (LENGTH(password) <= 20) NOT NULL, 
                data_nascimento BLOB NOT NULL)
            `
        );

}

export async function initInserirUsuario() {
    await db.run(
            `
            INSERT INTO usuarios (idUser, username, email, password, data_nascimento) 
            VALUES
                (1,"joaodemais1503", "joao.marques@gmail.com", "Paula1503", "29/12/2003"),
                (2,"marcos1503", "marcos.marques@gmail.com", "marcos1503", "15/03/1998"),
                (3,"sadmarques", "joaodemais29@gmail.com", "joaodemais1503", "29/11/2005"),
                (4,"nightwing", "dick.grayson@gmail.com", "robin01", "20/03/1995"),
                (5,"batman", "bruce.wayne@gmail.com", "selinakyle", "07/04/1985"),
                (6,"kilerjoker", "joker.joker@outlook.com", "kilercrock", "19/09/1980"),
                (7,"batgirl", "barbara.gordon@gmail.com", "barbsgordon", "15/03/2023"),
                (8,"alfredp", "alfred.paniwhise@gmail.com", "cha1053", "08/02/1945"),
                (9,"damianwayne005", "damian.wayne@gmail.com", "robin04", "19/12/2000"),
                (10,"timdrake", "tim.drake@gmail.com", "robin03", "17/09/1999");
            `
    );
}

// Query feita para selecionar todos os Usuarios da tabela. 

export async function selectUsuarios(req, res) {
    
    await db.all('SELECT * FROM usuarios')
                .then(usuario => res.json(usuario));
                  
}

// Query feita para selecionar um usuário em especificio da tabela, pelo nome. 

export async function selectUsuario(req,res) {

    let username = req.body.username;

    await db.get('SELECT * FROM usuarios WHERE username=?', [username])
                    .then(usuario => res.json(usuario));
  
}

// Query feita para adicionar um usuário na tabela.

export async function adicionarUsuario(req,res) {

    let usuario = req.body;

    await db.run('INSERT INTO usuarios (username, email, password, data_nascimento) VALUES (?,?,?,?)', [usuario.username, usuario.email,usuario.password, usuario.data_nascimento]);

    res.json ({
        "statusCode": 200
    });

}

// Query feita para atualizar um usuário em especificio da tabela. 

export async function updateUsuario(req, res) {

    let usuario = req.body;

    await db.run('UPDATE usuarios SET username=?,password=? WHERE idUser=?', [usuario.username, usuario.password, usuario.idUser]);

    res.json ({
        "statusCode": 200
    });

}

// Query feita deletar um usuário em especificio da tabela, pelo nome. 

export async function deleteUsuario(req, res) {

    let username = req.body.username;

    await db.all('DELETE FROM usuarios WHERE username=?', [username])
                .then(usuario => res.json(usuario));

}
