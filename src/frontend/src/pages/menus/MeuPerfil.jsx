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

    const excluir = () => {
        const confirmation = window.confirm('Você tem certeza que deseja sair da nossa plataforma?')

        if(confirmation) {
            window.alert('Uma pena! Lembre que se você excluir sua conta, perdera todas as suas avaliações');
            fetch(`http://localhost:3000/deleteUsuario/${userId}`, {
                method:'GET',
                headers: {
                    'Content-Type':'application/json'
                },
            })
                .then(resp => {
                    if(!resp.ok) {
                        throw new Error('Erro ao excluir sua conta.');
                    }
                    return resp.json();
                })
                .then(() => {
                    window.alert("Uma pena que você nós deixou! Espero que retorne! <3");
                    navigate('/');
                })
                .catch(err => {
                    console.error('Erro ao excluir o usuario', err);
                    window.alert('Erro ao excluir o usuario');
                })
        }
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
                            <div className="userButtons-row">
                                <ButtonMenu 
                                    texto="Editar" 
                                    classe="button-user" 
                                    event={editar}
                                />
                                <ButtonMenu 
                                    texto="Excluir" 
                                    classe="button-user" 
                                    event={excluir}
                                />
                            </div>        
                            <div className="userButtons-x">
                                <ButtonMenu 
                                    texto="Voltar"
                                    classe="button-user"
                                    event={voltar}
                                />    
                            </div>                  
                        </div>
                </section>
            </main>
        </body>

    )

}


export default MeuPerfil;