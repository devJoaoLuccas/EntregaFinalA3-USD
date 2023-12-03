import '../../styles/nav.css'
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

function Navbar() {

    const userId = localStorage.getItem('userId');

    return (
        <nav className='navbar'>
            <div></div>
            <div>
                <Link to={'/menuPrincipal'} >
                    <img className='logoNav' src="src/assets/logo.png" alt="logo" />
                </Link>
            </div>
            <div className="cabecalho-dropdown">
                <div className='cabecalho-dropdown-text'>
                    <Dropdown 
                    userId={userId} 
                />
                </div>
            </div>
        </nav>
    )

}


export default Navbar;