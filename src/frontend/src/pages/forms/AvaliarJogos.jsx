import InputNumber from "../../components/forms/inputNumber";
import InputText from "../../components/forms/InputText";
import SelectStatus from "../../components/forms/SelectStatus";
import ButtonLogin from "../../components/buttons/ButtonLogin";

import '../../styles/forms.css';
import '../../styles/global.css';
import ButtonMenu from "../../components/buttons/ButtonMenu";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Dropdown from "../../components/navbar/Dropdown";

function AvaliarJogo() {

    const { idJogos } = useParams();
    const navigate = useNavigate();

    
    const [jogos, setJogo] = useState([]);
    const userId = localStorage.getItem('userId');

    const [status, setStatus] = useState();
    const [nota, setNota] = useState();

    const voltar = () => {
        return navigate('/jogos')
    }

    const avaliar = () => {
        const confirmation = window.confirm(`A avaliação de ${jogos.name_game} está correta?`)

        if(confirmation) {
            fetch('http://localhost:3000/inserirNotaJogo', {
                method:'POST',
                headers: {
                    'Content-type':'application/json'
                },
                body: JSON.stringify({
                    idUser: userId,
                    note: nota, 
                    idJogo: idJogos
                })
            })
                .then(() => {
                    window.alert(`O jogo foi avaliado com sucesso!`);
                    return navigate('/jogos');
                })
                .catch((err) => {
                    window.alert('Não foi possivel avaliar o jogo!');
                    console.error("Error ao avaliar o jogo", err);
                })
        }
    }


    useEffect(() => {
        fetch(`http://localhost:3000/jogo/${idJogos}`, {
            method:'GET',
            haders: {
                'Content-Type':'application/json'
            },
        })
            .then((resp) => {
                if(!resp.ok) {
                    throw new Error('Erro ao buscar detalhes do jogo');
                }
                return resp.json();
            })
            .then((jogo) => {
                setJogo(jogo);
            })
            .catch((err) => {
                console.error('Erro ao buscar detalhes do jogo:', err);
            })
    }, [idJogos]);


    return (

        <main className="container">
            <section className="card-avaliar">
                    <div className="card-infosF">
                        <div>
                            <h1>
                                Avaliar 
                                <span> {jogos.name_game}</span>
                            </h1>
                        </div>
                        <div className="cardRow-avaliar">
                                <div className="cardColumn-avaliar">
                                    <SelectStatus 
                                        classeLabel='input-label-avaliarX'  
                                        classeSelect='card-infoGames-selectX'
                                        texto='Status' 
                                        textoCapturado={setStatus}
                                    />
                                </div>
                                <div className="cardColumn-avaliar">
                                    <InputNumber 
                                        texto='Selecione a nota:'
                                        textoCapturado={setNota} 
                                        valor='0'
                                        classe="card-info-inputNumber" 
                                        classeLabel='input-label-avaliarY'
                                    />
                                </div>
                        </div>
                        <footer>
                            <div className='footer-plataform'>
                                <ButtonMenu 
                                    texto='Avaliar'  
                                    classe='buttonAddPlataform'
                                    event={avaliar}
                                />
                                <ButtonMenu 
                                    texto='Voltar'  
                                    classe='buttonAddPlataform'
                                    event={voltar}
                                />
                            </div>
                        </footer>
                        <div className="dropdown-container">
                            <Dropdown 
                                userId={userId} 
                            />
                        </div>
                    </div>
            </section>
        </main>

    )
}



export default AvaliarJogo;