import { Link } from "react-router-dom";
import ListGames from "../../components/infos/ListGames";
import ListPlataforms from "../../components/infos/LitsPlataforms";


import styles from '../../styles/menus/EditarDeletar.module.css'

function EditarDeletar() {
    return (

        <main className={styles.containerEdit}>
            <section className={styles.cardMenu}>
                <div className={styles.infos_edit}>
                    <nav>
                        <h1>Itens</h1>
                    </nav>
                    <div className={styles.infos_edit_gamePlataforms}>
                        <div>
                            <ListGames />
                        </div>
                        <div>
                            <ListPlataforms />
                        </div>
                    </div>
                    <footer>
                        <div className={styles.logotipo}>
                            <Link to={'/painelAdmin'} >
                                <img className={styles.logo} src="src/assets/logo.png" alt="" />
                            </Link>
                        </div>
                    </footer>
                </div>
            </section>
        </main>

    )
}


export default EditarDeletar;