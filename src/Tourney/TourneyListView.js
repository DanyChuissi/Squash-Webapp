import React, {Component} from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css'
import Confirmbutton from "../UI/Confirmbutton";
import "../UI/UIStylesheet.css"
import "./Tourney.css"
import Popup from "reactjs-popup";
import AddVacationView from "../JTP/AddVacationView";
import AddTourneyView from "./AddTourneyView";

/**
 * @author Daniela
 * This View contains a List of all Tourneys. A specific period can be choosen.
 * @visibleName TourneyListView
 */

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
    paddingTop: '10%',
    paddingBottom:'10%',
    paddingLeft:'20%',
    paddingRight:'20%',
};



class TourneyListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: {},
            selectAll: 0,
            data: makeData(),
            rowInfos: [],
            id: '',
            ort: '',
            link: '',
            titel: '',
            startdDate: '',
            endDate: '',
            turniere: [],
            sucheVon: '',
            sucheBis: '',
            search: false,
        };
    }
    state = {
        triggerCreateTourney: false,
        triggerEditTourney:false,

    }

    componentDidMount(): void {
        var url = "http://172.22.24.243:50609/Tournament"
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        turniere: result
                    });
                    console.log(this.state.turniere)
                    console.log(url)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                    console.log(error)
                }
            ).then((responseJson) => {
        })
    }

    postTurniere = () => {
        fetch("http://1172.22.24.243:50609/Tournament", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tournamentName: this.state.titel,
                tournamentVenues: this.state.ort,
                vonDate: this.state.startdDate,
                bisDate: this.state.endDate,
                link: this.state.link
            })
        }).then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
        alert("Turnier gespeichert");
    }

    suchen=() => {
        var url = "http://172.22.24.243:50609/Tournament/findbyDate?VonDate="+this.state.sucheVon+" &BisDate="+this.state.sucheBis+" ";
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        turniere: result,
                        suchen: true,
                    });
                    console.log(this.state.turniere)
                    console.log(url)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                    console.log(error)
                }
            ).then((responseJson) => {
        })
    }
    setTitel=(e)=>{
        this.setState({
            titel:e.target.value,
        })
    }
    setSucheVon=(e)=>{

        this.setState({
            sucheVon:e.target.value,
        })
    }
    setSucheBis=(e)=>{
        this.setState({
            sucheBis:e.target.value,
        })
    }
    setLink=(e)=>{
        this.setState({
            link:e.target.value,
        })
    }
    setStartDate=(e)=>{
        this.setState({
            startDate:e.target.value,
        })
    }
    setEndDate=(e)=>{
        this.setState({
            endDate:e.target.value,
        })
    }
    setOrt=(e)=>{
        this.setState({
            ort:e.target.value,
        })
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
            suchen: false,
        })
    }

    getTurniereFromId=(id) =>{
        let erg = null;
        this.state.turniere.map( (daten) => {
            if(daten.id === id){
                erg = daten
            }
        });
        return erg;
    }

    onRowClick = (state, rowInfo, column, instance) => {
        return {
            onDoubleClick: e => {
                if( typeof rowInfo !== "undefined") {
                console.log('A Td Element was clicked!')
                console.log('it produced this event:', e)
                console.log('It was in this column:', column)
                console.log('It was in this row:', rowInfo)
                console.log('It was in this table instance:', instance)
                this.setState({rowInfos: rowInfo})
                console.log('Index Row', rowInfo.index)
                console.log('Index email', rowInfo.original.id)
                var tournier = this.getTurniereFromId(rowInfo.original.id)

                    this.setState({
                        titel: tournier.tournamentName,
                        ort: tournier.tournamentVenues,
                        link: tournier.link,
                        startDate: tournier.vonDate,
                        endDate: tournier.bisDate,
                        id: tournier.id,
                        search: true,
                        triggerCreateTourney: true,


                    })
                }
            }
        }
    }

    render() {
        const ModalCreateTourney=()=>(  <Popup open={this.state.triggerCreateTourney} position={"top left"} closeOnDocumentClick={true}>
                <div style={modalStyle}>
                    {this.state.search?<AddTourneyView
                        createTourney={this.createTourney}
                        cancelTourney={this.cancelTourney}
                        setTitel={this.setTitel}
                        setOrt={this.setOrt}
                        setStardDate={this.setStartDate}
                        setEndDate={this.setEndDate}
                        setLink={this.setLink}
                        state={this.state}
                         titel={this.state.titel}
                    ort={this.state.ort}
                    link={this.state.link}
                    von={this.state.startdDate}
                    bis={this.state.endDate}
                    search={this.state.search}/>:
                        <AddTourneyView
                        createTourney={this.createTourney}
                        cancelTourney={this.cancelTourney}
                        setTitel={this.setTitel}
                        setOrt={this.setOrt}
                        setStardDate={this.setStartDate}
                        setEndDate={this.setEndDate}
                        setLink={this.setLink}
                        state={this.state}
                       />}
                </div>
            </Popup>
        )


        const columns = [
            {
                Header: "Titel",
                accessor: "tournamentName",
                width: 200,
                filterable: true,
            },
            {
                Header: "Ort",
                accessor: "tournamentVenues",
                width: 200,
                filterable: true,
            },
            {
                Header: "Von",
                accessor: "vonDate",
                width: 120,
                filterable: true,
            },
            {
                Header: "Bis",
                accessor: "bisDate",
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
                                    onChange={this.setSucheVon}/>
                            <h4>Bis: </h4>
                            <input type="date" id="end" name="trip-start"
                                    onChange={this.setSucheBis}/>
                        </div>
                        <div id={"addTourneyAtTourneyView"}>
                            <Confirmbutton onClick={this.suchen}>In Zeitraum suchen</Confirmbutton>
                            <Confirmbutton onClick={this.addTourney} >Turnier hinzufügen</Confirmbutton></div>
                    </div>
                    <div id={"time"}>
                       <ReactTable id={"tourneyList"} data={this.state.turniere}
                                    columns={columns}
                                    defaultPageSize={5}
                                    defaultSorted={[{id: "firstName", desc: false}]}
                                    previousText={'Zurück'}
                                    nextText={'Nächste'}
                                    loadingText={'Laden...'}
                                    getTdProps={this.onRowClick}
                                    previousText={'Zurück'}
                                    nextText={'Nächste'}
                                    loadingText={'Laden...'}
                                    noDataText={'Keine Turniere gefunden'}
                                    pageText={'Seite'}
                                    ofText={'von'}
                                    rowsText={'Zeile'}
                                    style={{
                                        height: "calc(100vh - 250px)" // This will force the table body to overflow and scroll, since there is not enough room
                                    }}/>

                    </div>
                    <ModalCreateTourney/>
                </div>
            </div>


        );
    }
}

export default TourneyListView;
