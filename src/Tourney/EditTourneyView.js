import React, { Component } from 'react';
import Input from "../UI/Input";
import Confirmbutton from "../UI/Confirmbutton";

/**
 * @author Daniela
 * This View contains a Form for editing a Tourney.
 * @visibleName EditTourneyView
 */
class EditTourneyView extends Component {
    render() {
        const{
            createTourney,
            cancelTourney,
            deleteTourney,
        }=this.props
        return (
            <div id={"addTourneyView"}>
                <h3>Turnier bearbeiten</h3>
                <p>Die mit * gekennzeichneten Felder sind verpflichtend</p>
                <div id={"createTourneyForm"}>
                    <div>
                        <h5>*Titel</h5>
                        <Input/>
                    </div>
                    <br/>
                    <div>
                        <h5>*Ort</h5>
                        <Input/>
                    </div>      <br/>
                    <div>
                        <h5>*Startdatum</h5>
                        <input type="date" id="start" name="trip-start"
                               value="2018-07-22"
                               min="2018-01-01" max="2018-12-31"/>
                    </div>      <br/>
                    <div>
                        <h5>*Enddatum</h5>
                        <input type="date" id="end" name="trip-start"
                               value="2018-07-22"
                               min="2018-01-01" max="2018-12-31"/>
                    </div>      <br/>
                    <div>
                        <h5>Link</h5>
                        <Input/>
                    </div>

                </div>
                <div id={"createTourneyButtons"}>
                    <Confirmbutton onClick={createTourney}>Speichern</Confirmbutton>
                    <Confirmbutton onClick={cancelTourney}>Abbrechen</Confirmbutton>
                    <Confirmbutton onClick={deleteTourney}>Löschen</Confirmbutton>
                </div>
            </div>
        );
    }
}

export default EditTourneyView;
