import React, {Component} from 'react';
import Confirmbutton from "../UI/Confirmbutton";
import 'react-table/react-table.css';
import 'react-widgets/dist/css/react-widgets.css';
import ReactTable from "react-table";
import Popup from "reactjs-popup";
import AddExerciseView from "./AddExerciseView";
import CopyWorkout from "./CopyWorkout";
import axios from 'axios';

/**
 * @author Daniela
 * This View shows the componens of a specific MAZ. One can click on the Workout and get the exercise.
 * @visibleName MAZView
 **/

const daysOfWeek = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"];
const modalStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingTop: 'auto',
    paddingBottom: 'auto',
};

class MAZView extends Component {
    constructor({id}) {
        super();
        this.state = {
            selected: {},
            selectAll: 0,
            dataExercise: makeDataExercise(),
            triggerCreateExercise: false,
            triggerCopyWorkout: false,
            id
        };
    }

    state = {
        mazidView: '',
        mazName: '',
        mazAthletName: '',
        mazDescription: '',
        mazPhase: '',
        mazStart: '',
        mazEnd: '',
        mazNote: '',
        mazEmphasis: [],
        trainingsdata: [],
        excercises:[],
        mazEmphasisDescription: '',
    }


    addExercise = (e) => {
        this.setState({
            triggerCreateExercise: true,
        })
    }
    cancelAddExercise = (e) => {
        this.setState({
            triggerCreateExercise: false,
        })
    }
    createExercise = (e) => {
        alert("Übung hinzugefügt")
        this.setState({
            triggerCreateExercise: false,
        })
    }

    openCopyWorkout = (e) => {
        this.setState({
            triggerCopyWorkout: true,
        })
    }
    cancelCopyWorkout = (e) => {
        this.setState({
            triggerCopyWorkout: false,
        })
    }
    createCopyWorkout = (e) => {
        alert("Übung hinzugefügt")
        this.setState({
            triggerCopyWorkout: false,
        })
    }

    parseDaysOfWeek(workout) {
        var x = " ";
        for (let i = 0; i < workout.wochentage.length; i++) {
            x = x + workout.wochentage[i].bezeichnung + ", ";
        }
        workout.wochentage = x;
    }

