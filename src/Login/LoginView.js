import React, { Component } from 'react';
import Input from "../UI/Input";
import ConfirmButton from "../UI/Confirmbutton";
import "./Login.css";
import logo from  "../Graphics/Logo_kreis.png";
import Footer from "../UI/Footer";
/**
 * @author Daniela
 * This File represents the View of the Login. It shows the logo of Squirrel, two Input Fields and a ConfirmButton.
 * @visibleName LoginView
 */
class LoginView extends Component{

    render(){
        const{

            setName,
            setPasswort,

            name,
            passwort,

            submitLogin,
            shouldDisableSubmit,


        }=this.props
        return(
            <React.Fragment>
                <header>
                    <img src={logo} className="App-logo" alt="Logo der Web Applikation Squirrel" />
                </header>

                <main id={"viewL"}>

                <form className={"loginForm"}>

                    <Input classname={"i1"} placeholder={"Benutzernamen eintragen"} value={name} onChange={setName}/>
                    <Input classname={"i2"} placeholder={"Passwort eintragen"}value={passwort} onChange={setPasswort}/>

                    <label className={"i3"}>Benutzerdaten vergessen?</label>
                    <div className={"i4"}><ConfirmButton onClick={submitLogin}>Anmelden</ConfirmButton></div>

                </form>

                </main>

                <footer>
                    <Footer/>
                </footer>


            </React.Fragment>
        );
    }
}

export default LoginView