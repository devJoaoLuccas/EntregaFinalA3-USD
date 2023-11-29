import '../../styles/button.css';
import PropTypes from 'prop-types';

import { useState } from 'react';

function ButtonLogin({event, classe, texto, handleSubmit, data}) {

    const [plataform, setPlataform] = useState(data ||  {});

    return(  
        <>
            <button type="submit" onClick={event} className={classe}>{texto}</button>
        </>
    )


}

ButtonLogin.propTypes = {
    texto: PropTypes.string
}

export default ButtonLogin;