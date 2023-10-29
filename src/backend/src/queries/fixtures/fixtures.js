export const fixtures = [
    `
    INSERT INTO jogos (idJogo, name_game, developed_by, category_name, data_criacao, status, note)
    VALUES 
        ("League Of Legends", "Riot Games", "MOBA","01/10/2009", "Jogando",8.50),
        ("Assansis Creed II", "Ubsisoft", "Ação e Aventura", "17/09/2009", "Zerado", 10),
        ("The Witcher 3:Wild Hunt", "CD Projekt RED", "RPG", "19/05/2015","Jogando", 9.90),
        ("Pokemon Go", "Niantic,Inc", "Realidade Aumentada", "06/07/2016", "Jogando", 8.50),
        ("Fortnite", "Epic Games", "Battle Royale", "25/07/2017", "Jogando", 8.80),
        ("Dark Souls", "FromSoftware", "RPG de ação", "22/09/2011", "Para jogar", 9.60),
        ("Minecraft", "Mojang Studios", "Sandbox", "01/01/2011", "Jogando", 10),
        ("The Elder Scrolls V: Skyrim", "Bethesda", "RPG de ação", "11/11/2011", "Zerado", 9.40),
        ("Grand Thef Auto V", "Rockstart North", "Ação-Aventura", "17/09/2013", "Zerado", 9.70),
        ("The Legend of Zelda: Ocarina of Time", "Nintendo", "Ação-Aventura", "01/01/1998", "Zerado", 10);
    `,
    `INSERT INTO usuarios (idUser, username, email, password, data_nascimento) 
    VALUES
        ("joaodemais1503", "joao.marques@gmail.com", "Paula1503", "29/12/2003"),
        ("marcos1503", "marcos.marques@gmail.com", "marcos1503", "15/03/1998"),
        ("sadmarques", "joaodemais29@gmail.com", "joaodemais1503", "29/11/2005"),
        ("nightwing", "dick.grayson@gmail.com", "robin01", "20/03/1995"),
        ("batman", "bruce.wayne@gmail.com", "selinakyle", "07/04/1985"),
        ("kilerjoker", "joker.joker@outlook.com", "kilercrock", "19/09/1980"),
        ("batgirl", "barbara.gordon@gmail.com", "barbsgordon", "15/03/2023"),
        ("alfredp", "alfred.paniwhise@gmail.com", "cha1053", "08/02/1945"),
        ("damianwayne005", "damian.wayne@gmail.com", "robin04", "19/12/2000"),
        ("timdrake", "tim.drake@gmail.com", "robin03", "17/09/1999");
    `,
    `
    INSERT INTO plataformas (idPlataforma, nome_plataforma) 
    VALUES 
        ("Steam"),
        ("Epic Games"),
        ("Playstation"),
        ("Xbox"),
        ("Nintendo"),
        ("Battle.Net"),
        ("Uplay"),
        ("Origin"),
        ("Mobile"),
        ("Web");
    `,
    `
    INSERT INTO usuario_jogo (idUsuarioJogo, idJogo, idUser)
    VALUES
        (1, 10),
        (5, 6),
        (4, 2),
        (3, 1),
        (4, 9),
        (9, 8),
        (5, 5),
        (10, 7),
        (8, 6),
        (5, 4);
    `,
    `
    INSERT INTO jogos_plataformas (idJogosPlataformas, idJogo, idPlataforma)
    VALUES
        (1, 5),
        (4, 3),
        (6, 7),
        (5, 4),
        (3, 2),
        (10, 1),
        (9, 2),
        (3, 6),
        (3, 10),
        (7, 8);
    `

]