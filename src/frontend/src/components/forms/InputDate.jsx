

function InputDate({classe, classeLabel, texto, textoCapturado, valor}) {

    return (
        <>
            <label className={classeLabel} htmlFor="data">{texto}</label>
            <input className={classe} value={valor} type="date" id="data-select" onChange={(e) => textoCapturado(e.target.value)}></input>
        </>
    )

}



export default InputDate;