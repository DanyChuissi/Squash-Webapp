import React, {Component} from 'react';
import Confirmbutton from "../UI/Confirmbutton";
import 'react-table/react-table.css';
import {Checkbox} from "react-bootstrap";
import Input from "../UI/Input";
import Label from "react-bootstrap/es/Label";
import {Multiselect} from "react-widgets";

/**
 * @author Daniela
 * This View is a Form for creating a MAZ.
 * @visibleName CreateMAZ
 **/

const emphasis = ["Kraft", "Schnelligkeit", "Beweglichkeit", "Koordination", "Technik/Taktik", "Mentaler Bereich", "Leistungsdiagnostik"];

class CreateMAZ extends Component {
    state = {
        mazPhase: '',
        mazName: '',
        mazStartdate: '',
        mazEnddate: '',
        mazDescription: '',
        mazEmphasis: [],

    }
    setPhase = (e) => {
        this.setState({mazPhase: e.target.value})
        console.log(this.state.mazPhase);
    }

    setMAZName = (e) => {
        this.setState({mazName: e.target.value})
    }

    setStartdate = (e) => {
        this.setState({mazStartdate: e.target.value})
    }

    setEmphasis = (e) => {
        this.setState({mazEmphasis: e.target.value})
        console.log(this.state.mazEmphasis);
    }

    setDescription = (e) => {
        this.setState({mazDescription: e.target.value})
    }

    setEnddate = (e) => {
        this.setState({mazEnddate: e.target.value})
    }
    createMAZ(){
        fetch('http://172.22.24.243:50600/makrozyklus/addMacrocycle', {
            method: 'POST',
            body: JSON.stringify(
                {
                    name: "Testname",
                    email: "dani@test.de",
                    bezeichnung: "Tollster MAZ",
                    phase: "Einführungsphase",
                    schwerpunkte: [{id: 2, bezeichnung: "SchwererSchwerpunkt"}],
                    startdatum: "12.02.1999",
                    enddatum: "12.02.2000",
                    hinweis: "Bla"
                }
            ),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
    }
    render() {
        const {
            createMAZ,
            cancelMAZ,
        } = this.props


        return (
            <div id={"createMAZView"}>

                <h2>MAZ erstellen</h2>
                <div id={"mAZPhase"}>
                    Bezeichnung:
                    <Input placeholder={"Bezeichnung einfügen"} onChange={this.setDescription}/>
                    <Label id={"MaZPhaseLabel"}>Phase:</Label>
                    <select id={"mAZPhaseSelect"} onChange={this.setPhase}>
                        <option value="preparationPhase">Vorbereitungsphase</option>
                        <option value="immediatelyCompetition">Unmittelbare Wettkampfvorbereitung</option>
                        <option value="competition">Wettkampfphase</option>
                        <option value="change">Übergangsphase</option>
                        <option value="regeneration">Regenerationsphase</option>
                    </select>
                    <Label>Startdatum: </Label>
                    <input type="date" id="startMAZ" name="trip-start"
                           value="2018-07-22"
                           min="2018-01-01" max="2018-12-31" onChange={this.setStartdate}/>
                    <Label>Enddatum: </Label>
                    <input type="date" id="endMAZ" name="trip-start"
                           value="2018-07-22"
                           min="2018-01-01" max="2018-12-31" onChange={this.setEnddate}/>

                    <Label>Schwerpunkte</Label>

                    <Multiselect id={"multiselectEmphasis"}
                                 data={emphasis}
                                 defaultValue={emphasis[0]}
                                 textField='Schwerpunkte'
                                 caseSensitive={false}
                                 minLength={1}
                                 filter='contains' onChange={this.setEmphasis}
                    />


                    <Label>Hinweise zu MAZ: </Label>
                    <textarea id="MAZDescription"
                              placeholder={"MAZ Hinweise hier einfügen"} onChange={this.setDescription}></textarea>

                </div>
                <div id={"bottomCreateMAZView"}>
                    <Confirmbutton id={"addMAZButton"} onClick={(event)=>{this.createMAZ(); createMAZ();}}>Erstellen</Confirmbutton>
                    <Confirmbutton id={"closeAddMAZView"} onClick={cancelMAZ}>Abbrechen</Confirmbutton>
                </div>

            </div>


        );
    }
}

export default CreateMAZ;
