import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
 
import InputText from '../../components/forms/InputText';
import ButtonMenu from '../../components/buttons/ButtonMenu';

import styles from '../../styles/forms/AddPlataform.module.css'

function AddPlataform() {

    const [plataformName, setPlataformName] = useState();
    const [isPending, setIsPending] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const navigate = useNavigate();

    const voltar = () => {
        return navigate('/painelAdmin');
    }

    const handleSubmit = () => {

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
                return navigate('/painelAdmin')
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
        <main className={styles.containerForms}>
            <section className={styles.card_appPlataform}>
                <div className={styles.card_infoPlataform}>
                    <img className={styles.logoPlataform} src="../src/assets/logo.png" alt="" /> 
                            <h1>Adicionar Plataforma</h1>
                        <InputText 
                            label="Nome da plataforma" 
                            classe={styles.input_text} 
                            textoCapturado={setPlataformName}  
                            classeLabel={styles.input_label} 
                        />
                        <div className={styles.footer_plataform}>
                            <ButtonMenu 
                                texto='Enviar'  
                                classe={styles.buttonAddPlataform}
                                event={handleSubmit}    
                            />
                            <ButtonMenu 
                                texto='Cancelar'  
                                classe={styles.buttonAddPlataform}
                                event={voltar}
                            />
                        </div>   
                </div>
            </section>
        </main>
    )
}


export default AddPlataform;