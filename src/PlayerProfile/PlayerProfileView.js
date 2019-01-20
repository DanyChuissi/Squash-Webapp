/* eslint-disable no-restricted-globals */
import React, {Component, Fragment} from 'react';
import Checkbox from "../UI/Checkbox";
import "./PlayerList.css";
import Confirmbutton from "../UI/Confirmbutton";
import logo from "../Graphics/480px-PICA.jpg";
import EditProfileView from "../EditPlayerProfile/EditProfileView";
import HeaderProfileView from "../UI/HeaderProfilView";
import {myFunction, onLogoCenterClick, onLogoMenuClick} from "../UI/HeaderProfilController";

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
            email,
            emailUser,
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

                <HeaderProfileView email={emailUser} myFunction={myFunction} onLogoCenterClick={onLogoCenterClick}
                                   onLogoMenuClick={onLogoMenuClick}>
                    <HeaderProfileView/>
                </HeaderProfileView>
                <main id={"mainPP"}>
                    <div id="pPleft">
                        <img src={logo} className="Profil-pic"
                             alt="Logo der Web Applikation Squirrel Von Ahmad - Eigenes Werk, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=28947701"/>
                        <div id={"checkbox"}>
                            Aktiv: <Checkbox active={active} onChange={setStatus}/>
                        </div>
                    </div>
                    <div id="pPmiddle">
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
                                         nationalAssosiationhidden={edithidden}
                                         nationalAssosiationdropdownhidden={savehidden}
                        />
                    </div>
                    <div id={"pPright"}>
                                <div>
                                    <Confirmbutton id="edit" onClick={onEdit}
                                                   hidden={edithidden}>Bearbeiten</Confirmbutton>
                                    <Confirmbutton id={"save"} onClick={onSave}
                                                   hidden={savehidden}>Speichern</Confirmbutton>


                                    <Confirmbutton id="edit" onClick={onEdit}
                                                   hidden={edithidden}>Jahrestrainingsplan</Confirmbutton>
                                    <Confirmbutton id={"save"} onClick={onSave}
                                                   hidden={savehidden}>Trainingstagebuch</Confirmbutton>

                                </div>

                    </div>
            </main>
            </Fragment>
        );
    }
}

export default PlayerProfileView