import React, {Component} from 'react';
import Confirmbutton from "../UI/Confirmbutton";
import 'react-table/react-table.css';
import {Checkbox} from "react-bootstrap";
import Input from "../UI/Input";
import Label from "react-bootstrap/es/Label";


class CreateMAZ extends Component {

    render() {

        return (
            <div id={"createMAZView"}>

                    <h2>MAZ erstellen</h2>
                    <div id={"mAZPhase"}>
                        Bezeichnung:
                        <div id={"mAZDescription"}>
                            <Input placeholder={"Bezeichnung einfügen"} />
                        </div>

                        <Label id={"MaZPhaseLabel"}>Phase:</Label>
                        <select>
                            <option value="preparationPhase">Vorbereitungsphase</option>
                            <option value="immediatelyCompetition">Unmittelbare Wettkampfvorbereitung</option>
                            <option value="competition">Wettkampfphase</option>
                            <option value="change">Übergangsphase</option>
                            <option value="regeneration">Regenerationsphase</option>
                        </select>
                    </div>
                    <div id={"mAZTime"}>
                        <Label>Startdatum: </Label>
                        <input type="date" id="startMAZ" name="trip-start"
                               value="2018-07-22"
                               min="2018-01-01" max="2018-12-31"/>
                        <Label>Enddatum: </Label>
                        <input type="date" id="endMAZ" name="trip-start"
                               value="2018-07-22"
                               min="2018-01-01" max="2018-12-31"/>
                    </div>
                    <div id={"emphasis"}>
                        <h4>Schwerpunkte</h4>

                        <div id={"emphasisCheckBoxLeft"}>
                            <Checkbox/> Ausdauer
                            <Checkbox/> Kraft
                            <Checkbox/> Schnelligkeit
                            <Checkbox/> Beweglichkeit
                        </div>
                        <div id={"emphasisCheckBoxRight"}>
                            <Checkbox/> Koordination
                            <Checkbox/>Technik/Taktik
                            <Checkbox/> Mentaler Bereich
                            <Checkbox/> Leistungsdiagnostik
                        </div>
                    </div>
                    <div id={"descriptionFormCreateMAZ"}>
                        <Label>Hinweise zu MAZ: </Label>
                        <textarea id="MAZDescription"
                                  placeholder={"MAZ Hinweise hier einfügen"}></textarea>
                    </div>

                <div id={"bottomCreateMAZView"}>
                    <Confirmbutton id={"addMAZButton"}>Erstellen</Confirmbutton>
                    <Confirmbutton id={"closeAddMAZView"}>Abbrechen</Confirmbutton>
                </div>

            </div>


        );
    }
}

export default CreateMAZ;
