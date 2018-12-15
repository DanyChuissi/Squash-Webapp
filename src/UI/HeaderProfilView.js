import React from 'react'
import './UIStylesheet.css'
import logoMenu from  "../Graphics/Logo_Menu.png";
import logomenuMitte from "../Graphics/Menueleiste_Logo_Name.png";
import {myFunction2} from "./HeaderProfilController";
//import NotificationsView from "../Notifications/NotificationsView";
import LoginView from "../Login/LoginView";
import PlayerListView from "../PlayerList/PlayerListView";


/**
 * @author Dany
 *
 * @visibleName HeaderProfilView
 */
class HeaderProfilView extends React.Component {
    constructor(){
        super();
        this.state = {
            render:'',
            email: ''}
    }
    handleClick(compName, e){
        console.log(compName);
        this.setState({render:compName});
    }
    _renderSubComp() {
        switch (this.state.render) {
            case 'Übersicht':
                return <h1>gf</h1>
            case 'Logout' :
                return <LoginView/>
            case 'Athleten':
                return <PlayerListView/>
        }
    }
    render() {
        const {email,
               onLogoCenterClick,
               setEmail,
               myFunction,
               myFunction2} = this.props

        // Close the dropdown menu if the user clicks outside of it
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
                    <img src={logoMenu} onClick={myFunction} className="dropbtn"/>
                    <div id="myDropdown" className="dropdown-content">
                        <a href="#" onClick={myFunction2}>Übersicht</a>
                        <a href="#">Mein Profil</a>
                        <a href="#" onClick={this.handleClick.bind(this, "Athleten")}>Athleten</a>
                        <a href="#">Nutzerverwaltung</a>
                        <a href="#">Nutzer Einladen</a>
                        <a href="#">Statistik</a>
                        <a style={{borderTop: '2px solid grey'}} href="#" onClick={this.handleClick.bind(this, "Logout")}>Logout</a>

                    </div>
                </div>
                <img src={logomenuMitte} className="logomenu1" onClick={myFunction2}/>
                <div style={{padding: '10px',color: 'white', cursor: 'pointer'}} onChange={setEmail}>
                    {email}
                </div>
                {this._renderSubComp()}
            </div>
        )

    }
}

export default HeaderProfilView
