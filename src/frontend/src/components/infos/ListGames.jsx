import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom';

function ListGames() {

    const [jogos, setJogos] = useState([]);

    useEffect (() => {
        fetch('http://localhost:3000/jogos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((jogo) => {
                setJogos(jogo);
            })
            .catch((err) => console.log(err))
    , []});



    return (
        <>
            <h2>Jogos</h2>
            <ul>
                {jogos.map((jogo) => (
                    <Link to={`/jogos/${jogo.idJogo}`}>
                        <li>{jogo.name_game}</li>
                    </Link>
                ))
                }
            </ul>
        </>
    )

}



export default ListGames;