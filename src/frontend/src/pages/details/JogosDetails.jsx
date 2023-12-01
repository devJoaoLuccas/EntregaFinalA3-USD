import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InputText from "../../components/forms/InputText";
import InputDate from "../../components/forms/InputDate";
import InputNumber from "../../components/forms/inputNumber";
import SelectPlataforma from "../../components/forms/SelectPlataforma";
import ButtonLogin from "../../components/buttons/ButtonLogin"

import '../../styles/details.css'


function JogosDetails() {

    const { idJogos } = useParams();
    const [jogos, setJogos] = useState([]);
    const [plataforma, setPlataformas] = useState([]);

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
            <main className="container">
              <section className="cardDetails">
                  <div>
                      <h1>{jogos.name_game}</h1>
                  </div>
                  <div>
                      <div className="cardDetails-info">
                        <img className="imgDetails" src={`../src/assets/jogos/${jogos.name_game}.png`} alt={jogos.name_game} />
                          <div className="gameDetails">
                              <InputText 
                                label="Nome do Jogo:"
                                classeLabel="details-label"
                                texto={jogos.name_game}
                                classe="details-input"
                                desativado="true"
                              />
                              <InputText 
                                label="Desenvolvido por:"
                                classeLabel="details-label"
                                texto={jogos.developed_by}
                                classe="details-input"
                                desativado="true"
                              />
                              <SelectPlataforma 
                                classeLabel="details-label"
                                texto="Plataforma:"
                                classeSelect="details-input-select"
                                valor="Plataformas disponíveis:"
                              />
                              <InputDate
                                texto="Data de criação:"
                                classeLabel="details-label"
                                valor={jogos.data_criacao}
                                classe="details-input"
                               />
                               <InputNumber 
                                texto="Nota:"
                                classeLabel="details-label"
                                valor={jogos.note}
                                classe="details-input"
                                desativado="true"
                              />
                          </div>
                      </div>
                  </div>
                  <div className='footer-details'>
                            <div className="button-row">
                              <ButtonLogin texto='Enviar'  classe='button-details'/>
                              <ButtonLogin texto='Deletar'  classe='button-details'/>
                            </div>
                            <ButtonLogin texto='Cancelar'  classe='button-details'/>
                        </div>   
              </section>
            </main>
        </body>
    )

}


export default JogosDetails;