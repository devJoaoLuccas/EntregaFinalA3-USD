import { useState, useEffect } from "react";

import CardPlataform from "../../components/cards/CardPlataform";

import Navbar from "../../components/navbar/Navbar";


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
            <main className="container">
                    <section className="grupo">
                        <div className="card-row">
                            <CardPlataform plataformas={plataforma} />
                        </div>
                    </section>
            </main>
        </body>
    )

}


export default Plataforma;