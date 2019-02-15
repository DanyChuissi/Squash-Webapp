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
/**
 * @author Dany
 *
 * Zeigt die Liste vom Player die von der Klasse Playerlist gefetcht sind
 * @see PlayerList
 * @visibleName PlayerProfilView
 */
class PlayerListView extends Component{

    render(){
        const {
            suchBegriff,
            email,
            setSuchBegriff,
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
                               <Input classname={""} placeholder={"Suchen"} value={suchBegriff}
                                            onChange={setSuchBegriff}/>
                            </div>
                        </div>
                        <div className="box2">
                            <PlayerList trainer={1} players={players} onRowClick={onRowClick}/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>



        );
    }
}

export default PlayerListView