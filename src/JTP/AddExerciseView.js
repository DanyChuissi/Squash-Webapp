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
    state = {
        bezeichnung: '',
        dauer: '',
        hinweis: '',
    }


    createExercise(trainingseinheitid, mazid, bezeichnung, dauer, hinweis) {
        fetch('http://172.22.24.243:50600/makrozyklus/addUebung?tid=6&mid=8', {
            method: 'POST',
            body: JSON.stringify(
                {
                    uebungsbezeichnung: bezeichnung,
                    dauerInMinuten: dauer,
                    uebungshinweise: hinweis
                }
            ),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
    }

    setBezeichnung = (e) => {
        this.setState({bezeichung: e.target.value})
    }
    setDauer = (e) => {
        this.setState({dauer: e.target.value})
    }
    setHinweise = (e) => {
        this.setState({uebungshinweise: e.target.value})
    }

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
                    <Input placeholder={"Bezeichnung einfügen"} onChange={this.setBezeichnung} required/>

                    <Label>Dauer (in Minuten):</Label>
                    <Input inputTyp={"number"} onChange={this.setDauer}/>

                    <Label>Übungshinweise:</Label>
                    <textarea cols="40" rows="5" placeholder={"Hinweise einfügen"}
                              onChange={this.setHinweise}></textarea>

                </div>
                <div id={"bottomCreateExcerciseView"}>
                    <Confirmbutton id={"addExerciseButton"} onClick={(event) => {
                        this.createExercise();
                        createExercise()
                    }}>Erstellen</Confirmbutton>
                    <Confirmbutton id={"closeAddExerciseView"} onClick={cancelExercise}>Abbrechen</Confirmbutton>
                </div>
            </div>
        );
    }

}

export default AddExerciseView;
