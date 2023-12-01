import '../../styles/button.css'

function ButtonMenu({texto, onclick}) {

    return (
        <>
            <button 
                className='buttonMenu'
                onClick={onclick}>
                    {texto}
            </button>
        </>
    )

}


export default ButtonMenu;