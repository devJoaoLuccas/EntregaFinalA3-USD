import '../../styles/button.css'

function ButtonMenu({texto, onclick}) {

    return (
        <>
            <button onClick={onclick} className='buttonMenu'>{texto}</button>
        </>
    )

}


export default ButtonMenu;