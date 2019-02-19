import React, {Component, Fragment} from 'react';
import './Notifications.css';
import {showDropdown_Header} from "../UI/HeaderProfilController";
import HeaderProfilView from "../UI/HeaderProfilView";
import Confirmbutton from "../UI/Confirmbutton";
import EditRightsView from "../EditRights/EditRightsView";

class NotificationsController extends React.Component{

    state = {
        notifications: [n1, n2, n3],
        ungeleseneNotifications: '',
        zugrif: false,
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
    componentWillMount(): void {
        this.state.notifications.map( (notif) => {
                if (notif.statut_gelesen === false) {
                    this.setState({
                        ungeleseneNotifications: [...this.state.ungeleseneNotifications, notif],
                    })
                }
            }
        )
    }

    setStatutNotification = (index) => {
        let array = this.state.ungeleseneNotifications;
        array[index].statut_gelesen = true;

        this.setState({
            ungeleseneNotifications: array,
        })
    }

    onZugrifrechtgechlickt =  () => {
        this.setState({
            zugrif: true,
        })
    }


    render()  {
        const notifications = this.state.notifications.map( (notif) =>
            <div className="notif_1" key={notif.id}>
                <div style={{ textAlign: 'center'}}>
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
                            {notif.notification_art === 1?
                                <a href="playerprofile">
                                    <Confirmbutton onClick={() => this.setStatutNotification(notif.id)}  myStyle= {{padding: '5px', marginTop: '5px', paddingRight: '15px', paddingLeft: '15px'}} >
                                        Spieler Profil
                                    </Confirmbutton>
                                </a>
                                :
                                <a href="editRights">
                                    <Confirmbutton onClick={() => this.setStatutNotification(notif.id)}  myStyle= {{padding: '5px', marginTop: '5px', paddingRight: '15px', paddingLeft: '15px'}} >
                                        Zugriffsrechte verwalten
                                    </Confirmbutton>
                                </a>}
                        </div>
                </div>

            </div>);

        return (
            <Fragment id={"notificationView"}>
                <HeaderProfilView email = {"test"}  myFunction={showDropdown_Header}  >
                    <HeaderProfilView/>
                </HeaderProfilView>
                <div id={"notification_outerbox"}>
                    <div className="head_Notif">
                        <label>Benachrichtigung</label>
                    </div>
                    <div className="notif">
                        <div >
                            {notifications}
                        </div>
                    </div>
                </div>

                {this.state.zugrif? <a href="editRights"></a>: null}
            </Fragment>
        );
    }

}
export default NotificationsController

var n1 = {
    id: 1,
    statut_gelesen: false,
    notification_art: 1, // 1 für für alle Nachrichten, die den Von Athlet sind
    person: 'Athlet1',
    datum: '11-01-2029 , 14:50',
    text: 'Athlet xxxx hat eine neue Datei hochgeladen',

};

var n2 = {
    id: 2,
    statut_gelesen: false,
    notification_art: 1,
    person: 'Athlet2',
    datum: '05-01-2029 , 19:50',
    text: 'Athlet xxxx hat eine neue Datei hochgeladen',

};

var n3 = {
    id: 3,
    statut_gelesen: false,
    notification_art: 2, // 2 ist für Anfrage vom trainer auf Zugriffrechte
    person: 'Trainer XXX',
    datum: '07-01-2029 , 18:50',
    text: 'Trainer xxxx fordert Zugriff auf die Daten des Athlethen yyyy',

};



