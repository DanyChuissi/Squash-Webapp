/* eslint-disable no-restricted-globals */
import React, {Component, Fragment} from 'react';
import '../App.css';
import "./PlayerTable.css";
import Input from "../UI/Input";
import HeaderProfileView from "../UI/HeaderProfilView";
import 'react-dropdown/style.css'
import {myFunction} from '../UI/HeaderProfilController';
import PlayerList from './PlayerList';

import Label from "../UI/Label";
/**
 * @author Dany
 *
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
        function myFunction2 (){
            console.log("test");
        }
        function myFunction3() {

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "http://localhost:8080/player/",
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "processData": false,
                "data": "{\n \"name\": \"Paul\"," +
                    "\n \"surname\": \"Bush\"," +
                    "\n \"dateofbirth\": \"1995-12-01\"," +
                    "\n \"email\": \"paulbush@email.com\"," +
                    "\n \"mobilenumber\": \"02323232\"," +
                    "\n \"landlinenumber\": \"23223\"," +
                    "\n \"streetname\": \"Allestr\"," +
                    "\n \"housenumber\": \"233\"," +
                    "\n \"postalcode\": \"22131\"," +
                    "\n \"place\": \"Essen\"," +
                    "\n \"spin\": 453," +
                    "\n \"squad\": \"testSquad2\"," +
                    "\n \"active\": true," +
                    "\n \"regonid\": 1," +
                    "\n \"trainer_nr\": 1," +
                    "\n}"
        }

            /*var payload = {
                name: "Paul",
                surname: "Bush",
                dateofbirth: "1995-12-01",
                email: "paulbush@email.com",
                mobilenumber: "02323232",
                landlinenumber: "23223",
                streetname: "Allestr",
                housenumber: "233",
                postalcode: "22132",
                place: "Essen",
                spin: 543,
                squad: "testSquad2",
                active: true,
                regonid: 1,
                trainer_nr : 1
            };
            var data = new FormData();
            data.append( "json", JSON.stringify( payload ) );
            fetch('http://172.22.24.243:8080/player/',
                {
                    method: "POST",
                    body: data
                })
                .then(function(res){ return res.json(); })
                .then(function(data){ alert( JSON.stringify( data ) ) })*/
        }

        return (
            <React.Fragment>
            <div>
                <HeaderProfileView email = {email} myFunction={myFunction} >
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