import Button from "../../components/buttons/ButtonLogin";
import InputPassword from "../../components/forms/InputPassword";
import InputText from "../../components/forms/InputText";
import Select from "../../components/forms/SelectPlataforma";

import { useState, useEffect } from "react";
import { json, useNavigate, useParams } from "react-router-dom";

function Login() {

    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState(''); 
    const [userPassword, setUserPassword] = useState('');

    const handleContactLogin = () => {
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
                    const id = parseInt(data.idUser);
                    localStorage.setItem('userId', id);
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
                            texto="Insira seu username" 
                            textoCapturado={setUserLogin} 
                            classe="input-text" 
                        />
                        <InputPassword 
                            label="SENHA:" 
                            texto="Insira a senha" 
                            setPassword={setUserPassword} 
                        />
                    </div>
                    <footer className="footer-login">
                        <Button 
                            texto="Login"  
                            classe='buttonLogin'
                            event={handleContactLogin}
                        />
                            
                        <a href="">Cadastre-se Aqui</a>
                    </footer>
                </div>
            </section>
       </main>
    )
}

export default Login;