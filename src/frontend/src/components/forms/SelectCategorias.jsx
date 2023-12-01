import { useState, useEffect } from 'react'

function SelectCategorias({nome, texto, classeSelect, classeLabel, textoCapturado, variavel, desativado}) {

    return (

        <>
            <label className={classeLabel} htmlFor={nome}>{texto}</label>
            <select 
            value={variavel} 
            className={classeSelect} 
            name={nome} 
            id={nome} 
            onChange={textoCapturado}
            disabled={desativado}>
                <option selected disabled>Escolha uma categoria:</option>
                <option value="Ação">Ação</option>
                <option value="Aventura">Aventura</option>
                <option value="MOBA">Moba</option>
                <option value="RPG">RPG</option>
                <option value="Sandbox">Sandbox</option>
                <option value="Realidade Aumentada">Realidade Aumentada</option>
                <option value="Battle Royale">Battle Royale</option>
            </select>
        </>

    )

}

export default SelectCategorias;