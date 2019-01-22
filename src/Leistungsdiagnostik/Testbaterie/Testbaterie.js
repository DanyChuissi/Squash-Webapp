import React, {Component, Fragment} from 'react';
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis} from 'recharts';
import './Testbaterie.css';
import ResponsiveContainer from "recharts/es6/component/ResponsiveContainer";
import Input from "../../UI/Input";
import Confirmbutton from "../../UI/Confirmbutton";
import Popup from "reactjs-popup";
import NewTestBaterieController from "../NewTestBaterie/NewTestBaterieController";
import { GoInfo } from "react-icons/go";
import { IconContext } from "react-icons";
import TestBaterieInfoPopup from "./TestBaterieInfoPopup";


/*
* InfoNummer: Props Nummer und zugerörige Info_Content
* 0 = Allgemeine Info der Testbaterie
* 1 = Beweglichkeit
* 2 = Reaktion
* 3= Koordination
* 4 = Sprint
* 5 = J & R
* 6 = Med Ball
* 7 =StWs
* 8 = Agilität
* 9 = Borg test
* 10 = Beep test
* */

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
            triggerInfo,
             displayEvent,
              closePopUp,
            displayEventInfo,
            closePopUpInfo,
            postTestBaterie,
            Infonummer,
        } = this.props;

        let Style = {};
        if(hideBearbeiten){
            Style = bearbeitbarStyle
        }

        const Modal = () => (
            <Popup onClose={closePopUp} closeOnEscape={true} open={trigger} position={"top left"} closeOnDocumentClick={false}>
                <div style={modalStyle1}>
                    <NewTestBaterieController  postTestBaterie={postTestBaterie} closePopUp={closePopUp}/>
                </div>
            </Popup>
        )

        const ModalInfo = () => (
            <Popup onClose={closePopUpInfo} closeOnEscape={true} open={triggerInfo} position={"top left"} closeOnDocumentClick={true}>
                <div style={modalStyle2}>
                    <TestBaterieInfoPopup  InfoNummer={Infonummer}/>
                </div>
            </Popup>
        )


        return (
            <Fragment>
                <div  className="table_css">
                    <table>
                        <tbody className= "tbody_leistung">
                        <tr id={"table_css"}>
                            <th className="testName">
                                Beweglichkeit[cm]
                                <IconContext.Provider value={{ color: "", size: '0.7em' }}>
                                    <h3 onClick={e => displayEventInfo(1)}><GoInfo/></h3>
                                </IconContext.Provider>

                            </th>
                            <td style={Style}  placeholder={"No Data Found"} onChange={setBeweglichtkeit} contentEditable={contentEditable} >{beweglichtkeit}</td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="testName">
                                Reaktion[cm]
                                <IconContext.Provider value={{ color: "", size: '0.7em' }}>
                                    <h3 onClick={e =>displayEventInfo(2)}><GoInfo/></h3>
                                </IconContext.Provider>
                            </th>
                            <td style={Style}  placeholder={"No Data Found"} onChange={setReaktion} contentEditable={contentEditable} >{reaction}</td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="testName">
                                Koordination
                                <IconContext.Provider value={{ color: "", size: '0.7em' }}>
                                    <h3 onClick={e =>displayEventInfo(3)}><GoInfo/></h3>
                                </IconContext.Provider>
                            </th>
                            <td style={Style}  placeholder={"No Data Found"} onChange={setKoordination} contentEditable={contentEditable} >{koordination}</td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="testName">Sprint[sec]
                                <IconContext.Provider value={{ color: "", size: '0.7em' }}>
                                    <h3 onClick={e =>displayEventInfo(4)}><GoInfo/></h3>
                                </IconContext.Provider>
                            </th>
                            <td style={Style}  placeholder={"No Data Found"} onChange={setSprint} contentEditable={contentEditable} >{sprint}</td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="testName">J & R
                                <IconContext.Provider value={{ color: "", size: '0.7em' }}>
                                    <h3 onClick={e =>displayEventInfo(5)}><GoInfo/></h3>
                                </IconContext.Provider>
                            </th>
                            <td style={Style}  placeholder={"No Data Found"} onChange={setJandR} contentEditable={contentEditable} >{JandR}</td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="testName">Med Ball
                                <IconContext.Provider value={{ color: "", size: '0.7em' }}>
                                    <h3 onClick={e =>displayEventInfo(6)}><GoInfo/></h3>
                                </IconContext.Provider>
                            </th>
                            <td style={Style}  placeholder={"No Data Found"} onChange={setMedBall} contentEditable={contentEditable} >{med_ball}</td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="testName">StWS
                                <IconContext.Provider value={{ color: "", size: '0.7em' }}>
                                    <h3 onClick={e =>displayEventInfo(7)}><GoInfo/></h3>
                                </IconContext.Provider>
                            </th>
                            <td style={Style}  placeholder={"No Data Found"} onChange={setStWS} contentEditable={contentEditable} >{stws}</td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="testName">Agilität
                                <IconContext.Provider value={{ color: "", size: '0.7em' }}>
                                    <h3 onClick={e =>displayEventInfo(8)}><GoInfo/></h3>
                                </IconContext.Provider>
                            </th>
                            <td style={Style}  placeholder={"No Data Found"} onChange={setAgilitaet} contentEditable={contentEditable} >{agilitaet}</td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="testName">BORG Test
                                <IconContext.Provider value={{ color: "", size: '0.7em' }}>
                                    <h3 onClick={e =>displayEventInfo(9)}><GoInfo/></h3>
                                </IconContext.Provider>
                            </th>
                            <td style={Style}  placeholder={"No Data Found"} onChange={setBorg} contentEditable={contentEditable} >{borg}</td>
                        </tr>
                        <tr id={"table_css"}>
                            <th className="testName">Beep Test
                                <IconContext.Provider value={{ color: "", size: '0.7em' }}>
                                    <h3 onClick={e =>displayEventInfo(10)}><GoInfo/></h3>
                                </IconContext.Provider>
                            </th>
                            <td style={Style}  placeholder={"No Data Found"} onChange={setBeepTest} contentEditable={contentEditable} >{beep_test}</td>
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
                <ModalInfo />
            </Fragment>
        );
    }
}

const bearbeitbarStyle = {
    color: '#2980B9',
    opacity: '0.9'
};
const modalStyle1 = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 200,
    right: 200,
    color: 'black',
}
const modalStyle2 = {
    position: 'fixed',
    top: 20,
    bottom: 0,
    left: 200,
    right: 200,
    color: 'black',
    overflow: 'scroll',

    height: 'auto',


}
export default Testbaterie;