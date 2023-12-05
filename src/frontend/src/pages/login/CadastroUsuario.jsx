import { useState } from "react";
import { useNavigate } from 'react-router-dom'

import InputPassword from "../../components/forms/InputPassword";
import InputText from "../../components/forms/InputText";
import InputDate from "../../components/forms/InputDate";
import ButtonMenu from "../../components/buttons/ButtonMenu";

import styles from '../../styles/login/CadastroUsuario.module.css'

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
            <main className={styles.container}>
                <section className={styles.cardCadastro}>
                    <div  className={styles.card_infos}>
                    <h1>Cadastre-se no <span>THE GAME BAY</span></h1>
                        <div className={styles.card_inputs}>
                            <div className={styles.card_inputs_column }>
                                <InputText 
                                    label="Username:"
                                    classeLabel={styles.label_input}
                                    classe={styles.inputUser}
                                    texto="Insira seu nome de usuário:"
                                    textoCapturado={setUsername}
                                />
                            </div>                            
                            <div className={styles.card_inputs_column }>
                                <InputText 
                                    label="Email:"
                                    classeLabel={styles.label_input}
                                    classe={styles.inputUser}
                                    texto="Insira seu email:"
                                    textoCapturado={setEmail}
                                />
                            </div>
                            <div className={styles.card_inputs_column }>
                                <InputPassword 
                                    label="Senha:"
                                    classeLabel={styles.label_input}
                                    classe={styles.inputUser}
                                    texto="Insira sua senha:"
                                    textoCapturado={setPassword}
                                />
                            </div>
                            <div className={styles.card_inputs_column }>
                                <InputPassword 
                                    label="Confirme a senha:"
                                    classeLabel={styles.label_input}
                                    classe={styles.inputUser}
                                    texto="Insira a mesma senha:"
                                    textoCapturado={setPasswordConfirm}
                                />
                            </div>
                            <div className={styles.card_inputs_column }>
                                <InputDate 
                                    texto="Data de nascimento:"
                                    classeLabel={styles.label_input}
                                    classe={styles.inputUser}
                                    textoCapturado={setDate}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.card_buttons}>
                        <ButtonMenu 
                            texto="Cadastrar"
                            classe={styles.btn_cadastro}
                            event={cadastrarUsuario}
                        />
                        <ButtonMenu 
                            texto="Cancelar"
                            classe={styles.btn_cadastro}
                            event={voltar}
                        />
                    </div>
                </section>
            </main>
        </body>
    )

}



export default CadastroUsuario;