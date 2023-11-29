import PropTypes from 'prop-types'
import '../../styles/global.css'
import { useState } from 'react'

function InputPassword({label,texto, setPassword}) {

    const [name, setName] = useState();

    return (
        <>
            <label className='input-label' name="password">{label}</label>
            <input className="input-text" 
                type="password" 
                name="password" 
                placeholder={texto} 
                onChange={(e) => setPassword(e.target.value)}/>
        </>
    )

}

InputPassword.propTypes = {
    label: PropTypes.string,
    texto: PropTypes.string
}

export default InputPassword;