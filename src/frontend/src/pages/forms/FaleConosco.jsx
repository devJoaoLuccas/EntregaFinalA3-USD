import { useState, useEffect } from 'react'

import '../../styles/forms.css';
import '../../styles/global.css';

import InputText from '../../components/forms/InputText';
import TextArea from '../../components/forms/TextArea';
import ButtonLogin from '../../components/buttons/ButtonLogin';


function FaleConosco() {

    return ( 
        <main className='containerForms'>
            <section className='card-addGames'>
                <form>
                    <div className='card-infosFaleConosco'>
                        <h1>Atendimento</h1>
                        <div className='card-info-faleConosco'>
                            <div className='card-infos-row'>
                                <label 
                                    className='infosLabel'>
                                    Seu nome:
                                </label>
                                <InputText 
                                    classe='card-inputMsg' 
                                    texto='GUILHERMEX2'
                                    desativado='true' 
                                />
                            </div>
                            <div className='card-infos-row'>
                                <label 
                                    className='infosLabel'>
                                    Seu Email:
                                </label>
                                <InputText 
                                    classe='card-inputMsg' 
                                    texto='GuiGoncalves@gmail.com' 
                                    desativado='true' 
                                />
                            </div>
                            <div className='card-infos-row'>
                                <label 
                                    className='infosLabel'>
                                    Assunto:
                                </label>
                                <InputText 
                                classe='card-inputMsg-x' 
                                texto='Assunto' />
                            </div>
                            <div className='card-infos-row'>
                              <TextArea 
                                classLabel='infosLabel-x'
                                classText='card-faleConosco-textArea' 
                                txtLabel='Mensagem:' texto='Escreva uma mensagem:' 
                              />
                            </div>
                        </div>
                        <div className='footer-plataform'>
                            <ButtonLogin texto='Enviar'  classe='buttonAddPlataform'/>
                            <ButtonLogin texto='Cancelar'  classe='buttonAddPlataform'/>
                        </div>   
                    </div>
                </form>
            </section>
        </main>
    )

}



export default FaleConosco;