import { useState, useEffect } from 'react'

import '../../styles/forms.css';
import '../../styles/global.css';

import InputText from '../../components/forms/InputText';
import TextArea from '../../components/forms/TextArea';
import ButtonLogin from '../../components/buttons/ButtonLogin';
import { useNavigate } from 'react-router-dom';
import ButtonMenu from '../../components/buttons/ButtonMenu';


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
        <main className='containerForms'>
            <section className='card-addGames'>
                <form>
                    <div className='card-infosFaleConosco'>
                        <h1>Atendimento</h1>
                        <div className='card-info-faleConosco'>
                            <div className='card-infos-row'>
                                <label 
                                    className='infosLabel'>
                                    Seu nome: 
                                </label>
                                <InputText 
                                    classe='card-inputMsg' 
                                    texto={user.username}
                                    desativado='true' 
                                />
                            </div>
                            <div className='card-infos-row'>
                                <label 
                                    className='infosLabel'>
                                    Seu Email:
                                </label>
                                <InputText 
                                    classe='card-inputMsg' 
                                    texto={user.email} 
                                    desativado='true' 
                                />
                            </div>
                            <div className='card-infos-row'>
                                <label 
                                    className='infosLabel'>
                                    Assunto:
                                </label>
                                <InputText 
                                classe='card-inputMsg-x' 
                                texto='Assunto' />
                            </div>
                            <div className='card-infos-row'>
                              <TextArea 
                                classLabel='infosLabel-x'
                                classText='card-faleConosco-textArea' 
                                txtLabel='Mensagem:' texto='Escreva uma mensagem:' 
                              />
                            </div>
                        </div>
                        <div className='footer-plataform'>
                            <ButtonMenu 
                                texto='Enviar'  
                                classe='buttonAddPlataform'
                                event={enviar}
                            />
                            <ButtonMenu 
                                texto='Voltar'  
                                classe='buttonAddPlataform'
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