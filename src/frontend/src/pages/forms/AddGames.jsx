import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import InputText from '../../components/forms/InputText';
import SelectPlataforma from '../../components/forms/SelectPlataforma';
import SelectCategorias from '../../components/forms/SelectCategorias';
import ButtonLogin from '../../components/buttons/ButtonLogin';
import InputDate from '../../components/forms/InputDate';
import ButtonMenu from '../../components/buttons/ButtonMenu';

import styles from '../../styles/forms/AddGames.module.css'


function AddGames() {

    const [nameGame, setNameGame] = useState();
    const [developedBy, setDevelopedBy] = useState();
    const [category, setCategory] = useState('');
    const [plataform, setPlataform] = useState();
    const [date, setDate] = useState();

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isPending, setIsPending] = useState(false)
    const navigate = useNavigate();

    const handleChangeCategory = event => {
        event.preventDefault();
        console.log(`{category}`)
        setCategory(event.target.value);
    }

    const voltar = () => {
        return navigate('/painelAdmin')
    }

    useEffect(() => {
        if (isSubmitted) {
            window.alert(`O jogo ${nameGame} foi adicionado com sucesso`);
            isSubmitted(false);
        }
    }, [isSubmitted]);


    const handleSubmit = () => {
        try {           
            setIsPending(true);

            fetch('http://localhost:3000/inserirJogo', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name_game: nameGame,
                    developed_by: developedBy,
                    category_name: category,
                    data_criacao: date,
                    note: 0.0
                })
            })
                .then(() => {
                    console.log(`a new game was added ${nameGame}`);
                    setIsPending(false);
                    setIsSubmitted(true);
                    return navigate('/painelAdmin')
                })

        } catch (error) {
            window.alert("Não foi possivel adicionar esse jogo.");
        }
    }


    return ( 
        <main className={styles.container}> 
            <section className={styles.card_addGames}>
                    <div className={styles.card_infoGames}>
                        <img className={styles.logoPlataform} src="../src/assets/logo.png" alt="" /> 
                        <h1>Adicionar Jogo</h1>
                        <div className={styles.card_infoGames_inputs}>
                            <InputText 
                                label="Nome do jogo:" 
                                texto="Baldurs Gate 3" 
                                classe={styles.card_infoGames_inputText} 
                                classeLabel={styles.input_label} 
                                textoCapturado={setNameGame}/> 
                            <InputText 
                                label="Desenvolvido por:" 
                                texto="Larian Studios" 
                                classe={styles.card_infoGames_inputText} 
                                classeLabel={styles.input_label}
                                textoCapturado={setDevelopedBy}/>
                            <div className={styles.cardRow}>
                                <div className={styles.cardColumn}>
                                    <SelectCategorias 
                                        texto='Categorias:'
                                        classeLabel={styles.input_label} 
                                        classeSelect={styles.card_infoGames_select}
                                        textoCapturado={handleChangeCategory}
                                        valor={category} />
                                </div>
                                <div className={styles.cardColumn}>
                                    <SelectPlataforma 
                                        classeSelect={styles.card_infoGames_select}
                                        classeLabel={styles.input_label}  
                                        texto='Plataformas:' />
                                </div>
                            </div>
                            <div className={styles.cardRow_date}>
                                <InputDate 
                                    texto='Data de criação:' 
                                    classe={styles.card_inputDate} 
                                    classeLabel={styles.input_label_date} 
                                    textoCapturado={setDate} />
                            </div>
                        </div>
                        <div className={styles.footer_plataform}>
                            <ButtonMenu 
                                texto='Enviar'  
                                classe={styles.buttonAddGames}
                                event={handleSubmit}
                                />
                                
                            <ButtonMenu 
                                texto='Cancelar'  
                                classe={styles.buttonAddGames}
                                event={voltar}
                                />
                        </div>
                    </div>
            </section>
        </main>
    )


}



export default AddGames;
