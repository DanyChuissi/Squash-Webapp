import React, {Component, Fragment} from 'react';
import './Notifications.css';
import {myFunction, onLogoCenterClick, onLogoMenuClick} from "../UI/HeaderProfilController";
import HeaderProfilView from "../UI/HeaderProfilView";
import Confirmbutton from "../UI/Confirmbutton";

class NotificationsController extends React.Component{

    state = {
        notifications: [n1, n2, n3],
    }

    checkNeuerNotification = () => {
        //TODO im Server schauen ob es Notzification gibt, die nicht als gelesen makiert sind
    }

    addNotification = (notif) => {
        //TODO gefundene Notifications werden im Feld Hinzugefüht für die Anzeige
    }

    remoneNotification = (notif) => {
        //TODO gelesenen Notificvation werden als "gelesen markiert" und nicht mehr angezeigt
    }

    render()  {
        const notifications = this.state.notifications.map( (notif) =>
            <div className="notif_1" key={notif.id}>
                <div>
                    <div>
                        {notif.name}
                    </div>
                    <div className="date_format">
                        {notif.datum}
                    </div>

                </div>
                <div className="notif_button">
                        <div>
                            {notif.text}
                        </div>
                        <div>
                            {notif.notification_art = 1?
                            <Confirmbutton  myStyle= {{padding: '5px', marginTop: '5px', paddingRight: '15px', paddingLeft: '15px'}} >
                                Spieler Profil
                            </Confirmbutton>
                                :
                                <Confirmbutton  myStyle= {{padding: '5px', marginTop: '5px', paddingRight: '15px', paddingLeft: '15px'}} >
                                    Zugrifrechte verwalten
                                </Confirmbutton>}

                        </div>
                </div>

            </div>);

        return (
            <Fragment>
                <HeaderProfilView email = {"test"}  myFunction={myFunction} onLogoCenterClick={ onLogoCenterClick} onLogoMenuClick={onLogoMenuClick} >
                    <HeaderProfilView/>
                </HeaderProfilView>
                <div className="head_Notif">
                    <label>Benachrichtigung</label>
                </div>
                <div className="notif">
                    <div >
                        {notifications}
                    </div>
                </div>
            </Fragment>
        );
    }

}
export default NotificationsController

var n1 = {
    id: 1,
    notification_art: 1, // 1 für für alle Nachrichten, die den Von Athlet sind
    person: 'Athlet1',
    datum: '11-01-2029 , 14:50',
    text: 'Athlet xxxx hat eine neue Daten Hochgeladen',

};

var n2 = {
    id: 2,
    notification_art: 1,
    person: 'Athlet2',
    datum: '05-01-2029 , 19:50',
    text: 'Athlet xxxx hat eine neue Daten Hochgeladen',

};

var n3 = {
    id: 3,
    notification_art: 2, // 2 ist für Anfrage vom trainer auf Zugriffrechte
    person: 'Trainer XXX',
    datum: '07-01-2029 , 18:50',
    text: 'Trainer xxxx will auf Athleth yyyy zugreifen können',

};



