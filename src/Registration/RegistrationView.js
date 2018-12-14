import React, { Component } from 'react';
import Input from "../UI/Input";
import ConfirmButton from "../UI/Confirmbutton";
import Footer from "../UI/Footer";
import Datenschutz from "../Datenschutzerklaerung/DatenschutzerklaerungView";
import "./Registration.css";
import logomenuMitte from "../Graphics/Menueleiste_Logo_Name.png";
import Label from "../UI/Label";

/**
 * @author Dany
 *
 * @visibleName RegistrationView
 */

class RegistrationView extends React.Component{

    render () {
        const  {
            email,
            password,
            password_2,
            nutzungbedingungen_akzeptiert,
            password_controll,

            setEmail,
            setPassword,
            setPassword_2,
            setPassword_control,
            setNutzungbedingungen_lesen,
            submitData,

            setNutzungbedingungen_akzeptiert,
        }=this.props;
        return (
            <React.Fragment>
                <div className="headerR">
                    <img src={logomenuMitte} style={{ height: '18vmin', width: '25vmin'}}/>
                </div>
                <div className="navR">
                    Registrierung
                </div>
                <div className="mainR">
                    <div className="boxRR">
                    Die mit einem * gekenntzeichneten Felder sind verpflichtend
                    <div className="boxR">
                            <Label>*E-mail-Adresse: </Label>
                            <Input  placeholder={"automatisch"} value={email} onChange={setEmail}/>
                            <Label>*Password: </Label>
                            <Input  placeholder={"Password"} value={password} onChange={setPassword}/>
                            <Label>*Password Wiederholen: </Label>
                            <Input placeholder={"Password Wiederholen"} value={password_2} onChange={setPassword_2}/>
                     </div>

                    <div style={{paddingBottom: '10px'}}>
                        <input className="input_chekbox"
                            name="nutzung_akzeptiert"
                            type="checkbox"
                            checked={nutzungbedingungen_akzeptiert}
                            onChange={setNutzungbedingungen_akzeptiert} />
                        Ich habe die
                        <a  style={{textDecoration: 'none'}} href= {"Datenschutz"} rel = "noopener noreferrer"  target="_blank" > Nutzungbedingungen </a>
                        gelesen und akzeptiere sie,
                    </div>
                    <div><ConfirmButton onClick={submitData}>Registrieren</ConfirmButton></div>
                    </div>
                </div>
                <footer>
                    <Footer/>
                </footer>

            </React.Fragment>
        );
    }
}

export default RegistrationView;
