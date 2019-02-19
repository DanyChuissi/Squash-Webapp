import React, {Component} from 'react';
import './InviteUser.css';
import '../App.css';
import Confirmbutton from "../UI/Confirmbutton";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import HeaderProfileView from "../UI/HeaderProfilView";
import {showDropdown_Header} from "../UI/HeaderProfilController";
import axios from 'axios';
import Label from "react-bootstrap/es/Label";
import {Multiselect} from "react-widgets";

/**
 * @author Daniela
 * This is a View, where a new User can be invited. The role and the email of the User can be set.
 * @visibleName InviteUserView
 **/
function getAthletListFromServer() {
    return ["Kevin Kampfsport", "Sahra Schnell", "Ben Hocker", "Katy Käfer"]
}


const athletList = getAthletListFromServer();

class InviteUserView extends Component {
    state = {
        email: "dummi3@test.de",
        name: "Test",
        surname: "test2",
        role: 'Trainer',
        childName: 'undefined',
    }

    setEmail = (e) => {
        this.setState({email: e.target.value})
        console.log(this.state.email);
    }
    setName = (e) => {
        this.setState({name: e.target.value})
    }
    setSurname = (e) => {
        this.setState({surname: e.target.value})
    }
    setRole = (e) => {
        this.setState({role: e.target.value})
        console.log(this.state.role)
    }
    setChildName = (e) => {
        this.setState({childName: e.target.value})
    }

    postAthletToServer(email,rolle) {

        fetch('http://172.22.24.243:50601/register/invite', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(
                {
                    email: email,
                    name: 'Test',
                    surname: 'test2',
                    role: rolle
                }
            ), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => alert(JSON.stringify(response)))
            .catch(error => console.error('Error:', error.message));

    }

    render() {
        const {
            email,
        } = this.props

        const options = [
            {value: 'athlet', label: 'Athlet'},
            {value: 'parent', label: 'Eltern'},
            {value: 'expert', label: 'Experte'},
            {value: 'coach', label: 'Trainer'}
        ]
        const defaultOption = options[0]

        return (
            <div id={"inviteUserView"} style={{heigth: '900px'}}>
                <HeaderProfileView email={email} myFunction={showDropdown_Header}>
                    <HeaderProfileView/>
                </HeaderProfileView>
                <div id={"container1"}>
                    <h2>Nutzer einladen</h2>
                    <div id={"subcontainer1"}>
                        <div id="roleLabel">
                            <label>Rolle:</label>
                        </div>

                        <div id={"role"}>

                            <select id={"inviteUserSelectRole"} onChange={this.setRole}>
                               <option value="Athlet">Athlet</option>
                                <option value={"Eltern"}>Eltern</option>
                                <option value={"Experte"}>Experte</option>
                                <option value={"Trainer"}>Trainer</option>
                            </select>
                          </div>

                        <label>Name des Kindes (falls Eltern ausgewählt)</label>
                        <Multiselect onChange={this.setChildName} id={"multiselectChildren"}
                                     data={athletList}
                                     textField='Schwerpunkte'
                                     caseSensitive={false}
                                     minLength={1}
                                     filter='contains'
                        />
                        <div id="eMailLabel">
                            <label>Email:</label>
                        </div>

                        <input id={"eMail"} placeholder={"Email eingeben"} onChange={this.setEmail}/>
                    </div>

                    <div id={"inviteUserViewBottom"}>
                        <Confirmbutton onClick={()=>this.postAthletToServer(this.state.email,this.state.role)}>Einladen</Confirmbutton>
                    </div>
                </div>

            </div>


        );
    }
}

export default InviteUserView;