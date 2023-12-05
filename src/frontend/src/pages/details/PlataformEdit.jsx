import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputText from "../../components/forms/InputText";
import ButtonMenu from "../../components/buttons/ButtonMenu";


import styles from '../../styles/details/PlataformasDetails.module.css'

function PlataformEdit() {

    const { idPlataforma } = useParams();
    const [plataformas, setPlataformas] = useState([]);
    const [nomePlataforma, setNomePlataforma] = useState();
    const navigate = useNavigate();

    const handleContactVoltar = () => {
        navigate(`/plataforma/${idPlataforma}`);
    }

    const handleContactEnviar = () => {
        const confirmation = window.confirm(`Tem certeza que deseja editar a plataforma ${plataformas.nome_plataforma}?`);

        if(confirmation) {
            console.log(nomePlataforma);
            fetch(`http://localhost:3000/updatePlataforma`, {
                method:'PUT',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    nome_plataforma:nomePlataforma,
                    idPlataforma:idPlataforma
                })
            })
                .then((resp) => {
                    if(!resp.ok) {
                        throw new Error('Erro ao editar a plataforma');
                    }

                    return resp.json();
                })
                .then(() => {
                    window.alert(`A plataforma ${nomePlataforma} foi atualizada com sucesso!`);
                    navigate(`/plataforma/${idPlataforma}`);
                })
                .catch((err) => {
                    console.log(`Erro ao atualizar a plataforma ${err}`);
                    window.alert(`Erro ao atualizar a plataforma`);
                })
        }

    }


    useEffect(() => {
        fetch(`http://localhost:3000/plataforma/${idPlataforma}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error("Erro ao buscar detalhes da plataforma");
                }
                return resp.json();
            })
            .then((plataforma) => {
                setPlataformas(plataforma);
            })
            .catch((error) => {
                console.error("Erro ao buscar detalhes do jogo:", error);
            });
    }, [idPlataforma]);


    return(
            <body>
                <main className={styles.container}>
                    <section className={styles.cardDetails_plataform}>
                        <div>
                            <h1>{plataformas.nome_plataforma}</h1>
                        </div>
                        <div className={styles.cardDetails_plataform_info}>
                            <img className={styles.img_details} src={`../../src/assets/plataformas/${plataformas.nome_plataforma}.png`} alt={plataformas.nome_plataforma} />
                            <InputText 
                                label="Nome da Plataforma:"
                                classeLabel={styles.details_label}
                                texto={plataformas.nome_plataforma}
                                classe={styles.details_input_plataformEnabled}
                                textoCapturado={setNomePlataforma}
                                desativado={false}
                            />
                        </div>
                        <div className={styles.footer_details}>
                            <div className={styles.button_row}>
                              <ButtonMenu 
                                texto='Enviar'  
                                classe={styles.button_details}
                                event={handleContactEnviar}
                              />
                            </div>
                            <ButtonMenu 
                                texto='Voltar'  
                                classe={styles.button_details}
                                event={handleContactVoltar}
                            />
                        </div>   
                    </section>
                </main>
            </body>        
    )

}


export default PlataformEdit;

