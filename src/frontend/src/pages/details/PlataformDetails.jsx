import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputText from "../../components/forms/InputText";
import ButtonMenu from "../../components/buttons/ButtonMenu";


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
                <main className="container">
                    <section className="cardDetails-plataform">
                        <div>
                            <h1>{plataformas.nome_plataforma}</h1>
                        </div>
                        <div className="cardDetails-infoPlataforma">
                            <img className="imgDetails" src={`../../src/assets/plataformas/${plataformas.nome_plataforma}.png`} alt={plataformas.nome_plataforma} />
                            <InputText 
                                label="Nome da Plataforma:"
                                classeLabel="details-label"
                                texto={plataformas.nome_plataforma}
                                classe="details-inputPlataform"
                                desativado={true}
                            />
                        </div>
                        <div className='footer-details'>
                            <div className="button-row">
                              <ButtonMenu 
                                texto='Editar'  
                                classe='button-details'
                                event={handleContactEdit}
                                
                              />
                              <ButtonMenu 
                                texto='Deletar'  
                                classe='button-details'
                                event={handleDeletePlataforma}
                              />
                            </div>
                            <ButtonMenu 
                                texto='Voltar'  
                                classe='button-details'
                                event={handleContactVoltar}
                            />
                        </div>   
                    </section>
                </main>
            </body>        
    )

}


export default PlataformDetails;