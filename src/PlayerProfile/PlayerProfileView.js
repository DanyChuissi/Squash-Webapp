import React, {Component, Fragment} from 'react';
import '../App.css';
import EditPlayerProfileController from "../EditPlayerProfile/EditPlayerProfileController";
import Checkbox from "../UI/Checkbox";
import "./PlayerProfile.css";
import Confirmbutton from "../UI/Confirmbutton";

class PlayerProfileView extends Component {

    render() {
        return (
            //TODO Oberfläche für die Profilansicht des Sportlers zurückgeben
            <Fragment >
                <main>
                    <div id="left">
                        <div>
                            Profibild, Buttons vergleichen
                            Aktiv: <Checkbox/>
                            <Confirmbutton>Bearbeiten</Confirmbutton>
                        </div>
                        <EditPlayerProfileController/>
                    </div>
                    <div id="right">
                        Leistungsdiagnostik und so
                    </div>
                </main>
            </Fragment>


        );
    }
}

export default PlayerProfileView