import React, {Component} from 'react';
import '../App.css';
import 'react-table/react-table.css';
import ReactTable from "react-table";
import './EditRights.css'

/**
 * @author Daniela
 * This is the View of a table witch contains the registered Trainers. It is used in the Edit Rights View. You can filter the List and search for a specific person.
 * @visibleName CoachList
 */

class CoachList extends Component {

    render() {
        /**dataCoachList is a Dummy Dataset for a Trainer**/
        const dataCoachList =[{
            name: 'Linsley',
            surname:'Tanner',
            role:'Trainer',
        }]

        /**columnsCoachList describes the columns of the table**/
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
                    <h2>Trainer oder Experten wählen</h2>
                </div>
                <ReactTable
                    filterable
                    data={dataCoachList}
                    columns={columnsCoachList}
                    defaultPageSize={10}
                    previousText={'Zurück'}
                    nextText={'Nächste'}
                    loadingText={'Laden...'}
                    noDataText={'Keine Personen gefunden'}
                    pageText={'Seite'}
                    ofText={'von'}
                    rowsText={'Zeilen'} />
                <div id={"CoachListBottom"}>

                </div>
            </div>
        );
    }
}

export default CoachList;
