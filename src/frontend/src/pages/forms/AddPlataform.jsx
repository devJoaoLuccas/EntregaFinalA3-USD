import { useState, useEffect } from 'react';
 
import InputText from '../../components/forms/InputText';

import '../../styles/global.css';
import '../../styles/forms.css';
import ButtonLogin from '../../components/buttons/ButtonLogin';


function AddPlataform() {

    const [plataformName, setPlataformName] = useState();
    const [isPending, setIsPending] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsPending(true);

        try {
            fetch('http://localhost:3000/inserirPlataforma', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome_plataforma: plataformName
            })
        })  
            .then(() => {
                console.log(`new plataform added ${plataformName}`)
                setIsPending(false);
                setIsSubmitted(true);
            })    
        } catch (error) {
            window.alert("Não é possivel inserir essa plataforma")
        }
        
    }

    useEffect(() => {
        if (isSubmitted) {
            window.alert('A plataforma foi adicionada com sucesso')
            isSubmitted(false);
        }
    }, [isSubmitted]);



    return (
        <main className='containerForms'>
            <section className='card-addPlataform'>
                <form onSubmit={handleSubmit} className='card-infoPlataform  '>
                    <img className='logoPlataform' src="../src/assets/logo.png" alt="" /> 
                        <div>
                            <h1>Adicionar Plataforma</h1>
                        </div>
                        <InputText label="Nome da plataforma" classe="input-text" textoCapturado={setPlataformName}  classeLabel='input-label' />
                        <div className='footer-plataform'>
                            <ButtonLogin texto='Enviar'  classe='buttonAddPlataform'/>
                            <ButtonLogin texto='Cancelar'  classe='buttonAddPlataform'/>
                        </div>   
                </form>
            </section>
        </main>
    )
}


export default AddPlataform;