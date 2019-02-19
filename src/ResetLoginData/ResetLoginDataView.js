import React, { Component } from 'react';
import './ResetLoginData.css';
import logo from  "../Graphics/Logo_kreis.png";
import Confirmbutton from "../UI/Confirmbutton";
import Footer from "../UI/Footer";
import LoginView from "../Login/LoginView";
//import * as EmailValidator from 'email-validator';


/**
 * @author Dany Chuissi
 *
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
    /**das Login fenster wird angezeigt, fall der User auf "Abbrechen" klickt*/
    _onAbbrechenClick() {
        window.location='/login'
    }

    /**
     *   hier wird die Email geprüft
     *   in reihenfolge werden folgende kriterien geprüft (Email nicht Leer? , Email Format richtig?)
     *   wenn beide richtig sind, wird die eingegeben Email an dem Server geschickt,
     *   und abhängig von der Server Antwort einen Nachricht für die Alert zurüchgegeben werden
     *
     * @returns {string}
     */
    showMessage(){
        const yourEmail = this.state.email;
        let erg;
        if(yourEmail.length === 0){
               erg =  "Email ist leer!"
                return erg;
        }
        if(yourEmail.length !== 0){
           /* let emailOk = EmailValidator.validate(yourEmail);
            if(emailOk !== true){
                erg = "Bitte gültige Email eingeben";
                return erg;
            }*/
        }

      /*  if(yourEmail === "chuissidany@yahoo.fr") {
            erg = "Email wurde gesendet an \"" + yourEmail + "\", offne deine Email Adresse, um dein Passwort zurückzusetzten"
            return erg;

        }*/
        erg =   "Email wurde gesendet an \"" + yourEmail + "\". Öffne deine Emails, um dein Passwort zurückzusetzten";
        return erg;
    }

    handleChange({ target }) {
        this.setState({
            [target.name]: target.value,
        });
        console.log(this.state.email)

    }
    /**zeigt das Alert mit dem Nachricht ob das Reset erfolgreich war oder nicht. Außerdem wird die Mail an den Server versendet*/
    publish(email) {
        alert(this.showMessage());
        fetch('http://172.22.24.243:50601/register/passwordReset', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(
                {
                    email: email,
                }
            ),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));

      //  window.location ='/login'
    }
    render() {
        return (
            this.state.showLogin? <LoginView/>:

            <div>
                <div className = "header">
                   { /**Header mit Name*/}
                    <div style={ {color: 'white', fontFamily:'Perpetua Titling MT', fontSize:30}}>
                        Squirrel
                    </div>
                </div>
               { /**Container beinhaltet die Seite zwichen Header und Footer*/}
                <div id="container">
                  {  /** Box mit Label und Eingabeferlder*/}
                        <div className= "box">
                          {  /** Logo oben in dem Box*/}
                            <div>
                                <img src={logo} className="logo" alt="logo" />
                            </div>

                            <label style={{marginBottom: '10px'}}>
                                Bitte geben Sie Ihre E-Mail-Adresse ein,
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
                                        onClick={()=>this.publish(this.state.email)}>
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