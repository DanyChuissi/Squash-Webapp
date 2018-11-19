import React, {Component} from 'react';
import '../App.css';
import LoginView from "./LoginView";
import ResetLoginDataView from "../ResetLoginData/ResetLoginDataView";

/**
 * @author Daniela
 * This is the fold logic of the LoginView. A username and a password are stored and passed to the matching Microservice.
 * @visibleName LoginController
 */
class LoginController extends Component {

    state = {
        name: '',
        password: '',
        showComponent: false,
    }


    setName = (e) => {
        this.setState({name: e.target.value})
    }

    setPassword = (e) => {
        this.setState({password: e.target.value})
    }

    submitLogin = () => {

        this.setState({showComponent: true});

        alert("Benutzer eingeloggt " + this.state.name);

    }

    changeData=()=>{
        this.setState({showComponent: true});
    }

    //TODO Post Data Methode für Microservice schreiben
    postData = () => {

    }

    getData = () => {

    }

    render() {
        return (
            this.state.showComponent ?
                <ResetLoginDataView/>
                :
                <LoginView className="View"
                           setName={this.setName}
                           setPassword={this.setPassword}
                           name={this.state.name}
                           password={this.state.password}
                           changePW={this.submitLogin}
                />


        );
    }
}

export default LoginController