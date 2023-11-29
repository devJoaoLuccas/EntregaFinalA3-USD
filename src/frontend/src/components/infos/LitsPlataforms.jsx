import { useState, useEffect } from 'react'

function ListPlataforms() {

    const [plataformas, setPlataformas] = useState([]);

    useEffect (() => {
        fetch('http://localhost:3000/plataformas', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((plataforma) => {
                setPlataformas(plataforma);
            })
            .catch((err) => console.log(err))
    , []});

    return (
        <>
            <h2>Plataformas</h2>
            <ul>
                {plataformas.map((plataforma) => (
                    <a href="">
                        <li>{plataforma.nome_plataforma}</li>
                    </a>
                ))
                }
            </ul>
        </>
    )

}



export default ListPlataforms;