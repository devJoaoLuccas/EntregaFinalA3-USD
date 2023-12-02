import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

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
                    <Link to={`/plataforma/${plataforma.idPlataforma}`} >
                        <li>{plataforma.nome_plataforma}</li>
                    </Link>
                ))
                }
            </ul>
        </>
    )

}



export default ListPlataforms;