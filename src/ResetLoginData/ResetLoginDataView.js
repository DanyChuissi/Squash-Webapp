import React, { Component } from 'react';
import './ResetLoginData.css';
import logo from  "../Graphics/Logo_kreis.png";
import Confirmbutton from "../UI/Confirmbutton";
import Footer from "../UI/Footer";
import LoginView from "../Login/LoginView";
import * as EmailValidator from 'email-validator';


/**
 * @author Dany
 * this component gives the possibility to the user to reset his passwort.
 * the user must enter an existing Email and by clicking on "Email Senden" he will receive an Email with the procedure to reset his Passwort
 * clicking on "Abbrechen" he will return to the Login
 * @visibleName ResetLoginDataView
 */
class ResetLoginDataView extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            placeholderleer: false,
            showLogin: false,
        }
        this._onAbbrechenClick = this._onAbbrechenClick.bind(this);
        this.showMessage = this.showMessage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.publish = this.publish.bind(this);
    }
    _onAbbrechenClick() {
        this.setState({
            showLogin: true,
        });
    }

// Hier sollte die Email geprüft werden und abhängig von der Server Antwort einen Nachricht für die Alert zurüchgegeben werden
    showMessage(){
        const yourEmail = this.state.email;
        let erg;
        if(yourEmail.length === 0){
               erg =  "Email ist leer!"
                return erg;
        }
        if(yourEmail.length !== 0){
            let emailOk = EmailValidator.validate(yourEmail);
            if(emailOk !== true){
                erg = "Bitte gültige Email eingeben";
                return erg;
            }
        }

        if(yourEmail === "chuissidany@yahoo.fr") {
            erg = "Email wurde gesendet an \"" + yourEmail + "\", offne deine Email Adresse, um dein Passwort zurückzusetzten"
            return erg;

        }
        erg =   "Email nicht gefunden!"
        return erg;
    }

    handleChange({ target }) {
        this.setState({
            [target.name]: target.value,
        });

    }
    /*zeigt die Alert mit dem Nachricht ob das Reset erfolgreich war oder nicht*/
    publish() {
        alert(this.showMessage());
    }
    render() {
        return (
            this.state.showLogin? <LoginView/>:

            <div>
                <div className = "header">
                    <div style={ {color: 'white', fontFamily:'Perpetua Titling MT', fontSize:30}}>
                        Squirrel
                    </div>
                </div>
                <div id="container">
                        <div className= "box">
                            <div>
                                <img src={logo} className="logo" alt="logo" />
                            </div>

                            <label style={{marginBottom: '10px'}}>
                                Bitte geben sie Ihre E-Mail-Adresse oder den Benutzernamen ein,
                                um das Passwort zurückzusetzen
                            </label>
                            <div>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder ="E-Mail-Adresse"
                                    value={this.state.email }
                                    onChange={ this.handleChange }/>
                            </div>
                            <div style={{marginTop: '10px', justifyContent: 'space-between'}} >
                                <Confirmbutton style={{marginRight: '40px'}}
                                        type= "button"
                                        onClick={this.publish}>
                                    Email Senden
                                </Confirmbutton>

                                <Confirmbutton style={{marginLeft: '40px'}}
                                        type= "button"
                                        onClick={this._onAbbrechenClick}>
                                    Abbrechen
                                </Confirmbutton>
                            </div>
                        </div>
                </div>
                <footer className="myFooter">
                    <Footer/>
                </footer>
            </div>
        );
    }
}



export default ResetLoginDataView