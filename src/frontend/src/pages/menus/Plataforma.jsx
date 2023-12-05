import { useState, useEffect } from "react";

import CardPlataform from "../../components/cards/CardPlataform";

import Navbar from "../../components/navbar/Navbar";


import styles from '../../styles/menus/Plataforma.module.css'

function Plataforma() {

    const [plataforma, setPlataformas] = useState([]);

    useEffect (() => {
        fetch('http://localhost:3000/plataformas', {
            method:'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((resp) => resp.json())
            .then((item) => {
                setPlataformas(item);
            })
            .catch((err) => console.log(err))
    , []});

    return (
        <body>
            <Navbar />
            <main className={styles.container}>
                    <section className={styles.grupo}>
                        <div className={styles.card_row}>
                            <CardPlataform plataformas={plataforma} />
                        </div>
                    </section>
            </main>
        </body>
    )

}


export default Plataforma;