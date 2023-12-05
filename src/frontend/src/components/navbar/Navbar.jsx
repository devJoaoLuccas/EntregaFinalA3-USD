
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

import styles from '../../styles/nav/Navbar.module.css'

function Navbar() {

    const userId = localStorage.getItem('userId');

    return (
        <nav className={styles.navbar}>
            <div></div>
            <div>
                <Link to={'/menuPrincipal'} >
                    <img className={styles.logoNav} src="src/assets/logo.png" alt="logo" />
                </Link>
            </div>
            <div className={styles.cabecalho_dropdown}>
                <div className={styles.cabecalho_dropdown_text}>
                    <Dropdown 
                    userId={userId} 
                />
                </div>
            </div>
        </nav>
    )

}


export default Navbar;