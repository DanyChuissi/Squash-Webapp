import React, {Component} from 'react';
import Confirmbutton from "../UI/Confirmbutton";
import 'react-table/react-table.css';
import Label from "react-bootstrap/es/Label";
import {Multiselect} from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';
import Input from "../UI/Input";

/**
 * @author Daniela
 * This View is a Form for creating a Workout.
 * @visibleName CreateWorkout
 **/

const daysOfWeek = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];

class CreateWorkout extends Component {
    state = {weekValue: []};

    onChangeWeek = (event) => {
        this.setState({
            weekValue: [...event.target.value]
        });
    }

    render() {

        const {
            weekVal,
            bezeichnung,
            hinweise,
            dauer,

            setWeekVal,
            setBezeichnung,
            setHinweise,
            setDauer,

            createWorkout,
            cancelWorkout,
        } = this.props
        return (
            <div id={"createWorkoutView"}>


                <h2>Trainingseinheit erstellen</h2>

                <div id={"createWorkoutForm"}>

                    <Label> Bezeichnung:</Label>
                    <input type="text" title="Three letter country code" value={bezeichnung} onChange={setBezeichnung}/>
                    <Label id={"workoutDaysOfWeek"}>Wochentage:</Label>
                    <Multiselect
                        value={weekVal}
                        data={daysOfWeek}
                        defaultValue={daysOfWeek[0]}
                        textField='Wochentage'
                        caseSensitive={false}
                        minLength={1}
                        onChange={setWeekVal}
                        filter='contains'
                    />

                    <Label>Hinweise:</Label>
                    <textarea cols="40" rows="5" placeholder={"Hinweise einfügen"} value={hinweise} onChange={setHinweise}></textarea>

                    <Label>Gesamtdauer (in Minuten):</Label>
                    <Input inputTyp={"number"} value={dauer} onChange={setDauer}/>
                </div>
                <div id={"bottomCreateWorkoutView"}>
                    <Confirmbutton id={"addWorkoutButton"} onClick={createWorkout}>Erstellen</Confirmbutton>
                    <Confirmbutton id={"closeAddWorkoutView"} onClick={cancelWorkout}>Abbrechen</Confirmbutton>
                </div>
            </div>
        );
    }

}

export default CreateWorkout;
