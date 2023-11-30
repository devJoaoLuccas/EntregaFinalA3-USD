import { useState ,useEffect } from "react";

import Navbar from "../../components/navbar/Navbar";
import CardGame from '../../components/cards/CardGame.jsx';

import '../../styles/cards.css'
import '../../styles/global.css'

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
                <main>
                    <section className="grupo-game">
                        <div className="card-rowGames">
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