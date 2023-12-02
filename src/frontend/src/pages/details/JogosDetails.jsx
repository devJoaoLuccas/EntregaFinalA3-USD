import { useState, useEffect } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import InputText from "../../components/forms/InputText";
import InputDate from "../../components/forms/InputDate";
import InputNumber from "../../components/forms/inputNumber";
import SelectPlataforma from "../../components/forms/SelectPlataforma";
import SelectCategorias from "../../components/forms/SelectCategorias";
import ButtonMenu from "../../components/buttons/ButtonMenu";

import '../../styles/details.css'


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
                                desativado={true}
                              />
                              <InputText 
                                label="Desenvolvido por:"
                                classeLabel="details-label"
                                texto={jogos.developed_by}
                                classe="details-input"
                                desativado={true}
                              />
                              <SelectPlataforma 
                                classeLabel="details-label"
                                texto="Plataforma:"
                                classeSelect="details-input-select"
                                valor="Plataformas disponíveis:"
                              />
                              <SelectCategorias 
                                  texto='Categorias:'
                                  classeLabel='details-label' 
                                  classeSelect='details-input-select'
                                  valor={jogos.category_name}
                              />
                              <InputDate
                                texto="Data de criação:"
                                classeLabel="details-label"
                                valor={jogos.data_criacao}
                                classe="details-input"
                                desativado={true}
                               />
                               <InputNumber 
                                texto="Nota:"
                                classeLabel="details-label"
                                valor={jogos.note}
                                classe="details-input"
                                desativado={true}
                              />
                          </div>
                      </div>
                  </div>
                  <div className='footer-details'>
                            <div className="button-row">
                              <ButtonMenu 
                                texto='Editar'  
                                classe='button-details'
                                event={handleEditJogos}
                              />
                              <ButtonMenu 
                                texto='Deletar'  
                                classe='button-details'
                                event={handleDelete}
                              />
                            </div>
                            <ButtonMenu 
                              texto='Voltar'  classe='button-details'
                              event={handleContactVoltar}
                            />
                        </div>   
              </section>
            </main>
        </body>
    )

}


export default JogosDetails;