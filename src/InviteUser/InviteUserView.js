import React, {Component} from 'react';
import './InviteUser.css';
import '../App.css';
import Confirmbutton from "../UI/Confirmbutton";
import Input from "../UI/Input";
import Label from "../UI/Label";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import HeaderProfileView from "../UI/HeaderProfilView";
import {myFunction} from "../UI/HeaderProfilController";

class InviteUserView extends Component {

    render() {
        const {
            email,
        } = this.props

        function myFunction2() {
            console.log("test");
        }

        const options = [
            {value: 'athlet', label: 'Athlet'},
            {value: 'parent', label: 'Eltern'},
            {value: 'expert', label: 'Experte'},
            {value: 'coach', label: 'Trainer'}
        ]
        const defaultOption = options[0]
        return (
            <div id={"inviteUserView"}>
                <HeaderProfileView email={email} myFunction={myFunction} >
                    <HeaderProfileView/>
                </HeaderProfileView>
                <div id={"container1"}>
                    <h2>Nutzer einladen</h2>
                    <div id={"subcontainer1"}>
                        <div id="roleLabel">
                            <label>Rolle:</label>
                        </div>

                        <div id={"role"}>
                            <Dropdown options={options} onChange={this._onSelect} value={defaultOption}
                                      placeholder="Select an option"/></div>

                        <div id="eMailLabel">
                            <label>Email:</label>
                        </div>

                        <input id={"eMail"} placeholder={"Email eingeben"}/>
                    </div>


                    <Confirmbutton>Einladen</Confirmbutton>
                </div>

            </div>


        );
    }
}

export default InviteUserView;