


function InputNumber({classe, classeLabel, texto, textoCapturado, valor, desativado, evento}) {

    return (
        <>
            <label 
                className={classeLabel} 
                htmlFor="data">
                    {texto}
            </label>
            <input 
                disabled={desativado}
                className={classe} 
                type="number" 
                id="data-select" 
                onChange={(e) => textoCapturado(e.target.value)} 
                onClick={evento}
                min='0' 
                max='10' 
                placeholder={valor}>
            </input>
        </>
    )

}



export default InputNumber;