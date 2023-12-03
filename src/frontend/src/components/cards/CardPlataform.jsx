

import { useNavigate } from 'react-router-dom';
import '../../styles/cards.css'

function CardPlataform({plataformas}) {

    const navigate = useNavigate();

    const avancar = () => {
        return navigate('/jogos')
    }

    return (
        <>
            {plataformas.map((plataforma) => (
                <div className="cardPlataform" onClick={avancar}>
                    <img className='plataform-icon' src={`src/assets/plataformas/${plataforma.nome_plataforma}.png` }alt="teste" />
                    <h2 className='plataform-text'>{plataforma.nome_plataforma}</h2>
                    </div>
                ))
            }
        </>
    )

}


export default CardPlataform;