    parseEmphasis(emphasis) {
        var x = " ";
        for (let i = 0; i < emphasis.length; i++) {
            x = x + emphasis[i].bezeichnung + ", ";
        }
        this.setState({mazEmphasisDescription: x})
    }
    onRowClick = (state, rowInfo, column, instance) => {
        return {
            onDoubleClick: e => {
                console.log('A Td Element was clicked!')
                console.log('it produced this event:', e)
                console.log('It was in this column:', column)
                console.log('It was in this row:', rowInfo)
                console.log('It was in this table instance:', instance)
                this.setState({excercises: rowInfo.original.uebungen})

            }
        }
    }
    componentDidMount() {

        axios.get(`http://172.22.24.243:50600/makrozyklus/getMacrocyclesById?id=` + this.props.match.params.id)
            .then(res => {
                const maz = res.data;
                this.setState({maZName: maz.name});
                this.setState({mazAthletName: maz.email});
                this.setState({mazDescription: maz.beschreibung});
                this.setState({mazPhase: maz.phase});
                this.setState({mazEnd: maz.enddatum});
                this.setState({mazStart: maz.startdatum});
                this.setState({mazNote: maz.hinweis});
                console.log(maz.trainingseinheiten);
                const training = maz.trainingseinheiten;

                for (let j = 0; j < training.length; j++) {
                    var weekdays = " ";
                    for (let i = 0; i < training[j].wochentage.length; i++) {
                        console.log(training[j].wochentage[i].bezeichnung);
                        weekdays = weekdays + training[j].wochentage[i].bezeichnung;
                    }
                    training[j].wochentage = weekdays;
                }

                this.setState({trainingsdata: training});

                this.setState({mazidView: this.props.mazId});
                this.parseEmphasis(maz.schwerpunkte);
            }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
    }

    render() {

        const {
            createWorkout,
            cancelWorkout,
            copyWorkout,

            mazIdPassed,
            mazName,
            mazAthletName,
            mazDescription,
            mazPhase,
            mazStart,
            mazEnd,
            mazNote,
            mazEmphasis,

        } = this.props

        const columnsExercises = [
            {
                Header: "Bezeichnung",
                accessor: "uebungsbezeichnung",
                width: 330
            },
            {
                Header: "Dauer [min]",
                accessor: "dauerInMinuten",
                width: 330
            },
            {
                Header: "Hinweise",
                accessor: "uebungshinweise",
                width: 330
            },
        ];
        const columnsWorkout = [
            {
                Header: "Bezeichnung",
                accessor: "trainingsbezeichnung",
                width: 300
            },
            {
                Header: "Wochentage",
                accessor: "wochentage",
                width: 300
            },
            {
                Header: "Gesamtdauer in Minuten",
                accessor: "dauerInMin",
                width: 280
            },
            {
                Header: "Hinweise",
                accessor: "trainingshinweise",
                width: 300
            },
        ];

        const ModalCreateExercise = () => (
            <Popup open={this.state.triggerCreateExercise} position={"top left"} closeOnDocumentClick={true}>
                <div style={modalStyle}>
                    <AddExerciseView createExercise={this.createExercise} cancelExercise={this.cancelAddExercise}/>
                </div>
            </Popup>
        )

        const ModalCopyWorkout = () => (
            <Popup open={this.state.triggerCopyWorkout} position={"top left"} closeOnDocumentClick={true}>
                <div style={modalStyle}>
                    <CopyWorkout confirmCopyWorkout={this.createCopyWorkout}
                                 cancelCopyWorkout={this.cancelCopyWorkout}/>
                </div>
            </Popup>
        )


        return (
            <div id={"detailMAZView"}>
                <h1>Macrozyclus {this.state.mazName}</h1>
                <div id={"mAZDetailInfos"}>
                    <div id={"mAZDetailInfosLeft"}>
                        <label>Athlet</label> <p>{this.state.mazAthletName}</p>
                        <label>Bezeichnung</label> <p>{this.state.mazDescription} </p>
                        <label>Phase</label> <p>{this.state.mazPhase} </p>
                    </div>
                    <div id={"mAZDetailInfosRight"}>
                        <label>Startdatum</label><p>{this.state.mazStart} </p>
                        <label>Enddatum</label> <p> {this.state.mazEnd}</p>
                        <label>Schwerpunkte</label> <p>{this.state.mazEmphasisDescription}</p>
                        <label>Hinweise</label> <p>{this.state.mazNote}</p>
                    </div>
                </div>

                <div id={"mAZWorkoutList"}>


                    <h2>Trainingseinheiten </h2>
                    <ReactTable
                        style={{
                            height: "calc(100vh - 300px)",
                            backgroundColor: "whitesmoke",
                            marginLeft: "1%",
                            marginRight: "1%",// This will force the table body to overflow and scroll, since there is not enough room
                        }}
                        columns={columnsWorkout}
                        data={this.state.trainingsdata}
                        getTdProps={this.onRowClick}
                        id={"exerciseList"}
                        columns={columnsWorkout}
                        defaultPageSize={5}
                        previousText={'Zurück'}
                        nextText={'Nächste'}
                        loadingText={'Laden...'}
                        noDataText={'Keine Trainingseinheiten vorhanden'}
                        pageText={'Seite'}
                        ofText={'von'}
                        rowsText={'Zeile'}
                    />
                    <div id={"mAZWorkoutListButtons"}>
                        <Confirmbutton>Trainingseinheit hinzufügen</Confirmbutton>
                        <Confirmbutton id={"copyWorkoutButton"} onClick={this.openCopyWorkout}>Trainingseinheit
                            kopieren</Confirmbutton>
                    </div>

                </div>
                <div id={"mAZExcerciseLists"}>

                    <h2>Übungen zur ausgewählten Trainingseinheit</h2>
                    <ReactTable
                        style={{
                            height: "calc(100vh - 300px)",// This will force the table body to overflow and scroll, since there is not enough room
                            backgroundColor: "whitesmoke",
                            marginLeft: "1%",
                            marginRight: "1%",
                        }}
                        id={"exerciseList"}
                        data={this.state.excercises}
                        columns={columnsExercises}
                        defaultPageSize={5}
                        previousText={'Zurück'}
                        nextText={'Nächste'}
                        loadingText={'Laden...'}
                        noDataText={'Keine Übungen vorhanden'}
                        pageText={'Seite'}
                        ofText={'von'}
                        rowsText={'Zeile'}
                    />
                    <div id={"mAZExcerciseListsButton"}>
                        <Confirmbutton id={"addExerciseButton"} onClick={this.addExercise}>Neue Übung
                            hinzufügen</Confirmbutton>
                    </div>


                </div>

                <ModalCreateExercise/>
                <ModalCopyWorkout/>
            </div>

        );
    }

}

function makeDataExercise() {
    return []
}

export default MAZView;
