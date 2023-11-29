import ListGames from "../../components/infos/ListGames";
import ListPlataforms from "../../components/infos/LitsPlataforms";

import '../../styles/global.css';
import '../../styles/menu.css';


function EditarDeletar() {
    return (

        <main className="containerEdit">
            <section className="cardMenu">
                <div className="infos-edit">
                    <nav>
                        <h1>Itens</h1>
                    </nav>
                    <div className="infos-edit-gamesPlataforms">
                        <div>
                            <ListGames />
                        </div>
                        <div>
                            <ListPlataforms />
                        </div>
                    </div>
                    <footer>
                        <div className="logotipo">
                            <a href="">
                                <img className="logo" src="src/assets/logo.png" alt="" />
                            </a>
                        </div>
                    </footer>
                </div>
            </section>
        </main>

    )
}


export default EditarDeletar;