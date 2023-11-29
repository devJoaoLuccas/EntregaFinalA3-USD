import '../../styles/nav.css'

function Navbar() {

    return (
        <nav className='navbar'>
            <div></div>
            <div>
                <img className='logoNav' src="src/assets/logo.png" alt="logo" />
            </div>
            <div className="cabecalho-dropdown">
                <div> 
                    <span className="cabecalho-dropdown-text">
                        GUILHERMEXX2
                    </span>   
                        <div className="cabecalho-dropdown-content">
                            <a href="" id="perfil-link">Meu Perfil</a>
                            <a href="" id="adm-link">Painel de administrador</a>
                            <a href="" id="sair-link">Sair</a>
                        </div>
                </div>
            </div>
        </nav>
    )

}


export default Navbar;