import { Router } from "express";
import { selectUsuarios, selectUsuario, adicionarUsuario, updateUsuario, deleteUsuario } from './controler/usuario.js';
import { selectJogo, selectJogos, adicionarJogo, updateJogo, deleteJogo } from "./controler/jogos.js";
import { adicionarPlataforma, deletePlataforma, selectPlataforma, selectPlataformas, updatePlataforma } from "./controler/plataformas.js";
<<<<<<< HEAD
import { adicionarNotaJogo, deleteNotaJogo, selectNotasJogos, updateNotaJogo } from "./controler/notaJogo.js";
=======
import { adicionarNotaJogo, deleteNotaJogo, selectNotasJogos } from "./controler/notaJogo.js";
>>>>>>> parent of e036ce6 (feat: update notasJogos)

const router = Router();

// Os metódos GET da nossa API, chamando as querys de cada banco. 

router.get('/jogo', selectJogo);
router.get('/usuario', selectUsuario);
router.get('/plataforma', selectPlataforma);
router.get('/usuariosJogos', selectNotasJogos)
// router.get('/usuarioJogo', selectUsuarioJogo);

router.get('/jogos', selectJogos);
router.get('/usuarios', selectUsuarios);
router.get('/plataformas', selectPlataformas);

// Os metódos POST da nossa API, chamando as querys de cada banco.

router.post('/inserirUsuario', adicionarUsuario);
router.post('/inserirJogo', adicionarJogo);
router.post('/inserirPlataforma', adicionarPlataforma);
router.post('/inserirNotaJogo', adicionarNotaJogo);

// Os metódos PUT da nossa API, chamando as querys de cada banco.

router.put('/updateUsuario', updateUsuario);
router.put('/updateJogo', updateJogo);
router.put('/updatePlataforma', updatePlataforma);
router.put('/updateNotaJogo', updateNotaJogo);

// Os metódos DELETE da nossa API, chamando as querys de cada banco.

router.delete('/deleteUsuario', deleteUsuario);
router.delete('/deleteJogo', deleteJogo);
router.delete('/deletePlataforma', deletePlataforma);
router.delter('/deleteNotaJogo', deleteNotaJogo);

export default router;