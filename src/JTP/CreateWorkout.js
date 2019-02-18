import React, {Component} from 'react';
import Confirmbutton from "../UI/Confirmbutton";
import 'react-table/react-table.css';
import Input from "../UI/Input";
import Label from "react-bootstrap/es/Label";
import { Multiselect } from 'react-widgets';
import 'react-widgets/dist/css/react-widgets.css';

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
            createWorkout,
            cancelWorkout,
        } = this.props
        return (
            <div id={"createWorkoutView"}>


                <h2>Trainingseinheit erstellen</h2>

                <div id={"createWorkoutForm"}>


                    <Label> Bezeichnung:</Label>
                    <Input placeholder={"Bezeichnung einfügen"}/>


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
                    <textarea cols="40" rows="5" placeholder={"Hinweise einfügen"}></textarea>

                    <Label>Gesamtdauer (in Minuten):</Label>
                    <Input inputTyp={"number"}/>
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
