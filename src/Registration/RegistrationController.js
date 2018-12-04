import React, {Component} from 'react';
import RegistrationView from "./RegistrationView";
import DatenschutzerklaerungView from "../Datenschutzerklaerung/DatenschutzerklaerungView";
/**
 * @author Dany
 *
 * @visibleName PlayerProfilView
 */
class RegistrationController extends React.Component {
    state = {
        email: '',
        password: '',
        password_2: '',
        password_conform: false,
        nutzungbedingungen_akzeptiert: false,
        nutzungbedingungen_lesen: false,
    }
    setNutzunbedingungen_lesen= (e) => {
        this.setState({nutzungbedingungen_lesen: true})
    }
    setNutzunbedingungen_akzeptiert= (e) => {
        this.setState({nutzungbedingungen_akzeptiert: true})
    }
    setPassword_2 = (e) => {
        this.setState({password_2: e.target.value})
    }
    setPassword = (e) => {
        this.setState({password: e.target.value})
    }
    setEmail = (e) => {
        this.setState({email: e.target.value})
    }

    setPassword_control = (e) => {
        this.setState({password: true})
    }
    submitData = () => {
        alert("Registrierung war erfolgreich");
        var b = this.state.password === this.state.password_2;
        if(b){
            alert("Registrierung war erfolgreich");
        }
        else{
            alert("Passwörte müssen gleich sein");
        }
    }

    render() {
        return (
         <RegistrationView email={this.state.email}
                              setEmail={this.setEmail()}
                              password={this.state.password}
                              setPassword={this.setPassword()}
                              password_comform={this.state.password_conform}
                              setPassword_comform={this.setPassword_control()}
                              setPassword_2 = {this.setPassword_2()}
                             // submitData = {this.submitData()}
                                setNutzungbedingungen_lesen = {this.setNutzunbedingungen_lesen()}
                              nutzungbedingungen_akzeptiert = {this.state.nutzungbedingungen_akzeptiert}
                              setNutzungbedingungen_akzeptiert = {this.setNutzunbedingungen_akzeptiert()}
            />
        );


    }
}

export default RegistrationController