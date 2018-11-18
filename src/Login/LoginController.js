import React, {Component} from 'react';
import '../App.css';
import LoginView from "./LoginView";

/**
 * @author Daniela
 * This is the fold logic of the LoginView. A username and a password are stored and passed to the matching Microservice.
 * @visibleName LoginController
 */
class LoginController extends Component {

    state = {
        name: '',
        password: '',
    }
    setName = (e) => {
        this.setState({name: e.target.value})
    }

    setPassword = (e) => {
        this.setState({password: e.target.value})
    }

    submitLogin = () => {
        alert("Benutzer eingeloggt " + this.state.name);
    }

    //TODO Post Data Methode für Microservice schreiben
    postData=()=>{

    }

    render() {
        return (
            <LoginView className="View"
                       setName={this.setName}
                       setPassword={this.setPassword}
                       name={this.state.name}
                       password={this.state.password}
                       submitLogin={this.submitLogin}
            />
        );
    }
}

export default LoginController