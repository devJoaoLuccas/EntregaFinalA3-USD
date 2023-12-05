import { useNavigate } from 'react-router-dom';

import styles from '../../styles/menus/Plataforma.module.css'

function CardPlataform({plataformas}) {

    const navigate = useNavigate();

    const avancar = () => {
        return navigate('/jogos')
    }

    return (
        <>
            {plataformas.map((plataforma) => (
                <div className={styles.cardPlataform} onClick={avancar}>
                    <img className={styles.plataform_icon} src={`src/assets/plataformas/${plataforma.nome_plataforma}.png` }alt="teste" />
                    <h2 className={styles.plataform_text}>{plataforma.nome_plataforma}</h2>
                    </div>
                ))
            }
        </>
    )

}


export default CardPlataform;
