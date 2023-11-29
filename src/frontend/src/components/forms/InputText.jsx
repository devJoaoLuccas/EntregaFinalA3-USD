import PropTypes from 'prop-types'
import '../../styles/global.css'

function InputText({label,texto, textoCapturado, classe, desativado, classeLabel}) {

    return (
        <>
            <label className={classeLabel} name="username">{label}</label>
            <input 
                className={classe}
                disabled={desativado}
                type="text" 
                name="username" 
                placeholder={texto} 
                onChange={(e) => textoCapturado(e.target.value)}
            />
        </>
    )

}

InputText.propTypes = {
    label: PropTypes.string,
    texto: PropTypes.string
}

export default InputText;