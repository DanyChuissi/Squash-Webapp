import React, { Component } from 'react';
import './ResetLoginData.css';
import logo from './LogoKreis.png'
import Confirmbutton from "../UI/Confirmbutton";


class ResetLoginDataView extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            placeholderleer: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.publish = this.publish.bind(this);
    }

    emailIsEmpty() {
        if(this.state.email == "") {
            this.setState({
                placeholderleer: true,
            });
        }
    }

    errorMessage(){
        const yourEmail = this.state.email;
        if(yourEmail === ""){
            return <div style={{color: 'rot'}}>
                Email ist leer!
            </div>
        }
        if(yourEmail !== "test@squirrel.com"){
            return <div style={{color: 'black'}}>
                Email nicht gefunden!
            </div>
        }
        return <div style={{color: 'black'}}>
            Email wurde gesendet an ....,
            <br />offne deine Email Adresse, um dein Passwort zurückzusetzten
        </div>
    }


    handleChange({ target }) {
        this.setState({
            [target.name]: target.value
        });
    }
    /*Test Methode*/
    publish() {
        console.log(this.state.email);
    }
    render() {
        return (

            <div>
                <div className = "header">
                    <div style={ {color: 'white', fontFamily:'Perpetua Titling MT', fontSize:30}}>
                        Squirrel
                    </div>
                </div>
                <div id="container">
                    <main>
                        <div className= "box">
                            <div>
                                <img src={logo} className="logo" alt="logo" />
                            </div>

                            <label>
                                Bitte gibt deine E-mail-Adresse oder Benutzername ein,
                                <br />um dein Passwort zurüchzuzetzen
                            </label>
                            <div className="input">
                                <input
                                    type="text"
                                    name="email"
                                    placeholder ="email"
                                    value={this.state.email }
                                    onChange={ this.handleChange }/>
                            </div>
                            
                            <div  className= "button">
                                <Confirmbutton style={{cursor: 'pointer',marginRight: '10px'}}
                                        type= "button"
                                        onClick={this.publish}>
                                    Email Senden
                                </Confirmbutton>

                                <Confirmbutton style={{cursor: 'pointer', marginLeft: '10px'}}
                                        type= "button">
                                    Abbrechen
                                </Confirmbutton>
                            </div>
                        </div>
                    </main>

                </div>
                <footer>
                    <a
                        href="https://www.fh-dortmund.de"
                        target="_blank"
                        rel="noopener noreferrer">
                        Impresum   |
                    </a>
                    <a
                        href="https://www.fh-dortmund.de"
                        target="_blank"
                        rel="noopener">
                        Datenschutzerklärung
                    </a>
                </footer>
            </div>
        );
    }
}



export default ResetLoginDataView