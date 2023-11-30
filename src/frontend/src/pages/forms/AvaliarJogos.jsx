import InputNumber from "../../components/forms/InputNumber";
import InputText from "../../components/forms/InputText";
import SelectStatus from "../../components/forms/SelectStatus";
import ButtonLogin from "../../components/buttons/ButtonLogin";

import '../../styles/forms.css';
import '../../styles/global.css';

function AvaliarJogo() {

    return (

        <main className="container">
            <section className="card-avaliar">
                <form action="">
                    <div className="card-infosF">
                        <div>
                            <h1>Avaliar Jogo</h1>
                        </div>
                        <div className="cardRow-avaliar">
                                <div className="cardColumn-avaliar">
                                    <SelectStatus 
                                        classeLabel='input-label-avaliarX'  
                                        classeSelect='card-infoGames-selectX'
                                        texto='Status' 
                                    />
                                </div>
                                <div className="cardColumn-avaliar">
                                    <InputNumber 
                                        texto='Selecione a nota:'
                                        classeInput="card-info-inputNumber" 
                                        classeLabel='input-label-avaliarY' 
                                    />
                                </div>
                        </div>
                        <footer>
                            <div className='footer-plataform'>
                                <ButtonLogin 
                                    texto='Enviar'  
                                    classe='buttonAddPlataform'
                                />
                                <ButtonLogin 
                                    texto='Cancelar'  
                                    classe='buttonAddPlataform'
                                />
                            </div>
                        </footer>
                        <div class="dropdown">
                                <div>
                                    <span class="dropdown-textF">
                                        GUILHERMEX2
                                    </span>
                                    <div class="dropdown-content">
                                        <a href="" id="perfil-link">Meu Perfil</a>
                                        <a href="" id="adm-link">Painel de administrador</a>
                                        <a href="" id="sair-link">Sair</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </form>
            </section>
        </main>

    )
}



export default AvaliarJogo;