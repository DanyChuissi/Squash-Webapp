import React, { Component } from 'react';
import Input from "../UI/Input";
import ConfirmButton from "../UI/Confirmbutton";
import Footer from "../UI/Footer";
import Datenschutz from "../Datenschutzerklaerung/DatenschutzerklaerungView";
import "./Registration.css";
import logomenuMitte from "../Graphics/Menueleiste_Logo_Name.png";
import Label from "../UI/Label";
import RegistrationDataView from "./RegistrationDataView";
import RegistrationDataController from "./RegistrationDataController";

/**
 * @author Dany
 *
 * Definiert die View für die Registation des Users
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
            registrationOK,
            setNutzungbedingungen_akzeptiert,
        }=this.props;
        return (
            <React.Fragment>
                <div style={{height: '100vh', width: '100vw'}}>
                    {/* Logo in der Mitte im Header*/}
                <div className="headerR">
                    <img src={logomenuMitte} style={{ height: '18vmin', width: '25vmin'}}/>
                </div>
                <div className="navR">
                    Registrierung
                </div>
                    {/* MainR definiert den gesamten Bereich zwischen header und Footer*/}
                <div className="mainR">
                    {/* Box mit Eingabefeldern und Text für die Registierung*/}
                    <div className="boxRR">
                    Die mit einem * gekenntzeichneten Felder sind verpflichtend
                    <div className="boxR">
                            <Label>*E-mail-Adresse: </Label>
                            <input type="email"  placeholder={"Email"}  value={email} onChange={setEmail}/>
                            <Label>*Password: </Label>
                            <input type="password"  placeholder={"Password"} value={password} onChange={setPassword}/>
                            <Label>*Password Wiederholen: </Label>
                            <input type="password" placeholder={"Password Wiederholen"} value={password_2} onChange={setPassword_2}/>
                     </div>
                    {    /* Checkbox für die Nutzungbedingungen und den dazugehörigen Text*/}
                    <div style={{paddingBottom: '10px',}}>
                        <input className="input_chekbox"
                            name="nutzung_akzeptiert"
                            type="checkbox"
                            onChange={setNutzungbedingungen_akzeptiert} />
                        Ich habe die
                        <a  style={{textDecoration: 'none'}} href= "dataPrivacyStatement" rel = "noopener noreferrer"  target="_blank" > Nutzungbedingungen </a>
                        gelesen und akzeptiere sie,
                    </div>
                    <div>

                            <ConfirmButton myStyle= {{padding: '13px', marginTop: '8px', paddingRight: '15px', paddingLeft: '15px'}} onClick={submitData}>
                            Registrieren
                           </ConfirmButton>

                    </div>
                    </div>
                </div>

                        <footer className="myFooter">
                            <Footer/>
                        </footer>

            </div>
            </React.Fragment>
        );
    }
}

export default RegistrationView;
