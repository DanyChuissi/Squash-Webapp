import React, {Component} from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
/**
 * @author Dany
 *
 * @visibleName PlayerList
 */

class PlayerList extends Component {
    constructor() {
        super();
        this.state = {
            players:[],
            trainer: '1',
            suchen: false,
            name: '',
            rowInfos: [],
        }
    }
    componentDidMount() {
        fetch("http://172.22.24.243:8080/player/trainernr?trainer=" + this.state.trainer)
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
    }

    onRowClick = (state, rowInfo, column, instance) => {
        return {
            onDoubleClick: e => {
                console.log('A Td Element was clicked!')
                console.log('it produced this event:', e)
                console.log('It was in this column:', column)
                console.log('It was in this row:', rowInfo)
                console.log('It was in this table instance:', instance)
                this.setState({rowInfos: rowInfo})
                console.log('Index Row', rowInfo.index)
                console.log('Index email', rowInfo.original.email)
            }
        }
    }
    regionById(id){
        fetch("http://172.22.24.243:8080/region/" + this.state.trainer)
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
    }
    render(){
        const {trainer,name} = this.props;

       // this.setState({trainer: trainer});

        //const {data} = this.state.players;


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
                            accessor: "trainer_nr"
                        } ,
                        {
                            Header: "Landesverband",
                            accessor: "regonid"
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

export default PlayerList;