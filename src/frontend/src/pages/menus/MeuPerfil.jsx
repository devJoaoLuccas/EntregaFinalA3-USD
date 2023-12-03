import { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import InputText from "../../components/forms/InputText";
import InputPassword from "../../components/forms/InputPassword";
import ButtonMenu from "../../components/buttons/ButtonMenu";
import ListNotasUser from "../../components/infos/ListNotasUser";

import '../../styles/cards.css'

function MeuPerfil() {

    const userId = localStorage.getItem('userId');
    const [user, setUser] = useState([]);

    const navigate = useNavigate();

    const voltar = () => {
        return navigate('/menuPrincipal');
    }

    const editar = () => {
        return navigate('/meuPerfil/edit');
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

        <body>
            <main className="container">
                <section className="card-user">
                    <div className="user-infos">
                        <div>
                            <img className="userPhoto" src="src\assets\user.png"/>
                            <h1 className="username">
                                {user.username}
                            </h1>  
                        </div>
                        <div className="user-infos-row">
                            <div className="user-infos-column">
                                <InputText 
                                    classeLabel="card-infosLabel"
                                    classe="card-infosInput"
                                    label="Usuário:"
                                    texto={user.username}
                                    desativado={true}
                                />
                                <InputText 
                                    classeLabel="card-infosLabel"
                                    classe="card-infosInput"
                                    label="Email:"
                                    texto={user.email}                        desativado={true}  
                                />
                                <InputPassword 
                                    classeLabel="card-infosLabel"
                                    classe="card-infosInput"
                                    label="Senha:"
                                    texto="*********"
                                    desativado={true}
                                />
                            </div>
                            <div className="infos-avaliacao">
                                <h2>Minhas avaliações:</h2>
                                <ListNotasUser 
                                    userId={userId}
                                    classe="classe-infosLista"
                                    classeSpan="classe-infosSpan"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="userButtons">
                            <ButtonMenu 
                                texto="Editar" 
                                classe="button-user" 
                                event={editar}
                            />                            <ButtonMenu 
                                texto="Voltar"
                                classe="button-user"
                                event={voltar}
                            />
                        </div>
                </section>
            </main>
        </body>

    )

}


export default MeuPerfil;