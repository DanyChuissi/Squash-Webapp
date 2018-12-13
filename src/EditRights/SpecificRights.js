import React, {Component} from 'react';
import '../App.css';
import './EditRights.css'
import ReactTable from "react-table";
import checkboxHOC from "react-table/lib/hoc/selectTable";


class SpecificRights extends Component {
    constructor(props) {
        super(props);

        this.state = {selected: {}, selectAll: 0, data: makeData()};


    }

    render() {
        const {
            onDeleteAthletRights,

        }=this.props
        const columns = [
            {
                Header: "Athlet",
                accessor: "athlet",
                width: 100
            },
            {
                id: "profileData",
                accessor: "",
                Cell: ({original}) => {
                    return (
                        <input
                            type="checkbox"
                            className="profileData"
                            checked={this.state.selected[original.firstName] === true}
                            onChange={() => this.toggleRow(original.firstName)}
                        />
                    );
                },
                Header: x => {
                    return (
                        <label>Profildaten</label>
                    );
                },
                sortable: false,
                width: 100
            },
            {
                id: "Trainingsdaten",
                accessor: "trainingsdata",
                Cell: ({original}) => {
                    return (
                        <input
                            type="checkbox"
                            className="trainingsdata"
                            checked={this.state.selected[original.firstName] === true}
                            onChange={() => this.toggleRow(original.firstName)}
                        />
                    );
                },
                Header: x => {
                    return (
                        <label>Trainingsdaten</label>
                    );
                },
                sortable: false,
                width: 130
            },
            {
                id: "Leistungsdaten",
                accessor: "performanceData",
                Cell: ({original}) => {
                    return (
                        <input
                            type="checkbox"
                            className="profileData"
                            checked={this.state.selected[original.firstName] === true}
                            onChange={() => this.toggleRow(original.firstName)}
                        />
                    );
                },
                Header: x => {
                    return (
                        <label>Leistungsdaten</label>
                    );
                },
                sortable: false,
                width: 130
            },
            {
                id: "deleteRight",
                accessor: "deleteAthletRight",
                Cell: ({original}) => {
                    return (
                        <input
                            type="button"
                            className="deleteRightRow"
                            checked={this.state.selected[original.firstName] === true}
                            onChange={onDeleteAthletRights}
                        />
                    );
                },
                Header: '',
                sortable: false,
                width: 30
            },


        ];

        return (
            <div>
                <ReactTable
                    data={this.state.data}
                    columns={columns}
                    defaultPageSize={5}
                    defaultSorted={[{id: "firstName", desc: false}]}
                />
            </div>
        );
    }
}

function makeData() {
    return [
        {
            firstName: "judge",
            lastName: "babies",
            age: 16
        },
        {
            firstName: "quarter",
            lastName: "driving",
            age: 17
        },
        {
            firstName: "division",
            lastName: "society",
            age: 3
        },]
}

export default SpecificRights;
