/* eslint-disable no-restricted-globals */
import React, {Component, Fragment} from 'react';
import '../App.css';
import EditPlayerProfileController from "../EditPlayerProfile/EditPlayerProfileController";
import Checkbox from "../UI/Checkbox";
import "./PlayerProfile.css";
import Confirmbutton from "../UI/Confirmbutton";
import logo from "../Graphics/Logo_quadratisch.png";
import Input from "../UI/Input";
import EditProfileView from "../EditPlayerProfile/EditProfileView";
import KalendarView from "../Trainingdiary/KalendarView";
import Tabs from "react-bootstrap/es/Tabs";
import Tab from "react-bootstrap/es/Tab";

class PlayerProfileView extends Component {

    render() {
        const {

            setName,
            setSurName,
            setMail,
            setBirthdate,
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
            active,
            nationalAssosiationhidden,
            nationalAssosiationdropdownhidden,

            edithidden,
            savehidden,
            onDelete,
            onEdit,
            onSave,
            onCompare,


        } = this.props;

        return (

            <Fragment>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
                      crossOrigin="anonymous"/>

                <main>
                    <div id="left">
                        <div id="leftTop">
                            <div id="leftTopLeft">
                                <img src={logo} className="App-logo" alt="Logo der Web Applikation Squirrel"/>
                                <div id={"checkbox"}>
                                    Aktiv: <Checkbox defaultChecked={active} onChanged={setStatus}/>
                                </div>
                            </div>
                            <div id={"leftTopCenter"}>
                                <div>
                                    <Confirmbutton id="edit" onClick={onEdit} hidden={edithidden}>Bearbeiten</Confirmbutton>
                                    <Confirmbutton id={"save"} onClick={onSave} hidden={savehidden}>Speichern</Confirmbutton>
                                </div>
                                <Confirmbutton id={"delete"} onClick={onDelete}>Löschen</Confirmbutton>
                            </div>
                            <div id="leftTopRight">
                                <Input placeholder="Athleten vergleichen"/>
                                <Confirmbutton id="compare" onClick={onCompare}>Vergleichen</Confirmbutton>
                            </div>
                        </div>
                        <div id="leftBottom">
                            <div id={"profileDataTitle"}>Profildaten</div>
                            <EditProfileView id={"profileDataTable"}
                                             setName={setName}
                                             setSurName={setSurName}
                                             setMail={setMail}
                                             setBrithdate={setBirthdate}
                                             setCity={setCity}
                                             setZIP={setZIP}
                                             setStreet={setStreet}
                                             setHouseNbr={setHouseNbr}
                                             setSquad={setSquad}
                                             setSPin={setSPin}
                                             setLandlaneNumber={setLandlaneNumber}
                                             setMobileNumber={setMobileNumber}
                                             setNationalAssosiation={setNationalAssosiation}

                                             name={name}
                                             surname={surname}
                                             mail={mail}
                                             birthdate={birthdate}
                                             city={city}
                                             zip={zip}
                                             street={street}
                                             houseNbr={houseNbr}
                                             squad={squad}
                                             sPin={sPin}
                                             status={status}
                                             mobileNumber={mobileNumber}
                                             landlaneNumber={landlaneNumber}
                                             agegroup={agegroup}
                                             nationalAssosiation={nationalAssosiation}
                                             nationalAssosiationhidden={nationalAssosiationhidden}
                                             nationalAssosiationdropdownhidden={nationalAssosiationdropdownhidden}
                            />
                        </div>
                    </div>
                    <div id="right">
                        <Tabs defaultActiveKey={1} id="tabs">
                            <Tab eventKey={1} title="Leistungsdiagnostik">
                                Leistungsdiagnostik
                            </Tab>
                            <Tab eventKey={2} title="Kurve">
                                Kurve
                            </Tab>
                            <Tab eventKey={3} title="Trainingstagebuch">
                                <KalendarView/>
                            </Tab>
                            <Tab eventKey={4} title="JTP">
                                JTP
                            </Tab>
                            <Tab eventKey={5} title="Trainingsplan">
                                Trainingsplan
                            </Tab>
                            <Tab eventKey={6} title="MAZ">
                                MAZ
                            </Tab>
                            <Tab eventKey={7} title="Wochenplan">
                                Wochenplan
                            </Tab>
                            <Tab eventKey={8} title="Wettkampfplan">
                                Wettkampfplan
                            </Tab>
                        </Tabs>;
                    </div>
                </main>

            </Fragment>


        );
    }
}

export default PlayerProfileView