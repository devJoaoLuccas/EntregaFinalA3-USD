import { useState, useEffect } from 'react'
import InputText from '../../components/forms/InputText';
import SelectPlataforma from '../../components/forms/SelectPlataforma';
import SelectCategorias from '../../components/forms/SelectCategorias';
import ButtonLogin from '../../components/buttons/ButtonLogin';

import '../../styles/global.css'
import '../../styles/forms.css'
import InputDate from '../../components/forms/InputDate';

function AddGames() {

    const [nameGame, setNameGame] = useState();
    const [developedBy, setDevelopedBy] = useState();
    const [category, setCategory] = useState('');
    const [plataform, setPlataform] = useState();
    const [date, setDate] = useState();

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isPending, setIsPending] = useState(false)

    const handleChangeCategory = event => {
        event.preventDefault();
        console.log(`{category}`)
        setCategory(event.target.value);
    }

    useEffect(() => {
        if (isSubmitted) {
            window.alert(`O jogo ${nameGame} foi adicionado com sucesso`);
            isSubmitted(false);
        }
    }, [isSubmitted]);


    const handleSubmit = (e) => {
        e.preventDefault();

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
                })

        } catch (error) {
            window.alert("Não foi possivel adicionar esse jogo.");
        }
    }


    return ( 
        <main className='container'> 
            <section className='card-addGames'>
                <form onSubmit={handleSubmit}>
                    <div className='card-infoGames'>
                        <img className='logoPlataform' src="../src/assets/logo.png" alt="" /> 
                        <h1>Adicionar Jogo</h1>
                        <div className='card-infoGames-inputs'>
                            <InputText 
                                label="Nome do jogo:" 
                                texto="Baldurs Gate 3" 
                                classe="card-infoGames-inputText" 
                                classeLabel='input-label' 
                                textoCapturado={setNameGame}/> 
                            <InputText 
                                label="Desenvolvido por:" 
                                texto="Larian Studios" 
                                classe="card-infoGames-inputText"  
                                classeLabel='input-label' 
                                textoCapturado={setDevelopedBy}/>
                            <div className='card-infoGames-selects'>
                                <div className='cardColumn'>
                                    <SelectCategorias 
                                        texto='Categorias:'
                                        classeLabel='card-infoGames-label' 
                                        classeSelect='card-infoGames-select' 
                                        textoCapturado={handleChangeCategory}
                                        valor={category} />
                                </div>    
                                <div className='cardColumn'>
                                    <SelectPlataforma 
                                        classeSelect='card-infoGames-select'
                                        classeLabel='card-infoGames-label' 
                                        texto='Plataformas:' />
                                </div>
                            </div>
                            <div className='cardRow'>
                                <InputDate 
                                    texto='Data de criação:' 
                                    classeInput='card-inputDate' 
                                    classeLabel='card-infoGames-label' 
                                    textoCapturado={setDate} />
                            </div>
                        </div>
                        <div className="footer-plataform">
                            <ButtonLogin 
                                texto='Enviar'  
                                classe='buttonAddGames'/>
                            <ButtonLogin 
                                texto='Cancelar'  
                                classe='buttonAddGames'/>
                        </div>
                    </div>
                </form>
            </section>
        </main>
    )


}



export default AddGames;
