import ButtonMenu from "../../components/buttons/ButtonMenu";
import Dropdown from '../../components/navbar/Dropdown';

import { useNavigate } from "react-router-dom";



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
        <main className="containerMenu">
            <section className="cardPainel">
                <div className="card-infos">
                    <h1>PAINEL DE <span>ADMINISTRADOR</span></h1>
                    <h2>MENU:</h2>
                    <ButtonMenu 
                        texto="ADICIONAR JOGOS"
                        classe={"buttonMenu"} 
                        event={addJogos}
                    />
                    <ButtonMenu 
                        texto="ADICIONAR PLATAFORMAS" 
                        classe={"buttonMenu"}
                        event={addPlataform} 
                    />
                    <ButtonMenu 
                        texto="EDITAR E DELETAR"
                        classe={"buttonMenu"}
                        event={editarDeletar}  
                    />
                    <ButtonMenu 
                        texto="<- VOLTAR"
                        classe={"buttonMenu"}
                        event={voltar}  
                    />
                </div>
                <div className="footerMenu-admin">
                    <div>
                        <Dropdown 
                            userId={userId}
                        />
                    </div>
                        <img className="logoAdmin" src="src\assets\logo.png" alt="" />
                </div>

            </section>
        </main>

    )


}

export default PainelDeAdministrador;