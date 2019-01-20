import React, {Component} from 'react';
import RegistrationView from "./RegistrationView";

import DatenschutzerklaerungView from "../Datenschutzerklaerung/DatenschutzerklaerungView";
/**
 * @author Dany
 *
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
        }
        this.showMessage = this.showMessage.bind(this);
        this.submitData = this.submitData.bind(this);
    }

    /* Wenn alle angegeben Informationen nicht conform sind soll einen entsprechenden Nachticht eingezeigt werden*/
    setShowAlert() {
        this.setState({
            showAlert: true,
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
    showMessage() {

        let erg;
       if(this.state.email.length === 0){
           this.setShowAlert();
           erg = "Email ist Leer!";
           return erg;
       }
       if(this.state.email.length !== 0){
       /*    let emailOk = EmailValidator.validate(this.state.email);
           if(emailOk !== true){
               this.setShowAlert();
               erg = "Bitte gültige Email eingeben";
               return erg;
           }*/
       }
       if(!this.state.nutzungbedingungen_akzeptiert){
           this.setShowAlert();
           erg = "Bitte Nutzer Bedingungen akzeptieren!";
           return erg;
       }
       if(this.state.password !== '' && this.state.password_2 !== ''){
           if(this.state.password !== this.state.password_2){
               this.setShowAlert();
               erg = "Passwörter müssen gleich sein!";
               return erg;
           }
       }
       else{
           this.setShowAlert();
           erg = "Passwörter dürfen nicht leer sein!";
           return erg;
       }

       return "Nutzer wurde registiert";

    }

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
        return (
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
            />
        );


    }
}

export default RegistrationController