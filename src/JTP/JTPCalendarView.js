import React, {Component} from 'react';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../App.css';
import 'moment/locale/de';
import './JTP.css';
import Popup from "reactjs-popup";

import CreateMAZ from "./CreateMAZ";
import Confirmbutton from "../UI/Confirmbutton";
import Checkbox from "react-bootstrap/es/Checkbox";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import {Dropdown} from "react-simple-dropdown";
import ReactTable from "react-table";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import AddVacationView from "./AddVacationView";
import AddTourneyView from "../Tourney/AddTourneyView";
import HeaderProfileView from "../UI/HeaderProfilView";
import {myFunction} from "../UI/HeaderProfilController";

const modalStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingLeft: '10%',
    paddingRight:'10%',
    paddingTop:'auto',
    paddingBottom:'auto',

};

const modalStyleTourney = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingLeft: '15%',
    paddingRight:'15%',
    paddingTop:'10%',
    paddingBottom:'auto',

};
class JTPCalendarView extends Component {

    constructor(props) {
        super(props);
        this.state = {selected: {}, selectAll: 0, data: makeDataTraining(), comments: makeDataComment(),};
    }

    state = {
        culture: 'de',
        triggerCreateMAZ: false,
        triggerCreateVacations: false,
        triggerCreateTourney:false,
    }
    addTourney=(e)=>{
        this.setState({
            triggerCreateTourney:true,
        })
    }
    cancelTourney=(e)=>{
        this.setState({
            triggerCreateTourney:false,
        })
    }
    createTourney=(e)=>{
        alert("Turnier hinzugefügt")
        this.setState({
            triggerCreateTourney:false,
        })
    }
    createVacation = (e) => {
        this.setState({
            triggerCreateVacations: true,
        })
    }

    addVacation = (e) => {
        alert("MAZ hinzugefügt");
        this.setState({
            triggerCreateVacations: false,
        })
    }

    cancelVacation = (e) => {
        this.setState({
            triggerCreateVacations: false,
        })
    }

    createMAZ = (e) => {
        this.setState({
            triggerCreateMAZ: true,
        })
    }

    addMAZ = (e) => {
        alert("MAZ hinzugefügt");
        this.setState({
            triggerCreateMAZ: false,
        })
    }

    cancelMAZ = (e) => {
        this.setState({
            triggerCreateMAZ: false,
        })
    }

