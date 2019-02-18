/* eslint-disable no-restricted-globals */
import React, {Component, Fragment} from 'react';
import '../App.css';
import "./PlayerTable.css";
import Input from "../UI/Input";
import HeaderProfileView from "../UI/HeaderProfilView";
import 'react-dropdown/style.css'
import {showDropdown_Header} from '../UI/HeaderProfilController';
import PlayerList from './PlayerList';

import Label from "../UI/Label";
import Confirmbutton from "../UI/Confirmbutton";
/**
 * @author Dany
 *
 * Zeigt die Liste vom Player die von der Klasse Playerlist gefetcht sind
 * @see PlayerList
 * @visibleName PlayerProfilView
 */
class PlayerListView extends Component{
    constructor(props) {
        super(props);
        this.state = {
            nameSuchen: false,
            players: [],
            suchBegriff: '',
        }
    }

    setTable = (e) =>{
        if(this.state.suchBegriff !== '') {
            this.setState({
                nameSuchen: true,
            })
        }
        else{
            this.setState({
                nameSuchen: false,
            })
        }
    }
    setSuchBegiff = (e) =>{
        this.setState({
            suchBegriff: e.target.value,
        })
    }

    suchen = () => {
          var  url = 'http://172.22.24.243:50594/player/name?name='+ this.state.suchBegriff
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        players: result
                    });
                    this.setTable();
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                    console.log(error)
                }
            )
        console.log(url)
        console.log(this.state.players);
    }

    render(){
        const {

            email,
            getList,
            players,
            trainer,
            setTrainer,
            searchPlayer,
            onRowClick,
        }=this.props




        return (
            <React.Fragment>
            <div>
                <HeaderProfileView email = {email} myFunction={showDropdown_Header} >
                    <HeaderProfileView/>
                </HeaderProfileView>
                <div className="nav" style={{color: 'black', fontFamily: 'Arial Rounded MT Bold', fontSize: 30}}>
                    Athleten
                </div>
                <div className="haupt">
                    <div className="boxx">

                        <div className="box1">
                            <div className="box11">
                                <Label> Suchbegriff:</Label>
                               <Input classname={""} placeholder={"Suchen"} value={this.state.suchBegriff}
                                            onChange={this.setSuchBegiff}/>
                                <Confirmbutton onClick={this.suchen} myStyle= {{padding: '5px', marginTop: '8px', paddingRight: '12px', paddingLeft: '15px'}}>suchen</Confirmbutton>
                            </div>
                        </div>
                        {this.state.nameSuchen? <div className="box2">
                               <PlayerList trainer={1} players={this.state.players} onRowClick={onRowClick} suchen={this.state.nameSuchen} />
                            </div>:<div className="box2">
                                <PlayerList trainer={1} players={this.state.players} onRowClick={onRowClick} suchen={this.state.nameSuchen}/>
                            </div>}
                    </div>
                </div>
            </div>
        </React.Fragment>

        );
    }
}

export default PlayerListView