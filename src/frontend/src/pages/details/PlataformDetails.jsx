import {useState, useEffect} from 'React';



function PlataformDetails() {

    const [plataformas, setPlataformas] = useState([]);
    
    useEffect (() => {
        fetch('http://localhost:3000/plataformas', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((plataforma) => {
                setPlataformas(plataforma);
            })
            .catch((err) => console.log(err))
    , []});



    return (
        <>
            <body>
                <main>
                    <section>
                        {plataformas.map((plataforma) => (
                            <h1>{plataforma.nome_plataforma}</h1>
                        ))

                        }
                    </section>
                </main>
            </body>

        </>
    )
}


export default PlataformDetails;