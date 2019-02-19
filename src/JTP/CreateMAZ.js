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
    constructor(...args) {
        super(...args)
        this.state = { value: ['Kraft'] }
    }
    state = {
        mazPhase: '',
        mazName: '',
        mazStartdate: '',
        mazEnddate: '',
        mazDescription: '',
        mazHinweis:'',

    }

    setHinweis = (e) => {
        this.setState({mazHinweis: e.target.value})
        console.log(this.state.mazHinweis);
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
        this.state.mazEmphasis.push(e);
        console.log(this.state.mazEmphasis[0]);
    }

    setDescription = (e) => {
        this.setState({mazDescription: e.target.value})
    }

    setEnddate = (e) => {
        this.setState({mazEnddate: e.target.value})
    }

    createMAZ(email, name, phase, startdatum, enddatum, hinweis,schwerpunkt) {
        console.log(phase)
        fetch('http://172.22.24.243:50600/makrozyklus/addMacrocycle', {
            method: 'POST',
            body: JSON.stringify(
                {
                    email: email,
                    name: name,
                    bezeichnung: "bezeichnung",
                    phase: phase,
                   schwerpunkte: [
                        {
                            bezeichnung: schwerpunkt
                        }
                    ],
                   trainingseinheiten: [
                        {
                            trainingsbezeichnung: "Testtraining",
                            wochentage: [
                                {
                                    bezeichnung: "Sonntag"
                                }
                            ],
                            uebungen: [
                                {
                                    uebungsbezeichnung: "Beweg dich!",
                                    dauerInMinuten: 166,
                                    uebungshinweise: "Du schaffst das"
                                },
                                {
                                    uebungsbezeichnung: "wirklich!",
                                    dauerInMinuten: 2,
                                    uebungshinweise: "Hauptsache du hast Spaß"
                                }
                            ],
                            dauerInMin: 13,
                            trainingshinweise: "keine"
                        }
                    ],
                    "startdatum": startdatum,
                    "enddatum": enddatum,
                    "hinweis": hinweis
                }
            ),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
    }

    render() {
        const {
            email,

            createMAZ,
            cancelMAZ,
        } = this.props


        return (
            <div id={"createMAZView"}>

                <h2>MAZ erstellen</h2>
                <div id={"mAZPhase"}>
                    Bezeichnung:
                    <Input placeholder={"Bezeichnung einfügen"} onChange={this.setMAZName}/>
                    <Label id={"MaZPhaseLabel"}>Phase:</Label>
                    <select id={"mAZPhaseSelect"} onChange={this.setPhase} value={this.state.mazPhase}>
                        <option value="preparationPhase">Vorbereitungsphase</option>
                        <option value="immediatelyCompetition">Unmittelbare Wettkampfvorbereitung</option>
                        <option value="competition">Wettkampfphase</option>
                        <option value="change">Übergangsphase</option>
                        <option value="regeneration">Regenerationsphase</option>
                    </select>
                    <Label>Startdatum: </Label>
                    <input type="date" id="startMAZ" name="trip-start"

                           min="2019-01-01" max="2031-12-31" onChange={this.setStartdate}/>
                    <Label>Enddatum: </Label>
                    <input type="date" id="endMAZ" name="trip-start"

                           min="2019-01-01" max="2031-12-31" onChange={this.setEnddate}/>

                    <Label>Schwerpunkte</Label>

                    <Multiselect id={"multiselectEmphasis"}
                                value={this.state.value}
                                 onChange={value => this.setState({ value })}
                                 data={emphasis}
                                 defaultValue={emphasis[0]}
                                 textField='Schwerpunkte'
                                 caseSensitive={false}
                                 minLength={1}
                                 filter='contains'
                    />


                    <Label>Hinweise zu MAZ: </Label>
                    <textarea id="MAZDescription"
                              placeholder={"MAZ Hinweise hier einfügen"} onChange={this.setDescription}></textarea>

                </div>
                <div id={"bottomCreateMAZView"}>
                    <Confirmbutton id={"addMAZButton"} onClick={(event) => {

                        this.createMAZ(email, this.state.mazName, this.state.mazPhase, this.state.mazStartdate, this.state.mazEnddate, this.state.hinweis,this.state.value[0]);
                        createMAZ();
                    }}>Erstellen</Confirmbutton>
                    <Confirmbutton id={"closeAddMAZView"} onClick={cancelMAZ}>Abbrechen</Confirmbutton>
                </div>

            </div>


        );
    }
}

export default CreateMAZ;
