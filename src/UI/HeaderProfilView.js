import React from 'react'
import './UIStylesheet.css'
import logoMenu from "../Graphics/Logo_Menu.png";
import logomenuMitte from "../Graphics/Menueleiste_Logo_Name.png";
//import {myFunction2} from "./HeaderProfilController";
//import NotificationsView from "../Notifications/NotificationsView";
import LoginView from "../Login/LoginView";
import PlayerListView from "../PlayerList/PlayerListView";


/**
 * @author Dany
 * Algemeine
 * @visibleName HeaderProfilView
 */
class HeaderProfilView extends React.Component {
    constructor() {
        super();
        this.state = {
            render: '',
            email: ''
        }
    }

    handleClick(compName, e) {
        console.log(compName);
        this.setState({render: compName});
    }

    /* _renderSubComp() {

                 return <PlayerListView/>

     }*/
    render() {
        const {
            email,
            onLogoCenterClick,
            setEmail,
            myFunction,
        } = this.props

        // Close the dropdown menu if the user clicks outside of it
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {

                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
        return (
            <div className="headerProfil">
                <div className="dropdown">
                    <img src={logoMenu} onClick={myFunction} className="dropbtn"/>
                    <div id="myDropdown" className="dropdown-content">
                        <a href="../benachrichtigungen">Home</a>
                        <a href="../trainerProfile">Mein Profil</a>
                        <a href="../playerList" onClick={this.handleClick.bind(this, "Athleten")}>Athleten</a>
                        <a href="../tourneyList">Turniere</a>
                        <a href="../athletVergleich">Athleten vergleichen</a>
                        <a href="../editRights">Nutzerverwaltung</a>
                        <a href="../inviteUser">Nutzer Einladen</a>
                        <a href="../resetLoginData">Logindaten zurücksetzen</a>
                        <a href="../dataPrivacyStatement">Datenschutzerklärung</a>

                        <a style={{borderTop: '2px solid grey'}} href="../login">Logout</a>

                    </div>
                </div>
                <a href="../benachrichtigungen">
                    <img src={logomenuMitte} className="logomenu1"/>
                </a>
                <div style={{padding: '10px', color: 'white', cursor: 'pointer'}} onChange={setEmail}>
                    dani@test.de
                </div>

            </div>
        )

    }
}

export default HeaderProfilView
