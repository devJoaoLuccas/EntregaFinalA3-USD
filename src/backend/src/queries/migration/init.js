export const init = [
    `
    CREATE TABLE IF NOT EXISTS jogos 
        (idJogo INTEGER PRIMARY KEY AUTOINCREMENT,
        name_game TEXT CHECK (LENGTH(name_game) <= 50) NOT NULL,
        developed_by TEXT CHECK (LENGTH(developed_by) <= 50) NOT NULL, 
        category_name TEXT CHECK (LENGTH(category_name) <= 50) NOT NULL,
        data_criacao BLOB NOT NULL,
        status TEXT CHECK(status IN ("Jogando", "Zerado", "Para jogar")) NOT NULL,
        note REAL NOT NULl);`,
    `
    CREATE TABLE IF NOT EXISTS usuarios 
        (idUser INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT CHECK(LENGTH(username) <= 20) NOT NULL,
        email TEXT CHECK (LENGTH(email) <= 255) NOT NULL,
        password TEXT CHECK (LENGTH(password) <= 20) NOT NULL,
        data_nascimento BLOB NOT NULL);`,
    `
    CREATE TABLE IF NOT EXISTS plataformas 
        (idPlataforma INTEGER PRIMARY KEY AUTOINCREMENT, 
        nome_plataforma TEXT CHECK (LENGTH(nome_plataforma) <= 50) NOT NULL);`,
    `
    CREATE TABLE IF NOT EXISTS jogos_plataformas 
        (idJogosPlataformas INTEGER PRIMARY KEY AUTOINCREMENT,
        idJogo INTEGER, idPlataforma INTEGER,
        FOREIGN KEY (idJogo) REFERENCES jogos (idJogo) ON DELETE CASCADE,
        FOREIGN KEY (idPlataforma) REFERENCES plataformas (idPlataforma) ON DELETE CASCADE
    );`,
    `
    CREATE TABLE IF NOT EXISTS usuario_jogo 
        (idUsuarioJogo INTENGER PRIMARY KEY AUTOINCREMENT, 
        idUser INTENGER, idJogo INTENGER, FOREGEIN KEY (idUser) REFERENCES usuario(idUser) ON DELETE CASCADE,
        FOREGEIN KEY (idJogo) REFERENCES jogos (idJogo)) ON DELETE CASCADE
    `,
];