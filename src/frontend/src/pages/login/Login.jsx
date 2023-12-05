import InputPassword from "../../components/forms/InputPassword";
import InputText from "../../components/forms/InputText";
import Select from "../../components/forms/SelectPlataforma";

import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";


import ButtonMenu from "../../components/buttons/ButtonMenu";

function Login() {

    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState(''); 
    const [userPassword, setUserPassword] = useState('');

    const handleContactLogin = () => {
        if(userLogin === '' && userPassword === '') {
            window.alert("Por favor, insira suas credenciais");
        }

        if(userLogin && userPassword) {
            fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify ({
                    user:userLogin,
                    password:userPassword
                })
        })
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error("Não foi possivel fazer login");
                }
                return resp.json();
            })
            .then((data) => {
                if(data.statusCode === 200) {
                    window.alert("Login efetuado com sucesso!");
                    localStorage.setItem('userId', data.idUser);
                    navigate('/menuPrincipal');
                } else if(data.statusCode === 401) {
                    window.alert('Não foi possivel fazer login, credenciais inválidas')
                    navigate('/');
                } else if(data.statusCode === 500) {
                    window.alert("Não foi possível fazer login, erro interno do servidor")
                    navigate('/');
                } else { 
                    navigate('/')
                }
                
            })
            .catch((err) => console.log(err))
        }
    }


    
    return (
       <main className="container">
            <section className="card-login">
                <div className="card-infos">
                    <header>
                        <img className="logo" src="src\assets\logo.png" alt="teste" />
                        <h1>Iniciar Sessão</h1>
                    </header>
                    <div className="card-inputs">
                        <InputText 
                            label="INICIAR SESSÃO COM O NOME DE USUÁRIO:" 
                            classeLabel="input-label"
                            texto="Insira seu username" 
                            textoCapturado={setUserLogin} 
                            classe="input-text" 
                        />
                        <InputPassword 
                            label="SENHA:" 
                            classeLabel="input-label"
                            texto="Insira a senha" 
                            classe="input-text"
                            textoCapturado={setUserPassword} 
                        />
                    </div>
                    <ButtonMenu
                            texto="Login"
                            classe="buttonLogin"
                            event={handleContactLogin}
                        />
                    
                    <footer className="footer-login">
                        <Link to={'/cadastroUsuario'}>
                            Cadastre-se aqui
                        </Link>
                    </footer>
                </div>
            </section>
       </main>
    )
}

export default Login;