import React, {Component} from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";
/**
 * @author Dany
 *
 * Die Klasse lädt alle Spieler die zu einem eingegebenen Trainer gehöhren
 * @visibleName PlayerList
 */

class PlayerList extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            players: [],
        }
    }

    /**
     * Die Spielern werden mit der Methode direkt beim Aufruf der Seite aufgeladen
     */
    componentWillMount() {


        var url = '';
        if(!this.props.suchen || this.props.suchBegriff === ''){
            url = "http://172.22.24.243:50594/player/trainernr?trainer=" + this.props.trainer;
        }else{
            url = 'http://172.22.24.243:50594/player/name?name='+ this.props.suchBegriff
        }
        fetch(url)
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
        console.log(url)
    }
/*
    componenetDidMount(): void {
        this.setState({
            players: [],
        })

    }*/

    /**
     * Die Methode nihmmt Info von dem Element auf dem es gecklickt wurde
     * @param state
     * @param rowInfo
     * @param column
     * @param instance
     * @returns {{onDoubleClick: onDoubleClick}}
     */
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
                window.location='/playerprofile/'+rowInfo.original.email
            }
        }
    }

    render(){
        const {trainer,onRowClick,players, suchen, suchBegriff} = this.props;

        let data = this.state.players;
        if(suchen) {
            data = players;
        }


            return (

                <div><ReactTable
                    data = {data}
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
                    previousText={'Zurück'}
                    nextText={'Nächste'}
                    loadingText={'Laden...'}
                    noDataText={'Keine Athlete gefunden'}
                    pageText={'Seite'}
                    ofText={'von'}
                    rowsText={'Zeile'}
                    className="-striped -highlight"
                />
                </div>
            );
        }


}

export default PlayerList;