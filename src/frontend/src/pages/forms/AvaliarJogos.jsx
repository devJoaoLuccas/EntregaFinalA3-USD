import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ButtonMenu from "../../components/buttons/ButtonMenu";
import InputNumber from "../../components/forms/inputNumber";
import SelectStatus from "../../components/forms/SelectStatus";
import Dropdown from "../../components/navbar/Dropdown";

import styles from '../../styles/forms/AvaliarJogos.module.css'

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

        <main className={styles.container}>
            <section className={styles.card_avaliar}>
                    <div className={styles.card_infos}>
                        <div>
                            <h1>
                                Avaliar 
                                <span> {jogos.name_game}</span>
                            </h1>
                        </div>
                        <div className={styles.cardRow}>
                                <div className={styles.cardColumn}>
                                    <SelectStatus 
                                        classeLabel={styles.input_label_avaliarX}  
                                        classeSelect={styles.card_info_inputNumber}
                                        texto='Status' 
                                        textoCapturado={setStatus}
                                    />
                                </div>
                                <div className={styles.cardColumn}>
                                    <InputNumber 
                                        texto='Selecione a nota:'
                                        textoCapturado={setNota} 
                                        valor='0'
                                        classe={styles.card_info_inputNumber} 
                                        classeLabel={styles.input_label_avaliarX}
                                    />
                                </div>
                        </div>
                        <footer>
                            <div className={styles.footer_plataform}>
                                <ButtonMenu 
                                    texto='Avaliar'  
                                    classe={styles.buttonAddPlataform}
                                    event={avaliar}
                                />
                                <ButtonMenu 
                                    texto='Voltar'  
                                    classe={styles.buttonAddPlataform}
                                    event={voltar}
                                />
                            </div>
                        </footer>
                        <div className={styles.dropdown_container}>
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