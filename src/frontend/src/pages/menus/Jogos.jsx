import { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";
import CardGame from '../../components/cards/CardGame.jsx';

import styles from '../../styles/menus/Jogos.module.css';

function Jogos() {

    const [jogos, setJogos] = useState([]);

    useEffect (() => {
        fetch('http://localhost:3000/jogos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((item) => {
                setJogos(item);
            })
            .catch((err) => console.log(err))
    , []});

    return (
        <>
            <Navbar />
                <main className={styles.container}>
                    <section className={styles.grupoGame}>
                        <div className={styles.card_rowGames}>
                            <CardGame 
                                jogos={jogos}
                            />
                        </div>  
                    </section>
                </main>
        </>
    )

}

export default Jogos;