import React, {Component, Fragment} from 'react';
import Athlet_Vergleich from "./AthletVergleichen/Athlet_Vergleich";
import KurvenDiagramm from "./KurvenDiagramm";
import Confirmbutton from "../UI/Confirmbutton";
import SpineDiagramm from "./SpineDiagramm";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Leistungdiagnostik.css';
import PhysisDatenController from "./PhysisDaten/PhysisDatenController";
import TestBaterieController from "./Testbaterie/TestBaterieController";
import HeaderProfileView from "../UI/HeaderProfilView";
import {myFunction, onLogoCenterClick, onLogoMenuClick} from "../UI/HeaderProfilController";
import "react-tabs/style/react-tabs.css";
import Popup from "reactjs-popup";
import Kommentar from './Kommentare/Komemntar';
import { GoInfo } from "react-icons/go";
import TestBaterieInfoPopup from "./Testbaterie/TestBaterieInfoPopup";


class LeistungsdiagnostikView extends React.Component{
    state={
        kurve: 2,
        spine: 1,
        diagramm: '1',
        kurvehidden: true,
        spineHidden:false,
        datum1Checkbox: true,
        datum2Checkbox: true,
        datum3Checkbox: true,
        datum4Checkbox: false,
        testArrayDatum: [datum1, datum2, datum3],
        checkboxArray: [datum1, datum2, datum3],
        arraykurve: [datum1,datum2, datum3],
        index: 0,
        trigger : false,
    }

    displayEvent = (evnt, SyntheticEvent) => {

            this.setState({trigger: true})
    }

    closePopup = () =>{
        this.setState({trigger: false})
    }
    setIndex = (e, index) => {
        this.setState({index: index})
        alert(index)
    }

    habdelchekbox = (event, index) =>{

        let array = [...this.state.checkboxArray];
        if(event.target.checked === false){
            array[index].show = false;
        }
        else{
            array[index].show = true;
        }
        this.setState({
            checkboxArray: array
        });
        this.setArraykurve();
    }
    setArraykurve = () => {
       var array = [] ;//[...this.state.checkboxArray];
       this.state.checkboxArray.map( (daten) => {
           if( daten.show === true){
               array.push(daten)
           }
       });
        this.setState({
            arraykurve: array,
        });
    }



    setDiagramm = () => {
        if(this.state.diagramm === this.state.kurve) {
            this.setState({ kurvehidden: true});
            this.setState({spineHidden: false});
            this.setState({diagramm: this.state.spine})

        }
        else{
            this.setState({ kurvehidden: false});
            this.setState({spineHidden: true});
            this.setState({diagramm: this.state.kurve})
        }
    }
    refreshDiagramm= () => {
        this.setState({diagramm: null})
    }
    kommentar_posten = () => {

        this.setState({
            kommentare: [...this.state.kommentare, this.state.kommentar],
        })
    }
    setKommentar = (e) => {
        let  k =
        {
            name: 'trainer',
            text: e.target.value,
            datum:  new Date(),
        }

        this.setState({
            kommentar: k,
        })
    }


