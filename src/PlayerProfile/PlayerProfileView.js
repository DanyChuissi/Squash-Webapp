/* eslint-disable no-restricted-globals */
import React, {Component, Fragment} from 'react';
import '../App.css';
import EditPlayerProfileController from "../EditPlayerProfile/EditPlayerProfileController";
import Checkbox from "../UI/Checkbox";
import "./PlayerProfile.css";
import Confirmbutton from "../UI/Confirmbutton";
import logo from "../Graphics/Logo_quadratisch.png";
import Footer from "../UI/Footer";
import Input from "../UI/Input";

class PlayerProfileView extends Component {

    render() {
        const {

            setName,
            setSurName,
            setMail,
            setBrithdate,
            setCity,
            setZIP,
            setStreet,
            setHouseNbr,
            setSquad,
            setSPin,
            setStatus,
            setMobileNumber,
            setLandlaneNumber,
            setNationalAssosiation,

            name,
            surname,
            mail,
            birthdate,
            city,
            zip,
            street,
            houseNbr,
            squad,
            sPin,
            status,
            mobileNumber,
            landlaneNumber,
            agegroup,
            nationalAssosiation,

            onDelete,
            onEdit,
            onCompare,

      
        } = this.props;

        function openTab(event, ldg) {
            return undefined;
        }

        return (

            <Fragment>
                <main>
                    <div id="left">
                        <div id="leftTop">
                            <div id="leftTopLeft">
                                <img src={logo} className="App-logo" alt="Logo der Web Applikation Squirrel"/>
                                <div id={"checkbox"}>Aktiv: <Checkbox/></div>
                            </div>
                            <div id={"leftTopCenter"}>
                                <Confirmbutton id="edit" onClick={onEdit}>Bearbeiten</Confirmbutton>
                                <Confirmbutton id={"delete"} onClick={onDelete}>Löschen</Confirmbutton>
                            </div>
                            <div id="leftTopRight">
                                <Input placeholder="Athleten vergleichen"/>
                                <Confirmbutton id="compare" onClick={onCompare}>Vergleichen</Confirmbutton>
                            </div>
                        </div>
                        <div id="leftBottom">
                            <div id={"profileDataTitle"}>Profildaten</div>
                            <EditPlayerProfileController id={"profileDataTable"}/>
                        </div>
                    </div>
                    <div id="right">
                        <div className="tab">
                            <button className="tablinks" onClick={openTab(event, 'ldg')}>Leistungsdiagnostik</button>
                            <button className="tablinks" onClick={openTab(event, 'curve')}>Kurve</button>
                            <button className="tablinks" onClick={openTab(event, 'diary')}>Trainingstagebuch</button>
                            <button className="tablinks" onClick={openTab(event, 'tplan')}>Trainingsplan</button>
                            <button className="tablinks" onClick={openTab(event, 'jtp')}>JTP</button>
                            <button className="tablinks" onClick={openTab(event, 'maz')}>MAZ</button>
                            <button className="tablinks" onClick={openTab(event, 'weekpl')}>Wochenplan</button>
                            <button className="tablinks" onClick={openTab(event, 'competition')}>Wettkampfplan</button>
                        </div>

                        <div id="ldg" className="tabcontent">
                            <h3>Leistungsdiagnostik</h3>

                        </div>

                        <div id="curve" className="tabcontent">
                            <h3>Kurve</h3>
                        </div>

                        <div id="diary" className="tabcontent">
                            <h3>Trainingstagebuch</h3>
                        </div>
                        <div id="tplan" className="tabcontent">
                            <h3>Trainingsplan</h3>

                        </div>

                        <div id="jtp" className="tabcontent">
                            <h3>JTP</h3>
                        </div>

                        <div id="maz" className="tabcontent">
                            <h3>MAZ</h3>
                        </div>

                        <div id="weekpl" className="tabcontent">
                            <h3>Wochenplan</h3>
                        </div>

                        <div id="competition" className="tabcontent">
                            <h3>Wettkampfplan</h3>
                        </div>

                    </div>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </Fragment>


        );
    }
}

export default PlayerProfileView