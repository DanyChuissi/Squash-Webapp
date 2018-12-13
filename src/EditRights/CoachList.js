import React, {Component} from 'react';
import '../App.css';
import 'react-table/react-table.css';
import ReactTable from "react-table";
import './EditRights.css'


class CoachList extends Component {

    render() {
        const dataCoachList =[{
            name: 'Linsley',
            surname:'Tanner',
            role:'Trainer',
        }]
        const columnsCoachList = [{
                Header: 'Name',
                accessor: 'name' // String-based value accessors!
            }, {
                Header: 'Nachname',
                accessor: 'surname',
                Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
            }, {
            Header: 'Rolle',
            accessor: 'role' // Custom value accessors!
        }]


        return (
            <div className="CoachList">
                <div id={"CoachListTop"}>

                </div>
                <ReactTable
                    filterable
                    defaultFilterMethod={(filter, row) =>
                        String(row[filter.id]) === filter.value}
                    data={dataCoachList}
                    columns={columnsCoachList}
                    defaultPageSize={10}
                />
                <div id={"CoachListBottom"}>

                </div>
            </div>
        );
    }
}

export default CoachList;
