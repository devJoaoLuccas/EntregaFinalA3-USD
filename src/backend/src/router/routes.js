import { Router } from "express";

import { selectUsuarios, selectUsuario, adicionarUsuario, updateUsuario, deleteUsuario, verificarUsuario } from '../model/usuario.js';
import { selectJogo, selectJogos, adicionarJogo, updateJogo, deleteJogo } from "../model/jogos.js";
import { adicionarPlataforma, deletePlataforma, selectPlataforma, selectPlataformas, updatePlataforma } from "../model/plataformas.js";
import { adicionarNotaJogo, deleteNotaJogo, selectNotaJogo, selectNotasJogos, updateNotaJogo } from "../model/notaJogo.js";
import { adicionarPlataformaJogos, deletePlataformaJogos, selectPlataformaJogos, updatePlataformaJogos } from "../model/jogoPlataforma.js";
import { selectCategorias } from "../model/categoria.js";


const router = Router();

// Os metódos GET da nossa API, chamando as querys de cada banco. 

router.get('/jogo/:idJogos', selectJogo);
router.get('/usuario/:idUser', selectUsuario);
router.get('/plataforma/:idPlataforma', selectPlataforma);
router.get('/notaJogo/:idUser', selectNotaJogo);
router.get('/plataformasJogos', selectPlataformaJogos);

router.get('/notasJogos', selectNotasJogos);
router.get('/categorias', selectCategorias);
router.get('/jogos', selectJogos);
router.get('/usuarios', selectUsuarios);
router.get('/plataformas', selectPlataformas);

// Os metódos POST da nossa API, chamando as querys de cada banco.

router.post('/inserirUsuario', adicionarUsuario);
router.post('/inserirJogo', adicionarJogo);
router.post('/inserirPlataforma', adicionarPlataforma);
router.post('/inserirNotaJogo', adicionarNotaJogo);
router.post('/inserirPlataformasJogos', adicionarPlataformaJogos);

// Os metódos PUT da nossa API, chamando as querys de cada banco.

router.put('/updateUsuario', updateUsuario);
router.put('/updateJogo', updateJogo);
router.put('/updatePlataforma', updatePlataforma);
router.put('/updateNotaJogo', updateNotaJogo);
router.put('/updatePlataformaJogo', updatePlataformaJogos);

// Os metódos DELETE da nossa API, chamando as querys de cada banco.

router.get('/deleteUsuario/:idUser', deleteUsuario);
router.get('/deleteJogo/:idJogos', deleteJogo);
router.get('/deletePlataforma/:idPlataforma', deletePlataforma);
router.delete('/deleteNotaJogo', deleteNotaJogo);
router.delete('/deletePlataformaJogo', deletePlataformaJogos)

//  O metodo para verificar se possui login

router.post('/login', verificarUsuario);

export default router;