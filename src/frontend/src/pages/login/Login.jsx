import Button from "../../components/buttons/ButtonLogin";
import InputPassword from "../../components/forms/InputPassword";
import InputText from "../../components/forms/InputText";
import Select from "../../components/forms/SelectPlataforma";

import { useState, useEffect } from "react";


function Login() {

    const [username, setUsername] = useState(); 
    const [password, setPassword] = useState();

    
    return (
       <main className="container">
            <form className="card-login">
                <div className="card-infos">
                    <header>
                        <img className="logo" src="src\assets\logo.png" alt="teste" />
                        <h1>Iniciar Sessão</h1>
                    </header>
                    <div className="card-inputs">
                        <InputText 
                            label="INICIAR SESSÃO COM O NOME DE USUÁRIO:" 
                            texto="Insira seu username" 
                            textoCapturado={setUsername} 
                            classe="input-text" 
                        />
                        <InputPassword 
                            label="SENHA:" 
                            texto="Insira a senha" 
                            setPassword={setPassword} 
                        />
                    </div>
                    <footer className="footer-login">
                        <Button 
                            texto="Login"  
                            classe='buttonLogin'
                        />
                        <a href="">Cadastre-se Aqui</a>
                    </footer>
                </div>
            </form>
       </main>
    )
}

export default Login;