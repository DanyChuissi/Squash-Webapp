import React, {Component} from 'react';
import Confirmbutton from "../UI/Confirmbutton";
import 'react-table/react-table.css';
import Label from "react-bootstrap/es/Label";
import 'react-widgets/dist/css/react-widgets.css';
import ReactTable from "react-table";
import Popup from "reactjs-popup";
import AddExerciseView from "./AddExerciseView";
import CopyWorkout from "./CopyWorkout";
import CreateMAZ from "./CreateMAZ";
import "./MAZ.css"
import axios from "axios";
import {Route} from "react-router-dom";
import MAZView from "./MAZView";

/**
 * @author Daniela
 * This is a Listview for all MAZs of an Athlet. There is a Modal for creating a new MAZ.
 * @visibleName MAZListView
 **/

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

class MAZListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: {},
            selectAll: 0,
            dataMAZ: [],
            triggerCopyMAZ: false,
            triggerCreateMAZ: false,
        };
    }

    onRowClick = (state, rowInfo, column, instance) => {
        return {
            onDoubleClick: e => {
                console.log('A Td Element was clicked!')
                console.log('it produced this event:', e)
                console.log('It was in this column:', column)
                console.log('It was in this row:', rowInfo)
                console.log('It was in this table instance:', instance)
                this.setState({rowInfos: rowInfo})
                this.props.callbackFromParent(rowInfo.original.mazId);
                console.log('Index Row', rowInfo.index)
                console.log('Index email', rowInfo.original.email)
                window.location='/mazDetail/'+rowInfo.original.mazId
            }
        }
    }
    /**This Method passes a MAZID to the Navigator, where it will be passed to the MAZView Component**/
    /*someFn = () => {
        var i = 8;
        this.props.callbackFromParent(i);
    }*/

    componentWillMount() {

        var mazList;
        axios.get(`http://172.22.24.243:50600/makrozyklus/getMacrocyclesOfUser?email=dani@test.de`)
            .then(res => {
                mazList = res.data;
                console.log(mazList);
                for (let i = 0; i < mazList.length; i++) {
                    console.log(mazList[i].mazId);
                }
                this.setState({dataMAZ: mazList});
            })
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error))
        return mazList;
    }


    openCopyMAZ = (e) => {
        this.setState({
            triggerCopyWorkout: true,
        })
    }
    cancelCopyMAZ = (e) => {
        this.setState({
            triggerCopyWorkout: false,
        })
    }
    createCopyMAZ = (e) => {
        alert("Übung hinzugefügt")
        this.setState({
            triggerCopyWorkout: false,
        })
    }
    openCreateMAZ = (e) => {
        this.setState({
            triggerCreateMAZ: true,
        })
    }
    cancelCreateMAZ = (e) => {
        this.setState({
            triggerCreateMAZ: false,
        })
    }
    createCreateMAZ = (e) => {
        alert("MAZ hinzugefügt")
        this.setState({
            triggerCreateMAZ: false,
        })
    }

    MAZViewRoute() {
        return (
            <div>
                <MAZView/>
            </div>
        );
    }

    render() {
        const ModalCreateMAZ = () => (
            <Popup open={this.state.triggerCreateMAZ} position={"top left"} closeOnDocumentClick={true}>
                <div style={modalStyle}>
                    <CreateMAZ createMAZ={this.createCreateMAZ} cancelMAZ={this.cancelCreateMAZ}/>
                </div>
            </Popup>
        )

        const ModalCopyMAZ = () => (
            <Popup open={this.state.triggerCopyMAZ} position={"top left"} closeOnDocumentClick={true}>
                <div style={modalStyle}>
                    <CopyWorkout confirmCopyWorkout={this.createCopyWorkout}
                                 cancelCopyWorkout={this.cancelCopyWorkout}/>
                </div>
            </Popup>
        )
        return (
            <div id={"mAZListView"}>
                <h2>Macrozyklenübersicht</h2>

                <ReactTable
                    style={{
                        height: "calc(100vh - 300px)",
                        textAlign: "center",// This will force the table body to overflow and scroll, since there is not enough room
                    }}
                    id={"mAZList"}
                    data={this.state.dataMAZ}
                    columns={[
                        {
                            Header: "ID",
                            accessor: "mazId",
                            width: 300
                        },
                        {
                            Header: "Name",
                            accessor: "name",
                            width: 300
                        },
                        {
                            Header: "Start",
                            accessor: "startdatum",
                            width: 300
                        },
                        {
                            Header: "Ende",
                            accessor: "enddatum",
                            width: 300
                        }
                    ]}
                    getTdProps={this.onRowClick}
                    defaultPageSize={5}
                    previousText={'Zurück'}
                    nextText={'Nächste'}
                    loadingText={'Laden...'}
                    noDataText={'Keine Macrozyklen vorhanden'}
                    pageText={'Seite'}
                    ofText={'von'}
                    rowsText={'Zeile'}
                />
                <Confirmbutton id={"addMAZButton"} onClick={this.openCreateMAZ}>Neuen MAZ hinzufügen</Confirmbutton>
                <ModalCopyMAZ/>
                <ModalCreateMAZ/>
                <Route path={"/mAZList/detail"} component={this.MAZViewRoute}/>
            </div>

        );
    }

}


export default MAZListView;
