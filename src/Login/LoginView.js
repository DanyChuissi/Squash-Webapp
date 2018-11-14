import React, { Component } from 'react';
import Input from "../UI/Input";
import Label from "../UI/Label";
import ConfirmButton from "../UI/Confirmbutton"
import logo from  "../Graphics/Logo_kreis.png"
class LoginView extends Component{

    render(){
        const{
            setName,
            setPasswort,

            name,
            passwort,

            submitLogin,

        }=this.props
        return(
            <React.Fragment>
                <header>
                    <img src={logo} className="App-logo" alt="Logo der Web Applikation Squirrel" />
                </header>
                <body>
                <div >
                <form className={"loginForm"}>
                    <Label classname={"userName"}>Benutzernamen eingeben: </Label>
                    <Input placeholder={"Benutzernamen eintragen"} id={"userName"}/> <br/>
                    <Label classname={"password"}>Passwort eingeben: </Label>
                    <Input placeholder={"Passwort eintragen"} id={"password"}/> <br/>
                    <ConfirmButton>Anmelden</ConfirmButton>
                </form>
                </div>
                </body>

            </React.Fragment>
        );
    }
}

export default LoginView