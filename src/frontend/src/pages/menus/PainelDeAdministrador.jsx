import ButtonMenu from "../../components/buttons/ButtonMenu";
import Dropdown from '../../components/navbar/Dropdown';

import { useNavigate } from "react-router-dom";

import styles from '../../styles/menus/PainelDeAdministrador.module.css'

function PainelDeAdministrador() {

    const navigate = useNavigate();

    const addJogos = () => {
        return navigate('/adicionarJogo');
    }

    const addPlataform = () => {
        return navigate('/adicionarPlataforma');
    }

    const editarDeletar = () => {
        return navigate('/editarDeletar');
    }

    const voltar = () => {
        return navigate('/menuPrincipal');
    }

    const userId = localStorage.getItem('userId');

    return (
        <main className={styles.containerMenu}>
            <section className={styles.cardPainel}>
                <div className={styles.card_infos}>
                    <h1>PAINEL DE <span>ADMINISTRADOR</span></h1>
                    <h2>MENU:</h2>
                    <ButtonMenu 
                        texto="ADICIONAR JOGOS"
                        classe={styles.buttonMenu} 
                        event={addJogos}
                    />
                    <ButtonMenu 
                        texto="ADICIONAR PLATAFORMAS" 
                        classe={styles.buttonMenu} 
                        event={addPlataform} 
                    />
                    <ButtonMenu 
                        texto="EDITAR E DELETAR"
                        classe={styles.buttonMenu} 
                        event={editarDeletar}  
                    />
                    <ButtonMenu 
                        texto="<- VOLTAR"
                        classe={styles.buttonMenu} 
                        event={voltar}  
                    />
                </div>
                <div className={styles.footerMenu_admin}>
                    <div>
                        <Dropdown 
                            userId={userId}
                        />
                    </div>
                        <img className={styles.logo_admin} src="src\assets\logo.png" alt="" />
                </div>

            </section>
        </main>

    )


}

export default PainelDeAdministrador;