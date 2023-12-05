
import { useState } from 'react';

function ButtonLogin({event, classe, texto, handleSubmit, data}) {

    const [plataform, setPlataform] = useState(data ||  {});

    return(  
        <>
            <button type="submit" onClick={event} className={classe}>{texto}</button>
        </>
    )


}



export default ButtonLogin;