import PropTypes from 'prop-types'
import '../../styles/global.css'
import { useState } from 'react'

function InputPassword({label,texto, textoCapturado, classe, classeLabel, desativado}) {

    const [name, setName] = useState();

    return (
        <>
            <label className={classeLabel} name="password">{label}</label>
            <input className={classe}
                disabled={desativado}
                type="password" 
                name="password" 
                placeholder={texto} 
                onChange={(e) => textoCapturado(e.target.value)}/>
        </>
    )

}

InputPassword.propTypes = {
    label: PropTypes.string,
    texto: PropTypes.string
}

export default InputPassword;