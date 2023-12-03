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
                data_nascimento BLOB NOT NULL,
                admin BOOLEAN NOT NULL)
            `
        );

}

export async function initInserirUsuario() {

    try {
        await db.run(
            `
            INSERT INTO usuarios (idUser, username, email, password, data_nascimento, admin) 
            VALUES
                (1,"joaodemais1503", "joao.marques@gmail.com", "Paula1503", "29/12/2003", 1),
                (2,"marcos1503", "marcos.marques@gmail.com", "marcos1503", "15/03/1998", 0),
                (3,"sadmarques", "joaodemais29@gmail.com", "joaodemais1503", "29/11/2005", 1),
                (4, "nightwing", "dick.grayson@bludhavenmail.com", "W1ngs_N1ght", "20/03/1995", 1),
                (5, "batman", "the_dark_knight@wayneenterprises.com", "G0th@m!T3rr1t0ry", "07/04/1985", 1),
                (6, "kilerjoker", "jokerized@arkhamasylum.com", "H@h@H@_Sm1l3", "19/09/1980", 1),
                (7, "batgirl", "oracle_rises@gmail.com", "B@tG1rlB@rbara", "15/03/2023", 1),
                (8, "alfredp", "butlerextraordinaire@gmail.com", "TeaT1m3_Bruce", "08/02/1945", 1),
                (9, "damianwayne005", "robin5@waynecorp.com", "S0n_0f_B@t", "19/12/2000", 1),
                (10, "timdrake", "tim.drake@redrobin.com", "R0b1nR3b0rn", "17/09/1999", 1);
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

    const id = req.params.idUser;

    try {    
        const usuario = await db.get(
            `
                SELECT *
                FROM usuarios 
                WHERE idUser=? 
            `, [id])
        
        console.log('O usuario foi encontrado:', usuario)
        
        if(!usuario) {
            return res.json( {
                "statusCode":404,
                error:"Usuario não encontrado"
            })
        }
        
       res.json(usuario); 

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
                (username, email, password, data_nascimento, admin) 
                VALUES (?,?,?,?,?)
            `, [usuario.username, usuario.email,usuario.password, usuario.data_nascimento, usuario.admin]);

        console.log("O usuario foi adicionado com sucesso", usuario.username);

        res.json ({
            "statusCode": 200
        });    
    } catch (error) {
        console.log("Não foi possivel adicionar o usuario");
    }

 
}

// Query feita para atualizar um usuário em especificio da tabela. 

export async function updateUsuario(req, res) {

    const usuario = req.body;

    try {
        await db.run(
            `
                UPDATE usuarios
                SET username=?,email=?,password=? 
                WHERE idUser=?
            `, [usuario.username,usuario.email, usuario.password, usuario.idUser]);

        console.log(`O usuario foi atualizado com sucesso,` [usuario.username]);

        res.json ({
            "statusCode": 200
        });
    } catch (error) {
        res.json({
            "statusCode": 401
        })
        console.log(`Não foi possivel atualizar o usuário`)        
    }

}

// Query feita deletar um usuário em especificio da tabela, pelo nome. 

export async function deleteUsuario(req, res) {

    const id = req.params.idUser;

    try {
        await db.all(
            `
                DELETE FROM
                usuarios 
                WHERE idUser=?
            `, [id]);

    console.log(`O usuário de ${id} id, foi deletado do nosso banco`);

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

        console.log('Login efetuado com sucesso, o id selecionado foi: ', id.idUser)

        res.json({
            "statusCode":200,
            "idUser":id.idUser
        })
    } catch (error) {
        console.log("ERROR!", error);
        res.status(500).json({
            "statusCode": 500,
            "message": "Erro interno do servidor"
        });
    }

}