    render () {
        const {
            groesse,
            gewicht,
            koeperfett,
            beinlaenge,
            beinwinkel,

            athlet_vergl_1,
            athlet_vergl_2,
            athlet_vergl_3,
            athlet_vergl_4,
            athlet_vergl_5,

            beweglichtkeit,
            reaction,
            koordination,
            sprint,
            JandR,
            med_ball,
            stws,
            borg,
            beep_test,
            onEdit,
        } = this.props;
        let index = this.state.index;

        const Modal = () => (
            <Popup onClose={this.closePopup} closeOnEscape={true} open={this.state.trigger} position={"top left"} closeOnDocumentClick={true}>
                <div className="scroll" style={modalStyle1}>
                   <TestBaterieInfoPopup InfoNummer={0}/>
                </div>

            </Popup>
        )


        return (
            <Fragment>
                <div className="gesamteleistung">

                <HeaderProfileView email = {"test"}  myFunction={myFunction} onLogoCenterClick={ onLogoCenterClick} onLogoMenuClick={onLogoMenuClick} >
                    <HeaderProfileView/>
                </HeaderProfileView>
                <div className="leistung_main">
                      <div className="orangeConta">
                            <div className="container1">
                               <PhysisDatenController groesse={1.80}
                                                gewicht={80}
                                                koeperfett={18}
                                                beinlaenge={80}
                                                beinwinkel={30}
                               />
                            </div>
                            <div className="container2">
                               <Athlet_Vergleich/>
                            </div>
                      </div>
                    <div>
                            <div className= "container1">
                                <div className="thead_leistung">
                                    <label className="thead_leistung">
                                        Testbaterie
                                        <h3 onClick={this.displayEvent} style={{marginTop: '3px', marginLeft: '40px', color: 'white'}}> <GoInfo/></h3>
                                    </label>
                                </div>

                                <Tabs>
                                <TabList className="tabss">
                                    <Tab>{this.state.testArrayDatum[0].name}</Tab>
                                    <Tab >{this.state.testArrayDatum[1].name}</Tab>
                                    <Tab>{this.state.testArrayDatum[2].name}</Tab>
                                    <Tab disabled>{this.state.testArrayDatum[2].name}</Tab>
                                </TabList>
                                    <TabPanel >
                                        {e => this.setIndex(e, 0)}
                                        <TestBaterieController
                                            beweglichtkeit={this.state.testArrayDatum[0].beweglichtkeit}
                                            reaction={this.state.testArrayDatum[0].reaction}
                                            koordination={this.state.testArrayDatum[0].koordination}
                                            sprint={this.state.testArrayDatum[0].sprint}
                                            JandR={this.state.testArrayDatum[0].JandR}
                                            med_ball={this.state.testArrayDatum[0].med_ball}
                                            stws={this.state.testArrayDatum[0].stws}
                                            agilitaet={this.state.testArrayDatum[0].agilitaet}
                                            borg={this.state.testArrayDatum[0].borg}
                                            beep_test={this.state.testArrayDatum[0].beep_test}
                                            onEdit={this.onEdit}/>

                                    </TabPanel>
                                    <TabPanel>
                                        {e =>this.setIndex(e, 1)}
                                        <TestBaterieController
                                            beweglichtkeit={this.state.testArrayDatum[1].beweglichtkeit}
                                            reaction={this.state.testArrayDatum[1].reaction}
                                            koordination={this.state.testArrayDatum[1].koordination}
                                            sprint={this.state.testArrayDatum[1].sprint}
                                            JandR={this.state.testArrayDatum[1].JandR}
                                            med_ball={this.state.testArrayDatum[1].med_ball}
                                            stws={this.state.testArrayDatum[1].stws}
                                            agilitaet={this.state.testArrayDatum[1].agilitaet}
                                            borg={this.state.testArrayDatum[1].borg}
                                            beep_test={this.state.testArrayDatum[1].beep_test}
                                            onEdit={this.onEdit}/>

                                    </TabPanel>
                                    <TabPanel >
                                        {e => this.setIndex(e, 2)}
                                       <TestBaterieController
                                            beweglichtkeit={this.state.testArrayDatum[2].beweglichtkeit}
                                            reaction={this.state.testArrayDatum[2].reaction}
                                            koordination={this.state.testArrayDatum[2].koordination}
                                            sprint={this.state.testArrayDatum[2].sprint}
                                            JandR={this.state.testArrayDatum[2].JandR}
                                            med_ball={this.state.testArrayDatum[2].med_ball}
                                            stws={this.state.testArrayDatum[2].stws}
                                            agilitaet={this.state.testArrayDatum[2].agilitaet}
                                            borg={this.state.testArrayDatum[2].borg}
                                            beep_test={this.state.testArrayDatum[2].beep_test}
                                            onEdit={this.onEdit}/>
                                    </TabPanel>
                                    <TabPanel>

                                    </TabPanel>
                                </Tabs>

                            </div>
                            <div className="diagramm_leistung">
                                <div>
                                    <div className="kurveCheckbox"  hidden={this.state.kurvehidden}>
                                        <input className="input_chekbox"
                                               name="datum1"
                                               type="checkbox"
                                               defaultChecked={this.state.datum1Checkbox}
                                               onChange={e =>this.habdelchekbox(e, 0)}
                                        /> <div style={{color:'#008000'}}> {this.state.testArrayDatum[0].name}</div>
                                        <input className="input_chekbox"
                                               name="datum2"
                                               type="checkbox"
                                               defaultChecked={this.state.datum2Checkbox}
                                               onChange={e =>this.habdelchekbox(e, 1)}
                                           /> <div style={{color:'#ff0000'}}>{this.state.testArrayDatum[1].name}</div>
                                        <input className="input_chekbox"
                                               name="datum3"
                                               type="checkbox"
                                               defaultChecked={this.state.datum3Checkbox}
                                               onChange={e =>this.habdelchekbox(e, 2)}
                                           /> <div style={{color:'#2980B9'}}>{this.state.testArrayDatum[2].name}</div>
                                         <input className="input_chekbox"
                                               name="datum4"
                                               type="checkbox"
                                         />
                                    <Confirmbutton onClick={this.setDiagramm} myStyle= {{padding: '2px', marginTop: '2px', paddingRight: '15px', paddingLeft: '15px'}}>
                                    zum SpinenDiagramm
                                    </Confirmbutton>
                                    </div>
                                    <Confirmbutton onClick={this.setDiagramm} hidden={this.state.spineHidden} myStyle= {{padding: '2px', marginTop: '2px', paddingRight: '15px', paddingLeft: '15px'}}>
                                    zum Kurvendiagramm
                                    </Confirmbutton>
                                </div >
                                    {this.state.diagramm === this.state.kurve? <KurvenDiagramm attribute={this.state.arraykurve}/> :
                                        <SpineDiagramm  beweglichtkeit={this.state.testArrayDatum[index].beweglichtkeit}
                                                        reaction={this.state.testArrayDatum[index].reaction}
                                                        koordination={this.state.testArrayDatum[index].koordination}
                                                        sprint={this.state.testArrayDatum[index].sprint}
                                                        JandR={this.state.testArrayDatum[index].JandR}
                                                        med_ball={this.state.testArrayDatum[index].med_ball}
                                                        stws={this.state.testArrayDatum[index].stws}
                                                        agilitaet={this.state.testArrayDatum[index].agilitaet}
                                                        borg={this.state.testArrayDatum[index].borg}
                                                        beep_test={this.state.testArrayDatum[index].beep_test}/>}
                             </div>
                    </div>
                            <div className="kommentar_L">
                                <Kommentar/>
                            </div>

                </div>
                <Modal/>
                </div>
            </Fragment>
        );
        
    }
}
var noll = {
    name: '0000',
}

