import { useState, useEffect } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import InputText from "../../components/forms/InputText";
import InputDate from "../../components/forms/InputDate";
import InputNumber from "../../components/forms/inputNumber";
import SelectPlataforma from "../../components/forms/SelectPlataforma";
import SelectCategorias from "../../components/forms/SelectCategorias";
import ButtonMenu from "../../components/buttons/ButtonMenu";

import styles from '../../styles/details/JogosDetails.module.css'

function GameEdit() {

    const { idJogos } = useParams();
    const [jogos, setJogos] = useState([]);
    const [date, setDate] = useState();
    const [nameGame, setNameGame] = useState();
    const [developedBy, setDevelopedBy] = useState();
    const [category, setCategory] = useState();

    const navigate = useNavigate();

    const handleContactVoltar = () => {
        navigate(`/jogos/${idJogos}`);
    }

    const handleNotEnabled = () => {
        window.alert("Não é possivel alterar a nota.")
    }

    const handleChangeCategory = event => {
      event.preventDefault();
      setCategory(event.target.value);
  }


    const handleEnviar = () => {
      const confirmation = window.confirm(`Tem certeza que deseja atualizar o jogo ${jogos.name_game}?`);

      if(confirmation) {
        fetch(`http://localhost:3000/updateJogo`, {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
              name_game:nameGame,
              developed_by:developedBy,
              category_name:category,
              data_criacao:date,
              idJogo:idJogos
          })
        })
          .then((resp) => {
            if(!resp.ok) {
              throw new Error('Errou ao atualizar o jogo');
            }
            return resp.json();
          })
          .then(() => {
            window.alert(`O jogo ${jogos.name_game} foi atualizado com sucesso!`);
            navigate(`/jogos/${idJogos}`)
          })
          .catch((err) => {
            console.log(`Erro ao atualizar o jogo ${err}`)
            window.alert(`Erro ao atualizar o jogo`)
          })
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
                      <h1>
                            <span>Editar: </span>
                            {jogos.name_game}
                      </h1>
                  </div>
                  <div>
                      <div className={styles.cardDetails_info}>
                        <img className={styles.img_details} src={`../../src/assets/jogos/${jogos.name_game}.png`} alt={jogos.name_game} />
                          <div className="gameDetails">
                              <InputText 
                                  label="Nome do Jogo:"
                                  classeLabel={styles.details_label}
                                  texto={jogos.name_game}
                                  classe={styles.details_inputEnabled}
                                  textoCapturado={setNameGame}
                                  desativado={false}
                              />
                              <InputText 
                                  label="Desenvolvido por:"
                                  classeLabel={styles.details_label}
                                  texto={jogos.developed_by}
                                  classe={styles.details_inputEnabled}
                                  textoCapturado={setDevelopedBy}
                                  desativado={false}
                              />
                              <SelectPlataforma 
                                  classeLabel={styles.details_label}
                                  texto="Plataforma:"
                                  classeSelect={styles.details_input_selectEnabled}
                                  valor="Plataformas disponíveis:"
                              />
                              <SelectCategorias 
                                  texto='Categorias:'
                                  classeLabel='details-label' 
                                  classeSelect={styles.details_input_selectEnabled}
                                  textoCapturado={handleChangeCategory}
                                  placeholder={`Escolha uma categoria:`}
                                  valor={category}
                              />
                              <InputDate
                                  texto="Data de criação:"
                                  classeLabel={styles.details_label}
                                  placeholder={jogos.data_criacao}
                                  classe={styles.details_inputEnabled}
                                  textoCapturado={setDate}
                               />
                               <InputNumber 
                                  texto="Nota:"
                                  classeLabel={styles.details_label}
                                  valor={jogos.note}
                                  classe={styles.details_inputs}
                                  desativado={false}
                                  evento={handleNotEnabled}
                              />
                          </div>
                      </div>
                  </div>
                  <div className={styles.footer_details}>
                            <div className={styles.button_row}>
                              <ButtonMenu 
                                texto='Enviar'  
                                event={handleEnviar}
                                classe={styles.button_details}
                              />
                            </div>
                            <ButtonMenu 
                              texto='Cancelar'  classe={styles.button_details}
                              event={handleContactVoltar}
                            />
                        </div>   
              </section>
            </main>
        </body>
    )

}


export default GameEdit;