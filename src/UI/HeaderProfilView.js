import React from 'react'
import './UIStylesheet.css'
import logoMenu from  "../Graphics/Logo_Menu.png";
import logomenuMitte from "../Graphics/Menueleiste_Logo_Name.png";
//import {myFunction2} from "./HeaderProfilController";
//import NotificationsView from "../Notifications/NotificationsView";
import LoginView from "../Login/LoginView";
import PlayerListView from "../PlayerList/PlayerListView";


/**
 * @author Dany Chuissi
 *
 * Allgemeine Header für alle klasse. Mit dem Logo für die Menuleiste, einem zentrierten Logo und dem Trainername
 *
 * Durch Klicken auf ein Dropdown-Element wird die entsprechende Komponente  mit Hilfe der Router der geöffnet
 * @visibleName HeaderProfilView
 */
class HeaderProfilView extends React.Component {
    constructor(){
        super();
        this.state = {
           /* render:'',*/
            email: ''}
    }
   /* handleClick(compName, e){
        console.log(compName);
        this.setState({render:compName});
    }*/

    render() {
        /** props, die beim Aufruf des Header übergeben werden können */
        const {email,
               setEmail,
               myFunction,
               } = this.props

        /** schließt das Dropdown, wenn es außerhalb gecklickt wird
         * @param {event} event jeder Klick außerhalb das Dropdown ist eine event
         * */
        window.onclick = function(event) {
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
            <div className= "headerProfil">
                <div className="dropdown">
                  {  /** Logo für die Menu-Leiste*/}
                    <img src={logoMenu} onClick={myFunction} className="dropbtn"/>
                   { /** Dropdaown mit allen Möglichkeiten in href*/}
                    <div id="myDropdown" className="dropdown-content">
                        <a href="benachrichtigungen" >Home</a>
                        <a href="trainerProfile">Mein Profil</a>
                        <a href="playerList" >Athleten</a>
                        <a href="editRights">Nutzerverwaltung</a>
                        <a href="inviteUser">Nutzer Einladen</a>
                        <a href="dataPrivacyStatement">Datenschutzerklärung</a>
                        <a href="jTP">Jahrestrainingsplan</a>
                        <a href="tourneyList">Turniere</a>
                        <a href="playerprofile">Spielerprofil</a>
                        <a href="leistungsdiagnostik">Leistungsdiagnostik</a>
                        <a href="athletVergleich">Athleten Vergleich</a>
                        <a href="trainingsdiary">Training Diary</a>
                        <a href="resetLoginData">Logindaten zurücksetzen</a>
                        <a href="registration">Registrierung</a>

                      {  /** Logout wird in Dropdown getrennt angezeigt*/}
                        <a style={{borderTop: '2px solid grey'}} href="login" >Logout</a>
                    </div>
                </div>
              {  /** Logo in der Mitte. beim Klickt wird die Benachrichtigung-Seite geöffnet*/}
                <a href="benachrichtigungen" >
                <img src={logomenuMitte} className="logomenu1"/>
                </a>

              {  /** Am Ende des Header kommt die Email des Trainers*/}
                <div style={{padding: '10px',color: 'white', cursor: 'pointer'}} onChange={setEmail}>
                    {email}
                </div>

            </div>
        )

    }
}

export default HeaderProfilView
