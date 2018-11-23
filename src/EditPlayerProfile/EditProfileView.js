import React, {Component, Fragment} from 'react';
import '../App.css';
import Label from "../UI/Label";
import Input from "../UI/Input";
import CheckBox from "../UI/CheckBox"
import SaveButton from "../UI/SaveButton";
import './EditPlayerProfile.css';

class EditProfileView extends Component {

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

            onCancel,
            onConfirm,

        } = this.props;

        return (
            <Fragment>
                <div className={"editProfile"}>
                    <header>
                        <Label value={name + "bearbeiten"} classname={"title"}>Spieler A bearbeiten</Label>
                    </header>
                    <form className={"EditProfileForm"}>
                        <ul className={"flex-outer"}>

                            <li>
                                <Label for={"nameL"}>Name: </Label>
                                <Input placeholder={"Namen eintragen"} id={"nameL"} value={name}
                                       onChange={setName} required></Input></li>

                            <li><Label for={"surnameL"}>Nachname: </Label>
                                <Input placeholder={"Nachnamen eintragen"} id={"surnameL"} value={surname}
                                       onChange={setSurName} required></Input></li>

                            <li><Label for={"mailL"}>Email: </Label>
                                <Input placeholder={"Email eintragen"} id={"mailL"} value={mail}
                                       onChange={setMail} required></Input></li>

                            <li><Label for={"birthdateL"}>Geburtsdatum: </Label>
                                <Input placeholder={"Geburtsdatum eintragen"} id={"birthdateL"} value={birthdate}
                                       onChange={setBrithdate} required></Input></li>

                            <li><Label for={"cityL"}>Stadt: </Label>
                                <Input placeholder={"Stadt eintragen"} id={"cityL"} value={city}
                                       onChange={setCity} required></Input></li>

                            <li><Label for={"zipL"}>Postleitzahl: </Label>
                                <Input placeholder={"Postleitzahl eintragen"} id={"zipL"} value={zip}
                                       onChange={setZIP} required></Input></li>

                            <li><Label for={"streetL"}>Straße: </Label>
                                <Input placeholder={"Straße eintragen"} id={"streetL"} value={street}
                                       onChange={setStreet} required></Input></li>

                            <li><Label for={"housenmbrL"}>Hausnummer: </Label>
                                <Input placeholder={"Hausnummer eintragen"} id={"housenmbr"} value={houseNbr}
                                       onChange={setHouseNbr} required></Input></li>

                            <li><Label for={"squadL"}>Kader: </Label>
                                <Input placeholder={"Kader eintragen"} id={"squadL"} value={squad}
                                       onChange={setSquad} required></Input></li>

                            <li><Label for={"sPinL"}>SPin: </Label>
                                <Input placeholder={"SPin eintragen"} id={"sPinL"} value={sPin}
                                       onChange={setSPin} required></Input></li>
                            <li>
                                <Label for={"active"}>Aktiv: </Label>
                                <CheckBox classname={"checkActive"} id={"active"} value={status} onChange={setStatus}/>
                            </li>

                            <li>
                                <SaveButton onClick={onConfirm}/>
                            </li>

                        </ul>
                    </form>
                </div>
            </Fragment>

        );
    }
}

export default EditProfileView