import { useState, useEffect } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import InputText from "../../components/forms/InputText";
import InputDate from "../../components/forms/InputDate";
import InputNumber from "../../components/forms/inputNumber";
import SelectPlataforma from "../../components/forms/SelectPlataforma";
import SelectCategorias from "../../components/forms/SelectCategorias";
import ButtonMenu from "../../components/buttons/ButtonMenu";

import styles from '../../styles/details/JogosDetails.module.css'

function JogosDetails() {

    const { idJogos } = useParams();
    const [jogos, setJogos] = useState([]);
    const navigate = useNavigate();

    const handleContactVoltar = () => {
        navigate('/editarDeletar');
    }

    const handleEditJogos = () => {
      navigate(`editJogos`)
    }

    const handleDelete = () => {
      const confirmation = window.confirm(`Tem certeza que deseja excluir o jogo ${jogos.name_game}?`);

      if (confirmation) {
          fetch(`http://localhost:3000/deleteJogo/${jogos.idJogo}`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
              }
          })
              .then(response => {
                  if (!response.ok) {
                      throw new Error('Erro ao excluir o jogo');
                  }
                  return response.json();
              })
              .then(() => {
                  window.alert(`O jogo ${jogos.name_game} foi deletado`);
                  navigate('/editarDeletar');
              })
              .catch(error => {
                  console.error('Erro ao excluir o jogo:', error);
                  window.alert(`Erro ao excluir o jogo ${jogos.name_game}`);
              });
      }
  }

    useEffect(() => {
      fetch(`http://localhost:3000/jogo/${idJogos}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then((response) =>  {
            if (!response.ok) {
              throw new Error('Erro ao buscar detalhes do jogo');
            }
            return response.json();
          })
        .then((jogo) => {
          setJogos(jogo);
        })
        .catch((error) => {
          console.error('Erro ao buscar detalhes do jogo:', error);
        });
    }, [idJogos]);

        
    return (
        <body>
            <main className={styles.container}>
              <section className={styles.cardDetails}>
                  <div>
                      <h1>{jogos.name_game}</h1>
                  </div>
                  <div>
                      <div className={styles.cardDetails_info}>
                        <img className={styles.img_details} src={`../src/assets/jogos/${jogos.name_game}.png`} alt={jogos.name_game} />
                          <div className={styles.game_details}>
                              <InputText 
                                label="Nome do Jogo:"
                                classeLabel={styles.details_label}
                                texto={jogos.name_game}
                                classe={styles.details_inputs}
                                desativado={true}
                              />
                              <InputText 
                                label="Desenvolvido por:"
                                classeLabel={styles.details_label}
                                texto={jogos.developed_by}
                                classe={styles.details_inputs}
                                desativado={true}
                              />
                              <SelectPlataforma 
                                classeLabel={styles.details_label}
                                texto="Plataforma:"
                                classeSelect={styles.details_input_select}
                                valor="Plataformas disponíveis:"
                              />
                              <SelectCategorias 
                                  texto='Categorias:'
                                  classeLabel={styles.details_label} 
                                  classeSelect={styles.details_input_select}
                                  valor={jogos.category_name}
                              />
                              <InputDate
                                texto="Data de criação:"
                                classeLabel={styles.details_label}
                                valor={jogos.data_criacao}
                                classe={styles.details_inputs}
                                desativado={true}
                               />
                               <InputNumber 
                                texto="Nota:"
                                classeLabel={styles.details_label}
                                valor={jogos.note}
                                classe={styles.details_inputs}
                                desativado={true}
                              />
                          </div>
                      </div>
                  </div>
                  <div className={styles.footer_details}>
                            <div className={styles.button_row}>
                              <ButtonMenu 
                                texto='Editar'  
                                classe={styles.button_details}
                                event={handleEditJogos}
                              />
                              <ButtonMenu 
                                texto='Deletar'  
                                classe={styles.button_details}
                                event={handleDelete}
                              />
                            </div>
                            <ButtonMenu 
                              texto='Voltar'  classe={styles.button_details}
                              event={handleContactVoltar}
                            />
                        </div>   
              </section>
            </main>
        </body>
    )

}


export default JogosDetails;