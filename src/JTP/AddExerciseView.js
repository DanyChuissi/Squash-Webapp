import React, {Component} from 'react';
import Confirmbutton from "../UI/Confirmbutton";
import 'react-table/react-table.css';
import Input from "../UI/Input";
import Label from "react-bootstrap/es/Label";
/**
 * @author Daniela
 * This View contains a Form for adding an Exercise to a Workout.
 * @visibleName SpecificRights
 */
class AddExerciseView extends Component {

    render() {
        const {
            createExercise,
            cancelExercise,
        } = this.props


        return (
            <div id={"createExerciseView"}>

                <h2>Übung hinzufügen</h2>

                <div id={"createExcerciseForm"}>

                    <Label> Bezeichnung:</Label>
                    <Input placeholder={"Bezeichnung einfügen"} required/>

                    <Label>Dauer (in Minuten):</Label>
                    <Input inputTyp={"number"}/>

                    <Label>Übungshinweise:</Label>
                    <textarea cols="40" rows="5" placeholder={"Hinweise einfügen"}></textarea>

                </div>
                <div id={"bottomCreateExcerciseView"}>
                    <Confirmbutton id={"addExerciseButton"} onClick={createExercise}>Erstellen</Confirmbutton>
                    <Confirmbutton id={"closeAddExerciseView"} onClick={cancelExercise}>Abbrechen</Confirmbutton>
                </div>
            </div>
        );
    }

}

export default AddExerciseView;
