import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ButtonLogin from "../../components/buttons/ButtonLogin";
import ButtonMenu from "../../components/buttons/ButtonMenu";
import Dropdown from "../../components/navbar/Dropdown";


import styles from '../../styles/menus/MenuPrincipal.module.css'

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

    const handleContactPainelAdmin = () => {
        return navigate('/painelAdmin')
    }

    const confirmLogof = () => {
        const confirmation = window.confirm("Você tem certeza que deseja sair da plataforma?");

        if(confirmation) {
            window.alert("Log off realizado com sucesso! Muito obrigado por acessar nossa plataforma!");
            return navigate('/')
        } else {
            window.alert("Ufa! Ainda bem que você vai ficar um pocuo mais conosco!");
            return navigate('/menuPrincipal');
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

        <main className={styles.containerMenu}>
            <section className={styles.cardMenu}>
                <div className={styles.card_infos}>
                    <h1>BEM VINDO AO <span>THE GAME BAY</span></h1>
                    <h2>MENU:</h2>
                    <ButtonMenu 
                        texto="JOGOS"
                        classe={styles.buttonMenu}
                        event={handleContactJogos} 
                    />
                    <ButtonMenu 
                        texto="PLATAFORMAS"
                        classe={styles.buttonMenu}
                        event={handleContactPlataforma} 
                    />
                    <ButtonMenu 
                        texto="FALE CONOSCO"
                        classe={styles.buttonMenu}
                        event={handleContactFaleConosco} 
                    />
                </div>
                <div className={styles.footerMenu}>
                    <div>
                        <Dropdown 
                            userId={userId}
                        />
                    </div>
                        <img className={styles.logo} src="src\assets\logo.png" alt="" />
                </div>

            </section>
        </main>

    )


}

export default MenuPrincipal;