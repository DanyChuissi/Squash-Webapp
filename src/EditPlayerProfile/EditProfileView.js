import React, {Component, Fragment} from 'react';
import '../App.css';
import Label from "../UI/Label";
import './EditPlayerProfile.css';

/**
 * @author Daniela
 * This is a table, which holds the Data of an athlet. If a authorized Person clicks on the edit Button, this View displays. Most of the cells are editable. The cell for the Birthdate is an date Input. The cell for the national Assosiation is an dropdown Input.
 * @visibleName EditProfileView
 */
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

            onCancel,
            onConfirm,

        } = this.props;

        return (
            <Fragment>
                <div className={"editProfile"}>
                    <table>
                        <tbody>
                        <tr>
                            <th>Name:</th>
                            <td value={name}
                                onChange={setName} placeholder={"Namen eintragen"} contentEditable="false" required/>
                        </tr>
                        <tr>
                            <th>Nachname:</th>
                            <td placeholder={"Nachnamen eintragen"} id={"surnameL"} value={surname}
                                onChange={setSurName} contentEditable="false" required/>
                        </tr>
                        <tr>
                            <th>Geburtsdatum:</th>
                            <td><input type='date' input="date" placeholder={"Geburtsdatum eintragen"} id={"birthdateL"}
                                       value={birthdate}
                                       onChange={setBrithdate} contentEditable="false" min="1960-01-01" max="2018-12-31" required/></td>
                        </tr>
                        <tr>
                            <th>Kader:</th>
                            <td placeholder={"Kader eintragen"} contentEditable="false" id={"squadL"} value={squad}
                                onChange={setSquad} required/>
                        </tr>
                        <tr>
                            <th>Altersklasse:</th>
                            <td value={agegroup} required/>
                        </tr>
                        <tr>
                            <th>SPin:</th>
                            <td placeholder={"SPin eintragen"} contentEditable="false" id={"sPinL"} value={sPin}
                                onChange={setSPin} required/>
                        </tr>
                        <tr>
                            <th>Email:</th>
                            <td placeholder={"Email eintragen"} id={"mailL"} value={mail}
                                onChange={setMail} contentEditable="false" required/>
                        </tr>

                        <tr>
                            <th>Stadt:</th>
                            <td placeholder={"Stadt eintragen"} id={"cityL"} value={city}
                                onChange={setCity} contentEditable="false" required/>
                        </tr>
                        <tr>
                            <th>Postleitzahl:</th>
                            <td placeholder={"Postleitzahl eintragen"} contentEditable="false" id={"zipL"} value={zip}
                                onChange={setZIP} required/>
                        </tr>
                        <tr>
                            <th>Straße:</th>
                            <td placeholder={"Straße eintragen"} contentEditable="false" id={"streetL"} value={street}
                                onChange={setStreet} required/>
                        </tr>
                        <tr>
                            <th>Hausnummer:</th>
                            <td placeholder={"Hausnummer eintragen"} contentEditable="false" id={"housenmbr"}
                                value={houseNbr}
                                onChange={setHouseNbr} required></td>
                        </tr>
                        <tr>
                            <th>Festnetznummer:</th>
                            <td value={landlaneNumber}
                                onChange={setLandlaneNumber} contentEditable="false" required/>
                        </tr>
                        <tr>
                            <th>Mobilfunknummer:</th>
                            <td value={mobileNumber}
                                onChange={setMobileNumber} contentEditable="false" required/>
                        </tr>
                        <tr>
                            <th>Landesverband:</th>
                            <td><select name="nationalAssosiation" onChange={setNationalAssosiation}
                                        value={nationalAssosiation} contentEditable={false}>
                                <option value="saar"> Saar Squash Racket Verband (Abkürzung Saarland)</option>
                                <option value="bayern"> Squash in Bayern</option>
                                <option value="badenW"> Squash Rackets Landesverband Baden-Württemberg e.V.</option>
                                <option value="berlin"> Squash Verband Berlin Brandenburg e.V.</option>
                                <option value="bremen"> Squash Rackets Verband Bremen e.V.</option>
                                <option value="hamburg"> Hamburger Squash</option>
                                <option value="hessen">Verband e.V.Hessischer Squash Verband e.V.</option>
                                <option value="niedSach"> Squash Verband NiedersachsenSquash</option>
                                <option value="reinPf">Squashverbund Rheinland-Pfalz-Saar(Rheinland-Pfalz)</option>
                                <option value="nordrheinWest">Landesverband Nordrhein-Westfalen</option>
                                <option value="sachsen"> Squash Landesverband Sachsen</option>
                                <option value="schleswigHolst"> Squash Landesverband Schleswig-Holstein</option>
                            </select></td>
                        </tr>
                        </tbody>
                    </table>

                </div>

            </Fragment>

        );
    }
}

export default EditProfileView