import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputText from "../../components/forms/InputText";
import ButtonMenu from "../../components/buttons/ButtonMenu";

import styles from '../../styles/details/PlataformasDetails.module.css'

function PlataformDetails() {

    const { idPlataforma } = useParams();
    const [plataformas, setPlataformas] = useState([]);
    const navigate = useNavigate();

    const handleContactVoltar = () => {
        navigate('/editarDeletar');
    }

    const handleContactEdit = () => {
        navigate('editPlataforma')
    }


    const handleDeletePlataforma = () => {
        const confirmation = window.confirm(`Tem certeza que deseja excluir a plataforma ${plataformas.nome_plataforma}?`);

        if(confirmation) {
            fetch(`http://localhost:3000/deletePlataforma/${plataformas.idPlataforma}`, {
                method:'GET',
                headers: {
                    'Content-Type':'application/json',
                }
            })
                .then(resp => {
                    if(!resp.ok) {
                        throw new Error('Erro ao excluir a plataforma');
                    }
                    return resp.json();
                })
                .then(() => {
                    window.alert(`A plataforma ${plataformas.nome_plataforma} foi deletada!`);
                    navigate('/editarDeletar');
                })
                .catch((err) => {
                    console.log(`Erro ao excluir a plataforma ${err}`);
                    window.alert(`Erro ao excluir a plataforma ${plataformas.nome_plataforma}`);
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
                                classe={styles.details_input_plataform}
                                desativado={true}
                            />
                        </div>
                        <div className={styles.footer_details}>
                            <div className={styles.button_row}>
                              <ButtonMenu 
                                texto='Editar'  
                                classe={styles.button_details}
                                event={handleContactEdit}
                                
                              />
                              <ButtonMenu 
                                texto='Deletar'  
                                classe={styles.button_details}
                                event={handleDeletePlataforma}
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


export default PlataformDetails;