import React, {Component} from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import Confirmbutton from "../UI/Confirmbutton";
import "../UI/UIStylesheet.css"
import "./Tourney.css"
import Popup from "reactjs-popup";
import AddVacationView from "../JTP/AddVacationView";
import AddTourneyView from "./AddTourneyView";

function makeData() {
    return [
        {
            title: "judge",
            location: "March",
            from: "Test3",
            to: "",
            link: "http://test.de",
        },
        {
            title: "judge",
            location: "March",
            from: "Test3",
            to: "",
            link: "http://test.de",
        },
        {
            title: "judge",
            location: "March",
            from: "Test3",
            to: "",
            link: "http://test.de",
        },]
}

const modalStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: '20%'
};

class TourneyListView extends Component {
    constructor(props) {
        super(props);
        this.state = {selected: {}, selectAll: 0, data: makeData()};
    }
    state = {
        triggerCreateTourney: false,
        triggerEditTourney:false,

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
    editTourney=(e)=>{
        this.setState({
            triggerEditTourney:true,
        })
    }
    editTourneySave=(e)=>{
        this.setState({
            triggerEditTourney:true,
        })
    }
    cancelEditTourney=(e)=>{
        this.setState({
            triggerEditTourney:false,
        })
    }
    render() {
        const ModalCreateTourney=()=>(  <Popup open={this.state.triggerCreateTourney} position={"top left"} closeOnDocumentClick={true}>
                <div style={modalStyle}>
                    <AddTourneyView createTourney={this.createTourney} cancelTourney={this.cancelTourney}/>
                </div>
            </Popup>
        )

        const columns = [
            {
                Header: "Titel",
                accessor: "title",
                width: 200,
                filterable: true,
            },
            {
                Header: "Ort",
                accessor: "location",
                width: 200,
                filterable: true,
            },
            {
                Header: "Von",
                accessor: "from",
                width: 120,
                filterable: true,
            },
            {
                Header: "Bis",
                accessor: "to",
                width: 120,
                filterable: true,
            },
            {
                Header: "Link",
                accessor: "link",
                width: 370

            },
        ]
        return (
            <div>
                <div id={"tourneyListView"}>
                    <div id={"tourneyListViewTop"}>
                        <div id={"tourneyListViewTopLeft"}>
                            <h4>Von: </h4>
                            <input type="date" id="start" name="trip-start"
                                   value="2018-07-22"
                                   min="2018-01-01" max="2018-12-31"/>
                            <h4>Bis: </h4>
                            <input type="date" id="end" name="trip-start"
                                   value="2018-07-22"
                                   min="2018-01-01" max="2018-12-31"/>
                        </div>
                        <div id={"addTourneyAtTourneyView"}>
                            <Confirmbutton onClick={this.addTourney} >Turnier hinzufügen</Confirmbutton></div>
                    </div>
                    <div id={"time"}>
                        <ReactTable id={"tourneyList"} data={this.state.data}
                                    columns={columns}
                                    defaultPageSize={5}
                                    defaultSorted={[{id: "firstName", desc: false}]}
                                    previousText={'Zurück'}
                                    nextText={'Nächste'}
                                    loadingText={'Laden...'}
                                    getTdProps={this.onRowClick}/>
                    </div>
                    <ModalCreateTourney/>
                </div>
            </div>


        );
    }
}

export default TourneyListView;
