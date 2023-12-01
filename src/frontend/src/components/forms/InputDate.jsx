

function InputDate({classeInput, classeLabel, texto, textoCapturado, valor}) {

    return (
        <>
            <label className={classeLabel} htmlFor="data">{texto}</label>
            <input className={classeInput} value={valor} type="date" id="data-select" onChange={(e) => textoCapturado(e.target.value)}></input>
        </>
    )

}



export default InputDate;