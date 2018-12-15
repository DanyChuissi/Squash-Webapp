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
        showComponent: false,
    }

    changePassword = () => {

        this.setState({showComponent: true});

    }

    changeData = () => {
        this.setState({showComponent: true});
    }

    render() {
        const{
            submitLogin,
            email,
            password,
            setName,
            setPassword,
        }=this.props
        return (
            this.state.showComponent ?
                <ResetLoginDataView/>
                :
                <LoginView className="View"
                          setName={setName}
                           setPasswort={setPassword}
                           name={email}
                           passwort={password}
                           changePW={this.changePassword}
                           submitLogin={submitLogin}
                />


        );
    }
}

export default LoginController