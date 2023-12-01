import '../../styles/button.css'

function ButtonMenu({texto, event, classe}) {

    return (
        <>
            <button 
                className={classe}
                onClick={event}>
                    {texto}
            </button>
        </>
    )

}


export default ButtonMenu;