import { useState, useEffect } from 'react'

function SelectStatus({nome, texto, classeSelect, classeLabel, textoCapturado, variavel}) {

    return (

        <>
            <label className={classeLabel} htmlFor={nome}>{texto}</label>
            <select value={variavel} className={classeSelect} name={nome} id={nome} onChange={textoCapturado}>
                <option selected disabled>Escolha um status:</option>
                <option value="Jogado">Jogado</option>
                <option value="Jogando">Jogando</option>
                <option value="Zerado">Zerado</option>
                <option value="Não Recomendo">Não Recomendo</option>
                <option value="Ruim">Ruim</option>
                <option value="Bom">Bom</option>
            </select>
        </>

    )

}
export default SelectStatus;