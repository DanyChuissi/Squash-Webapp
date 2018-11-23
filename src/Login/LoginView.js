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
            changePW,


        }=this.props
        return(
            <React.Fragment >
                <div id="Login">
                    <img src={logo} className="App-logo" alt="Logo der Web Applikation Squirrel" />

                    <form className={"loginForm"}>

                        <Input classname={"i1"} placeholder={"Benutzernamen eintragen"} value={name} onChange={setName}/>
                        <Input classname={"i2"} placeholder={"Passwort eintragen"}value={passwort} onChange={setPasswort}/>

                        <button className={"i3"} onClick={changePW}>Benutzerdaten vergessen?</button>
                        <div className={"i4"}><ConfirmButton onClick={submitLogin}>Anmelden</ConfirmButton></div>

                    </form>



                    <footer>
                        <Footer/>
                    </footer>

                </div>



            </React.Fragment>
        );
    }
}

export default LoginView