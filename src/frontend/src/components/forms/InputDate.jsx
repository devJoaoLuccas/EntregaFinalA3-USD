

function InputDate({classeInput, classeLabel, texto, textoCapturado}) {

    return (
        <>
            <label className={classeLabel} htmlFor="data">{texto}</label>
            <input className={classeInput} type="date" id="data-select" onChange={(e) => textoCapturado(e.target.value)}></input>
        </>
    )

}



export default InputDate;