import ButtonLogin from "../../components/buttons/ButtonLogin";
import ButtonMenu from "../../components/buttons/ButtonMenu";
import { useNavigate } from "react-router-dom";

import '../../styles/menu.css'
import '../../styles/global.css'
import { useEffect, useState } from "react";



function MenuPrincipal() {

    const navigate = useNavigate();
    const userId = localStorage.getItem('userId');

    const [user, setUser] = useState([]);

    const handleContactJogos = () => {
        return navigate('/jogos');
    }

    const handleContactPlataforma = () => {
        return navigate('/plataforma');
    }

    const handleContactFaleConosco = () => {
        return navigate('/faleConosco');
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

        <main className="containerMenu">
            <section className="cardMenu">
                <div className="card-infos">
                    <h1>BEM VINDO AO <span>THE GAME BAY</span></h1>
                    <h2>MENU:</h2>
                    <ButtonMenu 
                        texto="JOGOS"
                        classe='buttonMenu'
                        event={handleContactJogos} 
                    />
                    <ButtonMenu 
                        texto="PLATAFORMAS"
                        classe='buttonMenu'
                        event={handleContactPlataforma} 
                    />
                    <ButtonMenu 
                        texto="FALE CONOSCO"
                        classe='buttonMenu'
                        event={handleContactFaleConosco} 
                    />
                </div>
                <div className="footerMenu">
                    <div className="dropdown">
                        <div>
                            <span className="dropdown-text">
                                {user.username}
                            </span>
                            <div className="dropdown-content">
                                <a href="" id="perfil-link">Meu Perfil</a>
                                <a href="" id="adm-link">Painel de administrador</a>
                                <a href="" id="sair-link">Sair</a>
                            </div>
                        </div>
                    </div>
                        <img className="logo" src="src\assets\logo.png" alt="" />
                </div>

            </section>
        </main>

    )


}

export default MenuPrincipal;