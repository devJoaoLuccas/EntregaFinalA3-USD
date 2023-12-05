import { useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom'
import InputText from "../../components/forms/InputText";
import InputPassword from "../../components/forms/InputPassword";
import ButtonMenu from "../../components/buttons/ButtonMenu";
import ListNotasUser from "../../components/infos/ListNotasUser";

import styles from '../../styles/menus/MeuPerfil.module.css'


function EditUser() {

    const userId = localStorage.getItem('userId');
    const [user, setUser] = useState([]);
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const voltar = () => {
        return navigate('/meuPerfil');
    }

    const enviar = () => {
        const confirmation = window.confirm('Você tem certeza que deseja fazer essas alterações?'); 

        if(confirmation) {
            fetch('http://localhost:3000/updateUsuario', {
                method:'PUT',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    username:username,
                    email:email,
                    password:password,
                    idUser:userId
                })
            })
                .then((resp) => {
                    if(!resp.ok) {
                        throw new Error('Não foi possivel atualizar o usuário');
                    }
                    return resp.json();
                })
                .then(() => {
                    window.alert(`O usuário ${user.username} foi atualizado com sucesso!`)
                    navigate('/meuPerfil')
                })
                .catch((err) => {
                    console.error(`Erro ao atualizar o jogo ${err}`);
                    window.alert(`Erro ao atualizar o jogo`)
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
            <main className={styles.container}>
                <section className={styles.card_user}>
                    <div className={styles.user_infos}>
                        <div>
                            <img className={styles.userPhoto} src="/src\assets\user.png"/>
                            <h1 className={styles.username}>
                                {user.username}
                            </h1>  
                        </div>
                        <div className={styles.user_infos_row}>
                            <div className={styles.user_infos_column}>
                                <InputText 
                                    classeLabel={styles.user_infosLabel}
                                    classe={styles.user_infosInput_enabled}
                                    label="Usuário:"
                                    texto={user.username}
                                    textoCapturado={setUsername}
                                    desativado={false}
                                />
                                <InputText 
                                    classeLabel={styles.user_infosLabel}
                                    classe={styles.user_infosInput_enabled}
                                    label="Email:"
                                    texto={user.email}                        
                                    textoCapturado={setEmail}
                                    desativado={false}  
                                />
                                <InputPassword 
                                    classeLabel={styles.user_infosLabel}
                                    classe={styles.user_infosInput_enabled}
                                    label="Senha:"
                                    texto="*********"
                                    textoCapturado={setPassword}
                                    desativado={false}
                                />
                            </div>
                            <div className="infos-avaliacao">
                                <h2>Minhas avaliações:</h2>
                                <ListNotasUser 
                                    userId={userId}
                                    classe={styles.classe_infosLista}
                                    classeSpan={styles.classe_infosSpan}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.userButtons_x}>
                            <ButtonMenu 
                                texto="Enviar" 
                                classe={styles.button_user} 
                                event={enviar}
                            />                            <ButtonMenu 
                                texto="Voltar"
                                classe={styles.button_user}
                                event={voltar}
                            />
                        </div>
                </section>
            </main>
        </body>

    )

}


export default EditUser;