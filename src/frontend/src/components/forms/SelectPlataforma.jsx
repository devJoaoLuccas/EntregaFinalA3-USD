import { useState, useEffect } from 'react'

function SelectPlataforma({nome, texto, classeSelect, classeLabel}) {

    
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
}, [])


    return (

        <>
            <label className={classeLabel} htmlFor={nome}>{texto}</label>
            <select className={classeSelect} name={nome} id={nome}>
                <option value="" selected disabled>Escolha uma plataforma:</option>
                    {plataformas.map((plataforma) => (
                        <option value={plataforma.id} key={plataforma.id}>{plataforma.nome_plataforma}</option>
                    ))

                    }
            </select>
        </>

    )

}

export default SelectPlataforma;