const modalStyle1 = {
    position: 'fixed',
    top: 20,
    bottom: 0,
    left: 200,
    right: 200,
    color: 'black',
    overflow: 'scroll',
    height: '700px',

}
var datum1 = {
    beweglichtkeit: 13,
    reaction: 6.5,
    koordination: 2,
    sprint: 5.12,
    JandR: 31.5,
    med_ball: 5.35,
    stws: 6,
    agilitaet:17,
    borg: 20,
    beep_test: 11.20,
    name: '07-01-2019',
    show: true,
}
var datum2 = {
    beweglichtkeit: 19,
    reaction: 9,
    koordination: 5,
    sprint: 8.12,
    JandR: 45.5,
    med_ball: 9.35,
    stws: 0,
    agilitaet: 9,
    borg: 14,
    beep_test: 18.20,
    name: '24-12-2018',
    show: true,
}
var datum3 = {
    beweglichtkeit: 10,
    reaction: 5,
    koordination: 1,
    sprint: 2.12,
    JandR: 20.5,
    med_ball: 7.35,
    stws: 0,
    agilitaet:12,
    borg: 29,
    beep_test: 21.20,
    name: '20-11-2018',
    show: true,
}
export default LeistungsdiagnostikView;

/*
<Tabs defaultActiveKey={1} id="tabs">
                                    <Tab eventKey={1} title={this.state.testArrayDatum[0].name}>
                                        <TestBaterieController
                                                     beweglichtkeit={this.state.testArrayDatum[0].beweglichtkeit}
                                                     reaction={this.state.testArrayDatum[0].reaction}
                                                     koordination={this.state.testArrayDatum[0].koordination}
                                                     sprint={this.state.testArrayDatum[0].sprint}
                                                     JandR={this.state.testArrayDatum[0].JandR}
                                                     med_ball={this.state.testArrayDatum[0].med_ball}
                                                     stws={this.state.testArrayDatum[0].stws}
                                                     agilitaet={this.state.testArrayDatum[0].agilitaet}
                                                     borg={this.state.testArrayDatum[0].borg}
                                                     beep_test={this.state.testArrayDatum[0].beep_test}
                                                     onEdit={this.onEdit}/>
                                    </Tab>
                                    <Tab eventKey={2} title={this.state.testArrayDatum[1].name}>
                                        <TestBaterieController
                                                     beweglichtkeit={this.state.testArrayDatum[1].beweglichtkeit}
                                                    reaction={this.state.testArrayDatum[1].reaction}
                                                    koordination={this.state.testArrayDatum[1].koordination}
                                                    sprint={this.state.testArrayDatum[1].sprint}
                                                    JandR={this.state.testArrayDatum[1].JandR}
                                                    med_ball={this.state.testArrayDatum[1].med_ball}
                                                    stws={this.state.testArrayDatum[1].stws}
                                                    agilitaet={this.state.testArrayDatum[1].agilitaet}
                                                    borg={this.state.testArrayDatum[1].borg}
                                                    beep_test={this.state.testArrayDatum[1].beep_test}
                                                    onEdit={this.onEdit}/>
                                    </Tab>
                                    <Tab eventKey={3} title={this.state.testArrayDatum[2].name}>
                                        <TestBaterieController
                                            beweglichtkeit={this.state.testArrayDatum[2].beweglichtkeit}
                                        reaction={this.state.testArrayDatum[2].reaction}
                                        koordination={this.state.testArrayDatum[2].koordination}
                                        sprint={this.state.testArrayDatum[2].sprint}
                                        JandR={this.state.testArrayDatum[2].JandR}
                                        med_ball={this.state.testArrayDatum[2].med_ball}
                                        stws={this.state.testArrayDatum[2].stws}
                                        agilitaet={this.state.testArrayDatum[2].agilitaet}
                                        borg={this.state.testArrayDatum[2].borg}
                                        beep_test={this.state.testArrayDatum[2].beep_test}
                                        onEdit={this.onEdit}/>
                                    </Tab>
                                    <Tab eventKey={4} title="Datum4">
                                        Datum4
                                    </Tab>

                                    </Tabs>
* */