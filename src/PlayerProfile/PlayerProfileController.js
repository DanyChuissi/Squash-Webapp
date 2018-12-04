import React, {Component} from 'react';
import PlayerProfileView from './PlayerProfileView';


import ReactTable from 'react-table';
import "react-table/react-table.css";
/**
 * @author Dany
 *
 * @visibleName PlayerProfilController
 */
class PlayerProfileController extends Component {
 constructor() {
     super();
     this.state = {
         email: 'test@Email.com',
         initialRows: [],
         data: [],
     }
     this.setEmail = this.setEmail.bind(this);
 }

    setSuchBegriff = (e) => {
        this.setState({suchBegriff: e.target.value})
    }
    setEmail = (e) => {
        this.setState({email: e.target.value})
    }
    submitDaten = () => {
        this.setState({showComponent: true});
    }
    render() {
        const options = [
            1, 2, 3
        ]
        const rows = [{
            vorname: 'Name 1',
            nachname: 'Nachname 1',
            geschlecht: 'Geschlecht 1',
            alterklasse: 15,
            verein: 'Verein 1',
            trainer: 'Trainer 1',
            landesverband: 'Landeverband 1',
            kaderzugehoerigkeit: 'Kader 1'
        },
            {
                vorname: 'Name 2',
                nachname: 'Nachname 2',
                geschlecht: 'Geschlecht 2',
                alterklasse: 16,
                verein: 'Verein 2',
                trainer: 'Trainer 2',
                landesverband: 'Landeverband 2',
                kaderzugehoerigkeit: 'Kader 2'
            },
            {
                vorname: 'Name 2',
                nachname: 'Nachname 2',
                geschlecht: 'Geschlecht 2',
                alterklasse: 16,
                verein: 'Verein 2',
                trainer: 'Trainer 2',
                landesverband: 'Landeverband 2',
                kaderzugehoerigkeit: 'Kader 2'
            },
            {
                vorname: 'Name 2',
                nachname: 'Nachname 2',
                geschlecht: 'Geschlecht 2',
                alterklasse: 16,
                verein: 'Verein 2',
                trainer: 'Trainer 2',
                landesverband: 'Landeverband 2',
                kaderzugehoerigkeit: 'Kader 2'
            },
            {
                vorname: 'Name 2',
                nachname: 'Nachname 2',
                geschlecht: 'Geschlecht 2',
                alterklasse: 16,
                verein: 'Verein 2',
                trainer: 'Trainer 2',
                landesverband: 'Landeverband 2',
                kaderzugehoerigkeit: 'Kader 2'
            },
            {
                vorname: 'Name 2',
                nachname: 'Nachname 2',
                geschlecht: 'Geschlecht 2',
                alterklasse: 16,
                verein: 'Verein 2',
                trainer: 'Trainer 2',
                landesverband: 'Landeverband 2',
                kaderzugehoerigkeit: 'Kader 2'
            },
            {
                vorname: 'Name 2',
                nachname: 'Nachname 2',
                geschlecht: 'Geschlecht 2',
                alterklasse: 16,
                verein: 'Verein 2',
                trainer: 'Trainer 2',
                landesverband: 'Landeverband 2',
                kaderzugehoerigkeit: 'Kader 2'
            },
            {
                vorname: 'Name 2',
                nachname: 'Nachname 2',
                geschlecht: 'Geschlecht 2',
                alterklasse: 16,
                verein: 'Verein 2',
                trainer: 'Trainer 2',
                landesverband: 'Landeverband 2',
                kaderzugehoerigkeit: 'Kader 2'
            },
            {
                vorname: 'Name 2',
                nachname: 'Nachname 2',
                geschlecht: 'Geschlecht 2',
                alterklasse: 16,
                verein: 'Verein 2',
                trainer: 'Trainer 2',
                landesverband: 'Landeverband 2',
                kaderzugehoerigkeit: 'Kader 2'
            },
            {
                vorname: 'Name 2',
                nachname: 'Nachname 2',
                geschlecht: 'Geschlecht 2',
                alterklasse: 16,
                verein: 'Verein 2',
                trainer: 'Trainer 2',
                landesverband: 'Landeverband 2',
                kaderzugehoerigkeit: 'Kader 2'
            },
            {
                vorname: 'Name 2',
                nachname: 'Nachname 2',
                geschlecht: 'Geschlecht 2',
                alterklasse: 16,
                verein: 'Verein 2',
                trainer: 'Trainer 2',
                landesverband: 'Landeverband 2',
                kaderzugehoerigkeit: 'Kader 2'
            },
            {
                vorname: 'Name 3',
                nachname: 'Nachname 3',
                geschlecht: 'Geschlecht 3',
                alterklasse: 17,
                verein: 'Verein 3',
                trainer: 'Trainer 3',
                landesverband: 'Landeverband 3',
                kaderzugehoerigkeit: 'Kader 3'
            }] ;

        /* Test was passiert on DoppelClick*/
        const onRowClick = (state, rowInfo, column, instance) => {
            return {
                onDoubleClick: e => {
                    console.log('A Td Element was clicked!')
                    console.log('it produced this event:', e)
                    console.log('It was in this column:', column)
                    console.log('It was in this row:', rowInfo)
                    console.log('It was in this table instance:', instance)
                }
            }
        }

        //Gibt die Liste der Athleten zurück
        function getList() {
            const {data} = rows;
            return (
                <div><ReactTable
                    data = {rows}
                    columns={[
                        {
                           Header: "Vorname",
                           accessor: "vorname"
                        },
                        {
                            Header: "Nachname",
                            accessor: "nachname"
                        },
                        {
                            Header: "Geschlecht",
                            accessor: "geschlecht"
                        },
                        {
                            Header: "Alterklasse",
                            accessor: "alterklasse"
                        },
                        {
                            Header: "Verein",
                            accessor: "verein"
                        },
                        {
                            Header: "Trainer",
                            accessor: "trainer"
                        } ,
                        {
                            Header: "Landesverband",
                            accessor: "landesverband"
                        },
                        {
                            Header: "Kaderzugehoerigkeit",
                            accessor: "kaderzugehoerigkeit"
                        },

                    ]}
                    getTdProps={onRowClick}
                    defaultPageSize={6}
                    style={{
                        height: "calc(100vh - 250px)" // This will force the table body to overflow and scroll, since there is not enough room
                    }}
                    className="-striped -highlight"
                />
                </div>
            );
        }
    ;

        return (
            <PlayerProfileView className="View"
                               setEmail={this.setEmail}
                               options = {options}
                               setAnzahRows = {this.setAnzahlRows}
                               anzahlRows = {this.state.anzahlRows}
                               email = {this.state.email}
                               getList = {getList()}
            />
        );
    }
}

export default PlayerProfileController