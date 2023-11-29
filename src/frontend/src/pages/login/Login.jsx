import Button from "../../components/buttons/ButtonLogin";
import InputPassword from "../../components/forms/InputPassword";
import InputText from "../../components/forms/InputText";
import Select from "../../components/forms/SelectPlataforma";

import { useState, useEffect } from "react";


function Login() {

    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log(`Cadastrou o usuário! username: ${username}, password ${password}`);
    }

    const [username, setUsername] = useState(); 
    const [password, setPassword] = useState();
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
}, [])
    
    return (
       <main className="container">
            <form className="card-login">
                <div className="card-infos">
                    <header>
                        <img className="logo" src="src\assets\logo.png" alt="teste" />
                        <h1>Iniciar Sessão</h1>
                    </header>
                    <div className="card-inputs">
                        <InputText label="INICIAR SESSÃO COM O NOME DE USUÁRIO:" texto="Insira seu username" textoCapturado={setUsername} classe="input-text" />
                        <InputPassword label="SENHA:" texto="Insira a senha" setPassword={setPassword} />
                        <Select texto="TESTE" nome="testePlataforma"/>
                    </div>
                    <footer className="footer-login">
                        <Button event={cadastrarUsuario} texto="Login"  classe='buttonLogin'/>
                        <a href="">Cadastre-se Aqui</a>
                    </footer>
                </div>
            </form>
       </main>
    )
}

export default Login;