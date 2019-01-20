import React, {Component} from 'react';
import Confirmbutton from "../UI/Confirmbutton";
import ReactTable from "react-table";
import 'react-table/react-table.css';

function makeData() {
    return [
        {
            from: "judge",
            to: "March",
            description: "Test3",
        },
        {
            from: "quarter",
            to: "March",
            description: "Test2",
        },
        {
            from: "division",
            to: "March",
            description: "Test1",
        },]
}

class AddVacationView extends Component {
    constructor(props) {
        super(props);
        this.state = {selected: {}, selectAll: 0, data: makeData()};
    }

    render() {
        const{
            cancelVacation,
            addVacation,
            deleteVacation,
        }=this.props
        const columns = [
            {
                Header: "Von",
                accessor: "from",
                width: 120
            },
            {
                Header: "Bis",
                width: 120
            },
            {
                Header: "Beschreibung",
                accessor: "description",
                width: 370
            },
        ]

        return (
            <div id={"addVacationView"}>
                <div id={"topVacView"}>
                <h2>Urlaub</h2>
                    <div id={"time"}>
                        <h4>Von: </h4>
                        <input type="date" id="start" name="trip-start"
                               value="2018-07-22"
                               min="2018-01-01" max="2018-12-31"/>
                        <h4>Bis: </h4>
                        <input type="date" id="end" name="trip-start"
                               value="2018-07-22"
                               min="2018-01-01" max="2018-12-31"/>
                    </div>
                    <div id={"descriptionForm"}>
                        <h4>Beschreibung: </h4>
                        <div id={"descriptionTextAndButton"}>
                            <textarea id="vacationDescription"
                                      placeholder={"Urlaubsbeschreibung hier einfügen"}></textarea>
                            <button id={"addVacation"} onClick={addVacation}>Hinzufügen</button>
                        </div>

                    </div>
                </div>
                <div id={"vacationList"} >
                    <ReactTable id={"vacationList"} data={this.state.data}
                                columns={columns}
                                defaultPageSize={5}
                                defaultSorted={[{id: "firstName", desc: false}]}/>
                </div>

                <div id={"bottomVacView"}>
                    <Confirmbutton id={"deleteVacation"} onClick={deleteVacation}>Löschen</Confirmbutton>
                    <Confirmbutton id={"closeVacationView"}onClick={cancelVacation}>Schließen</Confirmbutton>
                </div>

            </div>


        );
    }
}

export default AddVacationView;
