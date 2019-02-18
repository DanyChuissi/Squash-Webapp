import React, {Component} from 'react';
import '../App.css';
import './EditRights.css'

import 'react-table/react-table.css';
import ReactTable from "react-table";
import deleteIcon from "../Graphics/trash_bin_icon-icons.com_67981.png"

/**
 * @author Daniela
 * View that displays a table where the rights for a specific Athlete can be set.
 * @visibleName SpecificRights
 */
class SpecificRights extends Component {
    constructor(props) {
        super(props);

        this.state = {selected: {}, selectAll: 0, data: makeData()};


    }

    render() {
        const {
            onDeleteAthletRights,

        }=this.props
        /**Columns that show the Athletname and the types of Rights**/
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
                        <button
                            type="submit"
                            className="deleteRightRow"
                            src="../Graphics/trash_bin_icon-icons.com_67981.png"
                            onChange={onDeleteAthletRights}
                        >       <img src={deleteIcon} alt="Smiley face" height="20px" width="15px"/></button>
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
                    previousText={'Zurück'}
                    nextText={'Nächste'}
                    loadingText={'Laden...'}
                    noDataText={'Kein Athlet gefunden'}
                    pageText={'Seite'}
                    ofText={'von'}
                    rowsText={'Zeilen'}
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
