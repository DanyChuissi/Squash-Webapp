import React from 'react'
import './UIStylesheet.css'
import logoMenu from  "../Graphics/Logo_Menu.png";
import logomenuMitte from "../Graphics/Menueleiste_Logo_Name.png";


/**
 * @author Dany
 *
 * @visibleName HeaderProfilView
 */
class HeaderProfilView extends React.Component {
    render() {
        const {email,
               onLogoCenterClick,
               setEmail,
               myFunction} = this.props

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
                        <a href="#">Übersicht</a>
                        <a href="#">Mein Profil</a>
                        <a href="#">Athleten</a>
                        <a href="#">Nutzerverwaltung</a>
                        <a href="#">Nutzer Einladen</a>
                        <a href="#">Statistik</a>
                        <a style={{borderTop: '2px solid grey'}} href="#">Logout</a>
                    </div>
                </div>
                <img src={logomenuMitte} className="logomenu1" onClick={onLogoCenterClick}/>
                <div style={{padding: '10px',color: 'white', cursor: 'pointer'}} onChange={setEmail}>
                    {email}
                </div>
            </div>

        )


    }
}

export default HeaderProfilView
