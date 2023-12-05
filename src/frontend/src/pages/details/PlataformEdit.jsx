import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InputText from "../../components/forms/InputText";
import ButtonMenu from "../../components/buttons/ButtonMenu";


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
                                classe="details-inputPlataform-enabled"
                                textoCapturado={setNomePlataforma}
                                desativado={false}
                            />
                        </div>
                        <div className='footer-details'>
                            <div className="button-row">
                              <ButtonMenu 
                                texto='Enviar'  
                                classe='button-details'
                                event={handleContactEnviar}
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


export default PlataformEdit;

