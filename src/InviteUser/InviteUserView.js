import React, {Component} from 'react';
import './InviteUser.css';
import '../App.css';
import Confirmbutton from "../UI/Confirmbutton";
import Input from "../UI/Input";
import Label from "../UI/Label";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class InviteUserView extends Component {

    render() {

        const options = [
            {value: 'athlet', label: 'Athlet'},
            {value: 'parent', label: 'Eltern'},
            {value: 'expert', label: 'Experte'},
            {value: 'coach', label: 'Trainer'}
        ]
        const defaultOption = options[0]
        return (
            <main>
                <div id={"container1"}>
                    <h1>Nutzer einladen</h1>
                    <div id={"subcontainer1"}>
                        <div id="roleLabel">
                            <label>Rolle:</label>
                        </div>

                        <div  id={"role"}>
                            <Dropdown options={options} onChange={this._onSelect} value={defaultOption}
                                      placeholder="Select an option"/></div>


                        <div id="eMailLabel"><label>Email:</label></div>

                        <input id={"eMail"} placeholder={"Email eingeben"}/>
                    </div>


                    <Confirmbutton>Einladen</Confirmbutton>
                </div>

            </main>


        );
    }
}

export default InviteUserView;