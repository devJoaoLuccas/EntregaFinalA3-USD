import { useState, useEffect } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import InputText from "../../components/forms/InputText";
import InputDate from "../../components/forms/InputDate";
import InputNumber from "../../components/forms/inputNumber";
import SelectPlataforma from "../../components/forms/SelectPlataforma";
import SelectCategorias from "../../components/forms/SelectCategorias";
import ButtonMenu from "../../components/buttons/ButtonMenu";


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
            <main className="container">
              <section className="cardDetails">
                  <div>
                      <h1>
                            <span>Editar: </span>
                            {jogos.name_game}
                      </h1>
                  </div>
                  <div>
                      <div className="cardDetails-info">
                        <img className="imgDetails" src={`../../src/assets/jogos/${jogos.name_game}.png`} alt={jogos.name_game} />
                          <div className="gameDetails">
                              <InputText 
                                  label="Nome do Jogo:"
                                  classeLabel="details-label"
                                  texto={jogos.name_game}
                                  classe="details-inputEnabled"
                                  textoCapturado={setNameGame}
                                  desativado={false}
                              />
                              <InputText 
                                  label="Desenvolvido por:"
                                  classeLabel="details-label"
                                  texto={jogos.developed_by}
                                  classe="details-inputEnabled"
                                  textoCapturado={setDevelopedBy}
                                  desativado={false}
                              />
                              <SelectPlataforma 
                                  classeLabel="details-label"
                                  texto="Plataforma:"
                                  classeSelect="details-input-selectEnabled"
                                  valor="Plataformas disponíveis:"
                              />
                              <SelectCategorias 
                                  texto='Categorias:'
                                  classeLabel='details-label' 
                                  classeSelect='details-input-selectEnabled'
                                  textoCapturado={handleChangeCategory}
                                  placeholder={`Escolha uma categoria:`}
                                  valor={category}
                              />
                              <InputDate
                                  texto="Data de criação:"
                                  classeLabel="details-label"
                                  placeholder={jogos.data_criacao}
                                  classe="details-inputEnabled"
                                  textoCapturado={setDate}
                               />
                               <InputNumber 
                                  texto="Nota:"
                                  classeLabel="details-label"
                                  valor={jogos.note}
                                  classe="details-input"
                                  desativado={false}
                                  evento={handleNotEnabled}
                              />
                          </div>
                      </div>
                  </div>
                  <div className='footer-details'>
                            <div className="button-row">
                              <ButtonMenu 
                                texto='Enviar'  
                                event={handleEnviar}
                                classe='button-details'
                              />
                            </div>
                            <ButtonMenu 
                              texto='Cancelar'  classe='button-details'
                              event={handleContactVoltar}
                            />
                        </div>   
              </section>
            </main>
        </body>
    )

}


export default GameEdit;