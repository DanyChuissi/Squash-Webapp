import React, {Component, Fragment} from 'react';
import '../App.css'
import PhysisDatenView from "./PhysisDaten/PhysisDatenView";
import Athlet_Vergleich from "./AthletVergleichen/Athlet_Vergleich";
import Testbaterie from "./Testbaterie/Testbaterie";
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
import NewTestBaterieController from "./NewTestBaterie/NewTestBaterieController";

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

    }


   /* componentWillMount = () => {
        let a1 = datum1;
        let a2 = datum2;
        let a3 = datum3;
        this.setState({
            checkboxArray: this.state.testArrayDatum.slice(),

        })
    }*/
   /* setChekbox1= () => {
        this.setState({datum1Checkbox: !this.state.datum1Checkbox})
    }
    setChekbox2= () => {
        this.setState({datum2Checkbox: !this.state.datumCheckbox})
    }
    setChekbox3= () => {
        this.setState({datum3Checkbox: !this.state.datum3Checkbox})
    }*/
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
    /*removeTestBaterie(e, index){
        alert(e)
        if(typeof index !== "undefined") {
            var array = [...this.state.anzeigeArray];
            if (index !== -1) {
                array.splice(index, 1);
                this.setState({
                    anzeigeArray: array,
                });
            }
        }
    };*/
    /*addAthlet_zu_vergl (e){
                this.setState({
                    anzeigeArray: [...this.state.anzeigeArray, e],
                })
    };*/


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

        return (
            <Fragment>

                <HeaderProfileView email = {"test"}  myFunction={myFunction} onLogoCenterClick={ onLogoCenterClick} onLogoMenuClick={onLogoMenuClick} >
                    <HeaderProfileView/>
                </HeaderProfileView>
                <div className="leistung_main">
                        <div className="leistung_diag_container">
                            <div className="myContainer">
                               <PhysisDatenController groesse={1.80}
                                                gewicht={80}
                                                koeperfett={18}
                                                beinlaenge={80}
                                                beinwinkel={30}
                               />
                            </div>
                            <div className="myContainer">
                               <Athlet_Vergleich/>
                            </div>
                            <div className= "myContainer">
                                <div className="thead_leistung">
                                    <label className="thead_leistung">Testbaterie</label>
                                </div>

                                <Tabs>
                                <TabList className="tabss">
                                    <Tab>{this.state.testArrayDatum[0].name}</Tab>
                                    <Tab >{this.state.testArrayDatum[1].name}</Tab>
                                    <Tab>{this.state.testArrayDatum[2].name}</Tab>
                                    <Tab disabled>{this.state.testArrayDatum[2].name}</Tab>
                                </TabList>
                                    <TabPanel  >
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
                                    <div style={{color:'black'}}  hidden={this.state.kurvehidden}>
                                        <input className="input_chekbox"
                                               name="datum1"
                                               type="checkbox"
                                               defaultChecked={this.state.datum1Checkbox}
                                               onChange={e =>this.habdelchekbox(e, 0)}
                                        />{this.state.testArrayDatum[0].name}
                                        <input className="input_chekbox"
                                               name="datum2"
                                               type="checkbox"
                                               defaultChecked={this.state.datum2Checkbox}
                                               onChange={e =>this.habdelchekbox(e, 1)}
                                           />{this.state.testArrayDatum[1].name}
                                        <input className="input_chekbox"
                                               name="datum3"
                                               type="checkbox"
                                               defaultChecked={this.state.datum3Checkbox}
                                               onChange={e =>this.habdelchekbox(e, 2)}
                                           />{this.state.testArrayDatum[2].name}
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


                    <div className="kommentar_leistung">
                        Kommentar
                    </div>
                </div>
            </Fragment>
        );
        
    }
}
var noll = {
    name: '0000',
}
var datum1 = {
    beweglichtkeit: 13,
    reaction: 17,
    koordination: 2,
    sprint: 5.12,
    JandR: 31.5,
    med_ball: 5.35,
    stws: 206,
    agilitaet:17,
    borg: 20,
    beep_test: 11.20,
    name: '07-01-2019',
    show: true,
}
var datum2 = {
    beweglichtkeit: 19,
    reaction: 14,
    koordination: 5,
    sprint: 8.12,
    JandR: 45.5,
    med_ball: 12.35,
    stws: 106,
    agilitaet:23,
    borg: 14,
    beep_test: 18.20,
    name: '24-12-2018',
    show: true,
}
var datum3 = {
    beweglichtkeit: 10,
    reaction: 24,
    koordination: 1,
    sprint: 2.12,
    JandR: 20.5,
    med_ball: 15.35,
    stws: 156,
    agilitaet:27,
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