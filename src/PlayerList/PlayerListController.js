import React, {Component} from 'react';
import '../App.css';
import PlayerListView from "./PlayerListView";
import axios from 'axios';
import $ from 'jquery';
import ReactTable from 'react-table';
import "react-table/react-table.css";
/**
 * @author Dany
 *
 * @visibleName PlayerProfilController
 */

class PlayerListController extends Component {
 constructor() {
     super();
     this.state = {
         email: '',
         players:[],
         trainer: '1',
         suchBegriff: '',
         suchen: false,
     }
     this.setEmail = this.setEmail.bind(this);
     this.getList = this.getList.bind(this);
     //this.setTrainer = this.setTrainer.bind(this);
 }
    setEmail = (e) => {
        this.setState({email: e.target.value})
    }
    setSuchBegriff = (e) => {
        this.setState({suchBegriff: e.target.value});
        this.setState({suchen: true});
    }
    submitDaten = () => {
        this.setState({showComponent: true});
    }
    setTrainer = (e) => {
        this.setState({trainer: e.target.value})
        this.getList();
    }
    searchPlayer() {
     if(this.state.suchen) {
         fetch("http://172.22.24.243:8080/player/name=name=" + this.state.suchBegriff)
             .then(res => res.json())
             .then(
                 (result) => {
                     this.setState({
                         isLoaded: true,
                         players: result
                     });
                 },
                 // Note: it's important to handle errors here
                 // instead of a catch() block so that we don't swallow
                 // exceptions from actual bugs in components.
                 (error) => {
                     this.setState({
                         isLoaded: true,
                         error
                     });
                 }
             )

         return (
             <div><ReactTable
                 data={this.state.players}
                 columns={[
                     {
                         Header: "Vorname",
                         accessor: "name"
                     },
                     {
                         Header: "Nachname",
                         accessor: "surname"
                     },
                     {
                         Header: "Geschlecht",
                         accessor: "geschlecht"
                     },
                     {
                         Header: "Altersklasse",
                         accessor: "altersklasse"
                     },
                     {
                         Header: "Verein",
                         accessor: "verein"
                     },
                     {
                         Header: "Trainer",
                         accessor: "trainer"
                     },
                     {
                         Header: "Landesverband",
                         accessor: "landesverband"
                     },
                     {
                         Header: "Kaderzugehörigkeit",
                         accessor: "kaderzugehoerigkeit"
                     },

                 ]}
                 getTdProps={this.onRowClick}
                 defaultPageSize={5}
                 style={{
                     height: "calc(100vh - 250px)" // This will force the table body to overflow and scroll, since there is not enough room
                 }}
                 className="-striped -highlight"
             />
             </div>
         );
     }
    }

    onRowClick = (state, rowInfo, column, instance) => {
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

    // createRows = () => {
    //     let rows = [];
    //     for (let i = 1; i < 50; i++) {
    //         rows.push({
    //             name: 'Vorname ' +i,
    //             surname: 'Nachname '+i,
    //             geschlecht: 'Geschlecht ' +i,
    //             altersklasse: 'Altersklasse ' +i,
    //             verein: 'Verein '+i,
    //             trainer: 'Trainer '+i,
    //             landesverband: 'Landesverband '+i,
    //             kaderzugehoerigkeit: 'Kader '+i,
    //         });
    //     }
    //
    //     return rows;
    // };




    render(){
        function getList() {
            const {data} = this.state.players;
            return (
                <div><ReactTable
                    data = {this.state.players}
                    columns={[
                        {
                            Header: "Vorname",
                            accessor: "name"
                        },
                        {
                            Header: "Nachname",
                            accessor: "surname"
                        },
                        {
                            Header: "Geschlecht",
                            accessor: "geschlecht"
                        },
                        {
                            Header: "Altersklasse",
                            accessor: "altersklasse"
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
                            Header: "Kaderzugehörigkeit",
                            accessor: "kaderzugehoerigkeit"
                        },

                    ]}
                    getTdProps={this.onRowClick}
                    defaultPageSize={5}
                    style={{
                        height: "calc(100vh - 250px)" // This will force the table body to overflow and scroll, since there is not enough room
                    }}
                    className="-striped -highlight"
                />
                </div>
            );
        }


       /* var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:8080/player/name?name=Jens",
            "method": "GET",
            "headers": {}
        }
        $.ajax(settings).done(function (response) {
            console.log(response);
        });
    ;*/

        return (

            <PlayerListView className="View"
                            setEmail={this.setEmail}
                            email = {this.state.email}
                            getList = {getList()}
                            players={this.state.players}
                            setTrainer={this.setTrainer}
                            trainer={this.state.trainer}
                            suchBegriff={this.state.suchBegriff}
                            setSuchBegriff={this.setSuchBegriff}
                            searchPlayer={this.searchPlayer()}
            />
        );
    }
}

export default PlayerListController