import React, {Component, Fragment} from 'react';
import Checkbox from "../UI/Checkbox";
import "./TrainerProfile.css";
import Confirmbutton from "../UI/Confirmbutton";
import logo from "../Graphics/480px-PICA.jpg";
import HeaderProfileView from "../UI/HeaderProfilView";
import {showDropdown_Header} from "../UI/HeaderProfilController";
import EditTrainerProfileView from "./EditTrainerProfileView";
import Popup from "reactjs-popup";
import EditPasswordModalView from "./EditPasswordModalView";

/**
 * @author Daniela
 * This is a table, which holds the Data of a trainer. If a authorized Person clicks on the edit Button, this View displays. Most of the cells are editable. The cell for the Birthdate is an date Input. The cell for the national Assosiation is an dropdown Input.
 * @visibleName TrainerprofileView
 */
const modalStylePassword = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingLeft: '15%',
    paddingRight: '15%',
    paddingTop: '10%',
    paddingBottom: 'auto',

};

class TrainerProfileView extends Component {

    state = {
        triggerChangePassword: false,
        saveButtonhidden: true,
        editButtonhidden:false,
    }

    onEdit = (e)=>{
        this.setState({
            editButtonhidden: true,
            saveButtonhidden: false,
        })
    }

    onSave = (e)=>{
        this.setState({
            editButtonhidden: false,
            saveButtonhidden: true,
        })
    }

    openChangePasswordView = (e) => {
        this.setState({
            triggerChangePassword: true,
        })
    }

    cancelPassword = (e) => {
        this.setState({
            triggerChangePassword: false,
        })
    }

    changePassword = (e)=>{
        alert("Password wurde geändert");
        this.setState({
            triggerChangePassword: false,
        })
    }

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
            setPassword,

            password,
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
            editPassword,

        } = this.props

        const ModalCreatePassword = () => (
            <Popup open={this.state.triggerChangePassword} position={"top left"} closeOnDocumentClick={true}>
                <div style={modalStylePassword}>
                    <EditPasswordModalView cancelEditPassword={this.cancelPassword} createEditPassword={this.changePassword}/>
                </div>
            </Popup>
        )
        return (

            <Fragment id={"Trainerprofile"}>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
                      crossOrigin="anonymous"/>

                <HeaderProfileView email={emailUser} myFunction={showDropdown_Header}>
                    <HeaderProfileView/>
                </HeaderProfileView>
                <main id={"mainTP"}>
                    <div id="leftTP">
                        <div id="leftTopLeftTP">
                            <img src={logo} className="Trainer-Profil-pic"
                                 alt="ProfilBild Von Ahmad - Eigenes Werk, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=28947701"/>
                            <div id={"checkbox"}>
                                Aktiv: <Checkbox active={active} style={{width: '40px'}} onChange={setStatus}/>
                            </div>
                        </div>
                        <div id={"ButtonsTrainer"}>
                            <Confirmbutton className={"editTP"} myStyle={{width:'200px'}} onClick={this.onEdit}
                                           hidden={this.state.editButtonhidden}>Bearbeiten</Confirmbutton>
                            <Confirmbutton id={"saveTP"} myStyle={{width:'200px'}}onClick={this.onSave} hidden={this.state.saveButtonhidden}>Speichern</Confirmbutton>
                            <Confirmbutton id={"changePW"}myStyle={{width:'200px'}} onClick={this.openChangePasswordView}>Passwort ändern</Confirmbutton>
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
                                                nationalAssosiationdropdownhidden={this.state.saveButtonhidden}
                        />
                    </div>
                </main>
                <ModalCreatePassword/>
            </Fragment>
        );
    }
}

export default TrainerProfileView