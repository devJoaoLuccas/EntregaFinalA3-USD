import { useEffect, useState } from "react";



function ListNotasUser({userId, classe, classeLi, classeSpan}) {

    const [notas, setNotas] = useState([]);

    
    useEffect(() => {
        fetch(`http://localhost:3000/notaJogo/${userId}`, {
            method:'GET',
            headers: {
                'Content-Type':'application/json'
            },
        })
            .then((resp) => {
                if(!resp.ok) {
                    throw new Error('Não foi possivel selecionar as notas, devido ao erro', erro);
                }
                return resp.json(resp);
            })
            .then((nota) => {
                setNotas(nota);
            })
            .catch((err) => {
                console.error(err);
            })

    })


    return (
        <>
            {notas.map((nota) => (
                <ul className={classe}>
                    <li className={classeLi}>{nota.name_game} - 
                        <span className={classeSpan}> {nota.note}</span>
                    </li>
                </ul>
            ))

            }
        
        </>
    )

}


export default ListNotasUser;