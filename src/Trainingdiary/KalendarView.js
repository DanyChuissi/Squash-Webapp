import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../App.css';
import moment from "moment";
import 'moment/locale/de';
import './Kalendar.css';
import DetailsAnsichtView from "../Trainingstagebuch/DetailsAnsichtView";
import Popup from "reactjs-popup";
import HeaderProfileView from "../UI/HeaderProfilView";
import {showDropdown_Header} from "../UI/HeaderProfilController";

const modalStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 30,
    justifyContent: 'fitcontent',
    overflow: 'scroll',
};

/*
* 1 Technik
* 2 Ausdauer
* 3 Beweglichkeit
* 4 Kraft
* 5 Schnelligkeit
* 6 Taktik
* */

class KalendarView extends Component {

    state = {culture: 'de',
        trigger:false,
        isLoaded: false,
        trainingsdaten: [],
        id_event: 1,
        index: 0,
        myList: [],
        isLoaded2: false
    }
    componentDidMount(): void {
        fetch("http://172.22.24.243:50596/trainingsdaten?email="+ this.props.match.params.mail)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        trainingsdaten: result,
                    });
                    console.log(this.state.trainingsdaten)

                    let myEventsList = [];
                    if(this.state.trainingsdaten.length > 0 && this.state.isLoaded ) {
                        while (this.state.index < this.state.trainingsdaten.length) {
                            var event = {
                                id: this.state.index,
                                title: this.findTitelName(this.state.trainingsdaten[this.state.index].schwerpunkt_NR),
                                start: new Date(this.state.trainingsdaten[this.state.index].datum),
                                end: new Date(this.state.trainingsdaten[this.state.index].datum),
                            }
                            myEventsList = [...myEventsList, event];
                            this.setIndex();
                        }
                        this.setState({myList: myEventsList, istLoaded2: true})
                        console.log(myEventsList)
                    }

                },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
            this.setState({
                isLoaded:true,
                error
            });
            console.log(error)
        }
            )

    }
    findTitelName =(Schwerpunklt_Nr)=> {
        var erg = "keine Angabe";
        switch (Schwerpunklt_Nr) {
            case 1 :{erg = "Technik";  break}
            case 2 :{ erg = "Ausdauer"; break}
            case 3 :{ erg =  "Beweglichkeit"; break}
            case 4 :{erg =  "Kraft"; break}
            case 5 :{erg =  "Schnelligkeit"; break}
            case 6 :{ erg = "Taktik"; break}
            default: {erg =  "Keine Angabe"}
        }
        return erg;
    }


    displayEvent = (evnt) => {

        this.setState({
            id_event: evnt,
            trigger: true})
    }
    setIndex = () =>{
        this.setState({index: this.state.index+1});
    }

    render() {
        const{
            emailUser
        }=this.props
        const Modal =()=>(
    <Popup open={this.state.trigger} position={"top left"} closeOnDocumentClick={true}>
        <div style={modalStyle}>
            {this.state.trainingsdaten.length>0 ?<DetailsAnsichtView  datum={this.state.trainingsdaten[this.state.id_event].datum}
                                 schwerpunkt={this.state.trainingsdaten[this.state.id_event].schwerpunkt_NR}
                                 dauer={this.state.trainingsdaten[this.state.id_event].dauer}
                                 intensitaet={this.state.trainingsdaten[this.state.id_event].intensitaet}
                                 uebungen={this.state.trainingsdaten[this.state.id_event].uebungen}
                                 mentale_Ersch={this.state.trainingsdaten[this.state.id_event].mentale_erschoepfung}
                                 bemerkung={this.state.trainingsdaten[this.state.id_event].bemerkumg}
                                 koerperliche_Ersch={this.state.trainingsdaten[this.state.id_event].koerperliche_erschoepfung}
                                 muskelkarter={this.state.trainingsdaten[this.state.id_event].muskelkater}
                                 puls={this.state.trainingsdaten[this.state.id_event].pulskurve}
                                 aenderungswuensche={this.state.trainingsdaten[this.state.id_event].aenderungswuensche}
                                 schlafdauer={this.state.trainingsdaten[this.state.id_event].schlafdauer}
                                 gewicht={this.state.trainingsdaten[this.state.id_event].gewicht}
                                 maximale_herzf={this.state.trainingsdaten[this.state.id_event].max_herzfrequenz}
                                 minimale_herzf={this.state.trainingsdaten[this.state.id_event].min_herzfrequenz}
                                 durschnittliche_herzf={this.state.trainingsdaten[this.state.id_event].durch_herzfrequenz}
                                  pulskurve={this.state.trainingsdaten[this.state.id_event].pulskurve}/>: null}
        </div>
    </Popup>
    )

        console.log(this.state.myList);
        const myEventsListe = [
            {
                id: 0,
                title: 'All Day Event very long title',
                allDay: true,
                start: new Date(2015, 3, 0),
                end: new Date(2015, 3, 1),
            },
            {
                id: 1,
                title: 'Long Event',
                start: new Date(2015, 3, 7),
                end: new Date(2015, 3, 10),
            },

            {
                id: 2,
                title: 'DTS STARTS',
                start: new Date(2016, 2, 13, 0, 0, 0),
                end: new Date(2016, 2, 20, 0, 0, 0),
            },

            {
                id: 3,
                title: 'DTS ENDS',
                start: new Date(2016, 10, 6, 0, 0, 0),
                end: new Date(2016, 10, 13, 0, 0, 0),
            },

            {
                id: 4,
                title: 'Some Event',
                start: new Date(2015, 3, 9, 0, 0, 0),
                end: new Date(2015, 3, 10, 0, 0, 0),
            },
            {
                id: 5,
                title: 'Conference',
                start: new Date(2015, 3, 11),
                end: new Date(2015, 3, 13),
                desc: 'Big conference for important people',
            },
            {
                id: 6,
                title: 'Meeting',
                start: new Date(2015, 3, 12, 10, 30, 0, 0),
                end: new Date(2015, 3, 12, 12, 30, 0, 0),
                desc: 'Pre-meeting meeting, to prepare for the meeting',
            },
            {
                id: 7,
                title: 'Lunch',
                start: new Date(2015, 3, 12, 12, 0, 0, 0),
                end: new Date(2015, 3, 12, 13, 0, 0, 0),
                desc: 'Power lunch',
            },
            {
                id: 8,
                title: 'Meeting',
                start: new Date(2015, 3, 12, 14, 0, 0, 0),
                end: new Date(2015, 3, 12, 15, 0, 0, 0),
            },
            {
                id: 9,
                title: 'Happy Hour',
                start: new Date(2015, 3, 12, 17, 0, 0, 0),
                end: new Date(2015, 3, 12, 17, 30, 0, 0),
                desc: 'Most important meal of the day',
            },
            {
                id: 10,
                title: 'Dinner',
                start: new Date(2015, 3, 12, 20, 0, 0, 0),
                end: new Date(2015, 3, 12, 21, 0, 0, 0),
            },
            {
                id: 11,
                title: 'Birthday Party',
                start: new Date(2015, 3, 13, 7, 0, 0),
                end: new Date(2015, 3, 13, 10, 30, 0),
            },
            {
                id: 12,
                title: 'Late Night Event',
                start: new Date(2015, 3, 17, 19, 30, 0),
                end: new Date(2015, 3, 18, 2, 0, 0),
            },
            {
                id: 12.5,
                title: 'Late Same Night Event',
                start: new Date(2015, 3, 17, 19, 30, 0),
                end: new Date(2015, 3, 17, 23, 30, 0),
            },
            {
                id: 13,
                title: 'Multi-day Event',
                start: new Date(2015, 3, 20, 19, 30, 0),
                end: new Date(2015, 3, 22, 2, 0, 0),
            },
            {
                id: 14,
                title: 'Today',
                start: new Date(new Date().setHours(new Date().getHours() - 3)),
                end: new Date(new Date().setHours(new Date().getHours() + 3)),
            },
        ];
        moment.locale('de')
        const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer
        const messages = {
            allDay: 'Ganztägig',
            previous: '< zurück',
            next: 'vor >',
            today: 'Heute',
            month: 'Monat',
            week: 'Woche',
            day: 'Tag',
            agenda: 'Agenda',
            date: 'Datum',
            time: 'Zeit',
            event: 'Ereignis',
            showMore: total => `+ total (${total})`
        };

            return (
                <div className="App">
                    <HeaderProfileView email={emailUser} myFunction={showDropdown_Header}>
                        <HeaderProfileView/>
                    </HeaderProfileView>

                    <div id={"cal"}>
                        <BigCalendar messages={messages}
                                     localizer={localizer}
                                     selectable={true}
                                     popup={true}
                                     onSelectEvent={(event) => this.displayEvent(event.id)}
                                     events={this.state.myList}
                                     startAccessor="start"
                                     endAccessor="end"
                                     culture={this.state.culture}
                        />
                    </div>

                    <Modal/>
                </div>
            );
      //  }
    }
}

export default KalendarView