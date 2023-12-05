import InputPassword from "../../components/forms/InputPassword";
import InputText from "../../components/forms/InputText";
import InputDate from "../../components/forms/InputDate";


import ButtonMenu from "../../components/buttons/ButtonMenu";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

function CadastroUsuario() {

    const navigate = useNavigate();

    const voltar = () => {
        return navigate('/')
    }


    const [user, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [date, setDate] = useState('');
 
    const cadastrarUsuario = () => {
        if(password !== passwordConfirm) {
            window.alert("As senhas não coincidem");
            return
        }  else if (user === '' || email === '' || password === '' ||   passwordConfirm == '' || date === '') {
            window.alert("Prencha todas as informações para fazer o cadastro!");
            return
        } else {
            fetch('http://localhost:3000/inserirUsuario', {
                method:'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify ({
                    username:user,
                    email:email,
                    password:password,
                    data_nascimento:date,
                    admin:0
                })
            })
                .then(() => {
                    window.alert("Você foi cadastrado com sucesso! Bem vindo a familia!!!")
                    navigate('/')
                })
                .catch((err) => {
                    window.alert("Encontramos um erro e não vai ser possivel fazer o cadastro no momento.")
                    console.error('Não foi possivel cadastrar o usuário', err);
                })
        }

    }


    return (
        <body>
            <main className="container">
                <section className="cardCadastro">
                    <div  className="card-infos">
                    <h1>Cadastre-se no <span>THE GAME BAY</span></h1>
                        <div className="card-inputs">
                            <div className="card-inputs-column">
                                <InputText 
                                    label="Username:"
                                    classeLabel="label_input"
                                    classe="inputUser"
                                    texto="Insira seu nome de usuário:"
                                    textoCapturado={setUsername}
                                />
                            </div>                            
                            <div className="card-inputs-column">
                                <InputText 
                                    label="Email:"
                                    classeLabel="label_input"
                                    classe="inputUser"
                                    texto="Insira seu email:"
                                    textoCapturado={setEmail}
                                />
                            </div>
                            <div className="card-inputs-column">
                                <InputPassword 
                                    label="Senha:"
                                    classeLabel="label_input"
                                    classe="inputUser"
                                    texto="Insira sua senha:"
                                    textoCapturado={setPassword}
                                />
                            </div>
                            <div className="card-inputs-column">
                                <InputPassword 
                                    label="Confirme a senha:"
                                    classeLabel="label_input"
                                    classe="inputUser"
                                    texto="Insira a mesma senha:"
                                    textoCapturado={setPasswordConfirm}
                                />
                            </div>
                            <div className="card-inputs-column">
                                <InputDate 
                                    texto="Data de nascimento:"
                                    classeLabel="label_input"
                                    classe="inputUser"
                                    textoCapturado={setDate}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="card-buttons">
                        <ButtonMenu 
                            texto="Cadastrar"
                            classe="btn-cadastro"
                            event={cadastrarUsuario}
                        />
                        <ButtonMenu 
                            texto="Cancelar"
                            classe="btn-cadastro"
                            event={voltar}
                        />
                    </div>
                </section>
            </main>
        </body>
    )

}



export default CadastroUsuario;