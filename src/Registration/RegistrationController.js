import React, {Component} from 'react';
import RegistrationView from "./RegistrationView";
import * as EmailValidator from 'email-validator';

import DatenschutzerklaerungView from "../Datenschutzerklaerung/DatenschutzerklaerungView";
import RegistrationDataController from "./RegistrationDataController";
/**
 * @author Dany Chuissi
 *
 * Controller für die Registration Seite
 * @visibleName RegistrationController
 */
class RegistrationController extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            password_2: '',
            password_conform: false,
            nutzungbedingungen_akzeptiert: false,
            nutzungbedingungen_lesen: false,
            showAlert: false,
            registrationOK: false,
        }
        this.showMessage = this.showMessage.bind(this);
        this.submitData = this.submitData.bind(this);
    }

    /** Wenn alle angegeben Informationen nicht conform sind soll einen entsprechenden Nachticht eingezeigt werden*/
    setShowAlert() {
        this.setState({
            showAlert: true,
        });
    }
    setRegistrationOk() {
        this.setState({
            registrationOK: true,
        });
    }
    setNutzunbedingungen_lesen= (e) => {
        this.setState({nutzungbedingungen_lesen: true})
    };
    setNutzunbedingungen_akzeptiert= (e) => {
        this.setState({nutzungbedingungen_akzeptiert: !this.state.nutzungbedingungen_akzeptiert})
    };
    setPassword_2 = (e) => {
        this.setState({password_2: e.target.value})
    };
    setPassword = (e) => {
        this.setState({password: e.target.value})
    };
    setEmail = (e) => {
        this.setState({email: e.target.value})
    };

    /**
     *  Die Methode prüft die eingegeben Email, folgende Kriterien werden in Reihenfolge geprüft: (Email nicht leer?, Email guultig?,
     *  Password nicht leer? Passwörte gleich?
     *
     *  falls alle Eingabe richtig sind, werden die Daten zum Server geschcikt und die Methode setRegistrationOK wird aufgerufen
     *
     *  in Allen Fälle wird die Variable showAlert auf true gesetzt (mit der Aufruf der Methode setShowAlert)
     * @returns {string} Nachricht Entsprechend dir Ergebnisse der Überprüfung
     */
    showMessage() {

        let erg;
       if(this.state.email.length === 0){
           this.setShowAlert();
           erg = "Email ist Leer!";
           return erg;
       }
       if(this.state.email.length !== 0){
           let emailOk = EmailValidator.validate(this.state.email);
           if(emailOk !== true){
               this.setShowAlert();
               erg = "Bitte gültige Email eingeben";
               return erg;
           }
       }
        if(this.state.password !== '' || this.state.password_2 !== ''){
            if(this.state.password !== this.state.password_2){
                this.setShowAlert();
                erg = "Passwörter müssen gleich sein!";
                return erg;
            }
        }
        else{
            return "Bitte Passwörte eingeben!"
        }
       if(!this.state.nutzungbedingungen_akzeptiert){
           this.setShowAlert();
           erg = "Bitte Nutzer Bedingungen akzeptieren!";
           return erg;
       }

        this.setRegistrationOk();
       return "Nutzer wurde registiert";

    }

    /**
     *  Falls showAlert true ist wird ein Alert angezeigt
     */
    submitData = () => {
        let erg = this.showMessage();
        if(this.state.showAlert){
            alert(erg);
        }
    };

    componentDidMount(){
        this.submitData();
    }

    render() {
        /**
         * return RegistrationDAtaController falls registrationOk true ist sonst registrationView
         */
        return (this.state.registrationOK?
                <RegistrationDataController/>:
                <RegistrationView
                              email={this.state.email}
                              setEmail={this.setEmail}
                              password={this.state.password}
                              setPassword={this.setPassword}
                              password_comform={this.state.password_conform}
                              setPassword_comform={this.setPassword_control}
                              setPassword_2 = {this.setPassword_2}
                              showMessage = {this.showMessage}
                              submitData={ this.submitData}
                              setNutzungbedingungen_lesen = {this.setNutzunbedingungen_lesen}
                              nutzungbedingungen_akzeptiert = {this.state.nutzungbedingungen_akzeptiert}
                              setNutzungbedingungen_akzeptiert = {this.setNutzunbedingungen_akzeptiert}
                              showAlert={this.state.showAlert}
                              registrationOK={this.state.registrationOK}
            />
        );


    }
}

export default RegistrationController