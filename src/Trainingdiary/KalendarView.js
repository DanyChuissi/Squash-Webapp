import React, {Component} from 'react';
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import '../App.css';
import moment from "moment";
import 'moment/locale/de';
import './Kalendar.css';
import {BrowserRouter, Route, Switch,Link} from 'react-router-dom'
import DetailsAnsichtView from "../Trainingstagebuch/DetailsAnsichtView";
import Popup from "reactjs-popup";


class KalendarView extends Component {

    state = {culture: 'de',
        trigger:false,
    }

    displayEvent = (evnt, SyntheticEvent) => {
        this.setState({trigger: true})
    }

    render() {
const Modal =()=>(
    <Popup open={this.state.trigger} position={"top left"}>
        <div style={{width:'1000px'}}>
            <DetailsAnsichtView datum={"12-02-2018"}
                                 schwerpunkt={"Technik(Ausdauer)"}
                                 dauer={"120"}
                                 intensitaet={"4"}
                                 uebungen={"A B C D"}
                                 mentale_Ersch={"4"}
                                 bemerkung={"Alles gut"}
                                 koerperliche_Ersch={"5"}
                                 muskelkarter={"2"}
                                 puls={"rechts als Diagramm"}
                                 aenderungswuensche={"keine"}
                                 schlafdauer={"7 Stunden"}
                                 gewicht={"70"}
                                 maximale_herzf={"180"}
                                 minimale_herzf={"70"}
                                 durschnittliche_herzf={"100"}
                                 wegstrecke={"(Ausdauer-Outdoor"}
                                 geschwindigkeit={"Ausdauer-Outdoor"}
                                 geaendert_am={"geändert am 26.11.2018"}/>
        </div>
    </Popup>
    )

        const myEventsList = [
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


                <div id={"cal"}>
                    <BigCalendar messages={messages}
                                 localizer={localizer}
                                 selectable={true}
                                 popup={true}
                                 onSelectEvent={this.displayEvent}
                                 events={myEventsList}
                                 startAccessor="start"
                                 endAccessor="end"
                                 culture={this.state.culture}
                    />
                </div>
                <Modal/>
            </div>
        );
    }
}

export default KalendarView