import { useState, useEffect } from 'react'

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
                    <a href="">
                        <li>{jogo.name_game}</li>
                    </a>
                ))
                }
            </ul>
        </>
    )

}



export default ListGames;