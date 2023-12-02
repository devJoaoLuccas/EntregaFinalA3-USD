

function InputDate({classe, classeLabel, texto, textoCapturado, valor, desativado, placeholder}) {

    return (
        <>
            <label className={classeLabel} htmlFor="data">{texto}</label>
            <input 
                className={classe} 
                value={valor} 
                placeholder={placeholder}
                type="date" 
                id="data-select" 
                onChange={(e) => textoCapturado(e.target.value)}
                disabled={desativado}
                ></input>
        </>
    )

}



export default InputDate;