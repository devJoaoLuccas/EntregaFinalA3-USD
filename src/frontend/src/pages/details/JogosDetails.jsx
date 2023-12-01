import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InputText from "../../components/forms/InputText";
import InputDate from "../../components/forms/InputDate";
import InputNumber from "../../components/forms/inputNumber";
import SelectPlataforma from "../../components/forms/SelectPlataforma";


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
            <main>
              <section>
                  <div><h1>{jogos.name_game}</h1></div>
                  <div>
                      <div>
                        <img src={`src/assets/jogos/${jogos.name_game}.png`} alt={jogos.name_game} />
                          <div>
                              <InputText 
                                label="Nome do Jogo:"
                                texto={jogos.name_game}
                              />
                              <InputText 
                                label="Desenvolvido por:"
                                texto={jogos.developed_by}
                              />
                              <SelectPlataforma 
                                texto="Plataforma:"
                              />
                              <InputDate
                                texto="Data de criação:"
                                valor={jogos.data_criacao}
                               />
                               <InputNumber 
                                texto="Nota:"
                                valor={jogos.note}
                              />
                          </div>
                      </div>
                  </div>
              </section>
            </main>
        </body>
    )

}


export default JogosDetails;