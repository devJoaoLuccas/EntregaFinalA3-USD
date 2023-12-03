import ButtonLogin from '../buttons/ButtonLogin.jsx';
import ButtonMenu from '../buttons/ButtonMenu.jsx';

import { useNavigate } from 'react-router-dom';

function CardGame({jogos}) {

    const navigate = useNavigate();

    const avaliar = (idJogos) => {
        return navigate(`/jogos/avaliar/${idJogos}`)
    }

    return (
        <>
            {jogos.map((jogo) => (
                <div className="cardGame">
                    <h2>{jogo.name_game}</h2>
                    <img className="game-icon" src={`src/assets/jogos/${jogo.name_game}.png`} alt={jogo.name_game} />
                    <div className='game-info'>
                        <ul>
                            <li>Desenvolvido por: <b>{jogo.developed_by}</b></li>
                            <li>Categoria: <b>{jogo.category_name}</b></li>
                            <li>Data de lançamento: <b>{jogo.data_criacao}</b></li>
                            <li>Nota: <b> {jogo.note.toFixed(2)}</b></li>
                        </ul>
                    </div>
                    <div>
                        <ButtonMenu 
                            classe='button-avaliar' 
                            texto='Avaliar'
                            event={() => avaliar(jogo.idJogo)} 
                        />
                    </div>
                </div>
                            )
                        )

            }
        </>
    )
}


export default CardGame;