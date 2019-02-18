import React, {Component} from 'react';
import Confirmbutton from "../UI/Confirmbutton";
import 'react-table/react-table.css';
import Input from "../UI/Input";
import Label from "react-bootstrap/es/Label";
import { Multiselect } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';

/**
 * @author Daniela
 * This View contains a Form for copying a Workout to another MAZ.
 * @visibleName CopyWorkout
 */

const daysOfWeek = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
const playerData=["Sandra Schläger", "Calvin Court"];
const playerMAZ=["MAZ 1", "MAZ 2"];
class CopyWorkout extends Component {

    render() {

        const {
            confirmCopyWorkout,
            cancelCopyWorkout,
            workoutName,
            indication,
            duration,
        } = this.props
        return (
            <div id={"copyWorkoutView"}>

                <h2>Trainingseinheit kopieren</h2>

                <div id={"copyWorkoutForm"}>
                    <Label>Spieler auswählen</Label>
                <Multiselect data={playerData}
                             textField='Spieler'
                             caseSensitive={false}
                             minLength={1}
                             filter='contains'/>
                    <Label>MAZ auswählen</Label>
                    <Multiselect data={playerMAZ}
                                 textField='Spieler'
                                 caseSensitive={false}
                                 minLength={1}
                                 filter='contains'/>

                    <Label> Bezeichnung:</Label>
                    <Input>{workoutName}</Input>

                    <Label id={"workoutDaysOfWeek"}>Wochentage:</Label>
                    <Multiselect
                        data={daysOfWeek}
                        defaultValue={daysOfWeek[0]}
                        textField='Wochentage'
                        caseSensitive={false}
                        minLength={1}
                        filter='contains'
                    />

                    <Label>Hinweise:</Label>
                    <textarea cols="40" rows="5" placeholder={"Hinweise einfügen"}>{indication}</textarea>

                    <Label>Gesamtdauer (in Minuten):</Label>
                    <Input inputTyp={"number"}>{duration}</Input>
                </div>
                <div id={"bottomCopyWorkoutView"}>
                    <Confirmbutton id={"addWorkoutButton"} onClick={confirmCopyWorkout}>Kopieren</Confirmbutton>
                    <Confirmbutton id={"closeAddWorkoutView"} onClick={cancelCopyWorkout}>Abbrechen</Confirmbutton>
                </div>
            </div>
        );
    }

}

export default CopyWorkout;