    render() {

        const modifiers = {
            coordination: {daysOfWeek: [4]},
            condition: {daysOfWeek: [5]},
            strength: {daysOfWeek: [3]},
            speediness: {daysOfWeek: [2]},
            flexibility: {daysOfWeek: [1]},
            technique: {daysOfWeek: [6]},
            mental: {daysOfWeek: [7]},
            mixTest: new Date(2019, 2, 2),
            performanceDiagnostics: new Date(2019, 1, 2),
            coordinationCondition: new Date(2019, 1, 3),
            coordinationStrength: new Date(2019, 1, 4),
            coordinationSpeediness: new Date(2019, 1, 5),
            coordinationFlexibility: new Date(2019, 1, 6),
            coordinationTechnique: new Date(2019, 1, 7),
            coordinationMental: new Date(2019, 1, 8),
            coordinationPerformanceDiagnostics: new Date(2019, 1, 9),
            conditionStrength: new Date(2019, 1, 10),
            conditionSpeediness: new Date(2019, 1, 11),
            conditionFlexibility: new Date(2019, 1, 12),
            conditionTechnique: new Date(2019, 1, 13),
            conditionMental: new Date(2019, 1, 14),
            conditionPerformanceDiagnostics: new Date(2019, 1, 15),
            strengthFlexibility: new Date(2019, 1, 16),
            strengthTechnique: new Date(2019, 1, 17),
            strengthMental: new Date(2019, 1, 18),
            strengthPerformanceDiagnostics: new Date(2019, 1, 19),
            speedinessFlexibility: new Date(2019, 1, 20),
            speedinessTechnique: new Date(2019, 1, 21),
            speedinessMental: new Date(2019, 1, 22),
            speedinessPerformanceDiagnostics: new Date(2019, 1, 23),
            flexibilityTechnique: new Date(2019, 1, 24),
            flexibilityMental: new Date(2019, 1, 25),
            flexibilityPerformanceDiagnostics: new Date(2019, 1, 25),
            techniqueMental: new Date(2019, 1, 26),
            techniquePerformanceDiagnostics: new Date(2019, 1, 27),
            mentalPerformanceDiagnostics: new Date(2019, 1, 28),
            vacation: new Date(2019, 4, 4),
            training: new Date(2019, 4, 5),
            tourney: new Date(2019, 4, 6),
            goal: new Date(2019, 4, 7),
        };
        const modifiersStyles = {

            coordinationCondition: {
                backgroundImage: 'linear-gradient(90deg, #51b749 50%, #7ae7bf 50%)',
            },
            coordinationStrength: {
                backgroundImage: 'linear-gradient(90deg, #51b749 50%, #ff887c 50%)',
            },
            coordinationSpeediness: {
                backgroundImage: 'linear-gradient(90deg, #51b749 50%, #fbd75b 50%)',
            },
            coordinationFlexibility: {
                backgroundImage: 'linear-gradient(90deg, #51b749 50%, #5484ed 50%)',
            },
            coordinationTechnique: {
                backgroundImage: 'linear-gradient(90deg, #51b749 50%, #dc2127 50%)',
            },
            coordinationMental: {
                backgroundImage: 'linear-gradient(90deg, #51b749 50%, #dbadff 50%)',
            },
            coordinationPerformanceDiagnostics: {
                backgroundImage: 'linear-gradient(90deg, #51b749 50%, #bfa473 50%)',
            },
            conditionStrength: {
                backgroundImage: 'linear-gradient(90deg, #7ae7bf 50%, #ff887c 50%)',
            },
            conditionSpeediness: {
                backgroundImage: 'linear-gradient(90deg, #7ae7bf 50%, #fbd75b 50%)',
            },
            conditionFlexibility: {
                backgroundImage: 'linear-gradient(90deg, #7ae7bf 50%, #5484ed 50%)',
            },
            conditionTechnique: {
                backgroundImage: 'linear-gradient(90deg, #7ae7bf 50%, #dc2127 50%)',
            },
            conditionMental: {
                backgroundImage: 'linear-gradient(90deg, #7ae7bf 50%, #dbadff 50%)',
            },
            conditionPerformanceDiagnostics: {
                backgroundImage: 'linear-gradient(90deg,#7ae7bf 50%, #bfa473 50%)',
            },
            strengthFlexibility: {
                backgroundImage: 'linear-gradient(90deg, #ff887c 50%, #5484ed 50%)',
            },
            strengthTechnique: {
                backgroundImage: 'linear-gradient(90deg, #ff887c 50%, #dc2127 50%)',
            },
            strengthMental: {
                backgroundImage: 'linear-gradient(90deg, #ff887c 50%, #dbadff 50%)',
            },
            strengthPerformanceDiagnostics: {
                backgroundImage: 'linear-gradient(90deg, #ff887c 50%, #bfa473 50%)',
            },
            speedinessFlexibility: {
                backgroundImage: 'linear-gradient(90deg, #fbd75b 50%, #5484ed 50%)',
            },
            speedinessTechnique: {
                backgroundImage: 'linear-gradient(90deg, #fbd75b 50%, #dc2127 50%)',
            },
            speedinessMental: {
                backgroundImage: 'linear-gradient(90deg, #fbd75b 50%, #dbadff 50%)',
            },
            speedinessPerformanceDiagnostics: {
                backgroundImage: 'linear-gradient(90deg, #fbd75b 50%, #bfa473 50%)',
            },
            flexibilityTechnique: {
                backgroundImage: 'linear-gradient(90deg,#5484ed 50%, #dc2127 50%)',
            },
            flexibilityMental: {
                backgroundImage: 'linear-gradient(90deg, #5484ed 50%, #dbadff 50%)',
            },
            flexibilityPerformanceDiagnostics: {
                backgroundImage: 'linear-gradient(90deg, #5484ed 50%, #bfa473 50%)',
            },
            techniqueMental: {
                backgroundImage: 'linear-gradient(90deg, #dc2127 50%, #dbadff 50%)',
            },
            techniquePerformanceDiagnostics: {
                backgroundImage: 'linear-gradient(90deg, #dc2127 50%, #bfa473 50%)',
            },
            mentalPerformanceDiagnostics: {
                backgroundImage: 'linear-gradient(90deg, #dbadff 50%, #bfa473 50%)',
            },

            condition: {
                backgroundColor: '#7ae7bf',
            },
            strength: {
                backgroundColor: '#ff887c',
            },
            speediness: {
                backgroundColor: '#fbd75b',
            },
            flexibility: {
                backgroundColor: '#5484ed',
            },
            technique: {
                backgroundColor: '#dc2127',
            },
            mental: {
                backgroundColor: '#dbadff',
            },
            performanceDiagnostics: {
                backgroundColor: '#bfa473',
            },
            coordination: {
                backgroundColor: '#51b749',
            },
            training: {
                backgroundColor: '#4abfe7',
            },
            tourney: {backgroundColor: '#4abfe7',},
            goal: {backgroundColor: '#4abfe7',},
            vacation: {
                backgroundColor: '#4abfe7',
            },
            outside: {
                backgroundImage: '#e1e1e1',
                backgroundColor: '#e1e1e1',
            },
        };

        const columnsComments = [
            {
                Header: "Kommentar",
                accessor: "comment",
                width: 300
            },
            {
                Header: "Autor",
                accessor: "author",
                width: 130
            },
        ];

        const columnsDayDetails = [
            {
                Header: "Termin",
                accessor: "appointment",
                width: 300
            },
        ];

        const columnsMAZ = [
            {
                Header: "Trainingseinheit",
                accessor: "trainingsName",
                width: 130
            },
            {
                Header: "Wochentag(e)",
                accessor: "daysOfWeek",
                width: 120
            },
            {
                Header: "Übungen",
                accessor: "practise",
                width: 120
            },
            {
                Header: "Dauer [min]",
                accessor: "period",
                width: 100
            },
            {
                Header: "Hinweise",
                accessor: "notes",
                width: 130
            },
            {
                Header: "Gesamtdauer",
                accessor: "holePeriod",
                width: 130
            },
        ];

        const {
            mazDescription,
            mazPhase,
            mazStartDate,
            mazEndDate,
            mazEmpfasis,
            mazNotes,
        } = this.props;

        const ModalCreateMAZ = () => (
            <Popup open={this.state.triggerCreateMAZ} position={"top left"} closeOnDocumentClick={true}>
                <div style={modalStyle}>
                    <CreateMAZ createMAZ={this.addMAZ} cancelMAZ={this.cancelMAZ}/>
                </div>
            </Popup>
        )
        const ModalCreateVacations = () => (
            <Popup open={this.state.triggerCreateVacations} position={"top left"} closeOnDocumentClick={true}>
                <div style={modalStyle}>
                    <AddVacationView createMAZ={this.addMAZ} cancelVacation={this.cancelVacation}/>
                </div>
            </Popup>
        )
        const ModalCreateTourney = () => (
            <Popup open={this.state.triggerCreateTourney} position={"top left"} closeOnDocumentClick={true}>
                <div style={modalStyleTourney}>
                    <AddTourneyView createTourney={this.createTourney} cancelTourney={this.cancelTourney}/>
                </div>
            </Popup>
        )

        return (
            <div id={"jTPView"}>
                <HeaderProfileView email = {"test"}  myFunction={myFunction}>
                    <HeaderProfileView/>
                </HeaderProfileView>
                <div id={"jTPTop"}>
                    <div id={"jTPTopLeft"}>
                        <Confirmbutton onClick={this.createMAZ}>MAZ erstellen</Confirmbutton>
                        <Confirmbutton onClick={this.addTourney}>Turniere erstellen</Confirmbutton>
                        <Confirmbutton onClick={this.createVacation}>Urlaub erstellen</Confirmbutton>
                        <Confirmbutton>JTP löschen</Confirmbutton>
                    </div>
                    <div id={"jTPTopRight"}>
                        <Checkbox/> Urlaubstage
                        <Checkbox/> Trainingstage
                        <Checkbox/> Turniertage
                        <Checkbox/> Ziele
                    </div>
                </div>
                <DayPicker showWeekNumbers numberOfMonths={12} modifiers={modifiers}
                           modifiersStyles={modifiersStyles}/>
                <div id={"legend"}>
                    <div id={"condition"}>
                        <h5>Ausdauer</h5>
                    </div>
                    <div id={"strength"}>
                        <h5>Stärke</h5>
                    </div>
                    <div id={"speediness"}>
                        <h5>Geschwindigkeit</h5>
                    </div>
                    <div id={"flexibility"}>
                        <h5>Flexibilität</h5>
                    </div>
                    <div id={"mental"}>
                        <h5>Mental</h5>
                    </div>
                    <div id={"performanceDiagnostics"}>
                        <h5>Leistungsdiagnostik</h5>
                    </div>
                    <div id={"coordination"}>
                        <h5>Koordination</h5>
                    </div>
                    <div id={"technique"}>
                        <h5>Technik</h5>
                    </div>
                </div>
                <div id={"jTPBottom"}>
                    <div id={"jTPCenterLeft"}>
                        <Tabs>
                            <TabList>
                                <Tab>Detail</Tab>
                                <Tab>MAZ</Tab>
                            </TabList>
                            <TabPanel>
                                <p id={"jTPDetailDayView"}>
                                    <div>
                                        <h3>KW 24, Donnerstag 3 Juli 2018</h3>
                                        <div id={"jTPCenterLeftCenter"}>
                                            <h5>Trainingsziel: </h5>
                                            <select>
                                                <option>
                                                    Endspiel
                                                </option>
                                                <option>
                                                    Halbfinale
                                                </option>
                                                <option>
                                                    Viertelfinale
                                                </option>
                                                <option>
                                                    Top 16
                                                </option>
                                            </select>
                                        </div>
                                        <div id={"jTPCenterLeftBottom"}>
                                            <h5>Handlungsziel: </h5>
                                            <textarea placeholder={"Handlungsziel einfügen"}></textarea>
                                        </div>
                                        <Confirmbutton>Bearbeiten</Confirmbutton>
                                        <Confirmbutton>Speichern</Confirmbutton>
                                    </div>
                                    <div id={"jTPCenterLeftRight"}>
                                       <h5>Infos zum Tag</h5>
                                    </div>
                                </p>
                            </TabPanel>
                            <TabPanel>
                                <div id={"jtPCenterLeftTopMAZ"}>
                                    <table id={"jTPCenterLeftMAZTable"}>
                                        <tr id={"trMAZ"}>
                                            <th id={"thMAZ"}>Bezeichnung</th>
                                            <td id={"tdMAZ"}>{mazDescription} MAZ 1</td>
                                        </tr>
                                        <tr id={"trMAZ"}>
                                            <th id={"thMAZ"}>Phase</th>
                                            <td id={"tdMAZ"}>{mazPhase} Vorbereitungsphase</td>
                                        </tr>
                                        <tr id={"trMAZ"}>
                                            <th id={"thMAZ"}>Startdatum</th>
                                            <td id={"tdMAZ"}>{mazStartDate} 01.02.18</td>
                                        </tr>
                                        <tr id={"trMAZ"}>
                                            <th id={"thMAZ"}>Enddatum</th>
                                            <td id={"tdMAZ"}>{mazEndDate} 01.03.18</td>
                                        </tr>
                                    </table>
                                    <div id={"jtPCenterLeftTopMAZNotes"}>
                                        <h5>Hinweise zu MAZ</h5>
                                        <textarea>{mazNotes}</textarea>
                                    </div>
                                    <div id={"jtPCenterLeftButtons"}>
                                        <Confirmbutton>Bearbeiten</Confirmbutton>

                                        <Confirmbutton>Löschen</Confirmbutton>
                                    </div>
                                </div>

                                <ReactTable
                                    id={"jtpTableMAZ"}
                                    data={this.state.data}
                                    columns={columnsMAZ}
                                    defaultPageSize={3}
                                    defaultSorted={[{id: "firstName", desc: false}]}
                                    previousText={'Zurück'}
                                    nextText={'Nächste'}
                                    loadingText={'Laden...'}
                                    noDataText={'Keine Athlete gefunden'}
                                    pageText={'Seite'}
                                    ofText={'von'}
                                    rowsText={'Zeilen'}
                                />
                                <div id={"jTPMAZButtonsBottom"}>
                                    <Confirmbutton>Trainingseinheit hinzufügen</Confirmbutton>
                                    <Confirmbutton>Bearbeiten</Confirmbutton>
                                    <Confirmbutton>Löschen</Confirmbutton>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                    <div id={"jTPCenterRight"}>
                        <h5>Kommentare</h5>
                        <Tabs>
                            <TabList>
                                <Tab>MAZ</Tab>
                                <Tab>Turnier</Tab>
                                <Tab>Urlaub</Tab>
                            </TabList>
                            <TabPanel id={"panel"}>
                                <div id={"jTPCenterRightTop"}>
                                    <textarea placeholder={"Tippe hier deine Nachricht ein"}></textarea>
                                    <Confirmbutton id={"addCommentButton"}>Hinzufügen</Confirmbutton>
                                </div>
                                <ReactTable
                                    id={"jtpTableCommentsMAZ"}
                                    data={this.state.comments}
                                    columns={columnsComments}
                                    defaultPageSize={5}
                                    defaultSorted={[{id: "author", desc: false}]}
                                    style={{
                                        height: "calc(100vh - 250px)" // This will force the table body to overflow and scroll, since there is not enough room
                                    }}
                                    previousText={'Zurück'}
                                    nextText={'Nächste'}
                                    loadingText={'Laden...'}
                                    noDataText={'Keine Athlete gefunden'}
                                    pageText={'Seite'}
                                    ofText={'von'}
                                    rowsText={'Zeile'}
                                />
                            </TabPanel>
                            <TabPanel>
                                <div id={"jTPCenterRightTop"}>
                                    <textarea placeholder={"Tippe hier deine Nachricht ein"}></textarea>
                                    <Confirmbutton id={"addCommentButton"}>Hinzufügen</Confirmbutton>
                                </div>
                                <ReactTable
                                    id={"jtpTableCommentsTourney"}
                                    style={{
                                        height: "calc(100vh - 250px)" // This will force the table body to overflow and scroll, since there is not enough room
                                    }}
                                    data={this.state.comments}
                                    columns={columnsComments}
                                    defaultPageSize={5}
                                    defaultSorted={[{id: "author", desc: false}]}
                                    previousText={'Zurück'}
                                nextText={'Nächste'}
                                loadingText={'Laden...'}
                                noDataText={'Keine Athlete gefunden'}
                                pageText={'Seite'}
                                ofText={'von'}
                                rowsText={'Zeile'}
                                />
                            </TabPanel>
                            <TabPanel>
                                <div id={"jTPCenterRightTop"}>
                                    <textarea placeholder={"Tippe hier deine Nachricht ein"}></textarea>
                                    <Confirmbutton id={"addCommentButton"}>Hinzufügen</Confirmbutton>
                                </div>

                                <ReactTable
                                    style={{
                                        height: "calc(100vh - 250px)" // This will force the table body to overflow and scroll, since there is not enough room
                                    }}
                               id={"jtpTableCommentsVacations"}
                                    data={this.state.comments}
                                    columns={columnsComments}
                                    defaultPageSize={5}
                                style={{
                                height: "calc(100vh - 250px)"// This will force the table body to overflow and scroll, since there is not enough room
                            }}
                                previousText={'Zurück'}
                                nextText={'Nächste'}
                                loadingText={'Laden...'}
                                noDataText={'Keine Athlete gefunden'}
                                pageText={'Seite'}
                                ofText={'von'}
                                rowsText={'Zeile'}
                                    defaultSorted={[{id: "author", desc: false}]}
                                />
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
                <ModalCreateMAZ/>
                <ModalCreateVacations/>
                <ModalCreateTourney/>
            </div>

        );
    }
}

function makeDataTraining() {
    return [

        {
            trainingsName: "Laufen",
            daysOfWeek: "Mo, Mi",
            practise: 16,
            period: "30",
            notes: "Nicht hinfallen",
            holePeriod: "60",
        },
        {
            trainingsName: "Laufen",
            daysOfWeek: "Mo, Mi",
            practise: 16,
            period: "30",
            notes: "Nicht hinfallen",
            holePeriod: "60",
        },
        {
            trainingsName: "Laufen",
            daysOfWeek: "Mo, Mi",
            practise: 16,
            period: "30",
            notes: "Nicht hinfallen",
            holePeriod: "60",
        },]
}

function makeDataComment() {
    return [
        {
            comment: "Finde ich gut",
            author: "Sportler 1",

        },
        {
            comment: "Steng dich mehr an",
            author: "Trainer 1",

        },
    ]
}


export default JTPCalendarView;


