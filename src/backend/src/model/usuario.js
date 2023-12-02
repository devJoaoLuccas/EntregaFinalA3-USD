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

    try {
        await db.run(
            `
            INSERT INTO usuarios (idUser, username, email, password, data_nascimento) 
            VALUES
                (1,"joaodemais1503", "joao.marques@gmail.com", "Paula1503", "29/12/2003"),
                (2,"marcos1503", "marcos.marques@gmail.com", "marcos1503", "15/03/1998"),
                (3,"sadmarques", "joaodemais29@gmail.com", "joaodemais1503", "29/11/2005"),
                (4, "nightwing", "dick.grayson@bludhavenmail.com", "W1ngs_N1ght", "20/03/1995"),
                (5, "batman", "the_dark_knight@wayneenterprises.com", "G0th@m!T3rr1t0ry", "07/04/1985"),
                (6, "kilerjoker", "jokerized@arkhamasylum.com", "H@h@H@_Sm1l3", "19/09/1980"),
                (7, "batgirl", "oracle_rises@gmail.com", "B@tG1rlB@rbara", "15/03/2023"),
                (8, "alfredp", "butlerextraordinaire@gmail.com", "TeaT1m3_Bruce", "08/02/1945"),
                (9, "damianwayne005", "robin5@waynecorp.com", "S0n_0f_B@t", "19/12/2000"),
                (10, "timdrake", "tim.drake@redrobin.com", "R0b1nR3b0rn", "17/09/1999");
                `
        );
    } catch (error) {
        console.log("Não foi possivel inserir o login dos usuários");
    }


}

// Query feita para selecionar todos os Usuarios da tabela. 

export async function selectUsuarios(req, res) {
    
    try {
        await db.all(
            `
                SELECT * 
                FROM usuarios
            `)
            .then(usuario => res.json(usuario));
    } catch (error) {
        console.log(`Não foi possivel selectionar todos os usuários`);
    }
                  
}

// Query feita para selecionar um usuário em especificio da tabela, pelo nome. 

export async function selectUsuario(req,res) {

    const username = req.body.username;

    try {    
        await db.get(
            `
                SELECT *
                FROM usuarios 
                WHERE username=? 
            `, [username])
                .then(usuario => res.json(usuario));
    } catch (error) {
        console.log(`Não foi possivel selecionar o usuario`)
    }

  
}

// Query feita para adicionar um usuário na tabela.

export async function adicionarUsuario(req,res) {

    const usuario = req.body;

    try {
        await db.run(
            `
                INSERT INTO usuarios 
                (username, email, password, data_nascimento) 
                VALUES (?,?,?,?)'
            `, [usuario.username, usuario.email,usuario.password, usuario.data_nascimento]);

        res.json ({
            "statusCode": 200
        });    
    } catch (error) {
        console.log(`Não foi possivel adicionar usuário`);
    }
    
}

// Query feita para atualizar um usuário em especificio da tabela. 

export async function updateUsuario(req, res) {

    const usuario = req.body;

    try {
        await db.run(
            `
                UPDATE usuarios
                SET username=?,password=? 
                WHERE idUser=?
            `, [usuario.username, usuario.password, usuario.idUser]);

        res.json ({
            "statusCode": 200
        });
    } catch (error) {
        console.log(`Não foi possivel atualizar o usuário`)        
    }

}

// Query feita deletar um usuário em especificio da tabela, pelo nome. 

export async function deleteUsuario(req, res) {

    const username = req.body.username;

    try {
        await db.all(
            `
                DELETE FROM
                usuarios 
                WHERE username=?
            `, [username]);

        res.json ({
                "statusCode": 200
        });
        
    } catch (error) {
       console.log(`Não foi possivel deletar o usuario`) 
    }


}

export async function verificarUsuario(req, res) {

    const login = req.body;

    try {

        const id =  await db.get (
            `
                SELECT idUser 
                FROM usuarios
                WHERE (email=? OR username=?) AND password=?
            `,[login.user, login.user, login.password]
        )


        if(!id) {
            res.json({
                "statusCode":401,
                "message":"Credenciais inválidas"
            })

            console.log(`Não foi possivel encontrar o usuário com o user ${login.user}`);
            return
        }     

        console.log('Login efetuado com sucesso, o id selecionado foi: ', id)

        res.json({
            "statusCode":200,
            "idUser":id
        })
    } catch (error) {
        console.log("ERROR!", error);
        res.status(500).json({
            "statusCode": 500,
            "message": "Erro interno do servidor"
        });
    }

}
