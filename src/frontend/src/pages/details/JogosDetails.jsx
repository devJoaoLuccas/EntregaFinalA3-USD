import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function JogosDetails() {

    const { idJogos } = useParams();
    const [jogos, setJogos] = useState([]);
  
    useEffect(() => {
      fetch(`http://localhost:3000/jogo/${idJogos}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then((response) =>  {
            if (!response.ok) {
              throw new Error('Erro ao buscar detalhes do jogo');
            }
            return response.json();
          })
        .then((jogo) => {
          setJogos(jogo);
        })
        .catch((error) => {
          console.error('Erro ao buscar detalhes do jogo:', error);
        });
    }, [idJogos]);
    
        


    return (
        <>
            <h1>{jogos.name_game}</h1>
        </>
    )

}


export default JogosDetails;