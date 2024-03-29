import React, {Component} from 'react';
import Input from "../UI/Input";
import ConfirmButton from "../UI/Confirmbutton";
import "./Login.css";
import logo from "../Graphics/Logo_kreis.png";
import Footer from "../UI/Footer";

/**
 * @author Daniela
 * This File represents the View of the Login. It shows the logo of Squirrel, two Input Fields and a ConfirmButton.
 * @visibleName LoginView
 */
class LoginView extends Component {


    submitLogin(){
        window.location='../benachrichtigungen';
    }
    resetPW(){
        window.location='/resetLoginData';
    }
    render() {
        const {

            setName,
            setPasswort,

            name,
            passwort,

            submitLogin,
            changePW,


        } = this.props
        return (
            <React.Fragment>
                <div id="Login">
                    <div id={"headLogin"}>
                        <img src={logo} id="App-logo" alt="Logo der Web Applikation Squirrel"/>
                    </div>
                    <div className={"loginForm"}>

                        <Input className={"i1"} placeholder={"Benutzernamen eintragen"} value={name}
                               onChange={setName}/>
                        <input type="password" name="password" className={"i2"} placeholder={"Passwort eintragen"}
                               value={passwort} onChange={setPasswort}/>

                        <button className={"i3"} onClick={this.resetPW}>Benutzerdaten vergessen?</button>
                        <div className={"i4"}><ConfirmButton onClick={this.submitLogin}>Anmelden</ConfirmButton></div>

                    </div>

                    <footer>
                        <Footer/>
                    </footer>

                </div>


            </React.Fragment>
        );
    }
}

export default LoginView