


function InputNumber({classeInput, classeLabel, texto, textoCapturado}) {

    return (
        <>
            <label className={classeLabel} htmlFor="data">{texto}</label>
            <input className={classeInput} type="number" id="data-select" onChange={(e) => textoCapturado(e.target.value)} min='0' max='10' placeholder="0"></input>
        </>
    )

}



export default InputNumber;