


function InputNumber({classe, classeLabel, texto, textoCapturado, valor, desativado}) {

    return (
        <>
            <label 
                className={classeLabel} 
                htmlFor="data">
                    {texto}
            </label>
            <input 
                value={valor} 
                disabled={desativado}
                className={classe} 
                type="number" 
                id="data-select" 
                onChange={(e) => textoCapturado(e.target.value)} 
                min='0' 
                max='10' 
                placeholder="0">
            </input>
        </>
    )

}



export default InputNumber;