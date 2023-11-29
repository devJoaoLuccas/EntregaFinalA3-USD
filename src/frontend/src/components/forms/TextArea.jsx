

function TextArea({colunas, linhas, texto, txtLabel, classLabel, classText}) {


    return ( 
        <>
            <label 
                className={classLabel}>
                {txtLabel}
            </label>
            <textarea 
                className={classText} 
                name="" 
                id="" 
                placeholder={texto}>
            </textarea>
        </>
    )
}

export default TextArea;