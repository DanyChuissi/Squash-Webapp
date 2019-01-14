import React, {Component, Fragment} from 'react';
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis} from 'recharts';
import './Testbaterie.css';
import ResponsiveContainer from "recharts/es6/component/ResponsiveContainer";
import Input from "../../UI/Input";
import Confirmbutton from "../../UI/Confirmbutton";
import Popup from "reactjs-popup";
import NewTestBaterieController from "../NewTestBaterie/NewTestBaterieController";

class Testbaterie extends Component {
    render() {
        const {
            beweglichtkeit,
            reaction,
            koordination,
            sprint,
            JandR,
            med_ball,
            stws,
            agilitaet,
            borg,
            beep_test,

            hideBearbeiten,
            hideSpeichern,
            setBeweglichtkeit,
            setReaktion,
            setKoordination,
            setSprint,
            setJandR,
            setMedBall,
            setStWS,
            setAgilitaet,
            setBorg,
            setBeepTest,
            contentEditable,
            onEdit,
            onSave,
            trigger,
        displayEvent,
        closePopUp,
        } = this.props;

        const Modal = () => (
            <Popup onClose={closePopUp} closeOnEscape={true} open={trigger} position={"top left"} closeOnDocumentClick={true}>
                <div style={modalStyle1}>
                    <NewTestBaterieController closePopUp={closePopUp}/>
                </div>
                <Modal/>
            </Popup>
        )


        return (
            <Fragment>
                <div  className="testbaterie_box">
                    <table>
                        <tbody className= "tbody_leistung">
                        <tr>
                            <th>Beweglichkeit[cm]</th>
                            <td placeholder={"No Data Found"} onChange={setBeweglichtkeit} contentEditable={contentEditable} >{beweglichtkeit}</td>
                        </tr>
                        <tr>
                            <th>Reaktion[cm]</th>
                            <td placeholder={"No Data Found"} onChange={setReaktion} contentEditable={contentEditable} >{reaction}</td>
                        </tr>
                        <tr>
                            <th>Koordination</th>
                            <td placeholder={"No Data Found"} onChange={setKoordination} contentEditable={contentEditable} >{koordination}</td>
                        </tr>
                        <tr>
                            <th>Sprint[sec]</th>
                            <td placeholder={"No Data Found"} onChange={setSprint} contentEditable={contentEditable} >{sprint}</td>
                        </tr>
                        <tr>
                            <th>J & R</th>
                            <td placeholder={"No Data Found"} onChange={setJandR} contentEditable={contentEditable} >{JandR}</td>
                        </tr>
                        <tr>
                            <th>Med Ball</th>
                            <td placeholder={"No Data Found"} onChange={setMedBall} contentEditable={contentEditable} >{med_ball}</td>
                        </tr>
                        <tr>
                            <th>StWS</th>
                            <td placeholder={"No Data Found"} onChange={setStWS} contentEditable={contentEditable} >{stws}</td>
                        </tr>
                        <tr>
                            <th>Agilität</th>
                            <td placeholder={"No Data Found"} onChange={setAgilitaet} contentEditable={contentEditable} >{agilitaet}</td>
                        </tr>
                        <tr>
                            <th>BORG Test</th>
                            <td placeholder={"No Data Found"} onChange={setBorg} contentEditable={contentEditable} >{borg}</td>
                        </tr>
                        <tr>
                            <th>Beep Test</th>
                            <td placeholder={"No Data Found"} onChange={setBeepTest} contentEditable={contentEditable} >{beep_test}</td>
                        </tr>
                        </tbody>
                    </table>
                    {/*<div style={{color: 'black'}}>
                        <Input style={{width: '280px' , height:'20px'}} >
                            Kommentar
                        </Input>
                    </div>*/}
                    <div className="physisdaten_box">
                        <Confirmbutton onClick={onEdit} hidden={hideBearbeiten} myStyle= {{padding: '9px', marginTop: '8px', paddingRight: '15px', paddingLeft: '15px'}}>
                            Bearbeiten
                        </Confirmbutton>
                        <Confirmbutton onClick={onSave} hidden={hideSpeichern} myStyle= {{padding: '9px', marginTop: '8px', paddingRight: '15px', paddingLeft: '15px'}}>
                            Speichern
                        </Confirmbutton>
                        <Confirmbutton onClick={displayEvent} myStyle= {{padding: '9px', marginTop: '8px', paddingRight: '15px', paddingLeft: '15px'}}>
                            Neu Test
                        </Confirmbutton>
                    </div>

                </div>
                <Modal/>
            </Fragment>
        );
    }
}
const modalStyle1 = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 200,
    right: 200,
    color: 'black',
}
export default Testbaterie;