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
import {showDropdown_Header} from "../UI/HeaderProfilController";
import "react-tabs/style/react-tabs.css";
import Popup from "reactjs-popup";
import Kommentar from './Kommentare/Komemntar';
import { GoInfo } from "react-icons/go";
import TestBaterieInfoPopup from "./Testbaterie/TestBaterieInfoPopup";
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";
import Input from "../UI/Input";
import AlteTestBaterieView from "./Testbaterie/AlteTestBaterieView";
import BalkenDiagramm from "./BalkenDiagramm";


/**
 * @author Dany Chuissi
 *
 *
 * Definiert die Seite der LEistungdiagnostik des Spieler
 *
 *
 * Benutzte Componenete:
 * @see KurvenDiagramm
 * @see PhysisDatenController
 * @see TestBaterieController
 * @see Athlet_Vergleich
 * @see SpineDiagramm
 * @see Kommentar
 * @see BalkenDiagramm
 *
 * @visibleName LeistungsdiagnostikView
 */
class LeistungsdiagnostikView extends Component{
    /**
     * @type {{datum2Checkbox: boolean, datum1Checkbox: boolean, datum4Checkbox: boolean, index: number, spine: number, trigger: boolean, kurve: number, kurvehidden: boolean, datum3Checkbox: boolean, testArrayDatum: *[], diagramm: string, spineHidden: boolean, arraykurve: *[], hidde_alte_TestBaterie: boolean, checkboxArray: *[]}}
     */
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
        testArrayDatum: [],
        checkboxArray: [],
        arraykurve: [],
        index:0,
        trigger : false,
        hidde_alte_TestBaterie: true,
        index0: -1,
        index1: -1,
        index2: -1,
        index3: -1,
        isLoaded: false,
    }

    displayEvent = (evnt, SyntheticEvent) => {

            this.setState({trigger: true})
    }

    closePopup = () =>{
        this.setState({trigger: false})
    }
    setIndex = (e) => {

        this.setState({index: e})

    }

    setHidde_alte_Testbaterie = () => {
        this.setState({
            hidde_alte_TestBaterie: !this.state.hidde_alte_TestBaterie
        })
    }

    /**
     * die Methode wird ausgelöst beim clickt aud einen Checkbox, ändert die Statut der Kurve anzeigen und nicht anzeigen
     *
     * @param event Checkbok Klickt auf dem Checkbox
     * @param index Checkboxnummer Checkbonnummer entspricht der Arrayindex der Textbaterie
     */
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

    /**
     * die Methode erzeugt ein Anrray mit alle Daten wo "show" = true
     */
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


    /**
     * Swicht zwichen Spine und Kurvediagramm bzw Balkendiagramm
     */
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

    componentDidMount(): void {
        fetch("http://172.22.24.243:50593/LD/email?email=jens@testemail3.de")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({

                        testArrayDatum: result,
                        checkboxArray: result,
                        arraykurve: result,
                        isLoaded: true,
                        index : 0,
                    });
                    console.log(this.state.arraykurve)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
            if(this.state.isLoaded){
                this.setState({
                    index : 1,
                })
            }

    }

    /*onTestBaterieSave = () => {
        fetch("http://172.22.24.243:50593/LD?email="+this.state.testArrayDatum.email+"&date="+this.state.testArrayDatum.datum, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date: daten.date,
                bew: daten.beweglichtkeit,
                react: daten.reaction,
                koord: daten.koordination,
                sprint: daten.sprint,
                JnR: daten.JandR,
                medBall: daten.med_ball,
                StWS: daten.stws,
                agil: daten.agilitaet,
                BORG: daten.borg,
                Bleep: daten.borg,
                height: "",
                weight: "",
                bodyfat: "",
                leglength: "",
                angle: ""
            })
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
        alert("Testbatterie gespeichert");
        this.closePopup();
    }*/

    render () {

        let index = this.state.index;

        const Modal = () => (
            <Popup onClose={this.closePopup} closeOnEscape={true} open={this.state.trigger} position={"top left"} closeOnDocumentClick={true}>
                <div className="scroll" style={modalStyle1}>
                   <TestBaterieInfoPopup InfoNummer={0}/>
                </div>

            </Popup>
        );

        let tabs;
        let tabPanels;
        let checkbox;



        if(this.state.isLoaded && typeof this.state.testArrayDatum[0] !== 'undefined') {
            switch (this.state.testArrayDatum.length) {
                case 0: {
                    tabs = [<Tab disabled>{}</Tab>,
                        <Tab disabled>{}</Tab>,
                        <Tab disabled>{}</Tab>,
                        <Tab disabled>{}</Tab>]
                }
                case 1: {
                    tabs = [<Tab>{this.state.testArrayDatum.name}</Tab>,
                        <Tab disabled>{}</Tab>,
                        <Tab disabled>{}</Tab>,
                        <Tab disabled>{}</Tab>]

                    tabPanels =
                        [<TabPanel>
                            {e => this.setIndex(e, 0)}
                            <TestBaterieController
                                beweglichtkeit={this.state.testArrayDatum.bew}
                                reaction={this.state.testArrayDatum.react}
                                koordination={this.state.testArrayDatum.koord}
                                sprint={this.state.testArrayDatum.sprint}
                                JandR={this.state.testArrayDatum.JnR}
                                med_ball={this.state.testArrayDatum.medBall}
                                stws={this.state.testArrayDatum.StWS}
                                agilitaet={this.state.testArrayDatum.agil}
                                borg={this.state.testArrayDatum.BORG}
                                beep_test={this.state.testArrayDatum.Bleep}
                                hidde_alte_TestBaterie={this.state.hidde_alte_TestBaterie}
                                setHidde_Alte_Testbaterie={this.setHidde_alte_Testbaterie}
                                onEdit={this.onEdit}/>

                        </TabPanel>]

                    checkbox = [<input className="input_chekbox"
                                       name="datum1"
                                       type="checkbox"
                                       defaultChecked={this.state.datum1Checkbox}
                                       onChange={e => this.habdelchekbox(e, 0)}
                    />, <div style={{color: '#008000'}}> {this.state.testArrayDatum.datum}</div>]

                    break;
                }
                case 2: {
                    tabs = [<Tab>{this.state.testArrayDatum[0].name}</Tab>,
                        <Tab>{this.state.testArrayDatum[1].name}</Tab>,
                        <Tab disabled>{}</Tab>,
                        <Tab disabled>{}</Tab>]

                    tabPanels =
                        [<TabPanel>
                            {e => this.setIndex(e, 0)}
                            <TestBaterieController
                                beweglichtkeit={this.state.testArrayDatum.bew}
                                reaction={this.state.testArrayDatum.react}
                                koordination={this.state.testArrayDatum.koord}
                                sprint={this.state.testArrayDatum.sprint}
                                JandR={this.state.testArrayDatum.JnR}
                                med_ball={this.state.testArrayDatum.medBall}
                                stws={this.state.testArrayDatum.StWS}
                                agilitaet={this.state.testArrayDatum.agil}
                                borg={this.state.testArrayDatum.BORG}
                                beep_test={this.state.testArrayDatum.Bleep}
                                hidde_alte_TestBaterie={this.state.hidde_alte_TestBaterie}
                                setHidde_Alte_Testbaterie={this.setHidde_alte_Testbaterie}
                                onEdit={this.onEdit}/>

                        </TabPanel>,
                            <TabPanel>
                                {e => this.setIndex(e, 1)}
                                <TestBaterieController
                                    beweglichtkeit={this.state.testArrayDatum.bew}
                                    reaction={this.state.testArrayDatum.react}
                                    koordination={this.state.testArrayDatum.koord}
                                    sprint={this.state.testArrayDatum.sprint}
                                    JandR={this.state.testArrayDatum.JnR}
                                    med_ball={this.state.testArrayDatum.medBall}
                                    stws={this.state.testArrayDatum.StWS}
                                    agilitaet={this.state.testArrayDatum.agil}
                                    borg={this.state.testArrayDatum.BORG}
                                    beep_test={this.state.testArrayDatum.Bleep}
                                    hidde_alte_TestBaterie={this.state.hidde_alte_TestBaterie}
                                    setHidde_Alte_Testbaterie={this.setHidde_alte_Testbaterie}
                                    onEdit={this.onEdit}/>

                            </TabPanel>]

                    checkbox = [<input className="input_chekbox"
                                       name="datum1"
                                       type="checkbox"
                                       defaultChecked={this.state.datum1Checkbox}
                                       onChange={e => this.habdelchekbox(e, 0)}
                    />, <div style={{color: '#008000'}}> {this.state.testArrayDatum[0].name}</div>,
                        <input className="input_chekbox"
                               name="datum2"
                               type="checkbox"
                               defaultChecked={this.state.datum2Checkbox}
                               onChange={e => this.habdelchekbox(e, 1)}
                        />, <div style={{color: '#ff0000'}}>{this.state.testArrayDatum[1].name}</div>]

                    break;
                }
                case 3: {
                    tabs = [<Tab>{this.state.testArrayDatum[0].name}</Tab>,
                        <Tab>{this.state.testArrayDatum[1].name}</Tab>,
                        <Tab>{this.state.testArrayDatum[2].name}</Tab>,
                        <Tab disabled>{}</Tab>]


                    tabPanels =
                        [<TabPanel>
                            {e => this.setIndex(e, 0)}
                            <TestBaterieController
                                beweglichtkeit={this.state.testArrayDatum.bew}
                                reaction={this.state.testArrayDatum.react}
                                koordination={this.state.testArrayDatum.koord}
                                sprint={this.state.testArrayDatum.sprint}
                                JandR={this.state.testArrayDatum.JnR}
                                med_ball={this.state.testArrayDatum.medBall}
                                stws={this.state.testArrayDatum.StWS}
                                agilitaet={this.state.testArrayDatum.agil}
                                borg={this.state.testArrayDatum.BORG}
                                beep_test={this.state.testArrayDatum.Bleep}
                                hidde_alte_TestBaterie={this.state.hidde_alte_TestBaterie}
                                setHidde_Alte_Testbaterie={this.setHidde_alte_Testbaterie}
                                onEdit={this.onEdit}/>

                        </TabPanel>,
                            <TabPanel>
                                {e => this.setIndex(e, 1)}
                                <TestBaterieController
                                    beweglichtkeit={this.state.testArrayDatum.bew}
                                    reaction={this.state.testArrayDatum.react}
                                    koordination={this.state.testArrayDatum.koord}
                                    sprint={this.state.testArrayDatum.sprint}
                                    JandR={this.state.testArrayDatum.JnR}
                                    med_ball={this.state.testArrayDatum.medBall}
                                    stws={this.state.testArrayDatum.StWS}
                                    agilitaet={this.state.testArrayDatum.agil}
                                    borg={this.state.testArrayDatum.BORG}
                                    beep_test={this.state.testArrayDatum.Bleep}
                                    hidde_alte_TestBaterie={this.state.hidde_alte_TestBaterie}
                                    setHidde_Alte_Testbaterie={this.setHidde_alte_Testbaterie}
                                    onEdit={this.onEdit}/>

                            </TabPanel>,
                            <TabPanel>
                                {e => this.setIndex(e, 2)}
                                <TestBaterieController
                                    beweglichtkeit={this.state.testArrayDatum.bew}
                                    reaction={this.state.testArrayDatum.react}
                                    koordination={this.state.testArrayDatum.koord}
                                    sprint={this.state.testArrayDatum.sprint}
                                    JandR={this.state.testArrayDatum.JnR}
                                    med_ball={this.state.testArrayDatum.medBall}
                                    stws={this.state.testArrayDatum.StWS}
                                    agilitaet={this.state.testArrayDatum.agil}
                                    borg={this.state.testArrayDatum.BORG}
                                    beep_test={this.state.testArrayDatum.Bleep}
                                    hidde_alte_TestBaterie={this.state.hidde_alte_TestBaterie}
                                    setHidde_Alte_Testbaterie={this.setHidde_alte_Testbaterie}
                                    onEdit={this.onEdit}/>
                            </TabPanel>]
                    checkbox = [<input className="input_chekbox"
                                       name="datum1"
                                       type="checkbox"
                                       defaultChecked={this.state.datum1Checkbox}
                                       onChange={e => this.habdelchekbox(e, 0)}
                    />, <div style={{color: '#008000'}}> {this.state.testArrayDatum[0].name}</div>,
                        <input className="input_chekbox"
                               name="datum2"
                               type="checkbox"
                               defaultChecked={this.state.datum2Checkbox}
                               onChange={e => this.habdelchekbox(e, 1)}
                        />, <div style={{color: '#ff0000'}}>{this.state.testArrayDatum[1].name}</div>,
                        <input className="input_chekbox"
                               name="datum3"
                               type="checkbox"
                               defaultChecked={this.state.datum3Checkbox}
                               onChange={e => this.habdelchekbox(e, 2)}
                        />, <div style={{color: '#2980B9'}}>{this.state.testArrayDatum[2].name}</div>,
                        <input className="input_chekbox"
                               name="datum4"
                               type="checkbox"
                        />]


                    break;
                }
                default: {
                    tabs = [<Tab>{this.state.testArrayDatum[0].name}</Tab>,
                        <Tab>{this.state.testArrayDatum[1].name}</Tab>,
                        <Tab>{this.state.testArrayDatum[2].name}</Tab>,
                        <Tab>{this.state.testArrayDatum[3].name}</Tab>]

                    tabPanels =
                        [<TabPanel>
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
                                hidde_alte_TestBaterie={this.state.hidde_alte_TestBaterie}
                                setHidde_Alte_Testbaterie={this.setHidde_alte_Testbaterie}
                                onEdit={this.onEdit}/>

                        </TabPanel>,
                            <TabPanel>
                                {e => this.setIndex(e, 1)}
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
                                    hidde_alte_TestBaterie={this.state.hidde_alte_TestBaterie}
                                    setHidde_Alte_Testbaterie={this.setHidde_alte_Testbaterie}
                                    onEdit={this.onEdit}/>

                            </TabPanel>,
                            <TabPanel>
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
                                    hidde_alte_TestBaterie={this.state.hidde_alte_TestBaterie}
                                    setHidde_Alte_Testbaterie={this.setHidde_alte_Testbaterie}
                                    onEdit={this.onEdit}/>
                            </TabPanel>,
                            <TabPanel>
                                {e => this.setIndex(e, 3)}
                                <TestBaterieController
                                    beweglichtkeit={this.state.testArrayDatum[3].beweglichtkeit}
                                    reaction={this.state.testArrayDatum[3].reaction}
                                    koordination={this.state.testArrayDatum[3].koordination}
                                    sprint={this.state.testArrayDatum[3].sprint}
                                    JandR={this.state.testArrayDatum[3].JandR}
                                    med_ball={this.state.testArrayDatum[3].med_ball}
                                    stws={this.state.testArrayDatum[3].stws}
                                    agilitaet={this.state.testArrayDatum[3].agilitaet}
                                    borg={this.state.testArrayDatum[3].borg}
                                    hidde_alte_TestBaterie={this.state.hidde_alte_TestBaterie}
                                    setHidde_Alte_Testbaterie={this.setHidde_alte_Testbaterie}
                                    onEdit={this.onEdit}
                                />
                            </TabPanel>,]

                    checkbox = [<input className="input_chekbox"
                                       name="datum1"
                                       type="checkbox"
                                       defaultChecked={this.state.datum1Checkbox}
                                       onChange={e => this.habdelchekbox(e, 0)}
                    />, <div style={{color: '#008000'}}> {this.state.testArrayDatum.datum}</div>,
                        <input className="input_chekbox"
                               name="datum2"
                               type="checkbox"
                               defaultChecked={this.state.datum2Checkbox}
                               onChange={e => this.habdelchekbox(e, 1)}
                        />, <div style={{color: '#ff0000'}}>{this.state.testArrayDatum.datum}</div>,
                        <input className="input_chekbox"
                               name="datum3"
                               type="checkbox"
                               defaultChecked={this.state.datum3Checkbox}
                               onChange={e => this.habdelchekbox(e, 2)}
                        />, <div style={{color: '#2980B9'}}>{this.state.testArrayDatum.datum}</div>,
                        <input className="input_chekbox"
                               name="datum4"
                               type="checkbox"
                        />,
                        <input className="input_chekbox"
                               name="datum4"
                               type="checkbox"
                               defaultChecked={this.state.datum4Checkbox}
                               onChange={e => this.habdelchekbox(e, 3)}
                        />, <div style={{color: '#f19a29'}}>{this.state.testArrayDatum.datum}</div>,]

                }
            }
        }

        if(!this.state.isLoaded || typeof this.state.testArrayDatum === 'undefined' || this.state.index === -1){
            return <h1>... Loading</h1>
        }

        else {

            return (
                <Fragment>
                    <div className="gesamteleistung">

                        <HeaderProfileView email={"test"} myFunction={showDropdown_Header}>
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
                                <div className="container1">
                                    <div className="thead_leistung">
                                        <label className="thead_leistung">
                                            Testbatterie
                                            <h3 onClick={this.displayEvent}
                                                style={{marginTop: '3px', marginLeft: '40px', color: 'white'}}><GoInfo/>
                                            </h3>
                                        </label>
                                    </div>

                                    <Tabs onSelect={this.setIndex}>
                                        <TabList className="tabss">
                                           {/* {tabs}*/}
                                            <Tab>{this.state.testArrayDatum.date}</Tab>
                                        </TabList>
                                        {/*{tabPanels}*/}
                                        <TabPanel>
                                            {e => this.setIndex(e, 0)}
                                            <TestBaterieController
                                                beweglichtkeit={this.state.testArrayDatum.bew}
                                                reaction={this.state.testArrayDatum.react}
                                                koordination={this.state.testArrayDatum.koord}
                                                sprint={this.state.testArrayDatum.sprint}
                                                JandR={this.state.testArrayDatum.JnR}
                                                med_ball={this.state.testArrayDatum.medBall}
                                                stws={this.state.testArrayDatum.StWS}
                                                agilitaet={this.state.testArrayDatum.agil}
                                                borg={this.state.testArrayDatum.BORG}
                                                beep_test={this.state.testArrayDatum.Bleep}
                                                hidde_alte_TestBaterie={this.state.hidde_alte_TestBaterie}
                                                setHidde_Alte_Testbaterie={this.setHidde_alte_Testbaterie}
                                                onEdit={this.onEdit}
                                                onSave={this.onTestBaterieSave}
                                                testBaterie={this.state.testArrayDatum}/>

                                        </TabPanel>
                                    </Tabs>

                                </div>
                                <div className="diagramm_leistung">
                                    <div>
                                        <div className="kurveCheckbox" hidden={this.state.kurvehidden}>
                                          {/*  {checkbox}*/}
                                            <div style={{color: '#2980B9'}}> {this.state.testArrayDatum.date}</div>
                                            <Confirmbutton onClick={this.setDiagramm} myStyle={{
                                                padding: '2px',
                                                marginTop: '2px',
                                                paddingRight: '15px',
                                                paddingLeft: '15px'
                                            }}>
                                                Zum SpinnenDiagramm
                                            </Confirmbutton>
                                        </div>
                                        <Confirmbutton onClick={this.setDiagramm} hidden={this.state.spineHidden}
                                                       myStyle={{
                                                           padding: '2px',
                                                           marginTop: '2px',
                                                           paddingRight: '15px',
                                                           paddingLeft: '15px'
                                                       }}>
                                            Zum Kurvendiagramm
                                        </Confirmbutton>
                                    </div>
                                    {this.state.diagramm === this.state.kurve ?
                                        <BalkenDiagramm attribute={this.state.arraykurve}/> :
                                        <SpineDiagramm  beweglichtkeit={this.state.testArrayDatum.bew}
                                                        reaction={this.state.testArrayDatum.react}
                                                        koordination={this.state.testArrayDatum.koord}
                                                        sprint={this.state.testArrayDatum.sprint}
                                                        JandR={this.state.testArrayDatum.JnR}
                                                        med_ball={this.state.testArrayDatum.medBall}
                                                        stws={this.state.testArrayDatum.StWS}
                                                        agilitaet={this.state.testArrayDatum.agil}
                                                        borg={this.state.testArrayDatum.BORG}
                                                        beep_test={this.state.testArrayDatum.Bleep}/>}
                                </div>
                            </div>
                            <div hidden={this.state.hidde_alte_TestBaterie} className="orangeContainer">
                                <div className="container_alte_testBaterie">
                                    <div>
                                        <div className='alte_test_Daten'>
                                            <Input type="date"/>
                                            <Input type="date"/>
                                        </div>
                                        <AlteTestBaterieView
                                            beweglichtkeit={this.state.testArrayDatum.beweglichtkeit}
                                            reaction={this.state.testArrayDatum.reaction}
                                            koordination={this.state.testArrayDatum.koordination}
                                            sprint={this.state.testArrayDatum.sprint}
                                            JandR={this.state.testArrayDatum.JandR}
                                            med_ball={this.state.testArrayDatum.med_ball}
                                            stws={this.state.testArrayDatum.stws}
                                            agilitaet={this.state.testArrayDatum.agilitaet}
                                            borg={this.state.testArrayDatum.borg}
                                            beep_test={this.state.testArrayDatum.beep_test}/>
                                    </div>

                                    <div className='alte_Test_kurve'>
                                        <KurvenDiagramm attribute={this.state.arraykurve}/>
                                    </div>


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

/**  @components */
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