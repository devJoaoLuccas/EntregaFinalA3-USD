import ButtonMenu from "../../components/buttons/ButtonMenu";

import '../../styles/menu.css'
import '../../styles/global.css'



function PainelDeAdministrador() {

    return (

        <main className="containerMenu">
            <section className="cardPainel">
                <div className="card-infos">
                    <h1>PAINEL DE <span>ADMINISTRADOR</span></h1>
                    <h2>MENU:</h2>
                        <ButtonMenu 
                            texto="ADICIONAR JOGOS" 
                        />
                        <ButtonMenu 
                            texto="ADICIONAR PLATAFORMAS" 
                        />
                        <ButtonMenu 
                            texto="EDITAR E DELETAR" 
                        />
                        <ButtonMenu 
                            texto="<- VOLTAR" 
                        />
                </div>
                <div className="footerMenu">
                    <div class="dropdown">
                        <div>
                            <span class="dropdown-text">
                                GUILHERMEX2
                            </span>
                            <div class="dropdown-content">
                                <a href="" id="perfil-link">Meu Perfil</a>
                                <a href="" id="adm-link">Painel de administrador</a>
                                <a href="" id="sair-link">Sair</a>
                            </div>
                        </div>
                    </div>
                        <img className="logo" src="src\assets\logo.png" alt="" />
                </div>

            </section>
        </main>

    )


}

export default PainelDeAdministrador;