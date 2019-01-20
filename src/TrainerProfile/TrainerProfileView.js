import React, {Component, Fragment} from 'react';
import Checkbox from "../UI/Checkbox";
import "./TrainerProfile.css";
import Confirmbutton from "../UI/Confirmbutton";
import logo from "../Graphics/480px-PICA.jpg";
import HeaderProfileView from "../UI/HeaderProfilView";
import {myFunction, onLogoCenterClick, onLogoMenuClick} from "../UI/HeaderProfilController";
import EditTrainerProfileView from "./EditTrainerProfileView";

class TrainerProfileView extends Component {

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
            mobileNumber,
            landlaneNumber,
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

            <Fragment id={"Trainerprofile"}>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
                      crossOrigin="anonymous"/>

                <HeaderProfileView email = {emailUser}  myFunction={myFunction} onLogoCenterClick={ onLogoCenterClick} onLogoMenuClick={onLogoMenuClick} >
                    <HeaderProfileView/>
                </HeaderProfileView>
                <main id={"mainTP"}>
                        <div id="leftTP">
                            <div id="leftTopLeftTP">
                                <img src={logo} className="Trainer-Profil-pic" alt="ProfilBild Von Ahmad - Eigenes Werk, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=28947701" />
                                <div id={"checkbox"}>
                                    Aktiv: <Checkbox active={active} style={{width: '40px'}}onChange={setStatus}/>
                                </div>
                            </div>
                            <div id={"ButtonsTrainer"}>
                                <Confirmbutton className={"editTP"} onClick={onEdit} hidden={edithidden}>Bearbeiten</Confirmbutton>
                                <Confirmbutton id={"saveTP"} onClick={onSave} hidden={savehidden}>Speichern</Confirmbutton>
                            </div>
                        </div>
                        <div id="rightTP">
                            <div id={"profileDataTitle"}>Profildaten</div>
                            <EditTrainerProfileView id={"TrainerProfileDataTable"}
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
                                             mobileNumber={mobileNumber}
                                             landlaneNumber={landlaneNumber}
                                             nationalAssosiation={nationalAssosiation}
                                             nationalAssosiationhidden={edithidden}
                                             nationalAssosiationdropdownhidden={savehidden}
                            />
                    </div>
                </main>

            </Fragment>
        );
    }
}

export default TrainerProfileView