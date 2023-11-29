

import '../../styles/cards.css'

function CardPlataform({plataformas}) {


    return (
        <>
            {plataformas.map((plataforma) => (
                <div className="cardPlataform">
                    <img className='plataform-icon' src={`src/assets/plataformas/${plataforma.nome_plataforma}.png` }alt="teste" />
                    <h2 className='plataform-text'>{plataforma.nome_plataforma}</h2>
                    </div>
                ))
            }
        </>
    )

}


export default CardPlataform;
