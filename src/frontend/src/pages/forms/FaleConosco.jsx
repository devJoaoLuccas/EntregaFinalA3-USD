import { useState, useEffect } from 'react'

import InputText from '../../components/forms/InputText';
import TextArea from '../../components/forms/TextArea';
import { useNavigate } from 'react-router-dom';
import ButtonMenu from '../../components/buttons/ButtonMenu';

import styles from '../../styles/forms/FaleConosco.module.css'

function FaleConosco() {

    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const userId = localStorage.getItem('userId');

    const enviar = () => {
        const confirmation = window.confirm("Essa é a mensagem que você deseja enviar?");

        if(confirmation) {
            window.alert("Mensagem enviada com sucesso!");
            return navigate('/menuPrincipal')
        } else {
            window.alert("Ok! Quando estiver pronto, pode fazer o envio!");
        }
    }
    
    const voltar = () => {
        return navigate('/menuPrincipal');
    }

    useEffect(() => {
        fetch(`http://localhost:3000/usuario/${userId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        })
          .then((response) =>  {
              if (!response.ok) {
                throw new Error('Erro ao buscar detalhes do usuario');
              }
              return response.json();
            })
          .then((usuario) => {
            setUser(usuario);
          })
          .catch((error) => {
            console.error('Erro ao buscar detalhes do usuario:', error);
          });
      }, [userId]);

    return ( 
        <main className={styles.containerForms}>
            <section className={styles.card_addGames}>
                <form>
                    <div className={styles.card_infosFaleConosco}>
                        <h1>Atendimento</h1>
                        <div className={styles.card_info_faleConosco}>
                            <div className={styles.card_infos_row}>
                                <label 
                                    className={styles.infosLabel}>
                                    Seu nome: 
                                </label>
                                <InputText 
                                    classe={styles.card_inputMsg}
                                    texto={user.username}
                                    desativado='true' 
                                />
                            </div>
                            <div className={styles.card_infos_row}>
                                <label 
                                    className={styles.infosLabel}>
                                    Seu Email:
                                </label>
                                <InputText 
                                    classe={styles.card_inputMsg}
                                    texto={user.email} 
                                    desativado='true' 
                                />
                            </div>
                            <div className={styles.card_infos_row}>
                                <label 
                                    className={styles.infosLabel}>
                                    Assunto:
                                </label>
                                <InputText 
                                classe={styles.card_inputMsg_x} 
                                texto='Assunto' />
                            </div>
                            <div className={styles.card_infos_row}>
                              <TextArea 
                                classLabel={styles.infosLabel_x}
                                classText={styles.card_faleConosco_textArea} 
                                txtLabel='Mensagem:' texto='Escreva uma mensagem:' 
                              />
                            </div>
                        </div>
                        <div className={styles.footer_plataform}>
                            <ButtonMenu 
                                texto='Enviar'  
                                classe={styles.buttonAddPlataform}
                                event={enviar}
                            />
                            <ButtonMenu 
                                texto='Voltar'  
                                classe={styles.buttonAddPlataform}
                                event={voltar}
                            />
                        </div>   
                    </div>
                </form>
            </section>
        </main>
    )

}



export default FaleConosco;