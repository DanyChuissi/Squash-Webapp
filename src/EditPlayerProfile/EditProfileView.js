import React, {Component, Fragment} from 'react';
import '../App.css';
import './EditPlayerProfile.css';
import Input from "../UI/Input";

/**
 * @author Daniela
 * This is a table, which holds the Data of an Athlete. If a authorized Person clicks on the edit Button, this View displays. Most of the cells are editable. The cell for the Birthdate is an date Input. The cell for the national Assosiation is an dropdown Input.
 * @visibleName EditProfileView
 */
class EditProfileView extends Component {
    state = {
        showComponent: false,
    }
    nationalAssosiationLong: string;

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

            nationalAssosiationdropdownhidden,
            nationalAssosiationhidden,

            onCancel,
            onConfirm,

        } = this.props;

        switch (nationalAssosiation) {
            case 1:
                this.nationalAssosiationLong = "Saar Squash Racket Verband";
                break;
            case 2:
                this.nationalAssosiationLong = "Squash in Bayern";
                break;
            case 3:
                this.nationalAssosiationLong = "On";
                break;
            case 4:
                this.nationalAssosiationLong = "Squash Verband Berlin Brandenburg e.V.";
                break;
            case 5:
                this.nationalAssosiationLong = "Squash Rackets Verband Bremen e.V.";
                break;
            case 6:
                this.nationalAssosiationLong = "Hamburger Squash Verband e.V.";
                break;
            case 7:
                this.nationalAssosiationLong = "Hessischer Squash Verband e.V.";
                break;
            case 8:
                this.nationalAssosiationLong = "Squash Verband Niedersachsen";
                break;
            case 9:
                this.nationalAssosiationLong = "Squash Landesverband Nordrhein-Westfalen";
                break;
            case 10:
                this.nationalAssosiationLong = "Squashverbund Rheinland-Pfalz-Saar ";
                break;
            case 11:
                this.nationalAssosiationLong = "Squash Landesverband Sachsen";
                break;
            case 12:
                this.nationalAssosiationLong = "Squash Landesverband Schleswig-Holstein";
                break;
            default:
                this.nationalAssosiationLong = "No value found";
        }

        return (
            <Fragment>
                <div className={"editProfile"}>
                    <table id={"editProfileTable"}>
                        <tbody>
                        <tr id={"editProfiletr"}>
                            <th id={"editProfileth"}>Name:</th>
                            <td id={"editProfiletd"} placeholder={"Namen eintragen"}>
                                <Input type={"text"} value={name} onChange={setName}
                                       hidden={nationalAssosiationdropdownhidden} required/>
                                <div hidden={nationalAssosiationhidden}>  {name}</div>
                            </td>
                        </tr>
                        <tr id={"editProfiletr"}>
                            <th id={"editProfileth"}>Nachname:</th>
                            <td id={"editProfiletd"} placeholder={"Nachnamen eintragen"} required>
                                <Input type={"text"} value={surname} onChange={setSurName}
                                       hidden={nationalAssosiationdropdownhidden} required/>
                                <div hidden={nationalAssosiationhidden}>  {surname}</div>
                            </td>
                        </tr>
                        <tr id={"editProfiletr"}>
                            <th id={"editProfileth"}>Geburtsdatum:</th>
                            <td id={"editProfiletd"}>
                                <input type='date'
                                       placeholder={"Geburtsdatum eintragen"}
                                       value={birthdate}
                                       onChange={setBrithdate}
                                       min="1960-01-01" max="2018-12-31"
                                       hidden={nationalAssosiationdropdownhidden}
                                       required/>
                                <div hidden={nationalAssosiationhidden}>{birthdate}</div>
                            </td>
                        </tr>
                        <tr id={"editProfiletr"}>
                            <th id={"editProfileth"}>Kader:</th>
                            <td id={"editProfiletd"} placeholder={"Kader eintragen"}
                                value={squad}
                                onChange={setSquad} required>
                                <Input type={"text"} value={squad} onChange={setSquad}
                                       hidden={nationalAssosiationdropdownhidden} required/>
                                <div hidden={nationalAssosiationhidden}>{squad}</div>
                            </td>
                        </tr>
                        <tr id={"editProfiletr"}>
                            <th id={"editProfileth"}>Altersklasse:</th>
                            <td id={"editProfiletd"} value={agegroup}required>U19
                            </td>
                        </tr>
                        <tr id={"editProfiletr"}>
                            <th id={"editProfileth"}>SPin:</th>
                            <td id={"editProfiletd"} placeholder={"SPin eintragen"}
                                onChange={setSPin} required>
                                <Input type={"text"} value={sPin} onChange={setSPin}
                                       hidden={nationalAssosiationdropdownhidden} required/>
                                <div hidden={nationalAssosiationhidden}>{sPin}</div>
                            </td>
                        </tr>
                        <tr id={"editProfiletr"}>
                            <th id={"editProfileth"}>Email:</th>
                            <td id={"editProfiletd"} placeholder={"Email eintragen"} value={mail}
                                onChange={setMail} required>
                                <Input type={"text"} value={mail} onChange={setMail}
                                       hidden={nationalAssosiationdropdownhidden} required/>
                                <div hidden={nationalAssosiationhidden}>{mail}</div>
                            </td>
                        </tr>
                        <tr id={"editProfiletr"}>
                            <th id={"editProfileth"}>Stadt:</th>
                            <td id={"editProfiletd"} placeholder={"Stadt eintragen"} value={city}
                                onChange={setCity} required>
                                <Input type={"text"} value={city} onChange={setCity}
                                       hidden={nationalAssosiationdropdownhidden} required/>
                                <div hidden={nationalAssosiationhidden}>{city}</div>
                            </td>
                        </tr>
                        <tr id={"editProfiletr"}>
                            <th id={"editProfileth"}>Postleitzahl:</th>
                            <td id={"editProfiletd"} placeholder={"Postleitzahl eintragen"}
                                onChange={setZIP} required>
                                <Input type={"text"} value={zip} onChange={setZIP}
                                       hidden={nationalAssosiationdropdownhidden} required/>
                                <div hidden={nationalAssosiationhidden}>{zip}</div>
                            </td>
                        </tr>
                        <tr id={"editProfiletr"}>
                            <th id={"editProfileth"}>Straße:</th>
                            <td id={"editProfiletd"} placeholder={"Straße eintragen"}
                                onChange={setStreet} required>
                                <Input type={"text"} value={street} onChange={setStreet}
                                       hidden={nationalAssosiationdropdownhidden} required/>
                                <div hidden={nationalAssosiationhidden}>{street}</div>
                            </td>
                        </tr>
                        <tr id={"editProfiletr"}>
                            <th id={"editProfileth"}>Hausnummer:</th>
                            <td id={"editProfiletd"} placeholder={"Hausnummer eintragen"}
                                value={houseNbr}
                                onChange={setHouseNbr} required>
                                <Input type={"text"} value={houseNbr} onChange={setHouseNbr}
                                       hidden={nationalAssosiationdropdownhidden} required/>
                                <div hidden={nationalAssosiationhidden}>{houseNbr}</div>
                            </td>
                        </tr>
                        <tr id={"editProfiletr"}>
                            <th id={"editProfileth"}>Festnetznummer:</th>
                            <td id={"editProfiletd"} value={landlaneNumber}
                                onChange={setLandlaneNumber} required>
                                <Input type={"text"} value={landlaneNumber} onChange={setLandlaneNumber}
                                       hidden={nationalAssosiationdropdownhidden} required/>
                                <div hidden={nationalAssosiationhidden}>{landlaneNumber}</div>
                            </td>
                        </tr>
                        <tr id={"editProfiletr"}>
                            <th id={"editProfileth"}>Mobilfunknummer:</th>
                            <td id={"editProfiletd"} value={mobileNumber}
                                onChange={setMobileNumber} required>
                                <Input type={"text"} value={mobileNumber} onChange={setMobileNumber}
                                       hidden={nationalAssosiationdropdownhidden} required/>
                                <div hidden={nationalAssosiationhidden}>{mobileNumber}</div>
                            </td>
                        </tr>
                        <tr id={"editProfiletr"}>
                            <th id={"editProfileth"}>Landesverband:</th>
                            <td id={"editProfiletd"}>
                                <select name="nationalAssosiation" onChange={setNationalAssosiation}
                                        value={nationalAssosiation}
                                        hidden={nationalAssosiationdropdownhidden}>
                                    <option value="1"> Saar Squash Racket Verband (Abkürzung Saarland)</option>
                                    <option value="2"> Squash in Bayern</option>
                                    <option value="3"> Squash Rackets Landesverband Baden-Württemberg e.V.</option>
                                    <option value="4"> Squash Verband Berlin Brandenburg e.V.</option>
                                    <option value="5"> Squash Rackets Verband Bremen e.V.</option>
                                    <option value="6"> Hamburger Squash</option>
                                    <option value="7">Verband e.V.Hessischer Squash Verband e.V.</option>
                                    <option value="8"> Squash Verband NiedersachsenSquash</option>
                                    <option value="9">Squashverbund Rheinland-Pfalz-Saar(Rheinland-Pfalz)</option>
                                    <option value="10">Landesverband Nordrhein-Westfalen</option>
                                    <option value="11"> Squash Landesverband Sachsen</option>
                                    <option value="12"> Squash Landesverband Schleswig-Holstein</option>
                                </select>

                                <div hidden={nationalAssosiationhidden}>{this.nationalAssosiationLong}</div>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                </div>

            </Fragment>

        );
    }
}

export default EditProfileView