import React, {Component, Fragment} from 'react';
import '../App.css';
import Label from "../UI/Label";
import './TrainerProfile.css';

/**
 * @author Daniela
 * This is a table, which holds the Data of a trainer. If a authorized Person clicks on the edit Button, this View displays. Most of the cells are editable. The cell for the Birthdate is an date Input. The cell for the national Assosiation is an dropdown Input.
 * @visibleName EditTrainerProfileView
 */
class EditTrainerProfileView extends Component {
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
            setMobileNumber,
            setLandlaneNumber,
            setNationalAssosiation,
            setTrainertype,
            setPassword,

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
            agegroup,
            nationalAssosiation,
            trainertype,
            password,

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
                <div className={"editTrainerProfile"}>
                    <table>
                        <tbody>
                        <tr id={"editProfiletr"}>
                            <th>Name:</th>
                            <td placeholder={"Namen eintragen"} onChange={setName} contentEditable="false"
                                required>{name}</td>
                        </tr>
                        <tr id={"editProfiletr"}>
                            <th>Nachname:</th>
                            <td placeholder={"Nachnamen eintragen"} id={"surnameL"}
                                onChange={setSurName} contentEditable="false" required>{surname}</td>
                        </tr>
                        <tr id={"editProfiletr"}>
                            <th>Geburtsdatum:</th>
                            <td><input type='date' input="date" placeholder={"Geburtsdatum eintragen"} id={"birthdateL"}
                                       value={birthdate}
                                       onChange={setBrithdate} contentEditable="false" min="1960-01-01" max="2018-12-31"
                                       hidden={nationalAssosiationdropdownhidden}
                                       required/>
                                <div hidden={nationalAssosiationhidden}>{birthdate}</div>
                            </td>
                        </tr>
                        <tr id={"editProfiletr"}>
                            <th>Email:</th>
                            <td placeholder={"Email eintragen"} id={"mailL"} value={mail}
                                onChange={setMail} contentEditable="false" required>{mail} </td>
                        </tr>
                        <tr id={"editProfiletr"}>
                            <th>Stadt:</th>
                            <td placeholder={"Stadt eintragen"} id={"cityL"} value={city}
                                onChange={setCity} contentEditable="false" required>{city} </td>
                        </tr>
                        <tr id={"editProfiletr"}>
                            <th>Postleitzahl:</th>
                            <td placeholder={"Postleitzahl eintragen"} contentEditable="false" id={"zipL"}
                                onChange={setZIP} required>{zip}</td>
                        </tr>
                        <tr id={"editProfiletr"}>
                            <th>Straße:</th>
                            <td placeholder={"Straße eintragen"} contentEditable="false" id={"streetL"}
                                onChange={setStreet} required>{street} </td>
                        </tr>
                        <tr id={"editProfiletr"}>
                            <th>Hausnummer:</th>
                            <td placeholder={"Hausnummer eintragen"} contentEditable="false" id={"housenmbr"}
                                value={houseNbr}
                                onChange={setHouseNbr} required>{houseNbr} </td>
                        </tr>
                        <tr id={"editProfiletr"}>
                            <th>Festnetznummer:</th>
                            <td value={landlaneNumber}
                                onChange={setLandlaneNumber} contentEditable="false" required>{landlaneNumber}</td>
                        </tr>
                        <tr id={"editProfiletr"}>
                            <th>Mobilfunknummer:</th>
                            <td value={mobileNumber}
                                onChange={setMobileNumber} contentEditable="false" required>{mobileNumber}</td>
                        </tr>
                        <tr id={"editProfiletr"}>
                            <th>Trainerart:</th>
                            <td value={"Bundestrainer"}onChange={setTrainertype} contentEditable={"false"} required>Bundestrainer</td>
                        </tr>
                        <tr id={"editProfiletr"}>
                            <th>Landesverband:</th>
                            <td>

                                <select name="nationalAssosiation" onChange={setNationalAssosiation}
                                        value={nationalAssosiation} contentEditable={false}
                                        hidden={nationalAssosiationdropdownhidden}>
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

export default EditTrainerProfileView